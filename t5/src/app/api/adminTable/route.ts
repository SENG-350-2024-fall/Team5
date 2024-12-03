import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "src",
  "mockedData",
  "TriageApplications.json",
);

export async function handler(req: NextRequest) {
  try {
    // Handle GET requests
    if (req.method === "GET") {
      // Read the JSON file
      const fileData = fs.readFileSync(filePath, "utf-8");
      const triageData = JSON.parse(fileData);

      // Return the list of triage applications
      return NextResponse.json({
        data: triageData.triage_applications,
      });
    }

    // Handle POST requests for updating the status
    if (req.method === "POST") {
      // Parse the request body
      const body = await req.json();
      const { tid, status } = body;

      if (!tid || !status) {
        return NextResponse.json(
          { message: "TID and status are required" },
          { status: 400 },
        );
      }

      // Normalize the status to uppercase
      const normalizedStatus = status.toUpperCase();

      // Validate the status against allowed values
      const allowedStatuses = ["PENDING", "IN_PROGRESS", "COMPLETED"];
      if (!allowedStatuses.includes(normalizedStatus)) {
        return NextResponse.json(
          {
            message: `Invalid status value. Allowed statuses are: ${allowedStatuses.join(", ")}`,
          },
          { status: 400 },
        );
      }

      // Read the JSON file
      const fileData = fs.readFileSync(filePath, "utf-8");
      const triageData = JSON.parse(fileData);

      // Find the application by TID
      const application = triageData.triage_applications.find(
        (app: any) => app.tid === tid,
      );

      if (!application) {
        return NextResponse.json(
          { message: "Triage application not found" },
          { status: 404 },
        );
      }

      // Update the status
      application.status = normalizedStatus;

      // Write the updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(triageData, null, 2), "utf-8");

      return NextResponse.json({
        message: "Status updated successfully",
        application,
      });
    }

    // Handle unsupported methods
    return NextResponse.json(
      { message: `Method ${req.method} not allowed` },
      { status: 405 },
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export { handler as GET, handler as POST };
