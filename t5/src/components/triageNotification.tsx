"use client";
import { useEffect, useState } from "react";
import { TriageNotification, NotificationDisplay } from "@/app/controllers/NotificationController";
import { PATIENT } from "../interfaces/patient";
import { fetchData } from "../helpers/utilities";

const PatientFile = "src/mockedData/Patients.JSON";
const TriageApplicationFile = "src/mockedData/TriageApplication.JSON";

const triageNotificationComponent = () => {
    const [statusData, setStatusData] = useState<Record<number, string>>({});
    const [messages, setMessages] = useState<string[]>([]);

    const currLoggedPid = 1; // Hard-coded pid

    // Initialize TriageNotification Observable
    const triageNotification = new TriageNotification();
  
    useEffect(() => {
        // Load patient data and create observers
        const loadPatients = async () => {
          const patientData = await fetchData(PatientFile);
    
          // Create an observer for each patient and add it to the notification system
            if (Array.isArray(patientData)) {
                patientData.forEach((patient: PATIENT) => {
                const observer = new NotificationDisplay(triageNotification, patient, (message: string) => {
                    setMessages((prevMessages) => [...prevMessages, message]);
                });
                triageNotification.addObserver(observer);
                });
            }
        };

        loadPatients();
    }, []);

    // Poll TriageApplication.json for status updates
    useEffect(() => {
        const pollStatus = async () => {
            console.log("line 41");
            const triageData = await fetchData(TriageApplicationFile);
            const newStatusData: Record<number, string> = {};

            const triageApplications = triageData.triage_applications || [];
  
            // Update the newStatusData object with the latest status for each application
            triageApplications.forEach((app: any) => {
                const pid = app.pid;
                const newStatus = app.status;
                newStatusData[pid] = newStatus;
            });

            // Compare new statuses with current ones and notify observers if there is a change
            Object.keys(newStatusData).forEach((pid) => {
                if (newStatusData[Number(pid)] !== statusData[Number(pid)]) {
                    triageNotification.notifyObserver(); // Notify all observers
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
    }, [statusData]);

    // Filters to display message for current logged in user with pid
    const filteredMessage = messages.filter((message) =>
        message.includes(`pid: ${currLoggedPid}`)
    );

    return (
       <div className="notification">
        {filteredMessage.length === 0 && <p>No notifications for you at the moment.</p>}
        {filteredMessage.map((message, index) => (
            <p key={index}>{message}</p>
        ))}
    </div>
  );
};

export default triageNotificationComponent;
