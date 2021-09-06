import mongoose from 'mongoose'

export interface Admin extends mongoose.Document {
    ID: string
    name: string
    email: string
}

const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
})

export const Admins = mongoose.model('Admin', AdminSchema)