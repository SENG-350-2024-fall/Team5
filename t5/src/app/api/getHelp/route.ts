// app/api/getSelectedOffice/route.ts
import { NextResponse } from 'next/server';
import { getHelp } from '../../controllers/getHelpController';

export async function GET() {
  const selectedHelp = getHelp();
  return NextResponse.json(selectedHelp);
}
