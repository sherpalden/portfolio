import nc from "next-connect"
import { onError, onNoMatch } from '../../../server/middleware/error';
import adminCtrl from "../../../server/services/admin/admin.controller";


const GoogleSignUp = nc({ onError, onNoMatch })
    .post(adminCtrl.createAdmin)

export default GoogleSignUp