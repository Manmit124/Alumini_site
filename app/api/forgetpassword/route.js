import { User } from "@/models/User";
import { ConnectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";
export async function POST(req) {
  const email = await req.json();
  await ConnectDB();
  const existingUser = await User.findOne(email);
  if (!existingUser) {
    return new NextResponse({ error: "Email DOESN'T EXIST" }, { status: 400 });
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const passwordResetExpires = Date.now() + 3600000;
  existingUser.resetToken = passwordResetToken;
  existingUser.resetTokenExpiry = passwordResetExpires;
  const resetUrl = process.env.SD_URL + resetToken;
  console.log(resetUrl);
  const bodyofemail = "Reset Password by clicking on following url" + resetUrl;

  const msg = {
    to: email,
    from: "tiwademanmit@gmail.com",
    subject: "Reset Password",
    text: bodyofemail,
  };

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  sgMail
    .send(msg)
    .then(() => {
      return new NextResponse("Reset password is sent successfully", {
        status: 200,
      });
    })
    .catch(async (error) => {
      existingUser.resetToken = undefined;
      existingUser.resetTokenExpiry = undefined;
      await existingUser.save();
      return new NextResponse(
        { error: "Failed to send email" },
        { status: 400 }
      );
    });
  try {
    await existingUser.save();
    return new NextResponse("Email is sent for resetting password", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
}
