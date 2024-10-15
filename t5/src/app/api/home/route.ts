"use client";
import React from "react";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "GET request received", status: 200 });
}
