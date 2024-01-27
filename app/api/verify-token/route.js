import { User } from "@/models/User";
import { ConnectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const { token } = await req.json();
  await ConnectDB();
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    resetToken: hashedToken,
    resetTokenExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return new NextResponse("Invalid token or has expired", { status: 400 });
  }

  return new NextResponse(JSON.stringify(user), { status: 200 });
}
