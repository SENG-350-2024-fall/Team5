"use client";
import { useEffect, useState } from "react";
import {
  TriageNotification,
  NotificationDisplay,
} from "@/app/controllers/NotificationController";
import { PATIENT } from "../interfaces/patient";
import TriageController from "@/app/controllers/TriageController";
import PatientController from "@/app/controllers/patientController";

// Initialize TriageNotification Observable
const triageNotification = new TriageNotification();

const triageNotificationComponent = () => {
  const [statusData, setStatusData] = useState<Record<number, string>>({});
  const [messages, setMessages] = useState<string[]>([]);

  const currLoggedPid = 1; // Hard-coded pid

  useEffect(() => {
    // Load patient data and create observers
    const loadPatients = async () => {
      try {
        const patientData = await PatientController.getAllPatients();

        console.log("Pa" + patientData.data);
        // Create an observer for each patient and add it to the notification system
        if (Array.isArray(patientData.data)) {
          patientData.data.forEach(async (patient: PATIENT) => {
            if (patient.pid == 1) {
              const observer = await new NotificationDisplay(
                triageNotification,
                patient,
              );
              await triageNotification.addObserver(observer);
              const newMessages = (await observer.update()) || "";
              console.log("New msg" + newMessages);
              setMessages((messages) => [...messages, newMessages]);
              //setMessages([newMessages]);
            }
          });
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    loadPatients();
  }, []);

  // Poll TriageApplication.json for status updates
  useEffect(() => {
    try {
      const pollStatus = async () => {
        const triageData = await TriageController.getAllTriageApplications();
        const newStatusData: Record<number, string> = {};

        const triageApplications = triageData.data || [];
        console.log("tr" + triageApplications);
        // Update the newStatusData object with the latest status for each application
        triageApplications.forEach((app: any) => {
          const pid = app.pid;
          const newStatus = app.status;
          newStatusData[pid] = newStatus;
        });

        // Compare new statuses with current ones and notify observers if there is a change
        Object.keys(newStatusData).forEach(async (pid) => {
          if (newStatusData[Number(pid)] !== statusData[Number(pid)]) {
            await triageNotification.notifyObserver(); // Notify all observers
          }
        });

        // Update the statusData state
        setStatusData(newStatusData);
      };

      // Poll every 5 seconds for status updates
      const intervalId = setInterval(() => {
        pollStatus();
      }, 5000);

      // Cleanup the interval
      return () => clearInterval(intervalId);
    } catch (error: any) {
      console.log(error);
    }
  }, [statusData]);

  return (
    <div className="notification">
      {messages.length === 0 && <p>No notifications for you at the moment.</p>}
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default triageNotificationComponent;
