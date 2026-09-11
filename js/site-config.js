/* ============================================================
   WEBSITE CONTENT — EDIT THIS FILE
   ------------------------------------------------------------
   Change name, phone, email, and page text here.
   Save the file, then refresh the browser.
   You do not need to edit HTML or CSS for normal updates.
   ============================================================ */

window.SITE_CONFIG = {
  /* --- Company --- */
  companyName: "Greegent",
  legalName: "Greegent Engineering Solutions",
  promise: "Workplace engineering, delivered",
  tagline: "Engineering solutions that make the next generation of workplaces run.",
  intro:
    "We plan, supply, install, and support offices, labs, and production benches — desk systems, connected infrastructure, and ESD-safe components — for manufacturers, service providers, and research teams.",

  /* --- Contact (easy to change) --- */
  contact: {
    personName: "Ravi B",
    role: "Client Solutions Lead",
    phone: "+19 996 414 4782",
    email: "greegents@gmail.com",
    hours: "Mon–Sat, 8:00–18:00",
    address: "#4, 6th Main, Pipeline RD, Srinivasanagar, Sunkadakatte",
    city: "Bengaluru, KAR 560091",
  },

  /* --- Numbers band (shown under the hero) --- */
  stats: [
    { value: "12+", label: "Years delivering workplace projects" },
    { value: "800+", label: "Desks and benches commissioned" },
    { value: "48h", label: "Typical response for site support" },
    { value: "24/7", label: "Escalation cover for live floors" },
  ],

  /* --- Tabs (one HTML page each) --- */
  nav: [
    { id: "home", href: "index.html", label: "Home" },
    { id: "services", href: "services.html", label: "Services" },
    { id: "industries", href: "industries.html", label: "Industries" },
    { id: "esd", href: "esd.html", label: "ESD Supply" },
    { id: "support", href: "support.html", label: "Support" },
    { id: "process", href: "how-we-work.html", label: "How we work" },
    { id: "contact", href: "contact.html", label: "Contact" },
  ],

  /* --- Photos (swap the files inside the images folder) --- */
  images: {
    homeHero: { src: "images/hero-workspace.png", alt: "Sunlit office with plants and sit-stand desks" },
    gallery: [
      { src: "images/gallery-biophilic.png", alt: "Office corridor with living greenery" },
      { src: "images/desk-natural.png", alt: "Natural wood desk by a window" },
      { src: "images/esd-bench.png", alt: "Electronics bench with ESD mat in daylight" },
    ],
    services: { src: "images/services-planning.png", alt: "Planning a workplace layout in natural light" },
    industries: { src: "images/gallery-biophilic.png", alt: "Modern workplace interior" },
    esdMain: { src: "images/esd-bench.png", alt: "ESD workstation with tools" },
    esdDetail: { src: "images/esd-hands.png", alt: "Fitting an ESD wrist strap at the bench" },
    support: { src: "images/support-install.png", alt: "Technicians installing a desk system" },
    process: { src: "images/process-layout.png", alt: "Open floor being laid out for new desks" },
    contact: { src: "images/contact-nook.png", alt: "Quiet meeting nook with natural light" },
  },

  /* --- Home: cards that open each tab --- */
  homeLinks: [
    { href: "services.html", title: "Services", text: "Workplace engineering, desk systems, and supply under one plan.", image: "images/desk-natural.png", accent: "orange" },
    { href: "industries.html", title: "Industries", text: "Electronics, medical devices, R&D labs, and shared services.", image: "images/gallery-biophilic.png", accent: "blue" },
    { href: "esd.html", title: "ESD Supply", text: "Compliant components for static-sensitive assembly and repair.", image: "images/esd-bench.png", accent: "green" },
    { href: "support.html", title: "Support", text: "Install, upgrades, break-fix, replenishment, and training.", image: "images/support-install.png", accent: "yellow" },
  ],

  /* --- Services --- */
  services: [
    {
      title: "Workplace engineering",
      text: "Layout, power, data, lighting, and circulation planned for connected, high-density floors.",
      image: "images/services-planning.png",
      accent: "orange",
      points: ["Floor plans and load checks", "Power and data coordination", "Phasing that avoids downtime"],
    },
    {
      title: "Desk & station setup",
      text: "Sit-stand systems, monitor arms, cable routes, and benches built for the work they carry.",
      image: "images/desk-natural.png",
      accent: "blue",
      points: ["Ergonomic standards applied", "Consistent build quality", "Ready-to-work handover"],
    },
    {
      title: "ESD-safe supply",
      text: "Mats, grounding, flooring, ionizers, and test gear specified as a compliant system.",
      image: "images/esd-bench.png",
      accent: "green",
      points: ["Specified to your process", "Audit-friendly documentation", "Repeatable replenishment"],
    },
    {
      title: "Lifecycle support",
      text: "Install, move, upgrade, repair, and train — the same team through every change.",
      image: "images/support-install.png",
      accent: "yellow",
      points: ["Single point of contact", "Planned and reactive cover", "Training for your team"],
    },
  ],

  /* --- Industries served --- */
  industries: [
    { title: "Electronics manufacturing", text: "SMT lines, rework benches, and test areas that must stay static-safe.", accent: "orange" },
    { title: "Medical devices", text: "Controlled assembly and inspection stations with traceable setups.", accent: "blue" },
    { title: "Research & laboratories", text: "Flexible benches for teams whose equipment changes every quarter.", accent: "green" },
    { title: "Aerospace & automotive", text: "Heavy-duty stations, tooling storage, and clean cable management.", accent: "yellow" },
    { title: "IT & shared services", text: "High-density desking, meeting spaces, and support-desk fit-outs.", accent: "red" },
    { title: "Education & training", text: "Teaching labs and workshops that survive daily student use.", accent: "blue" },
  ],

  /* --- What clients get (outcomes) --- */
  outcomes: [
    { value: "One", label: "Accountable partner from plan to support", accent: "orange" },
    { value: "Zero", label: "Surprise items at handover — priced up front", accent: "green" },
    { value: "Fast", label: "Spares and replenishment on agreed terms", accent: "blue" },
  ],

  /* --- Why clients choose us --- */
  differentiators: [
    { title: "Engineering first", text: "We check power, load, and workflow before recommending a single product." },
    { title: "Compliance you can show", text: "ESD specifications and test records that stand up in an audit." },
    { title: "Clear commercials", text: "Itemised supply lists, no hidden extras, and honest lead times." },
    { title: "We stay after go-live", text: "The team that installed your floor is the team that supports it." },
  ],

  /* --- Client quote --- */
  quote: {
    text: "They planned the floor, supplied every ESD item, and fixed two benches the week we went live. One call, one team.",
    author: "Operations Manager",
    org: "Electronics manufacturer",
  },

  /* --- ESD product groups --- */
  esdProducts: [
    { title: "Workstation kits", text: "Mats, common-point grounds, heel straps, and bench tools in matched sets.", accent: "orange" },
    { title: "Personnel grounding", text: "Wrist straps, cords, testers, and dual-conductor systems for daily use.", accent: "blue" },
    { title: "Flooring & seating", text: "ESD tile, vinyl, and chairs specified to your floor plan and traffic.", accent: "green" },
    { title: "Measurement", text: "Surface testers, field meters, and calibration-friendly instruments.", accent: "yellow" },
    { title: "Packaging", text: "Shielding bags, totes, foam, and labels for safe part movement.", accent: "red" },
    { title: "Spares & replenish", text: "Repeat orders for consumables with the same specification every time.", accent: "blue" },
  ],

  /* --- Support types --- */
  support: [
    { title: "Install & commission", text: "Deliver, assemble, ground, and hand over with a signed checklist.", accent: "orange" },
    { title: "Moves & upgrades", text: "Relocate desks, add benches, or refresh a floor around live operations.", accent: "blue" },
    { title: "Break-fix", text: "Replace failed ESD parts, desk hardware, and accessories at short notice.", accent: "green" },
    { title: "Advice & training", text: "ESD awareness, workstation standards, and practical how-to sessions.", accent: "yellow" },
  ],

  /* --- Process steps --- */
  process: [
    { step: "01", title: "Brief", text: "Tell us the rooms, headcount, and any ESD or technology constraints.", accent: "orange" },
    { step: "02", title: "Specify", text: "We issue layout options, an itemised supply list, and lead times.", accent: "blue" },
    { step: "03", title: "Deliver", text: "Install desks, grounding, and cabling. Test and document what matters.", accent: "green" },
    { step: "04", title: "Support", text: "Stay on call for spares, upgrades, and the next expansion.", accent: "yellow" },
  ],

  /* --- Closing call to action (every page) --- */
  cta: {
    heading: "Planning a new floor, a bench upgrade, or an ESD audit?",
    text: "Send the rooms and headcount. We reply with options, an itemised list, and realistic dates.",
    button: "Start a conversation",
  },

  footerNote: "Workplace engineering · Desk systems · ESD supply · Lifecycle support",
};
