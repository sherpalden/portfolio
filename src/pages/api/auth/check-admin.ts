import nc from "next-connect";
import { onError, onNoMatch } from "../../../server/middleware/error";
import { adminAuth } from "../../../server/middleware/auth";
import {
  ExtendedRequest,
  ExtendedResponse,
} from "../../../server/interface/http";

const CheckAdmin = nc({ onError, onNoMatch })
  .use(adminAuth)
  .post((req: ExtendedRequest, res: ExtendedResponse) => {
    res.status(200).json({
      message: "Valid admin",
    });
  });

export default CheckAdmin;
