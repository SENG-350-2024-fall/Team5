import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    // Resolve the path to the mock data file (make sure the file is located at the correct path)
    const filePath = path.join(process.cwd(), 'src', 'mockedData', 'TriageApplications.json');
    
    // Read the JSON file from the filesystem
    const fileData = fs.readFileSync(filePath, 'utf-8');
    
    // Parse the JSON data
    const triageData = JSON.parse(fileData);

    // Return the list of triage applications
    return NextResponse.json({
      data: triageData.triage_applications,
    });

  } catch (error) {
    console.error('Error fetching triage data:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
