import { ISampleEmail } from "../interface/email";
export const createContactEmailTemplate = (sampleEmail: ISampleEmail) => {
  return `Hello my name is: ${sampleEmail.name}.
    I work in a company: ${sampleEmail.company}
    `;
};
