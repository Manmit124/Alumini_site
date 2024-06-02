import { ConnectDB } from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req) {
  ConnectDB();

  try {
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

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET(req) {
  try {
    ConnectDB();
    const url = new URL(req.url);
    // console.log(url)
    const _id = url.searchParams.get("_id");
    let filterUser = {};
    if (_id) {
      filterUser = { _id };
    } else {
      const session = await getServerSession(authOptions);
      const email = session?.user?.email;
      if (!email) {
        return NextResponse.json({});
      }
      filterUser = { email };
    }
    const user = await User.findOne(filterUser).lean();
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user", error);
    return NextResponse.json({ error: "Failed to fetch user" });
  }
}
