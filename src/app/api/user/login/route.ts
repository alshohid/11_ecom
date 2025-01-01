import { CreateToken } from "@/utility/jwtTokenhelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const reqbody = await req.json();
    const prisma = new PrismaClient();
    let result = await prisma.users.findMany({
      where: reqbody,
    });
    if (result.length === 0) {
      return NextResponse.json({ status: "fail", data: "User Not Found" });
    } else {
      const user = result[0];
      const token = await CreateToken(user.email, user.id);
      const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; Path=/`;
      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function GET(req: Request,) {
  const expirationDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const response = NextResponse.redirect(new URL("/", req.url), 303);
  response.cookies.set("token", "", { expires: expirationDate });
  return response;
}
