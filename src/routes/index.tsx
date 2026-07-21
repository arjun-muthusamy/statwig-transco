import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Boxes,
  MapPin,
  ShieldCheck,
  Truck,
  Warehouse,
  Factory,
  BarChart3,
  Cpu,
  AlertTriangle,
  Workflow,
  PackageCheck,
  Users,
  Globe2,
  Zap,
  FileCheck2,
  TrendingUp,
  Layers,
  Network,
  ClipboardList,
  Eye,
  Gauge,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import dashState from "@/assets/dashboard-state.jpg";
import dashState2 from "@/assets/dashboard_maharastra.png";
import dashLoc from "@/assets/dashboard-location.jpg";
import dashInv from "@/assets/dashboard-inventory.jpg";
import { loadDashboardData } from "./dashboard";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const config = loadDashboardData();

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${config.brand} x ${config.target} — Real-Time Procurement & Material Visibility` },
      {
        name: "description",
        content: `AI-powered platform for real-time procurement, inventory tracking, and supply chain visibility for ${config.target}.`,
      },
    ],
  }),
  component: Proposal,
});

/* ---------------- Primitives ---------------- */

function Page({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <section
      className="proposal-page"
      style={{
        width: wide ? "297mm" : "210mm",
        minHeight: wide ? "210mm" : "297mm",
      }}
    >
      {children}
    </section>
  );
}

function PageHeader({ n, total }: { n: number; total: number }) {
  return (
    <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-[2px] bg-[var(--accent)]" />
        <span className="font-semibold text-[var(--accent)] lowercase tracking-[0.2em] uppercase">
          {config.brand} x {config.target}
        </span>
      </div>
      <span>
        {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function PageFooter() {
  return (
    <div className="mt-auto pt-6 flex items-center justify-between text-[9px] tracking-[0.2em] uppercase text-[var(--muted)] border-t border-[var(--line)]">
      <span>{config.website}</span>
      <span>Real-Time Procurement & Material Visibility</span>
      <span>{config.email}</span>
    </div>
  );
}

function BottomBand({ items }: { items: { k: string; v: string }[] }) {
  return (
    <div className="mt-auto pt-6">
      <div className="rounded-lg bg-gradient-to-r from-[var(--ink)] via-[#1a2c45] to-[var(--accent)] text-white p-5 grid grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.k}>
            <div className="text-[9px] tracking-[0.25em] uppercase text-white/60">{it.k}</div>
            <div className="font-serif text-[16px] leading-tight mt-1">{it.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent-2)] font-semibold mb-2">
        {kicker}
      </div>
      <h2 className="font-serif text-[34px] leading-[1.05] tracking-tight text-[var(--ink)]">
        {title}
      </h2>
    </div>
  );
}

function Metric({
  value,
  label,
  accent = "var(--accent)",
}: {
  value: string;
  label: string;
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-white/60 p-4">
      <div className="font-serif text-[28px] leading-none" style={{ color: accent }}>
        {value}
      </div>
      <div className="text-[11px] mt-2 text-[var(--muted)] leading-snug">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-white/50 p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
          <Icon size={16} />
        </div>
        <h4 className="font-serif text-[16px] text-[var(--ink)]">{title}</h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-[11.5px] text-[var(--ink-soft)] leading-snug flex gap-2">
            <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--accent-2)] shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LaptopMockup({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="w-full">
      <div className="relative mx-auto" style={{ maxWidth: "100%" }}>
        <div className="rounded-t-xl bg-[#1a1a1a] p-2 pb-1.5 shadow-xl">
          <div className="flex gap-1.5 px-2 pb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
          <img
            src={src}
            alt={alt}
            className="w-full aspect-[16/9] object-cover rounded-md bg-white"
            loading="eager"
          />
        </div>
        <div className="mx-auto h-2 w-[60%] bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] rounded-b-xl" />
        <div className="mx-auto h-1 w-[70%] bg-[#1a1a1a] rounded-b-md" />
      </div>
      <figcaption className="text-center text-[11px] text-[var(--muted)] mt-3 tracking-wide uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ---------------- Pages ---------------- */

const TOTAL = 8;

function HeroPage() {
  return (
    <Page>
      {/* decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full bg-[var(--accent-2)]/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
          <div className="font-serif text-[22px] font-black tracking-tight text-[var(--accent)]">
            {config.brand}
          </div>
          <span>For {config.target} · 2026</span>
        </div>

        <div className="mt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
            <Zap size={12} /> AI-Powered Platform
          </div>
          <h1 className="font-serif font-black text-[48px] leading-[1.02] tracking-tight text-[var(--ink)]">
            AI-Powered Platform for <span className="italic text-[var(--accent)]">Procurement</span>{" "}
            and Inventory Track &amp; Trace
          </h1>
          <p className="mt-4 max-w-[620px] text-[14px] text-[var(--ink-soft)] leading-relaxed">
            {config.pageSubHeadingTitle}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-6">
          <Metric value="125K+" label="Users onboarded across global deployments" />
          <Metric
            value="100M+"
            label="Annual transactions tracked on platform"
            accent="var(--accent-2)"
          />
          <Metric value="65M" label="Beneficiaries projected to be impacted" accent="var(--gold)" />
          <Metric
            value="50+"
            label="Warehouses & Fair Price Shops connected"
            accent="var(--blue)"
          />
        </div>

        <div className="mt-6 relative">
          <div className="relative rounded-xl overflow-hidden border border-[var(--line)] shadow-2xl">
            <img
              src={dashState2}
              alt="State-level dashboard"
              className="w-full aspect-[16/8] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-3 -right-2 bg-white rounded-lg border border-[var(--line)] shadow-lg p-3 w-[170px]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">Live</span>
            </div>
            <div className="font-serif text-[18px] text-[var(--ink)]">Maharashtra</div>
            <div className="text-[10px] text-[var(--muted)]">State-wide visibility</div>
          </div>
        </div>

        <div className="mt-auto pt-5 grid grid-cols-3 gap-4 text-[10px]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[var(--accent)]" />
            <span>UNICEF Innovation Fund Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[var(--accent)]" />
            <span>Government-grade Deployments</span>
          </div>
          <div className="flex items-center gap-2">
            <Network size={14} className="text-[var(--accent)]" />
            <span>Blockchain-secured Audit Trail</span>
          </div>
        </div>
      </div>
    </Page>
  );
}

function AboutImpactPage() {
  return (
    <Page>
      <PageHeader n={5} total={TOTAL} />
      <SectionTitle
        kicker="About · Proven Impact"
        title="Supply chain visibility, delivered at scale."
      />

      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed">
            StaTwig is a supply chain technology company specializing in end-to-end
            <strong> track-and-trace platforms</strong> that bring real-time visibility into complex
            procurement and inventory systems.
          </p>
          <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed mt-3">
            We digitize fragmented operations and enable seamless tracking of materials from source
            to last-mile delivery across large-scale, multi-stakeholder environments—working
            extensively with government departments to improve transparency and accountability.
          </p>
          <div className="mt-5 p-4 rounded-lg bg-[var(--cream)] border border-[var(--line)]">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--accent-2)] font-semibold">
              Endorsed by
            </div>
            <div className="font-serif text-[18px] text-[var(--ink)] mt-1">
              UNICEF Innovation Fund
            </div>
            <div className="text-[11px] text-[var(--muted)] mt-1">
              Portfolio company · Two long-term agreements
            </div>
          </div>
        </div>

        <div className="col-span-3 space-y-3">
          {[
            {
              icon: Boxes,
              title: "Civil Supplies — Telangana",
              body: "Deployed across 2 districts, tracking 25,000+ gunny bags across procurement, warehousing, and distribution covering 50+ warehouses and Fair Price Shops.",
              metric: "25K+",
              metricLabel: "Gunny bags tracked",
            },
            {
              icon: Users,
              title: "Women & Child Welfare — Telangana",
              body: "Tracking nutrition products across Anganwadi centers, covering thousands of last-mile deliveries with delivery validation and stronger accountability.",
              metric: "1000s",
              metricLabel: "Last-mile deliveries",
            },
            {
              icon: Globe2,
              title: "UNICEF / Vaccine Ledger",
              body: "Onboarded 125,000+ users globally, tracking 100M+ annual transactions—designed to impact 65M beneficiaries through stronger supply chain visibility.",
              metric: "100M+",
              metricLabel: "Annual transactions",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-[var(--line)] bg-white/60 p-4 flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                <c.icon size={18} />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-[15px] text-[var(--ink)]">{c.title}</h4>
                <p className="text-[11.5px] text-[var(--ink-soft)] leading-snug mt-1">{c.body}</p>
              </div>
              <div className="text-right w-[90px] shrink-0 border-l border-[var(--line)] pl-3">
                <div className="font-serif text-[22px] text-[var(--accent-2)] leading-none">
                  {c.metric}
                </div>
                <div className="text-[9px] text-[var(--muted)] uppercase tracking-wider mt-1">
                  {c.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomBand
        items={[
          { k: "Sector", v: "Government & Public Sector" },
          { k: "Backed by", v: "UNICEF Innovation Fund" },
          { k: "Deployments", v: "India · Global" },
          { k: "Beneficiaries", v: "65M projected" },
        ]}
      />
      <PageFooter />
    </Page>
  );
}

function VisionPage() {
  const materials = [
    "Wires",
    "Spare parts",
    "Steel",
    "Cement",
    "Transformers",
    "Coal",
    "Machinery",
    "Earthing material",
    "Control panels",
    "Cables",
    "Motors",
    "Oil & lubricants",
  ];
  return (
    <Page>
      <PageHeader n={2} total={TOTAL} />
      <SectionTitle kicker="Vision" title={`A unified, real-time view for ${config.target}.`} />

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed">
            Enable a unified, real-time view of the entire procurement and inventory ecosystem for{" "}
            {config.target} — covering structural materials, electrical equipment, and critical
            assets from vendor to deployment.
          </p>

          <div className="mt-5 space-y-3">
            {[
              {
                icon: Eye,
                t: "Know",
                d: "What has been procured, where it is located, and in what condition—at any point in time.",
              },
              {
                icon: Truck,
                t: "Track",
                d: "Movement of materials from vendor to store, between depots, and to the site of consumption.",
              },
              {
                icon: Gauge,
                t: "Monitor",
                d: `Inventory levels, stock movements, and usage patterns across all ${config.target} locations in real time.`,
              },
            ].map((x) => (
              <div
                key={x.t}
                className="flex gap-3 p-3 rounded-lg border border-[var(--line)] bg-white/50"
              >
                <div className="w-9 h-9 rounded-md bg-[var(--accent-2)]/10 text-[var(--accent-2)] flex items-center justify-center shrink-0">
                  <x.icon size={16} />
                </div>
                <div>
                  <div className="font-serif text-[15px] text-[var(--ink)]">{x.t}</div>
                  <div className="text-[11.5px] text-[var(--ink-soft)] leading-snug">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-lg p-5 bg-gradient-to-br from-[var(--accent)] to-[#0a3d31] text-white h-full flex flex-col">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">
              Materials in scope
            </div>
            <h3 className="font-serif text-[24px] leading-tight">
              Every asset, every movement—digitized.
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {materials.map((m) => (
                <span
                  key={m}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/20"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="font-serif text-[26px]">Vendor</div>
                <div className="text-[10px] uppercase tracking-wider text-white/70">Origin</div>
              </div>
              <div className="flex items-center justify-center text-white/40">→ → →</div>
              <div>
                <div className="font-serif text-[26px]">Site</div>
                <div className="text-[10px] uppercase tracking-wider text-white/70">
                  Consumption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBand
        items={[
          { k: "Visibility", v: "Vendor → Depot → Site" },
          { k: "Materials", v: "Wires, transformers, coal, more" },
          { k: "Mode", v: "Real-time digital ledger" },
          { k: "Outcome", v: "Faster, smarter decisions" },
        ]}
      />
      <PageFooter />
    </Page>
  );
}

function WorkflowPage() {
  const steps = [
    {
      icon: FileCheck2,
      t: "Procurement & Vendor Dispatch",
      d: "Purchase orders issued; vendors dispatch with digital IDs.",
    },
    {
      icon: Warehouse,
      t: "Inbound & State Depot Receipt",
      d: "Goods received, verified, and recorded at state depots.",
    },
    {
      icon: Truck,
      t: "Inter-Location Transfers",
      d: "Movement between regional godowns and project sites.",
    },
    {
      icon: Factory,
      t: "Site Consumption & Utilization",
      d: "Material issued and consumed against projects/assets.",
    },
    {
      icon: BarChart3,
      t: "Analytics & Decision Support",
      d: "Real-time reporting, KPIs, and predictive insights.",
    },
  ];
  return (
    <Page>
      <PageHeader n={3} total={TOTAL} />
      <SectionTitle kicker="Proposed Workflow" title="From vendor to site, end-to-end." />

      <p className="text-[12.5px] text-[var(--ink-soft)] max-w-[640px] leading-relaxed mb-8">
        Every material movement is captured at the point of action and flows into a centralized
        visibility layer. Five connected stages, one continuous data thread.
      </p>

      {/* horizontal flow */}
      <div className="relative">
        <div className="absolute top-7 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--blue)]" />
        <div className="grid grid-cols-5 gap-2 relative">
          {steps.map((s, i) => (
            <div key={s.t} className="flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-md">
                <s.icon size={22} />
              </div>
              <div className="mt-2 text-[10px] font-semibold text-[var(--accent-2)] tracking-[0.15em] uppercase">
                Step {i + 1}
              </div>
              <div className="font-serif text-[13px] mt-1 text-[var(--ink)] leading-tight">
                {s.t}
              </div>
              <div className="text-[10.5px] text-[var(--muted)] mt-1.5 leading-snug px-1">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* enable / data captured */}
      <div className="grid grid-cols-3 gap-4 mt-10">
        {[
          {
            icon: ClipboardList,
            t: "Mobile-first capture",
            d: "Real-time updates from warehouses, depots, and sites.",
          },
          {
            icon: Layers,
            t: "Centralized data layer",
            d: "Single source of truth across procurement and inventory.",
          },
          {
            icon: TrendingUp,
            t: "Actionable analytics",
            d: "Dashboards translate movement into decisions.",
          },
        ].map((x) => (
          <div key={x.t} className="rounded-lg border border-[var(--line)] bg-white/50 p-4">
            <x.icon size={18} className="text-[var(--accent)] mb-2" />
            <div className="font-serif text-[14px] text-[var(--ink)]">{x.t}</div>
            <div className="text-[11px] text-[var(--muted)] mt-1 leading-snug">{x.d}</div>
          </div>
        ))}
      </div>

      <BottomBand
        items={[
          { k: "Stages", v: "5 connected workflow steps" },
          { k: "Capture", v: "Mobile-first, field-ready" },
          { k: "Layer", v: "Centralized data thread" },
          { k: "Output", v: "Live KPIs & analytics" },
        ]}
      />
      <PageFooter />
    </Page>
  );
}

function DashboardsPage() {
  return (
    <Page>
      <PageHeader n={4} total={TOTAL} />
      <SectionTitle kicker="Dashboard Views" title="Visibility at every altitude." />

      <p className="text-[12.5px] text-[var(--ink-soft)] max-w-[640px] leading-relaxed mb-6">
        Three lenses on the same operational reality—state, location, and material—surfacing the
        right signal for every role.
      </p>

      <div className="space-y-6">
        <div>
          <LaptopMockup
            src={dashState2}
            alt="State-level dashboard"
            caption={`State-Level Dashboard · ${config.target}`}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <LaptopMockup
            src={dashLoc}
            alt="Location-level dashboard"
            caption="Location-Level · Depot / Site Detail"
          />
          <LaptopMockup
            src={dashInv}
            alt="Inventory monitoring view"
            caption="Inventory Monitoring · Material Category"
          />
        </div>
      </div>

      <PageFooter />
    </Page>
  );
}

function FeaturesPage() {
  return (
    <Page>
      <PageHeader n={6} total={TOTAL} />
      <SectionTitle
        kicker="Core Features"
        title="Built for complex, multi-stakeholder operations."
      />

      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          icon={PackageCheck}
          title="Inventory Tracking & Monitoring"
          items={[
            "Unique Digital ID per batch / pallet / item",
            "Track quantity, location, status (in-transit, in-stock, issued, consumed)",
            "Inventory across state stores, regional godowns, project sites",
            "Multiple units of measure & material categories",
          ]}
        />
        <FeatureCard
          icon={MapPin}
          title="Real-Time Visibility"
          items={[
            "Live dashboards for stock levels and movement history",
            "Map-based view of material locations across Telangana",
            "Alerts for low stock, delays, unplanned transfers, anomalies",
            "Role-based access for procurement, stores, operations",
          ]}
        />
        <FeatureCard
          icon={ShieldCheck}
          title="End-to-End Traceability"
          items={[
            "Complete audit trail: procurement → receipt → transfer → usage",
            "Link material to purchase order, vendor, and PO line item",
            "Track usage by project, asset, or location",
            "Tamper-evident blockchain records for high-value items",
          ]}
        />
        <FeatureCard
          icon={BarChart3}
          title="Analytics & KPIs"
          items={[
            "Inventory turnover ratio by category and location",
            "Stock-out incidents and replenishment time",
            "Lead time variability from vendor to site",
            "Wastage & loss rate, procurement cycle time, vendor on-time delivery",
          ]}
        />
      </div>

      <div className="mt-6 p-4 rounded-lg bg-[var(--cream)] border border-[var(--line)] flex items-center gap-4">
        <Cpu className="text-[var(--accent)] shrink-0" size={28} />
        <div>
          <div className="font-serif text-[16px] text-[var(--ink)]">
            A digital layer across procurement & inventory operations
          </div>
          <div className="text-[11.5px] text-[var(--ink-soft)] mt-0.5">
            Mobile-based capture from the field, dashboards for monitoring, and integrations with
            existing systems—seamless, scalable, end-to-end.
          </div>
        </div>
      </div>

      <PageFooter />
    </Page>
  );
}

function BenefitsPage() {
  const benefits = [
    {
      icon: Activity,
      t: "Operational Efficiency",
      d: "Reduced manual reconciliation, fewer stock audits, faster decisions.",
    },
    {
      icon: TrendingUp,
      t: "Cost Optimization",
      d: "Lower carrying costs, reduced stock-outs, better vendor performance.",
    },
    {
      icon: ShieldCheck,
      t: "Transparency & Accountability",
      d: "Clear audit trail for audits, compliance, and internal controls.",
    },
    {
      icon: BarChart3,
      t: "Better Planning",
      d: "Data-driven replenishment and capacity planning from historical usage.",
    },
    {
      icon: AlertTriangle,
      t: "Risk Reduction",
      d: "Early detection of anomalies, diversion, or unusual consumption.",
    },
    {
      icon: Layers,
      t: "Scalability",
      d: "Extends to other utilities, O&M contracts, or asset tracking.",
    },
  ];
  const kpis = [
    "Inventory turnover ratio",
    "Stock-out incidents & time to replenish",
    "Lead time variability",
    "Wastage & loss rate",
    "Procurement cycle time",
    "Vendor on-time delivery %",
    "Cost of carrying inventory",
  ];
  return (
    <Page>
      <PageHeader n={7} total={TOTAL} />
      <SectionTitle kicker="Benefits & KPIs" title={`Measurable outcomes for ${config.target}.`} />

      <div className="grid grid-cols-3 gap-3">
        {benefits.map((b) => (
          <div key={b.t} className="rounded-lg border border-[var(--line)] bg-white/60 p-4">
            <div className="w-9 h-9 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-3">
              <b.icon size={16} />
            </div>
            <div className="font-serif text-[15px] text-[var(--ink)]">{b.t}</div>
            <div className="text-[11px] text-[var(--ink-soft)] leading-snug mt-1">{b.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg overflow-hidden border border-[var(--line)]">
        <div className="bg-[var(--ink)] text-white px-5 py-3 flex items-center justify-between">
          <div className="font-serif text-[16px]">Key KPIs to Track</div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
            Continuous Monitoring
          </span>
        </div>
        <div className="grid grid-cols-4 gap-px bg-[var(--line)]">
          {kpis.map((k, i) => (
            <div key={k} className="bg-[var(--paper)] p-3">
              <div className="text-[10px] text-[var(--accent-2)] font-semibold">
                KPI {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[12px] text-[var(--ink)] mt-1 font-medium leading-snug">{k}</div>
            </div>
          ))}
          <div className="bg-[var(--cream)] p-3 flex items-center justify-center">
            <Workflow className="text-[var(--accent)]" size={20} />
          </div>
        </div>
      </div>

      <BottomBand
        items={[
          { k: "Efficiency", v: "Less manual reconciliation" },
          { k: "Cost", v: "Lower carrying & stock-outs" },
          { k: "Compliance", v: "Audit-ready trail" },
          { k: "Scale", v: "Extensible across utilities" },
        ]}
      />
      <PageFooter />
    </Page>
  );
}

function OfferingPage() {
  return (
    <Page>
      <PageHeader n={8} total={TOTAL} />
      <SectionTitle
        kicker="What We Offer · What We Track"
        title="A complete operating system for material flow."
      />

      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-lg p-5 border border-[var(--line)] bg-white/60">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3">
            What We Offer
          </div>
          <ul className="space-y-2.5">
            {[
              "Real-time procurement management across vendors and locations",
              "Inventory tracking and traceability across the supply chain",
              "Asset visibility across lifecycle stages",
              "Monitoring and reporting through centralized dashboards",
              "Physical and software-driven procurement management",
            ].map((x) => (
              <li key={x} className="flex gap-2.5 text-[12px] text-[var(--ink-soft)] leading-snug">
                <PackageCheck size={14} className="text-[var(--accent)] shrink-0 mt-[2px]" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg p-5 border border-[var(--line)] bg-[var(--cream)]">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-2)] font-semibold mb-3">
            What We Track
          </div>
          <ul className="space-y-2.5">
            {[
              "Inventory movement across locations",
              "Procurement lifecycle from request to fulfillment",
              "Asset location, status, and utilization",
              "Consumption patterns across sites",
              "Vendor performance and delivery timelines",
              "End-to-end supply chain activities",
            ].map((x) => (
              <li key={x} className="flex gap-2.5 text-[12px] text-[var(--ink-soft)] leading-snug">
                <Eye size={14} className="text-[var(--accent-2)] shrink-0 mt-[2px]" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3">
          Geographic Coverage
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-white/60 p-5 flex items-center gap-6">
          <Globe2 className="text-[var(--accent)] shrink-0" size={48} />
          <div className="flex-1">
            <div className="font-serif text-[18px] text-[var(--ink)]">
              Designed to scale across geographies
            </div>
            <p className="text-[12px] text-[var(--ink-soft)] leading-relaxed mt-1">
              The platform supports deployments across Bangladesh operations, enabling large-scale
              tracking across multiple regions and operational nodes—configurable for state-level
              views such as Telangana for granular monitoring.
            </p>
          </div>
          <div className="text-right border-l border-[var(--line)] pl-5">
            <div className="font-serif text-[28px] text-[var(--accent-2)] leading-none">
              Multi-region
            </div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--muted)] mt-1">
              Configurable views
            </div>
          </div>
        </div>
      </div>

      {/* Closing band */}
      <div className="mt-6 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[var(--ink)] via-[var(--accent)] to-[#0a3d31] text-white p-6 flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-1">
              Let's Build It Together
            </div>
            <div className="font-serif text-[22px] leading-tight">
              Continuous visibility. Stronger control. Smarter decisions.
            </div>
          </div>
          <div className="text-right">
            <div className="font-serif text-[18px]">{config.email}</div>
            <div className="text-[10px] uppercase tracking-wider text-white/70">
              {config.website}
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </Page>
  );
}

/* ---------------- Root ---------------- */

function Proposal() {
  type PageSize = "a4" | "a5";
  const PRINT_STYLE_ID = "dashboard-print-size-style";

  function setPrintPageSize(size: PageSize) {
    let styleTag = document.getElementById(PRINT_STYLE_ID) as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = PRINT_STYLE_ID;
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = `
    @page {
      size: ${size};
      margin: 0;
    }
    @media print {
      body {
        margin: 0;
      }
    }
  `;
  }

  const [pageSize, setPageSize] = useState<PageSize>("a4");

  const handlePrint = () => {
    setPrintPageSize(pageSize);
    // give the browser a tick to apply the injected style before printing
    requestAnimationFrame(() => window.print());
  };

  return (
    <div className="proposal-root min-h-screen py-8" style={{ background: "#3b3b3b" }}>
      <style>{`
        .prop-toolbar {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .prop-toolbar-link {
          position: fixed;
          top: 80px;
          right: 20px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .prop-toolbar-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 36px;
          padding: 0 12px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: transparent;
          color: #4B5563;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .prop-toolbar-btn:hover {
          background: #F3F4F6;
          color: #111827;
        }

        .prop-divider {
          width: 1px;
          height: 24px;
          background: #E5E7EB;
        }

        .prop-size-group {
          display: flex;
          padding: 2px;
          background: #F3F4F6;
          border-radius: 8px;
        }

        .prop-size-btn {
          height: 32px;
          padding: 0 12px;
          border: none;
          border-radius: 6px;
          background: transparent;
          color: #6B7280;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
        }

        .prop-size-btn.is-active {
          background: #FFFFFF;
          color: #0F766E;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .prop-export-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 36px;
          padding: 0 16px;
          border: none;
          border-radius: 8px;
          background: #0D9488;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .prop-export-btn:hover {
          background: #0F766E;
        }

        @media print {
          .prop-toolbar {
            display: none !important;
          }
            .prop-toolbar-link {
            display: none !important;
          }
        }
      `}</style>

      <HeroPage />
      <VisionPage />
      <WorkflowPage />
      <DashboardsPage />
      <AboutImpactPage />
      <FeaturesPage />
      <BenefitsPage />
      <OfferingPage />

      <div className="prop-toolbar">
        <div className="prop-size-group" role="group" aria-label="Page size">
          <button
            type="button"
            className={`prop-size-btn${pageSize === "a4" ? " is-active" : ""}`}
            onClick={() => setPageSize("a4")}
          >
            A4
          </button>
          <button
            type="button"
            className={`prop-size-btn${pageSize === "a5" ? " is-active" : ""}`}
            onClick={() => setPageSize("a5")}
          >
            A5
          </button>
        </div>

        <button className="prop-export-btn" onClick={handlePrint}>
          Export PDF
        </button>
      </div>

      <div className="prop-toolbar-link">
        <Link to="/dashboard" className="prop-toolbar-btn">
          Dashboard <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

