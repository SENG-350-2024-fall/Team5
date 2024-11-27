"use client"
import React, { useEffect, useState } from 'react';

const TriageApplicationsPage = () => {
  const [triageApplications, setTriageApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch triage applications from the API
    const fetchTriageApplications = async () => {
      try {
        const res = await fetch('/api/adminTable');
        if (!res.ok) {
          throw new Error('Failed to fetch triage applications');
        }
        const data = await res.json();
        setTriageApplications(data.data); // Set the triage applications
      } catch (err) {
        setError('Error fetching triage applications');
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
            </tr>
          </thead>
          <tbody>
            {triageApplications.map((app) => (
              <tr key={app.tid}>
                <td>{app.tid}</td>
                <td>{app.pid}</td>
                <td>{app.status}</td>
                <td>{app.time_created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TriageApplicationsPage;
