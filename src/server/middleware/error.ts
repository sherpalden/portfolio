import type { NextApiRequest, NextApiResponse } from 'next'
import {
    BadRequest,
    NotAuthorized,
    NotFound,
    InternalError,
    Forbidden
} from "../error"

function onError(err: Error, req: NextApiRequest, res: NextApiResponse, next: any) {
    console.log(err)
    if (
        err instanceof BadRequest ||
        err instanceof NotAuthorized ||
        err instanceof NotFound ||
        err instanceof InternalError ||
        err instanceof Forbidden
    ) {
        res.status(err.statusCode).json({
            "message": err.message,
            "errors": err.errors
        })
        return;
    }
    res.status(500).json({ "message": err.message })
}

function onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).send({ "message": "Api route not found" });
}

export { onError, onNoMatch }