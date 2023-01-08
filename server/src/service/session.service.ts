import { get, omit } from "lodash";
import { FilterQuery, UpdateQuery } from "mongoose";
import config from "config";
import { singJwt, verifyJwt } from "../utils/jwt.utils";
import SessionModel, { SessionDocument } from "../models/session.model";
import { findUser } from "./user.service";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean();
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken);

  if (!decoded || !get(decoded, "session")) return false;

  const session = await SessionModel.findById(get(decoded, "session"));

  if (!session || !session.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const exceptPassUser = omit(user, "password");

  //create an access token
  const accessToken = singJwt(
    { ...exceptPassUser, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 min
  );

  return accessToken;
}
