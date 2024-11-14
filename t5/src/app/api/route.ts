import { NextResponse } from "next/server";
import {
  writeToJsonFile,
  loadJsonIntoObject,
} from "../../helpers/interactWithJSONFile";

export async function POST(req: Request) {
  try {
    const reqJSON = await req.json();
    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get("filePath");
    if (!filePath) {
      throw new Error("filePath query parameter is required");
    }
    const data = reqJSON.body;
    await writeToJsonFile(filePath, data);
    return NextResponse.json({
      message: "Data written to JSON file",
      status: 200,
    });
  } catch (error) {
    console.error("Error writing to JSON file", error);
    return NextResponse.json({
      message: "Error writing to JSON file",
      status: 400,
    });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get("filePath");
    if (!filePath) {
      throw new Error("filePath query parameter is required");
    }
    const data = await loadJsonIntoObject(filePath);
    return NextResponse.json({
      data: data,
      message: "data read from file succesfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error Reading from JSON file", error);
    return NextResponse.json({
      message: "Error Reading from JSON file",
      status: 400,
    });
  }
}
