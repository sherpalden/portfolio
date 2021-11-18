import mongoose from "mongoose";

export interface SocialMedia {
  name?: string;
  link?: string;
}

export interface Education {
  level?: string;
  institute?: string;
  fromDate?: string;
  ToDate?: string;
  website?: string;
}

export interface Skill {
  name?: string;
  level?: string;
  experiencePeriod?: string;
}

export interface Work {
  position?: string;
  company?: string;
  fromDate?: string;
  toDate?: string;
  website?: string;
}

export interface IPersonMongo extends mongoose.Document {
  _id: string;
  adminID: string;
  name: string;
  email: string;
  profilePic?: string;
  otherEmails?: { email: string }[];
  phone?: string;
  otherPhones?: { phone: string }[];
  socialMedias?: SocialMedia[];
  educations: Education[];
  skills: Skill[];
  works: Work[];
}

export interface IPerson {
  [index: string]: any;
  _id?: string;
  adminID?: string;
  name?: string;
  email?: string;
  profilePic?: string;
  otherEmails?: { email: string }[];
  phone?: string;
  otherPhones?: { phone: string }[];
  socialMedias?: SocialMedia[];
  educations?: Education[];
  skills?: Skill[];
  works?: Work[];
}

const PersonSchema = new mongoose.Schema({
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admin",
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  profilePic: { type: String },
  otherEmails: [{ email: String }],
  phone: { type: String },
  otherPhones: [{ phone: String }],
  socialMedias: [{ name: String, link: String }],
  educations: [
    {
      level: String,
      institute: String,
      fromDate: String,
      toDate: String,
      website: String,
    },
  ],
  skills: [
    {
      name: String,
      level: String,
      experiencePeriod: String,
    },
  ],
  works: [
    {
      position: String,
      company: String,
      fromDate: String,
      toDate: String,
      website: String,
    },
  ],
});

export const Person =
  mongoose.models.Person || mongoose.model("Person", PersonSchema);
