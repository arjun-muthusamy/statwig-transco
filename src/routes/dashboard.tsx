import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

const STORAGE_KEY = "dashboard-page-config";

const defaultData = {
  brand: "STATWIG",
  target: "TGTRANSCO",
  pageMainTitle: "AI-Powered Platform for Procurement and Inventory Track & Trace",
  pageSubHeadingTitle:
    "Real-Time Procurement, Inventory Visibility, Monitoring, and Supply Chain Management Platform.",
  email: "sidchaks@statwig.com",
  website: "statwig.com",
};

export type DashboardData = typeof defaultData;

export function loadDashboardData(): DashboardData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultData, ...JSON.parse(raw) };
  } catch {
    // ignore parse errors
  }
  return defaultData;
}

export function saveDashboardData(data: DashboardData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function RouteComponent() {
  const [data, setData] = useState<DashboardData>(defaultData);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setData(loadDashboardData());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, loaded]);

  const handleChange = (key: keyof DashboardData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const fields: { key: keyof DashboardData; label: string; type?: string }[] = [
    { key: "brand", label: "Brand" },
    { key: "target", label: "Target" },
    { key: "pageMainTitle", label: "Page Main Title" },
    { key: "pageSubHeadingTitle", label: "Page Sub Heading Title" },
    { key: "email", label: "Contact Email", type: "email" },
    { key: "website", label: "Website", type: "url" },
  ];

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Dashboard Settings</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
        onSubmit={(e) => e.preventDefault()}
      >
        {fields.map(({ key, label, type }) => (
          <div key={key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor={key} style={{ fontSize: 13, fontWeight: 600 }}>
              {label}
            </label>
            <input
              id={key}
              type={type ?? "text"}
              value={data[key]}
              onChange={handleChange(key)}
              style={{
                padding: "8px 10px",
                border: "1px solid #d1d5db",
                borderRadius: 6,
                fontSize: 14,
              }}
            />
          </div>
        ))}
      </form>

      <button
        onClick={() => setData(defaultData)}
        style={{
          marginTop: 20,
          padding: "8px 14px",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          background: "#f9fafb",
          cursor: "pointer",
        }}
      >
        Reset to defaults
      </button>
    </div>
  );
}
