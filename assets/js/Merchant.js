(function () {
  class Merchant {
    constructor(actions) {
      this.actions = actions || {};
    }

    createInvoice() {
      return this.actions.createInvoice ? this.actions.createInvoice() : null;
    }

    customizeTemplate(invoice) {
      return this.actions.customizeTemplate ? this.actions.customizeTemplate(invoice) : invoice;
    }

    triggerReminder(invoiceId, stage) {
      return this.actions.triggerReminder ? this.actions.triggerReminder(invoiceId, stage) : null;
    }
  }

  window.BillingMerchant = Merchant;
})();
