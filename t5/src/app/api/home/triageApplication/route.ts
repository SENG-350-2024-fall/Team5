"use client";
import TriageController from "../../../controllers/home/triageApplication";
import React from "react";
import { NextApiRequest, NextApiResponse } from "next";

export async function getTriageApplication(req: NextApiRequest, res: NextApiResponse) {
    const response = await TriageController.getTriageApplication();
    return response;
}