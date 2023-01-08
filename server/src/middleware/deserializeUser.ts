import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../service/session.service";
import { verifyJwt } from "../utils/jwt.utils";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refreshToken = get(req, "headers.x-refresh") as string;
  console.log("refreshToken: ", refreshToken);

  console.log(
    'get(req, "headers.authorization", ""): ',
    get(req, "headers.authorization", "")
  );
  console.log("accessToken: ", accessToken);
  if (!accessToken) {
    return next();
  }

  const { decoded, expried } = verifyJwt(accessToken);
  console.log("expried: ", expried);

  console.log("verifyJwt(accessToken): ", verifyJwt(accessToken));
  console.log("decoded: ", decoded);

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  if (expried && refreshToken) {
    const newAccessToken = (await reIssueAccessToken({
      refreshToken,
    })) as string;
    console.log("newAccessToken: ", newAccessToken);

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }

    const result = verifyJwt(newAccessToken);

    res.locals.user = result.decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
