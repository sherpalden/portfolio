import type { NextApiRequest, NextApiResponse } from 'next'

export interface ExtendedRequest extends NextApiRequest {
    adminID: string;
    filesUploaded: string[];
}

export interface ExtendedResponse extends NextApiResponse {
    test: string;
}