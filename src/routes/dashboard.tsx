import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

const STORAGE_KEY = "dashboard-page-config";

const defaultData = {
  brand: "STATWIG",
  target: "TGTRANSCO",
  state:'Telangana',
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

type FieldConfig = {
  key: keyof DashboardData;
  label: string;
  tag: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
};

const sections: { title: string; hint: string; fields: FieldConfig[] }[] = [
  {
    title: "Identity",
    hint: "How this workspace is named and tagged",
    fields: [
      { key: "brand", label: "Brand", tag: "BRD", placeholder: "e.g. STATWIG" },
      { key: "target", label: "Target account", tag: "TGT", placeholder: "e.g. TGTRANSCO" },
      { key: "state", label: "State", tag: "TGT", placeholder: "e.g. Telangana" },
    ],
  },
  {
    title: "Page content",
    hint: "What visitors read on the landing page",
    fields: [
      {
        key: "pageMainTitle",
        label: "Main title",
        tag: "H1",
        multiline: true,
        rows: 2,
        placeholder: "Main headline shown at the top of the page",
      },
      {
        key: "pageSubHeadingTitle",
        label: "Subheading",
        tag: "H2",
        multiline: true,
        rows: 3,
        placeholder: "Supporting line shown under the main title",
      },
    ],
  },
  {
    title: "Contact",
    hint: "Where people can reach you",
    fields: [
      { key: "email", label: "Contact email", tag: "EML", type: "email", placeholder: "name@company.com" },
      { key: "website", label: "Website", tag: "WEB", type: "text", placeholder: "company.com" },
    ],
  },
];

function RouteComponent() {
  const [saved, setSaved] = useState<DashboardData>(defaultData);
  const [draft, setDraft] = useState<DashboardData>(defaultData);
  const [loaded, setLoaded] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const data = loadDashboardData();
    setSaved(data);
    setDraft(data);
    setLoaded(true);
  }, []);

  const isDirty = useMemo(() => JSON.stringify(draft) !== JSON.stringify(saved), [draft, saved]);

  const handleChange =
    (key: keyof DashboardData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setJustSaved(false);
      setDraft((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveDashboardData(draft);
    setSaved(draft);
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 2400);
  };

  const handleReset = () => {
    setDraft(defaultData);
    setJustSaved(false);
  };

  if (!loaded) return null;

  return (
    <div className="stw-page">
      <style>{`
        .stw-page {
          --ink: #14181B;
          --ink-soft: #6B7280;
          --line: #E5E7EB;
          --surface: #FFFFFF;
          --bg: #F7F7F5;
          --accent: #0D9488;
          --accent-ink: #0F766E;
          --accent-wash: #ECFDF9;
          min-height: 100vh;
          background: var(--bg);
          color: var(--ink);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        }

        .stw-mono {
          font-family: "SF Mono", ui-monospace, "Roboto Mono", Menlo, Consolas, monospace;
        }

        .stw-header {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          background: rgba(247, 247, 245, 0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }

        .stw-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stw-mark {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .stw-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .stw-brand-name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .stw-brand-sub {
          font-size: 11px;
          color: var(--ink-soft);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .stw-design-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-ink);
          text-decoration: none;
          padding: 8px 14px;
          border: 1px solid var(--accent);
          border-radius: 999px;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .stw-design-link:hover {
          background: var(--accent);
          color: #fff;
        }

        .stw-main {
          max-width: 640px;
          margin: 0 auto;
          padding: 48px 24px 96px;
        }

        .stw-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }

        .stw-lede {
          font-size: 14px;
          color: var(--ink-soft);
          margin: 0 0 36px;
        }

        .stw-section {
          margin-bottom: 8px;
        }

        .stw-section + .stw-section {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid var(--line);
        }

        .stw-section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stw-section-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .stw-section-hint {
          font-size: 12px;
          color: var(--ink-soft);
        }

        .stw-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }

        .stw-field:last-child {
          margin-bottom: 0;
        }

        .stw-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stw-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--accent-ink);
          background: var(--accent-wash);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .stw-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
        }

        .stw-input,
        .stw-textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 10px 12px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          font-size: 14px;
          color: var(--ink);
          font-family: inherit;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .stw-textarea {
          resize: vertical;
          line-height: 1.5;
        }

        .stw-input:hover,
        .stw-textarea:hover {
          border-color: #C7CBD1;
        }

        .stw-input:focus,
        .stw-textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-wash);
        }

        .stw-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }

        .stw-btn-primary {
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid var(--accent);
          background: var(--accent);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease, opacity 0.15s ease;
        }

        .stw-btn-primary:disabled {
          background: #B9C0C6;
          border-color: #B9C0C6;
          cursor: not-allowed;
        }

        .stw-btn-primary:not(:disabled):hover {
          background: var(--accent-ink);
        }

        .stw-btn-ghost {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink-soft);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 0.15s ease, color 0.15s ease;
        }

        .stw-btn-ghost:hover {
          border-color: #C7CBD1;
          color: var(--ink);
        }

        .stw-status {
          font-size: 12px;
          color: var(--ink-soft);
          margin-left: auto;
        }

        .stw-status.is-saved {
          color: var(--accent-ink);
          font-weight: 600;
        }
      `}</style>

      <header className="stw-header">
        <div className="stw-brand">
          <div className="stw-mark">{(draft.brand || "S").charAt(0)}</div>
          <div className="stw-brand-text">
            <span className="stw-brand-name">{draft.brand || "Dashboard"}</span>
            <span className="stw-brand-sub stw-mono">Settings</span>
          </div>
        </div>
        <Link to="/" className="stw-design-link">
          View design →
        </Link>
      </header>

      <main className="stw-main">
        <h1 className="stw-title">Dashboard settings</h1>
        <p className="stw-lede">Edit the details below, then save to publish your changes.</p>

        <form onSubmit={handleSubmit}>
          {sections.map((section) => (
            <div className="stw-section" key={section.title}>
              <div className="stw-section-head">
                <span className="stw-section-title">{section.title}</span>
                <span className="stw-section-hint">{section.hint}</span>
              </div>

              {section.fields.map((field) => (
                <div className="stw-field" key={field.key}>
                  <div className="stw-label-row">
                    <span className="stw-tag stw-mono">{field.tag}</span>
                    <label htmlFor={field.key} className="stw-label">
                      {field.label}
                    </label>
                  </div>

                  {field.multiline ? (
                    <textarea
                      id={field.key}
                      value={draft[field.key]}
                      onChange={handleChange(field.key)}
                      rows={field.rows ?? 3}
                      placeholder={field.placeholder}
                      className="stw-textarea"
                    />
                  ) : (
                    <input
                      id={field.key}
                      type={field.type ?? "text"}
                      value={draft[field.key]}
                      onChange={handleChange(field.key)}
                      placeholder={field.placeholder}
                      className="stw-input"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="stw-actions">
            <button type="submit" className="stw-btn-primary" disabled={!isDirty}>
              Save changes
            </button>
            <button type="button" className="stw-btn-ghost" onClick={handleReset}>
              Reset to defaults
            </button>
           
          </div>
           <span className={`stw-status${justSaved ? " is-saved" : ""}`}>
              {justSaved ? "Saved" : isDirty ? "Unsaved changes" : ""}
            </span>
        </form>
      </main>
    </div>
  );
}