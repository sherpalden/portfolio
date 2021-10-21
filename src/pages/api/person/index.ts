import nc from "next-connect"
import { onError, onNoMatch } from '../../../server/middleware/error';
import { adminAuth } from "../../../server/middleware/auth";
import personCtrl from "../../../server/services/person/person.controller";

const PersonHandler = nc({ onError, onNoMatch, attachParams: true })
    .use(adminAuth)
    .put(personCtrl.updatePerson)
    .get(personCtrl.getPerson)

export default PersonHandler