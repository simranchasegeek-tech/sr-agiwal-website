const serviceDetails = {
  "gst-consultation": {
    title: "GST Consultation",
    label: "Indirect Tax",
    intro: "GST support for returns, reconciliations, audits, refunds, notices, and practical transaction advisory.",
    points: [
      "Monthly and annual GST return review with input-output reconciliation.",
      "Refund application support, documentation, and follow-up preparation.",
      "GST audit readiness, notice response support, and assessment assistance.",
      "Transaction-level advisory for classification, place of supply, credit eligibility, and amendments."
    ],
    process: ["Data review", "Gap report", "Compliance action plan", "Ongoing support"]
  },
  "income-tax-consultation": {
    title: "Income Tax Consultation",
    label: "Direct Tax",
    intro: "Income tax planning, annual returns, audits, TDS compliances, scrutiny support, and appeal preparation.",
    points: [
      "ITR filing and personalized tax planning for individuals, firms, companies, trusts, and societies.",
      "Tax audit and TDS compliance support with documentation review.",
      "Scrutiny, rectification, lower deduction certificate, and appeal assistance.",
      "Tax impact planning for restructuring, acquisition, and business decisions."
    ],
    process: ["Profile review", "Tax position", "Filing/compliance", "Follow-up support"]
  },
  audits: {
    title: "Audits",
    label: "Assurance",
    intro: "Structured audits designed to evaluate systems, controls, reporting accuracy, and business process risks.",
    points: [
      "Income Tax Audits, GST Audits, Internal Audits, MIS Audits, and System Audits.",
      "Review of accounting policies, internal controls, and compliance evidence.",
      "Detection of leakage areas and recommendations for corrective action.",
      "Practical reporting that helps management improve processes."
    ],
    process: ["Scope", "Testing", "Findings", "Action tracker"]
  },
  "management-consultancy": {
    title: "Management Consultancy",
    label: "Strategy",
    intro: "Operational, financial, and decision support advisory for better profitability and sustainable growth.",
    points: [
      "Operational efficiency review and resource optimization.",
      "Management reporting structure and KPI design.",
      "Profitability improvement and working capital guidance.",
      "Objective advisory for growth, control, and governance decisions."
    ],
    process: ["Business diagnosis", "Opportunity map", "Roadmap", "Review rhythm"]
  },
  "accounting-services": {
    title: "Accounting Services",
    label: "Finance Ops",
    intro: "Accounting setup, software implementation, reconciliations, and real-time finance data discipline.",
    points: [
      "Accounting system design from Tally to ERP/SAP-style workflows.",
      "Complex accounting data handling and reconciliation support.",
      "Tax record matching for GST, TDS, and income tax reporting.",
      "Better MIS preparation for vendor, customer, and management coordination."
    ],
    process: ["System audit", "Chart design", "Data cleanup", "Reporting"]
  },
  "corporate-law-consultancy": {
    title: "Corporate Law Consultancy",
    label: "Corporate",
    intro: "Company and LLP formation, secretarial compliance, governance, and corporate restructuring support.",
    points: [
      "Company/LLP incorporation and statutory compliance assistance.",
      "Board, ROC, and secretarial documentation support.",
      "Corporate governance and regulatory compliance guidance.",
      "Corporate reorganization and reconstruction advisory."
    ],
    process: ["Entity review", "Compliance calendar", "Filings", "Governance support"]
  },
  "business-automation": {
    title: "Business Automation",
    label: "Automation",
    intro: "Custom automation ideas that reduce repetitive work, improve visibility, and trigger timely action.",
    points: [
      "Workflow automation for accounting, compliance, and operations.",
      "Alert systems for deadlines, exceptions, and management follow-ups.",
      "Smart dashboards for routine business monitoring.",
      "Practical automation aligned with business size and budget."
    ],
    process: ["Workflow map", "Automation design", "Pilot", "Rollout"]
  },
  "data-analytics": {
    title: "Data & Analytics",
    label: "Insights",
    intro: "Data analysis, dashboards, and training to help teams make faster and clearer business decisions.",
    points: [
      "Custom dashboards for finance, tax, and operational reporting.",
      "Data cleanup, structuring, and validation support.",
      "Trend analysis, exception reporting, and decision-ready summaries.",
      "Team training for routine analysis and smarter data usage."
    ],
    process: ["Data collection", "Model/dashboard", "Insight review", "Training"]
  },
  "investment-financial-planning": {
    title: "Investment & Financial Planning",
    label: "Planning",
    intro: "Financial planning support for investment, financing, risk profile, leverage, and long-term goals.",
    points: [
      "Personalized investment and finance option review.",
      "Risk profile and leverage analysis.",
      "Goal-based planning for individuals and businesses.",
      "Decision support for future plans and financial stability."
    ],
    process: ["Goal discovery", "Risk review", "Options", "Plan monitoring"]
  }
};

const blogDetails = {
  "how-to-use-ais-tis-statements-in-itr-filing": {
    title: "How to use AIS & TIS Statements in ITR filing",
    tag: "Income Tax",
    summary: "A practical guide to using AIS and TIS before filing your income tax return.",
    body: [
      "AIS and TIS help taxpayers compare reported financial activity with the figures they plan to disclose in the income tax return.",
      "Before filing, review salary, interest, dividend, securities transactions, TDS, TCS, and other reported entries. If something looks incorrect, keep supporting documents ready and submit feedback where required.",
      "A clean reconciliation reduces mismatch notices and gives the return a stronger compliance trail."
    ]
  },
  "issue-of-securities-in-dematerialised-form-by-private-companies": {
    title: "Issue of securities in dematerialised form by private companies",
    tag: "Corporate Law",
    summary: "Key compliance considerations around demat securities for private companies.",
    body: [
      "Private companies should evaluate whether dematerialisation requirements apply to their securities and shareholder records.",
      "The practical work includes reviewing share capital, updating registers, coordinating with depositories, and keeping board/shareholder documentation aligned.",
      "Early planning helps avoid rushed filings and broken compliance records."
    ]
  },
  "important-decisions-taken-in-50th-gst-council-meeting": {
    title: "Important decisions taken in 50th GST Council meeting",
    tag: "GST",
    summary: "A concise view of important GST Council decisions and business impact areas.",
    body: [
      "GST Council decisions can affect rate treatment, return discipline, e-way documentation, and sector-specific compliance.",
      "Businesses should review whether any decision changes their billing, credit, reconciliation, or reporting process.",
      "The safest approach is to map changes to actual transactions instead of treating updates as generic announcements."
    ]
  },
  "year-end-checklist-in-gst-perspective": {
    title: "Year-end checklist in GST perspective",
    tag: "GST",
    summary: "A checklist-led way to close GST records before year-end finalization.",
    body: [
      "Year-end GST review should cover turnover, tax liability, input tax credit, reverse charge, e-invoice, e-way bill, and books-vs-portal reconciliation.",
      "Vendor follow-up for missing invoices and credit mismatches should begin early.",
      "A documented checklist helps both accounting and audit teams close the year with fewer surprises."
    ]
  },
  "e-invoicing-in-gst": {
    title: "E-Invoicing in GST",
    tag: "GST",
    summary: "What businesses should operationally check when e-invoicing applies.",
    body: [
      "E-invoicing is not only a tax requirement; it affects billing workflow, ERP setup, cancellation discipline, and customer communication.",
      "Teams should verify applicability, invoice schema, IRN generation, QR code display, and reconciliation between invoice records and GSTR data.",
      "Automation and periodic exception reports make e-invoicing smoother."
    ]
  },
  "impact-of-covid-19-now-and-future": {
    title: "Impact of Covid-19: Now and Future",
    tag: "Business",
    summary: "Business continuity lessons around finance, compliance, and digital readiness.",
    body: [
      "The pandemic showed the importance of resilient finance operations, accessible records, remote approvals, and cash flow visibility.",
      "Businesses that invested in digital reporting and process automation were better placed to respond quickly.",
      "The long-term lesson is simple: compliance, reporting, and management information must be designed for continuity."
    ]
  }
};

const toolDetails = {
  "rates-of-income-tax": {
    title: "Rates of Income Tax",
    intro: "A guided internal reference page for income tax rate review and planning discussions.",
    cards: ["Individual slab review", "Business tax impact", "Surcharge and cess check", "Old vs new regime planning"]
  },
  "rates-of-tds": {
    title: "Rates of TDS",
    intro: "A practical TDS reference workflow for vendor payments, contracts, rent, professional fees, and compliance checks.",
    cards: ["Section mapping", "Threshold review", "PAN status check", "Return reconciliation"]
  },
  "income-tax-depreciation": {
    title: "Rates of Depreciation Under Income Tax Act",
    intro: "Review asset blocks, additions, deletions, and depreciation treatment for tax reporting.",
    cards: ["Asset block mapping", "Opening WDV", "Additions/deletions", "Tax audit support"]
  },
  "company-act-depreciation": {
    title: "Rates of Depreciation Under Company Act",
    intro: "Plan depreciation treatment using useful life, asset classification, and reporting requirements.",
    cards: ["Useful life review", "Asset register", "Schedule alignment", "Financial statement support"]
  },
  "cost-inflation-index": {
    title: "Cost Inflation Index",
    intro: "Use CII planning for capital gains calculations and documentation review.",
    cards: ["Asset acquisition year", "Transfer year", "Indexed cost", "Capital gains support"]
  },
  "ifsc-codes": {
    title: "IFSC Codes",
    intro: "Keep bank and branch details clean for payments, refunds, vendor masters, and reconciliation.",
    cards: ["Bank detail review", "Vendor master cleanup", "Refund setup", "Payment controls"]
  },
  "loan-emi-calculator": {
    title: "Loan EMI Calculator",
    intro: "Plan borrowing scenarios with EMI, cash flow, tenure, and interest-rate sensitivity.",
    cards: ["Loan amount", "Interest rate", "Tenure", "Cash flow planning"]
  }
};

function getSlug() {
  return new URLSearchParams(window.location.search).get("slug") || "";
}

function renderServiceDetail() {
  const root = document.querySelector("[data-service-detail]");
  if (!root) return;
  const item = serviceDetails[getSlug()] || serviceDetails["gst-consultation"];
  document.title = `${item.title} | S R Agiwal & Associates`;
  root.innerHTML = `
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div>
          <span class="eyebrow">${item.label}</span>
          <h1>${item.title}</h1>
          <p>${item.intro}</p>
          <div class="actions"><a class="btn primary" href="contact.html">Discuss This Service</a><a class="btn secondary" href="service.html">View All Services</a></div>
        </div>
        <div class="insight-panel">
          <span>Engagement flow</span>
          ${item.process.map((step, index) => `<div class="step-row"><strong>${String(index + 1).padStart(2, "0")}</strong><p>${step}</p></div>`).join("")}
        </div>
      </div>
    </section>
    <section>
      <div class="container detail-layout">
        <article class="detail-copy card">
          <span class="kicker">What We Cover</span>
          <h2>Built around practical execution, not just advice</h2>
          <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
        <aside class="card detail-aside lead-aside">
          <span>For Expert Consultancy</span>
          <h3>Get in Touch</h3>
          <form action="https://agiwal.in/sendmail.php" method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <input type="email" name="email" placeholder="Email Address" required>
            <input type="hidden" name="service" value="${item.title}">
            <button class="btn primary" type="submit" name="submit">Get Started</button>
          </form>
        </aside>
      </div>
    </section>
  `;
}

function renderKnowledgeBank() {
  const root = document.querySelector("[data-knowledge-list]");
  if (!root) return;
  root.innerHTML = Object.entries(blogDetails).map(([slug, item]) => `
    <a class="card article-card" href="blog-detail.html?slug=${slug}">
      <span>${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
    </a>
  `).join("");
}

function renderBlogDetail() {
  const root = document.querySelector("[data-blog-detail]");
  if (!root) return;
  const item = blogDetails[getSlug()] || blogDetails["how-to-use-ais-tis-statements-in-itr-filing"];
  document.title = `${item.title} | S R Agiwal & Associates`;
  root.innerHTML = `
    <section class="detail-hero article-hero">
      <div class="container">
        <span class="eyebrow">${item.tag}</span>
        <h1>${item.title}</h1>
        <p>${item.summary}</p>
        <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="knowledge-bank.html">Knowledge Bank</a><span>/</span><span>${item.tag}</span></div>
      </div>
    </section>
    <section>
      <div class="container detail-layout">
        <article class="card article-body">
          ${item.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <div class="actions"><a class="btn primary" href="contact.html">Ask an Expert</a><a class="btn secondary dark" href="knowledge-bank.html">More Articles</a></div>
        </article>
        <aside class="card detail-aside lead-aside">
          <span>Get in Touch</span>
          <h3>Need help with this?</h3>
          <form action="https://agiwal.in/sendmail.php" method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <input type="email" name="email" placeholder="Email Address" required>
            <input type="hidden" name="subject" value="${item.title}">
            <button class="btn primary" type="submit" name="submit">Talk to Expert</button>
          </form>
        </aside>
      </div>
    </section>
  `;
}

function renderToolDetail() {
  const root = document.querySelector("[data-tool-detail]");
  if (!root) return;
  const item = toolDetails[getSlug()] || toolDetails["rates-of-income-tax"];
  document.title = `${item.title} | S R Agiwal & Associates`;
  root.innerHTML = `
    <section class="detail-hero tool-hero">
      <div class="container detail-hero-grid">
        <div>
          <span class="eyebrow">Tools</span>
          <h1>${item.title}</h1>
          <p>${item.intro}</p>
          <div class="actions"><a class="btn primary" href="contact.html">Get Assistance</a><a class="btn secondary" href="tools.html">All Tools</a></div>
        </div>
        <div class="tool-console card">
          <span>Planning checklist</span>
          ${item.cards.map((card) => `<p>${card}</p>`).join("")}
        </div>
      </div>
    </section>
    <section>
      <div class="container detail-layout">
        <div class="grid two">
          ${item.cards.map((card) => `<article class="card tool-mini"><h3>${card}</h3><p>Use this checkpoint before finalizing the working, filing, or advisory note.</p></article>`).join("")}
        </div>
        <aside class="card detail-aside lead-aside">
          <span>Need Assistance?</span>
          <h3>Ask for a working review</h3>
          <form action="https://agiwal.in/sendmail.php" method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <input type="hidden" name="subject" value="${item.title}">
            <button class="btn primary" type="submit" name="submit">Get Assistance</button>
          </form>
        </aside>
      </div>
    </section>
  `;
}

renderServiceDetail();
renderKnowledgeBank();
renderBlogDetail();
renderToolDetail();
