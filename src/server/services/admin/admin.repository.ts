import { dbConnect } from "../../db/dbConnect"
import { Admin, IAdmin } from "../../db/models/Admin";

const createAdmin = (admin: IAdmin) => {
    return new Promise(async (resolve, reject) => {
        try {
            await dbConnect();
            const newAdmin = await Admin.create(admin)
            resolve(newAdmin)
        } catch (err) {
            reject(err)
        }
    })
}

const getAdminByEmail = (email: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            await dbConnect();
            const admin = await Admin.findOne({ email: email }).exec();
            resolve(admin)
        } catch (err) {
            reject(err)
        }
    })
}

const getAdminByID = (id: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            await dbConnect();
            const admin = await Admin.findOne({ _id: id }).exec();
            resolve(admin)
        } catch (err) {
            reject(err)
        }
    })
}

export default {
    createAdmin,
    getAdminByEmail,
    getAdminByID
}