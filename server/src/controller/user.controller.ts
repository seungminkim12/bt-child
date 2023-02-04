import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "src/schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    console.log("user", typeof user);
    // return res.send(omit(user.toJSON(), "password"));
    return res.send(omit(user, "password"));
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

// export async function deleteUserHandler(req: Request, res: Response) {
//   try {
//     const deleteUser = await deleteUserHandler(req.body);
//     return res.send(deleteUser);
//   } catch (e: any) {
//     logger.error(e);
//     return res.status(409).send(e.message);
//   }
// }
