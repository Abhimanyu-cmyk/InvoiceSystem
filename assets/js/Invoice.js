(function () {
  class Invoice {
    constructor(data) {
      Object.assign(this, data || {});
      this.lineItems = (this.lineItems || []).map(function (item) {
        return window.BillingLineItem.from(item);
      });
    }

    calculateTotal(payments, demoDate) {
      return window.BillingUtils.calculateInvoice(this, payments, demoDate);
    }

    openPortalPath() {
      return "#/portal/" + this.id;
    }

    toJSON() {
      return {
        id: this.id,
        number: this.number,
        title: this.title,
        customerId: this.customerId,
        currency: this.currency,
        issuedOn: this.issuedOn,
        dueOn: this.dueOn,
        status: this.status,
        taxRatePct: this.taxRatePct,
        discountCents: this.discountCents,
        scheduleType: this.scheduleType,
        subscriptionId: this.subscriptionId,
        accentColor: this.accentColor,
        logoText: this.logoText,
        notes: this.notes,
        lineItems: this.lineItems.map(function (item) {
          return item.toJSON ? item.toJSON() : item;
        })
      };
    }

    static from(data) {
      return data instanceof Invoice ? data : new Invoice(data);
    }
  }

  window.BillingInvoice = Invoice;
})();
