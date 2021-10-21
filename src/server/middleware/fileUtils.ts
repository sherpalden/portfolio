import type { ExtendedRequest, ExtendedResponse } from '../interface/http'
import Busboy from 'busboy'
import { v4 as uuidv4 } from 'uuid'
import { IReqFile } from '../interface/file'
import * as fs from 'fs'
import path from 'path'
import { BadRequest } from "../error";

const uploadFileLocal = (fileObj: IReqFile) => {
    return (req: ExtendedRequest, res: ExtendedResponse, next: any) => {
        let hasErrorOccurred = false;
        let filesUploaded: string[] = [];
        const busboy = new Busboy({
            headers: req.headers,
            limits: {
                files: fileObj.fileNumberLimit
            }
        });
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            let fname = filename.replace(/ /g, "_");
            const randomStr = uuidv4();
            let key = fileObj.model ? `${fileObj.model}-${randomStr}-${fname}` : `default-${randomStr}-${fname}`
            let filePath = path.resolve(`./public/uploads/${key}`)
            const writeStream = fs.createWriteStream(filePath)
            file.on('data', (data) => {
                writeStream.write(data)
            })
            file.on('end', async () => {
                writeStream.end()
                filesUploaded.push(key)
            })
        });
        busboy.on('filesLimit', async () => {
            hasErrorOccurred = true;
            return
        });
        busboy.on('finish', async () => {
            req.filesUploaded = filesUploaded
            if (hasErrorOccurred) return next(new BadRequest(`Only ${fileObj.fileNumberLimit} files can be uploaded`));
            next()
        });
        req.pipe(busboy);
    }
};

const deleteFiles = (filePaths: string[]) => {
    return new Promise((resolve, reject) => {
        for (let filePath of filePaths) {
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, err => {
                    if (err) {
                        reject(err);
                    }
                })
            }
        }
        resolve(true);
    })
}

const deleteFile = (filePath: string) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(filePath)) {
            fs.unlink(filePath, err => {
                if (err) {
                    reject(err);
                }
            })
        }
        resolve(true);
    })
}

export {
    uploadFileLocal,
    deleteFile,
    deleteFiles
}