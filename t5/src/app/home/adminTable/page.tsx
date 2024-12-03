"use client";
import React, { useEffect, useState } from "react";

const TriageApplicationsPage = () => {
  const [triageApplications, setTriageApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const statuses = ["PENDING", "IN_PROGRESS", "COMPLETED"];

  // Handle status change for each application
  const handleStatusChange = async (tid: string, newStatus: string) => {
    try {
      const response = await fetch("/api/adminTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tid, status: newStatus }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating status:", errorData);
        return;
      }

      const updatedApp = await response.json();
      setTriageApplications((prevApps) =>
        prevApps.map((app) =>
          app.tid === updatedApp.application.tid ? updatedApp.application : app,
        ),
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Handle delete action for each application
  const handleDelete = async (tid: string) => {
    // Show confirmation dialog before proceeding
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this triage application?",
    );

    if (!isConfirmed) {
      return; // If not confirmed, don't proceed
    }
    try {
      const response = await fetch(`/api/deleteApp/${tid}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error deleting application:", errorData);
        return;
      }

      const data = await response.json();
      console.log(data.message);

      // Remove the deleted application from the state
      setTriageApplications((prevApps) =>
        prevApps.filter((app) => app.tid !== tid),
      );
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  useEffect(() => {
    const fetchTriageApplications = async () => {
      try {
        const res = await fetch("/api/adminTable");
        if (!res.ok) {
          throw new Error("Failed to fetch triage applications");
        }
        const data = await res.json();
        setTriageApplications(data.data);
      } catch (err) {
        setError("Error fetching triage applications");
      } finally {
        setLoading(false);
      }
    };

    fetchTriageApplications();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Triage Applications</h1>
      {triageApplications.length === 0 ? (
        <p>No triage applications found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>TID</th>
              <th>PID</th>
              <th>Status</th>
              <th>Creation Date</th>
              <th>Actions</th> {/* Column for delete button */}
            </tr>
          </thead>
          <tbody>
            {triageApplications.map((app) => (
              <tr key={app.tid}>
                <td>{app.tid}</td>
                <td>{app.pid}</td>
                <td>
                  <select
                    value={app.status}
                    onChange={(e) =>
                      handleStatusChange(app.tid, e.target.value)
                    }
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{app.time_created}</td>
                <td>
                  <button onClick={() => handleDelete(app.tid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TriageApplicationsPage;
