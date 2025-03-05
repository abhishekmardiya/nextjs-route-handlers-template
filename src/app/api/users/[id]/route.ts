import { users } from "@/users-db";
import { NextRequest, NextResponse } from "next/server";

// API Endpoint : https://yourdomain.com/api/users/1

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("id:", id);

  const user = users?.find((user) => user?.id === Number(id));

  if (!user) {
    return NextResponse.json({
      error: "User not found",
    });
  }

  return NextResponse.json({
    user,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("id:", id);

  const body = await request.json();
  console.log("body:", body);

  const user = users?.find((user) => user?.id === Number(id));

  if (!user) {
    return NextResponse.json({
      error: "User not found",
    });
  }

  return NextResponse.json({
    user: { id: Number(id), ...body },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("id:", id);

  const user = users?.find((user) => user?.id === Number(id));

  if (!user) {
    return NextResponse.json({
      error: "User not found",
    });
  }

  return NextResponse.json({
    message: "User deleted successfully",
  });
}
