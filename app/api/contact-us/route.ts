import { NextResponse } from "next/server";

import mongoose from "mongoose";
import { connectDB } from "@/util/db";

const ContactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req: any) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body, "message")

    if (body?.firstName === "") {
      return NextResponse.json(
        { success: false, message: "First Name is Required" },
        { status: 400 }
      );
    }

    if (body?.lastName === "") {
      return NextResponse.json(
        { success: false, message: "Last Name is Required" },
        { status: 400 }
      );
    }

    if (!body.email || body?.email === "") {
      return NextResponse.json(
        { success: false, message: "Email is Required" },
        { status: 400 }
      );
    }

    if (body?.phone === "") {
      return NextResponse.json(
        { success: false, message: "Phone is Required" },
        { status: 400 }
      );
    }

    await Contact.create(body);

    return NextResponse.json(
      { success: true, message: "Submitted successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
