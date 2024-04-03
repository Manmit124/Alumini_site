import { User } from "@/models/User";
import { ConnectDB } from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectDB();
    const users = await User.find();
    
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to get users" });
  }
}
