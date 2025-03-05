import { users } from "@/users-db";
import { NextRequest, NextResponse } from "next/server";

// API Endpoint : https://yourdomain.com/api/users

export async function GET() {
  return NextResponse.json({
    users,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("body:", body);

  return NextResponse.json({
    users: {
      ...users,
      ...{
        id: users?.length + 1,
        ...body,
      },
    },
  });
}
