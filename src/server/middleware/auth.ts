import type { ExtendedRequest, ExtendedResponse } from "../interface/http";
import jwt from "jsonwebtoken";
import { NotAuthorized } from "../error";

async function adminAuth(
  req: ExtendedRequest,
  res: ExtendedResponse,
  next: any
) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
      return next(new NotAuthorized("Token Required for authorization"));
    const token = authHeader && authHeader.split(" ");
    const accessToken = token[1];
    const userInfo: any = await jwt.verify(
      accessToken,
      String(process.env.ACCESS_TOKEN_SECRET)
    );
    req.adminID = userInfo.adminID;
    next();
  } catch (err) {
    next(err);
  }
}

export { adminAuth };
