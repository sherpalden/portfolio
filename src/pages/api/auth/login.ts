import type { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect"
import { onError, onNoMatch } from '../../../server/middleware/error';
import adminCtrl from "../../../server/services/admin/admin.controller";


const GoogleSignUp = nc({ onError, onNoMatch })
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        res.status(200).json({ "message": "hello" })
    })

export default GoogleSignUp