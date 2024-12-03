// /api/deleteApp/[tid].ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "src",
  "mockedData",
  "TriageApplications.json",
);

export async function DELETE(req: NextRequest) {
  try {
    // Extract the TID from the request URL
    const tid = req.nextUrl.pathname.split("/").pop(); // This gets the TID from the URL

    if (!tid) {
      return NextResponse.json({ message: "TID is required" }, { status: 400 });
    }

    // Read the JSON file
    const fileData = fs.readFileSync(filePath, "utf-8");
    const triageData = JSON.parse(fileData);

    // Find the application by TID
    const applicationIndex = triageData.triage_applications.findIndex(
      (app: any) => app.tid == tid,
    );

    if (applicationIndex === -1) {
      return NextResponse.json(
        { message: "Triage application not found" },
        { status: 404 },
      );
    }

    // Delete the application from the array
    triageData.triage_applications.splice(applicationIndex, 1);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(triageData, null, 2), "utf-8");

    return NextResponse.json({
      message: "Triage application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting triage application:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
