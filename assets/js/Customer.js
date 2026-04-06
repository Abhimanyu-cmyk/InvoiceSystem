(function () {
  class Customer {
    constructor(actions) {
      this.actions = actions || {};
    }

    viewInvoice(invoiceId) {
      return this.actions.viewInvoice ? this.actions.viewInvoice(invoiceId) : null;
    }

    makePayment(invoiceId, mode) {
      return this.actions.makePayment ? this.actions.makePayment(invoiceId, mode) : null;
    }
  }

  window.BillingCustomer = Customer;
})();
