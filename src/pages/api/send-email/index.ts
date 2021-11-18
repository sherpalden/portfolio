import nc from "next-connect";
import { onError, onNoMatch } from "../../../server/middleware/error";
import contactCtrl from "../../../server/services/contact/contact.controller";

const SendEmail = nc({ onError, onNoMatch }).post(contactCtrl.sendContactEmail);

export default SendEmail;
