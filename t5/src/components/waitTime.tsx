"use client";
import { useEffect, useState } from "react";
import { TriageNotification } from "@/app/controllers/NotificationController";

const WaitTime = () => {
  const [message, setMessage] = useState<string>("Loading ER wait time...");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const triageNotification = new TriageNotification();

    // Start the ping function and update the message every 5 seconds
    const intervalID = triageNotification.ping((newMessage: string) => {
      setMessage(newMessage); // Update state with the new message
      setLoading(false); // Set loading to false once we have the wait time message
    });

    // Cleanup interval when component unmounts
    return () => {
      clearInterval(intervalID);
    };
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="ed-wait-time">
      {loading && <p>Loading ED wait time...</p>}
      {!loading && <p>{message}</p>}
    </div>
  );
};

export default WaitTime;
