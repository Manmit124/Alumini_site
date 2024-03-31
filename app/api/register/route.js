import { User } from "@/models/User";
import { ConnectDB } from "@/utils/ConnectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  ConnectDB();
  const existingUser = await User.findOne({ email: body.email });
  if (existingUser) {
    return new NextResponse(
      { error: "Email is already in use" },
      { status: 400 }
    );
  }
  try {
    // Hash the password before creating the user
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create the user with the hashed password
    const createUser = await User.create({
      email: body.email,
      password: hashedPassword,
    });

    return new NextResponse({ data: createUser }, { status: 200 });
    // return NextResponse.json(createUser);
  } catch (error) {
    return NextResponse({ error: "Error creating user" }, { status: 500 });
  }
}
