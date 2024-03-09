import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

type ContactFormData = {
    name: string,
    email: string,
    message: string
}

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    message,
  }: { name: string; email: string; message: string } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
      user: process.env.TRANSPORT_EMAIL,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.TRANSPORT_EMAIL,
      to: process.env.EMAIL,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
    });

    return NextResponse.json(
      { message: "Email enviado com sucesso." },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
