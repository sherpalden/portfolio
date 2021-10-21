import nc from "next-connect"
import { onError, onNoMatch } from '../../../../server/middleware/error';
import { adminAuth } from "../../../../server/middleware/auth";
import personCtrl from "../../../../server/services/person/person.controller";
import { uploadFileLocal } from "../../../../server/middleware/fileUtils";

const PersonHandler = nc({ onError, onNoMatch, attachParams: true })
    .use(adminAuth)
    .put(uploadFileLocal({ model: "profile", type: "image", fileNumberLimit: 1 }), personCtrl.updateProfilePicture)

export default PersonHandler
export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};