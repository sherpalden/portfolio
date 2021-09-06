import type { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect"
import { onError, onNoMatch } from '../../../server/middleware/error';
import { dbConnect } from '../../../server/db/dbConnect';
import { BadRequest } from '../../../server/error';


const GoogleSignUp = nc({ onError, onNoMatch })
    .post(async (req: NextApiRequest, res: NextApiResponse, next: any) => {
        await dbConnect()
        return next(new BadRequest("This is bad request"));
    })

export default GoogleSignUp