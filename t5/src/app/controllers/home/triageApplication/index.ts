"use client";

import React from "react";
//import the database object used. The singleton

export default class TriageController {
  public static async getTriageApplication() {
    const response = await fetch("/api/home/triageApplication");
    return response.json();
  }
};
  