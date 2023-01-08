import { Request, Response } from "express";
import {
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { singJwt } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response) {
  //validate the users password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  //create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  //create an access token
  const accessToken = singJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 min
  );

  //create a refresh token
  const refreshToken = singJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTtl") } // 1year
  );

  //return access & refresh tokens
  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  console.log("userId: ", userId);

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
