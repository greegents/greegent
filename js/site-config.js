/* ============================================================
   WEBSITE — EDIT THIS FILE
   ------------------------------------------------------------
   Change name, phone, email, and page text here.
   Save the file, then refresh the browser.
   You do not need to edit HTML or CSS for normal updates.
   ============================================================ */

window.SITE_CONFIG = {
  /* --- Company --- */
  companyName: "Greegent",
  legalName: "Greegent",
  tagline: "Supplying the next generation of workplace technology.",
  intro:
    "We specify, supply, and support the systems that make modern offices and labs ready for what comes next — intelligent desks, connected stations, and ESD-safe components for advanced electronics work.",

  /* --- Contact (easy to change) --- */
  contact: {
    personName: "Ravi B",
    role: "Solutions Lead",
    phone: "+91 996 414 4782",
    email: "sales@greegent.com",
    hours: "Mon–Sat, 8:00–18:00",
    address: "#4,6th Main, Pipe Line Rd, Srinivasa Nagara, Sunkadakatte",
    city: "Bengaluru, KAR 560091",
  },

  /* --- Hero stats --- */
  stats: [
    { value: "Next-gen", label: "Workplace & lab technology" },
    { value: "Full stack", label: "Specify · supply · install" },
    { value: "24/7", label: "Technical support coverage" },
  ],

  /* --- Tabs (one HTML page each) --- */
  nav: [
    { id: "home", href: "index.html", label: "Home" },
    { id: "services", href: "services.html", label: "Services" },
    { id: "esd", href: "esd.html", label: "ESD Supply" },
    { id: "support", href: "support.html", label: "Support" },
    { id: "process", href: "how-we-work.html", label: "How we work" },
    { id: "contact", href: "contact.html", label: "Contact" },
  ],

  homeLinks: [
    { href: "services.html", title: "Services", text: "Engineering for next-gen offices, labs, and desk systems." },
    { href: "esd.html", title: "ESD Supply", text: "Protected components for electronics and advanced assembly." },
    { href: "support.html", title: "Support", text: "Install, upgrades, break-fix, and training." },
    { href: "how-we-work.html", title: "How we work", text: "Brief, specify, fit, then stay on call." },
  ],

  /* --- Services --- */
  services: [
    {
      title: "Workplace engineering",
      text: "Power, data, lighting, and layout planned for connected, high-density, next-generation floors.",
    },
    {
      title: "Desk & station setup",
      text: "Sit-stand systems, multi-display arms, clean cable paths, and stations built for future tools.",
    },
    {
      title: "ESD-safe supply",
      text: "Mats, straps, flooring, ionizers, testers, and kits for electronics that cannot take a static hit.",
    },
    {
      title: "Lifecycle support",
      text: "Install, move, upgrade, repair, and train. On-site or remote — we stay after go-live.",
    },
  ],

  /* --- ESD product groups --- */
  esdProducts: [
    { title: "Workstation kits", text: "Mats, common-point grounds, heel straps, and bench tools in matched sets." },
    { title: "Personnel grounding", text: "Wrist straps, cords, testers, and dual-conductor systems for daily use." },
    { title: "Flooring & chairs", text: "ESD tile, vinyl, and seating specified to your floor plan and traffic." },
    { title: "Measurement", text: "Surface testers, field meters, and calibration-friendly instruments." },
    { title: "Packaging", text: "Shielding bags, totes, foam, and labels for safe part movement." },
    { title: "Spares & replenish", text: "Repeat orders for consumables with the same spec every time." },
  ],

  /* --- Support types --- */
  support: [
    { title: "Install & commission", text: "Deliver, assemble, ground, and hand over with a clear checklist." },
    { title: "Moves & upgrades", text: "Relocate desks, add benches, or refresh a floor for newer technology." },
    { title: "Break-fix", text: "Replace failed ESD parts, desk hardware, and accessories on short notice." },
    { title: "Advice & training", text: "ESD awareness, workstation standards, and practical how-to for your team." },
  ],

  /* --- Process steps --- */
  process: [
    { step: "01", title: "Brief", text: "Tell us the rooms, headcount, and any ESD or technology constraints." },
    { step: "02", title: "Specify", text: "We propose layout, next-fit products, and a clear supply list." },
    { step: "03", title: "Fit", text: "Install desks, grounding, and cabling. Test what must be tested." },
    { step: "04", title: "Support", text: "Stay on call for spares, upgrades, and the next expansion." },
  ],

  footerNote: "Next-generation workplace technology · Desk systems · ESD supply · Ongoing support",
};
