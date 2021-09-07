import { IAdmin } from "../../db/models/Admin";
import adminRepo from "./admin.repository";
import type { NextApiRequest, NextApiResponse } from 'next'
import { OAuth2Client } from "google-auth-library"
import { BadRequest, InternalError } from "../../error";

const GOOGLE_WEB_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_WEB_CLIENT_ID


const createAdmin = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
        const idToken = req.body.credential;
        const client = new OAuth2Client(String(GOOGLE_WEB_CLIENT_ID));
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: GOOGLE_WEB_CLIENT_ID
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.email || !payload.name) return next(new InternalError("Something went wrong"))
        let admin: IAdmin = {
            name: payload.name,
            email: payload.email
        }
        const oldAdmin = await adminRepo.getAdminByEmail(payload.email)
        if (oldAdmin) return next(new BadRequest("Admin registered already"))
        const newAdmin = await adminRepo.createAdmin(admin)
        res.status(200).json({
            "message": "Admin create successful",
            "data": newAdmin
        })
    } catch (err) {
        next(err)
    }
}

export default {
    createAdmin
}