import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

export function singJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(
    object,
    privateKey,
    // ...(options & options),
    { ...options, algorithm: "RS256" }
  );
}

export function verifyJwt(token: string) {
  console.log("token: ", token);
  try {
    const decoded = jwt.verify(token, publicKey);
    // const decoded = jwt.verify(token, privateKey);
    return {
      valid: true,
      expried: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expried: e.message === "jwt expired",
      decoded: null,
    };
  }
}
