import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoos";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { username, password, name } = await req.json();

    const isUserExist = await User.findOne({ username });

    console.log(isUserExist);
    

    if (isUserExist) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(String(password), 10);

    const user = await User.create({
      username,
      name,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true }, user);
  } catch (error) {
    const result = error as Error;

    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
