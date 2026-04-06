(function () {
  const demoDate = "2026-04-04";

  const seed = {
    currentRole: null,
    selectedInvoiceId: "inv-2051",
    filters: {
      status: "all",
      query: ""
    },
    uiFlags: {
      mobileMenuOpen: false
    },
    notifications: [],
    demoState: {
      buildLabel: "Shivalik Ledger Workspace",
      lastUpdated: "2026-04-04"
    },
    invoiceDraft: null,
    customers: [
      {
        id: "cus-bhasra",
        name: "Bhasra Hospitality Shimla",
        contactName: "Viraj Bhasra",
        email: "accounts@bhasrahospitality.in",
        city: "Shimla",
        region: "Himachal Pradesh",
        taxLabel: "CGST + SGST",
        defaultCurrency: "INR"
      },
      {
        id: "cus-dhiman",
        name: "Dhiman Learning Systems",
        contactName: "Nishant Dhiman",
        email: "finance@dhimanlearning.in",
        city: "New Delhi",
        region: "Delhi",
        taxLabel: "IGST",
        defaultCurrency: "INR"
      },
      {
        id: "cus-manhas",
        name: "Manhas Retail Networks",
        contactName: "Simran Manhas",
        email: "billing@manhasretail.in",
        city: "Ludhiana",
        region: "Punjab",
        taxLabel: "IGST",
        defaultCurrency: "INR"
      },
      {
        id: "cus-negi",
        name: "Negi Orchard Collective",
        contactName: "Archita Negi",
        email: "accounts@negiorchards.in",
        city: "Solan",
        region: "Himachal Pradesh",
        taxLabel: "CGST + SGST",
        defaultCurrency: "INR"
      }
    ],
    invoices: [
      {
        id: "inv-2041",
        number: "BIM-2041",
        title: "Cold-storage automation support",
        customerId: "cus-negi",
        currency: "INR",
        issuedOn: "2026-03-16",
        dueOn: "2026-03-23",
        status: "paid",
        taxRatePct: 18,
        discountCents: 20000,
        scheduleType: "one_time",
        accentColor: "#0b6a6f",
        logoText: "Negi Orchard Collective",
        notes: "Season-start support bill for orchard operations in Solan.",
        lineItems: [
          { description: "Sorting line automation retainer", qty: 1, unitPriceCents: 980000 },
          { description: "Inventory dashboard support", qty: 1, unitPriceCents: 220000 }
        ]
      },
      {
        id: "inv-2047",
        number: "BIM-2047",
        title: "Smart classroom rollout - March cycle",
        customerId: "cus-dhiman",
        currency: "INR",
        issuedOn: "2026-03-20",
        dueOn: "2026-03-28",
        status: "sent",
        taxRatePct: 18,
        discountCents: 15000,
        scheduleType: "recurring",
        accentColor: "#2f5b86",
        logoText: "Dhiman Learning Systems",
        notes: "Support and rollout charges for the Delhi school deployment.",
        lineItems: [
          { description: "Smart classroom software rollout", qty: 1, unitPriceCents: 450000 },
          { description: "Teacher onboarding and support", qty: 1, unitPriceCents: 185000 }
        ]
      },
      {
        id: "inv-2051",
        number: "BIM-2051",
        title: "Dispatch dashboard deployment",
        customerId: "cus-manhas",
        currency: "INR",
        issuedOn: "2026-04-01",
        dueOn: "2026-04-08",
        status: "sent",
        taxRatePct: 18,
        discountCents: 0,
        scheduleType: "one_time",
        accentColor: "#d18c4b",
        logoText: "Manhas Retail Networks",
        notes: "Partial payments are enabled for this Ludhiana logistics rollout.",
        lineItems: [
          { description: "Dispatch dashboard setup", qty: 1, unitPriceCents: 520000 },
          { description: "Warehouse operations training", qty: 1, unitPriceCents: 175000 }
        ]
      },
      {
        id: "inv-2054",
        number: "BIM-2054",
        title: "Summer booking engine refresh",
        customerId: "cus-bhasra",
        currency: "INR",
        issuedOn: "2026-04-04",
        dueOn: "2026-04-11",
        status: "draft",
        taxRatePct: 18,
        discountCents: 10000,
        scheduleType: "one_time",
        accentColor: "#0a6a6f",
        logoText: "Bhasra Hospitality Shimla",
        notes: "Draft prepared for internal review before final dispatch.",
        lineItems: [
          { description: "Booking engine redesign", qty: 1, unitPriceCents: 160000 },
          { description: "Seasonal campaign asset refresh", qty: 1, unitPriceCents: 95000 }
        ]
      },
      {
        id: "inv-2057",
        number: "BIM-2057",
        title: "LMS support retainer - April cycle",
        customerId: "cus-dhiman",
        currency: "INR",
        issuedOn: "2026-04-04",
        dueOn: "2026-04-10",
        status: "scheduled",
        taxRatePct: 18,
        discountCents: 0,
        scheduleType: "recurring",
        subscriptionId: "sub-301",
        accentColor: "#2f5b86",
        logoText: "Dhiman Learning Systems",
        notes: "Scheduled invoice generated from the monthly support cadence.",
        lineItems: [
          { description: "LMS support retainer", qty: 1, unitPriceCents: 305000 },
          { description: "Analytics and reporting pack", qty: 1, unitPriceCents: 85000 }
        ]
      }
    ],
    subscriptions: [
      {
        id: "sub-301",
        customerId: "cus-dhiman",
        name: "Dhiman LMS Support Plan",
        amountCents: 390000,
        currency: "INR",
        cycle: "Monthly",
        nextRun: "2026-04-10",
        lastRun: "2026-03-10",
        retryPolicy: "3 automatic retries in 7 days",
        status: "active"
      },
      {
        id: "sub-302",
        customerId: "cus-manhas",
        name: "Manhas Dispatch Optimisation Sprint",
        amountCents: 245000,
        currency: "INR",
        cycle: "Weekly",
        nextRun: "2026-04-12",
        lastRun: "2026-04-05",
        retryPolicy: "1 reminder before manual follow-up",
        status: "active"
      },
      {
        id: "sub-303",
        customerId: "cus-bhasra",
        name: "Bhasra Seasonal Promotion Pack",
        amountCents: 510000,
        currency: "INR",
        cycle: "Quarterly",
        nextRun: "2026-06-01",
        lastRun: "2026-03-01",
        retryPolicy: "Manual approval required before dispatch",
        status: "paused"
      }
    ],
    payments: [
      {
        id: "pay-9001",
        invoiceId: "inv-2041",
        gateway: "Razorpay",
        amountCents: 1392400,
        currency: "INR",
        paidOn: "2026-03-21",
        status: "captured",
        reference: "rzp_hp_2041"
      },
      {
        id: "pay-9002",
        invoiceId: "inv-2051",
        gateway: "Cashfree",
        amountCents: 300000,
        currency: "INR",
        paidOn: "2026-04-03",
        status: "captured",
        reference: "cf_2051_part"
      }
    ],
    reminders: [
      {
        id: "rem-001",
        invoiceId: "inv-2047",
        stage: "T+3",
        sentOn: "2026-03-31",
        channel: "Email",
        status: "sent"
      },
      {
        id: "rem-002",
        invoiceId: "inv-2047",
        stage: "T+7",
        sentOn: "2026-04-04",
        channel: "Email",
        status: "sent"
      },
      {
        id: "rem-003",
        invoiceId: "inv-2051",
        stage: "Due soon",
        sentOn: "2026-04-04",
        channel: "Email",
        status: "queued"
      }
    ],
    auditEntries: [
      {
        id: "audit-101",
        entityId: "inv-2041",
        actor: "Merchant",
        action: "Invoice approved and issued",
        occurredOn: "2026-03-16"
      },
      {
        id: "audit-102",
        entityId: "inv-2041",
        actor: "Customer",
        action: "Payment captured through Razorpay",
        occurredOn: "2026-03-21"
      },
      {
        id: "audit-103",
        entityId: "inv-2047",
        actor: "System",
        action: "Overdue reminder triggered at T+3",
        occurredOn: "2026-03-31"
      },
      {
        id: "audit-104",
        entityId: "inv-2051",
        actor: "Customer",
        action: "Partial payment recorded",
        occurredOn: "2026-04-03"
      },
      {
        id: "audit-105",
        entityId: "inv-2054",
        actor: "Merchant",
        action: "Draft prepared for approval",
        occurredOn: "2026-04-04"
      }
    ],
    reportSeries: [
      { month: "Jan", revenueCents: 860000, outstandingCents: 220000 },
      { month: "Feb", revenueCents: 1090000, outstandingCents: 210000 },
      { month: "Mar", revenueCents: 1480000, outstandingCents: 355000 },
      { month: "Apr", revenueCents: 1040000, outstandingCents: 812000 }
    ]
  };

  window.BillingData = {
    demoDate: demoDate,
    storageKey: "billing-prototype-state-v2-india",
    roles: {
      merchant: "Merchant",
      accountant: "Accountant",
      customer: "Customer"
    },
    seed: seed
  };
})();
