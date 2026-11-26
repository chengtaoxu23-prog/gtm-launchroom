export const luminaStream = "North America Community Signals (r/homeautomation & r/privacy)";

const inputs = [
  ["Subscription Fatigue", "homeautomation", 96, 0.94, "Auto-Pass",
    "It feels like I'm paying a ransom for my own footage. Bought the camera, own the house, still pay monthly rent just for person alerts.", "still pay monthly rent just for person alerts"],
  ["Competitor Paywall Churn", "homeowners", 93, 0.91, "Auto-Pass",
    "Wyze moved all motion event history behind a paywall; ripping them out this weekend and switching to local SD card only.", "switching to local SD card only"],
  ["Privacy & Warrant Anxiety", "privacy", 95, 0.72, "HITL · Compliance / Privacy",
    "Ring hands over recordings without a warrant, and cloud cameras from overseas brands raise firewall & data-residency concerns unless hosted locally.", "firewall & data-residency concerns unless hosted locally"],
  ["Hardware Latency Friction", "homeautomation", 88, 0.87, "Auto-Pass",
    "Blink doorbell has a 6-second delay—delivery drivers walk away before I can talk. PIR motion alerts give constant false flags from passing cars.", "6-second delay"],
  ["Winning Value Prop Signal", "homeowners", 94, 0.92, "Auto-Pass",
    "Eufy gives local human/pet detection with zero monthly subscription. That's the only reason I didn't return it.", "local human/pet detection with zero monthly subscription"],
  ["Smart Home Ecosystem Lock", "homeautomation", 82, 0.76, "HITL · Confidence < 0.80",
    "If it doesn't support HomeKit Secure Video or RTSP local NVR, it's e-waste the day the startup shuts down.", "HomeKit Secure Video or RTSP local NVR"],
  ["Installation Friction", "homeowners", 79, 0.85, "Auto-Pass",
    "Not drilling through brick for a wired chime. Need a 10-minute battery setup that actually lasts through a Chicago winter.", "10-minute battery setup"],
  ["Low-ICP Noise (Filtered)", "parenting", 28, 0.90, "Low-Match Queue",
    "Looking for a $15 indoor baby monitor that doesn't need Wi-Fi at all.", "$15 indoor baby monitor"],
];

export const luminaEvidence = inputs.map(([title, community, score, confidence, gate, quote, highlight], index) => {
  const id = `SIG-NA-${String(index + 1).padStart(2, "0")}`;
  return {
    id, source: `r/${community}`, title: `${id} · ${title}`, score, confidence, gate, quote, highlight,
    context: `Supplied community signal · r/${community} · Confidence ${confidence.toFixed(2)} · ${gate}`,
    receivedAt: `2026-11-18T${15 - index}:00:00+08:00`.replace(/T(\d):/, "T0$1:"),
  };
});

export const luminaProposals = [
  {
    id: "PR-NA-01", title: "Hero Copy Diff · Local Ownership", module: "positioning",
    cost: 0.04, risk: "low_risk", confidence: 94, agentId: "strategist",
    evidenceIds: ["SIG-NA-01", "SIG-NA-02", "SIG-NA-05"], action: "local-ownership-copy",
    rationale: "Test ownership and recurring-fee messaging against a cloud-led baseline. Evidence links capture subscription friction and switching intent.",
    proposed: "Own Your Footage. Zero Monthly Ransom. 100% Local Encrypted AI Detection.",
    impacts: ["Landing-page hero", "Product Detail Page", "Paid acquisition creative"],
    economics: { cost: 1000, floorBenefit: 1550, minROI: 25 },
    validation: {
      name: "Hero A/B · Landing-page CVR and Add-to-Cart",
      metric: "Hypothesis: B lifts purchase CVR and add-to-cart rate. Track hero CTR and incremental contribution ROI.",
      steps: ["Verify the encryption, on-device detection and recurring-fee claims before using B externally.", "Randomize eligible North America traffic 50/50. Keep offer, audience and placement constant.", "Compare purchase, add-to-cart and hero click rates across arms. Compute incremental contribution less test costs."],
      script: "A — Smart Cloud Security for Modern Homes\nB — Own Your Footage. Zero Monthly Ransom. 100% Local Encrypted AI Detection.\nCTA — See how local recording works.",
    },
  },
  {
    id: "PR-NA-02", title: "Wyze/Ring Switcher Comparison Script", module: "channels",
    cost: 0.05, risk: "strategic", confidence: 89, agentId: "strategist",
    evidenceIds: ["SIG-NA-02", "SIG-NA-04"], action: "switcher-creator-brief",
    rationale: "Pair switching intent with latency friction to test a comparison-led creator asset.",
    proposed: "YouTube and Reddit creator comparison: 0-fee local SD recording plus sub-2s alert latency, using measured side-by-side footage and approved claims.",
    impacts: ["YouTube creator brief", "Reddit community outreach", "Comparison landing page"],
    economics: { cost: 1250, floorBenefit: 1850, minROI: 25 },
    validation: {
      name: "Creator A/B · Comparison Hook",
      metric: "Hypothesis: comparison hook improves qualified CTR and landing CVR. Measure contribution ROI after creator fees.",
      steps: ["Measure event-to-alert latency across representative networks. Use a sub-2s statement only when the test supports it.", "Hold creator, offer and duration constant. Compare feature-led versus switcher-led hooks using distinct UTM links.", "Track qualified clicks, purchases and returns. Review moderation, sponsorship disclosure and claim approval before posting."],
      script: "Subject: Would you test a local-first camera against your current setup?\n\nHi [Creator],\nWe are inviting North American smart-home creators to run a hands-on switcher comparison. We can provide a unit and a repeatable test plan for SD recording fees, person-alert latency and network conditions. We welcome independent results and require clear sponsorship or loaner disclosure. Would you be open to a short test?\n\nVideo hook: “What happens to alerts and event history when you cancel the monthly plan?” Show a timed alert test, then a local playback test. Use the sub-2s line only if independently reproduced.",
    },
  },
  {
    id: "PR-NA-03", title: "Security & Privacy FAQ Gate", module: "privacyFaq",
    cost: 0.04, risk: "strategic", confidence: 74, agentId: "strategist",
    evidenceIds: ["SIG-NA-03", "SIG-NA-06"], action: "privacy-faq-legal-review",
    rationale: "Route privacy and interoperability reports to human review. Legal and Security must sign off on the architecture, wording and evidence before this claim can enter the formal strategy.",
    proposed: "Local-First Firewall & Zero-Warrant Cloud Bypass Architecture",
    impacts: ["Pre-sales privacy FAQ", "Security review queue", "Architecture documentation"],
    economics: { cost: 800, floorBenefit: 1200, minROI: 25 },
    validation: {
      name: "FAQ A/B · Trust and Checkout",
      metric: "After legal and technical sign-off, test FAQ CTR and purchase CVR. Estimate ROI net of review and support costs.",
      steps: ["Route to Legal and Security. Verify data routes, firmware, retention, cloud dependencies and supported integrations.", "Remove or replace wording that implies immunity from lawful requests. Obtain documented sign-off before publishing.", "A/B test approved FAQ text with identical placement. Review FAQ click-through, checkout conversion and privacy support contacts."],
      script: "Legal review brief: verify what is processed locally, what can leave the local network, which features need cloud services, and how lawful requests are handled. Publish only approved descriptions and documented compatibility claims.",
    },
  },
];

export const luminaPrivacyGate = {
  id: "lm-faq-legal", label: "需 Legal / Security 人工签核 · 隐私架构承诺", scope: "Legal / Security",
  blockedActions: ["privacy-faq-legal-review"], blockedPhrases: ["Zero-Warrant Cloud Bypass"],
};

export function migrateLumina(saved, current) {
  if (saved.signalRevision === 1) return saved;
  const reviewed = new Set(saved.log.map((entry) => entry.prId));
  const linked = new Set(saved.log.flatMap((entry) => entry.evidenceIds ?? []));
  const currentIds = new Set(current.evidence.map(({ id }) => id));
  return {
    ...saved, signalRevision: 1,
    blocks: current.blocks.map((block) => {
      const previous = saved.blocks.find((item) => item.id === block.id);
      return saved.log.some((entry) => entry.module === block.id && entry.next) ? previous ?? block : block;
    }),
    evidence: [...current.evidence, ...saved.evidence.filter((item) => !currentIds.has(item.id) && (linked.has(item.id) || item.id.startsWith("lm-new")))],
    pending: [...current.pending.filter((item) => !reviewed.has(item.id)), ...saved.pending.filter((item) => item.id === "PR-004")],
    guardrails: [...saved.guardrails.filter((item) => item.id !== luminaPrivacyGate.id), luminaPrivacyGate],
  };
}
