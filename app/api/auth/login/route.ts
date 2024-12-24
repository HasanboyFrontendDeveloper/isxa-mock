import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoos";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { username, password } = await req.json();

    const isUserExist = await User.findOne({ username });

    if (!isUserExist) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const isPasswordValid = await compare(
      String(password),
      isUserExist.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "password is incorrect" },
        { status: 400 }
      );
    }
    

    return NextResponse.json({ success: true, user: isUserExist });
  } catch (error) {
    const result = error as Error;

    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
