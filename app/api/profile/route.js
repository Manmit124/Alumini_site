import { ConnectDB } from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req) {
ConnectDB();

    const data = await req.json();
    const { _id, FullName, Degree, ...otherInfo } = data;
    let filter = {};
    if (_id) {
      filter = { _id };
    } else {
      const session = await getServerSession(authOptions);
      const email = session.user.email;
      filter = { email };
    }
    await User.updateOne(filter, data);
  
    return Response.json(true);
  }
  