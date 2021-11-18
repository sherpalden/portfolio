import type { ExtendedRequest, ExtendedResponse } from "../../interface/http";
import { sendEmail } from "../../utils/gmail";
import { createContactEmailTemplate } from "../../email_templates/sample_email";

const sendContactEmail = async (
  req: ExtendedRequest,
  res: ExtendedResponse,
  next: any
) => {
  try {
    const emailText = createContactEmailTemplate({
      name: req.body.name,
      company: req.body.company,
    });
    const emailOptions = {
      to: "palden.sherpa@readytowork.jp",
      subject: "testing sending email from nodemailer",
      text: emailText,
    };
    const result = await sendEmail(emailOptions);
    res.status(200).json({
      message: "Email send successful",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  sendContactEmail,
};
