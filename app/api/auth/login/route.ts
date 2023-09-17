import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const {email, password} = await req.json()
  return NextResponse.json({email, password})
}