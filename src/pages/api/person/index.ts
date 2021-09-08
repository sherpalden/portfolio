import nc from "next-connect"
import { onError, onNoMatch } from '../../../server/middleware/error';
import { adminAuth } from "../../../server/middleware/auth";
import { ExtendedRequest, ExtendedResponse } from "../../../server/interface/http";


const PersonHandler = nc({ onError, onNoMatch })
    .use(adminAuth)
    .get(async function (req: ExtendedRequest, res: ExtendedResponse) {
        res.status(200).json({ "message": "Success auth middleware" })
    })

export default PersonHandler