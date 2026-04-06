(function () {
  class LineItem {
    constructor(data) {
      Object.assign(this, data || {});
      this.description = this.description || "Line item";
      this.qty = Number(this.qty || 0);
      this.unitPriceCents = Number(this.unitPriceCents || 0);
    }

    subtotalCents() {
      return Math.round(this.qty * this.unitPriceCents);
    }

    toJSON() {
      return {
        description: this.description,
        qty: this.qty,
        unitPriceCents: this.unitPriceCents
      };
    }

    static from(data) {
      return data instanceof LineItem ? data : new LineItem(data);
    }
  }

  window.BillingLineItem = LineItem;
})();
