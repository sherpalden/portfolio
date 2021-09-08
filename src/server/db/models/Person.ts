import mongoose from 'mongoose'

export interface SocialMedia {
    name?: string
    link?: string
}

export interface Education {
    level?: string
    institute?: string
    fromDate?: string
    ToDate?: string
    socialMedias?: SocialMedia[]
}

export interface Skill {
    name?: string
    level?: string
    experiencePeriod?: string
    icon?: string
}

export interface Work {
    position?: string
    company?: string
    fromDate?: string
    toDate?: string
    socialMedias?: SocialMedia[]
}

export interface Person extends mongoose.Document {
    ID: mongoose.Schema.Types.ObjectId
    adminID: mongoose.Schema.Types.ObjectId
    name: string
    email: string
    profilePic?: string
    otherEmails?: string[]
    phone?: string
    otherPhones?: string[]
    socialMedias?: SocialMedia[]
    educations: Education[]
    skills: Skill[]
    works: Work[]
}

const PersonSchema = new mongoose.Schema({
    adminID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Admin' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    profilePic: { type: String }
})

export const Persons = mongoose.model('Person', PersonSchema)