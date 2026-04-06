(function () {
  class ReminderEvent {
    constructor(data) {
      Object.assign(this, data || {});
      this.status = this.status || "sent";
    }

    logDispatch() {
      this.status = "sent";
      return this;
    }

    toJSON() {
      return {
        id: this.id,
        invoiceId: this.invoiceId,
        stage: this.stage,
        sentOn: this.sentOn,
        channel: this.channel,
        status: this.status
      };
    }

    static from(data) {
      return data instanceof ReminderEvent ? data : new ReminderEvent(data);
    }
  }

  window.BillingReminderEvent = ReminderEvent;
})();
