import nodemailer from "nodemailer";
import { oauth2Client } from "../infrastructure/googleClient";
import { IEmailOptions } from "../interface/email";
const sendEmail = async (emailOptions: IEmailOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = oauth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        // service: "gmail",
        // auth: {
        //   type: "Oauth2",
        //   user: "sherpalden369@gmail.com",
        //   clientId: String(process.env.GOOGLE_CLIENT_ID),
        //   clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
        //   refreshToken: String(process.env.GOOGLE_REFRESH_TOKEN),
        //   accessToken: String(accessToken),
        // },
      });
      const result = await transport.sendMail(emailOptions);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

export { sendEmail };
