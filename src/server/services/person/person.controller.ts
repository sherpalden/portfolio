import type { ExtendedRequest, ExtendedResponse } from '../../interface/http'
import personRepo from "./person.repository";
import { IPerson } from "../../db/models/Person";
import { InternalError } from "../../error";
import { deleteFile } from '../../middleware/fileUtils';
import path from "path"


const updatePerson = async (req: ExtendedRequest, res: ExtendedResponse, next: any) => {
    try {
        let newPerson: IPerson = {
            adminID: req.adminID,
        }
        const fieldList = [
            "name", "email", "otherEmails", "phone", "otherPhones", "socialMedias",
            "educations", "skills", "works"
        ]
        fieldList.forEach((field) => {
            if (req.body[field]) {
                newPerson[field] = req.body[field]
            }
        })
        const oldPerson = await personRepo.getPerson(req.adminID)
        if (oldPerson !== null) {
            const person = await personRepo.updatePerson(newPerson)
            res.status(200).json({
                "message": "Person update successful",
                "data": person
            })
        } else {
            const person = await personRepo.createPerson(newPerson)
            res.status(200).json({
                "message": "Person create successful",
                "data": person
            })
        }
    } catch (err) {
        next(err)
    }
}


const getPerson = async (req: ExtendedRequest, res: ExtendedResponse, next: any) => {
    try {
        const person = await personRepo.getPerson(req.adminID)
        res.status(200).json({
            "message": "Person get successful",
            "data": person
        })
    } catch (err) {
        next(err)
    }
}

const updateProfilePicture = async (req: ExtendedRequest, res: ExtendedResponse, next: any) => {
    try {
        if (req.filesUploaded.length < 1) {
            return next(new InternalError("Internal server error"))
        }
        const person = await personRepo.updateProfilePicture(req.adminID, req.filesUploaded[0])
        res.status(200).json({
            "message": "Person profile picture update successful",
            "data": person
        })
    } catch (err) {
        try {
            const filePath = path.resolve(`./public/uploads/${req.filesUploaded[0]}`)
            await deleteFile(filePath)
        }
        catch (err) {
            return next(err);
        }
        next(err)
    }
}

export default {
    updatePerson,
    getPerson,
    updateProfilePicture
}