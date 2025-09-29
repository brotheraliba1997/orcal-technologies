import { NextResponse } from "next/server";

import mongoose from "mongoose";
import { connectDB } from "@/util/db";

const NewsLetterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const NewsLetter =
  mongoose.models.newsLetter || mongoose.model("newsLetter", NewsLetterSchema);

export async function POST(req: any) {
  try {
    await connectDB();
    const body = await req.json();

    console.log(body, "body");

    const newsLetterFound = await NewsLetter.findOne({ email: body?.email });
    if (newsLetterFound) {
      return NextResponse.json(
        { success: false, message: "Email is already subscribed" },
        { status: 400 }
      );
    }

    if (body?.email === "") {
      return NextResponse.json(
        { success: false, message: "Email is required " },
        { status: 400 }
      );
    }

    if (body?.email && !/^[^\s@]+@[^\s@]+\.[cC][oO][mM]$/.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    await NewsLetter.create(body);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed" },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
