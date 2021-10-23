import { dbConnect } from "../../db/dbConnect";
import { Person, IPerson, IPersonMongo } from "../../db/models/Person";
import { NotFound } from "../../error";
import { deleteFile } from "../../middleware/fileUtils";
import path from "path";

const createPerson = (person: IPerson) => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbConnect();
      console.log(person);
      const newPerson = await Person.create(person);
      resolve(newPerson);
    } catch (err) {
      reject(err);
    }
  });
};

const updatePerson = (person: IPerson) => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbConnect();
      const filter = { adminID: person.adminID };
      const updatedPerson = await Person.findOneAndUpdate(filter, person, {
        new: true,
      });
      resolve(updatedPerson);
    } catch (err) {
      reject(err);
    }
  });
};

const getPerson = (personID: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbConnect();
      const filter = { adminID: personID };
      const person = await Person.findOne(filter);
      resolve(person);
    } catch (err) {
      reject(err);
    }
  });
};

const updateProfilePicture = (personID: string, newPic: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbConnect();
      const filter = { adminID: personID };
      const person: IPersonMongo | any = await Person.findOne(filter);
      if (!person) {
        throw new NotFound("Person not found");
      }
      const oldPic = person.profilePic;
      person.profilePic = newPic;
      if (oldPic) {
        const filePath = path.resolve(`./public/uploads/${oldPic}`);
        await deleteFile(filePath);
      }
      await person.save();
      resolve(person);
    } catch (err) {
      reject(err);
    }
  });
};

export default {
  createPerson,
  updatePerson,
  getPerson,
  updateProfilePicture,
};
