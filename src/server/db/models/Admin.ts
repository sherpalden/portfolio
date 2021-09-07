import mongoose from 'mongoose'

export interface IAdminMongo extends mongoose.Document {
    _id: string
    name: string
    email: string
}

export interface IAdmin {
    _id?: string
    name: string
    email: string
}

const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
})

export const Admin = mongoose.model('Admin', AdminSchema)