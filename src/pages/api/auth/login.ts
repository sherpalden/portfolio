import nc from "next-connect"
import { onError, onNoMatch } from '../../../server/middleware/error';
import adminCtrl from "../../../server/services/admin/admin.controller";


const GoogleLogin = nc({ onError, onNoMatch })
    .post(adminCtrl.loginAdmin)

export default GoogleLogin