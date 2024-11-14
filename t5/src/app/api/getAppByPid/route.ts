import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getTreatmentAndOffice } from '../../controllers/getHelpController'; // Import the function from the controller

export async function GET(req: NextRequest) {
  // Use req.url to get the full URL, then create a URL object to parse query parameters
  const url = new URL(req.url);
  const pid = url.searchParams.get('pid'); // Get PID from query parameters

  // Check if the PID is provided and valid
  if (!pid || isNaN(Number(pid)) || Number(pid) <= 0) {
    console.error('Invalid PID:', pid);  // Log invalid PID
    return NextResponse.json({ message: 'Invalid or missing PID' }, { status: 400 });
  }

  try {
    // Resolve the path to the mock data file (make sure the file is located at the correct path)
    const filePath = path.join(process.cwd(), 'src', 'mockedData', 'TriageApplications.json');
    
    // Read the JSON file from the filesystem
    const fileData = fs.readFileSync(filePath, 'utf-8');
    
    // Parse the JSON data
    const triageData = JSON.parse(fileData);

    // Find the triage application by PID
    const triageApplication = triageData.triage_applications.find((app: any) => app.pid === Number(pid));

    // If no triage application is found, return a 404
    if (!triageApplication) {
      console.error('Triage application not found for PID:', pid);
      return NextResponse.json({ message: 'Triage application not found' }, { status: 404 });
    }

    // Call the getTreatmentAndOffice function to get treatment and office info
    const { treatment, office } = getTreatmentAndOffice(triageApplication);

    // Return the result
    return NextResponse.json({
      data: {
        treatment,
        office,
      },
    });

  } catch (error) {
    console.error('Error fetching triage data:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
