import type { ExtendedRequest, ExtendedResponse } from '../../interface/http'
import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken";
import adminRepo from "./admin.repository";
import { IAdmin } from "../../db/models/Admin";
import { BadRequest, InternalError, NotAuthorized } from "../../error";

const GOOGLE_WEB_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_WEB_CLIENT_ID

const createAdmin = async (req: ExtendedRequest, res: ExtendedResponse, next: any) => {
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
        const oldAdmin: any = await adminRepo.getAdminByEmail(payload.email)
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


const loginAdmin = async (req: ExtendedRequest, res: ExtendedResponse, next: any) => {
    try {
        const idToken = req.body.credential;
        const client = new OAuth2Client(String(GOOGLE_WEB_CLIENT_ID));
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: GOOGLE_WEB_CLIENT_ID
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.email || !payload.name) return next(new InternalError("Something went wrong"))
        const oldAdmin: any = await adminRepo.getAdminByEmail(payload.email)
        if (!oldAdmin) return next(new NotAuthorized("You are not registered"))
        const accessToken = await jwt.sign({ adminID: oldAdmin._id },
            String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: '5000m' })
        res.status(200).json({
            "message": "Admin create successful",
            "data": {
                "accessToken": accessToken
            }
        })
    } catch (err) {
        next(err)
    }
}

export default {
    createAdmin,
    loginAdmin
}

