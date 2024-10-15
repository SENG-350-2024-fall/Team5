"use client";
import TriageController from "../../../controllers/TriageController";
import React from "react";
import { NextResponse } from "next/server";

// export async function handler(req: Request, res: Response) {
//     if (req.method === 'GET') {
//         const { searchParams } = new URL(req.url);
//         const tid = Number(searchParams.get('id'));
//         console.log("before response");
//         const response = await TriageController.getTriageApplicationById(tid);
//         console.log(response);
//         return NextResponse.json(response);
//     } else if (req.method === 'POST') {
//         const { searchParams } = new URL(req.url);
//         const pid = Number(searchParams.get('pid'));
//         const timeCreatedParam = searchParams.get('time_created');
//         let time_created = new Date();
//         if (timeCreatedParam) {
//             time_created = new Date(timeCreatedParam); 
//         }
//         const patient_history = searchParams.get('patient_history');
//         const patient_medication = searchParams.get('patient_medication');
//         console.log("before response");
//         const response = await TriageController.createTriageApplication(pid, time_created, patient_history, patient_medication);
//         console.log(response);
//         return NextResponse.json(response);
//     }
// }
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const tid = Number(searchParams.get('tid'));
    console.log("before response");
    const response = await TriageController.getTriageApplicationById(tid);
    console.log(response);
    return NextResponse.json(response);
}

export async function POST(req: Request) {
    const { searchParams } = new URL(req.url);
    const pid = Number(searchParams.get('pid'));
    const timeCreatedParam = searchParams.get('time_created');
    let time_created = new Date();
    if (timeCreatedParam) {
        time_created = new Date(timeCreatedParam); 
    }
    const patient_history = searchParams.get('patient_history');
    const patient_medication = searchParams.get('patient_medication');
    console.log("before response");
    const response = await TriageController.createTriageApplication(pid, time_created, patient_history, patient_medication);
    console.log(response);
    return NextResponse.json(response);
}