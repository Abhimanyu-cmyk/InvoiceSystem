(function () {
  class PaymentRecord {
    constructor(data) {
      Object.assign(this, data || {});
      this.status = this.status || "captured";
      this.amountCents = Number(this.amountCents || 0);
    }

    capture() {
      this.status = "captured";
      return this;
    }

    toJSON() {
      return {
        id: this.id,
        invoiceId: this.invoiceId,
        gateway: this.gateway,
        amountCents: this.amountCents,
        currency: this.currency,
        paidOn: this.paidOn,
        status: this.status,
        reference: this.reference
      };
    }

    static from(data) {
      return data instanceof PaymentRecord ? data : new PaymentRecord(data);
    }
  }

  window.BillingPaymentRecord = PaymentRecord;
})();
