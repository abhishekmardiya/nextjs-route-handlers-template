// API Endpoint : https://yourdomain.com/api/users?query=thanos

import { users } from "@/users-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams?.get("query") || "";
  console.log("query:", query);

  const user = users?.filter((user) =>
    user?.first_name?.toLowerCase()?.includes(query?.toLowerCase())
  );

  if (!user?.length) {
    return NextResponse.json({
      user: [],
    });
  }

  return NextResponse.json({
    user,
  });
}
