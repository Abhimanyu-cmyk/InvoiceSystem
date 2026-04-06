(function () {
  class Accountant {
    constructor(actions) {
      this.actions = actions || {};
    }

    viewDashboard() {
      return this.actions.viewDashboard ? this.actions.viewDashboard() : null;
    }

    exportReports(type) {
      return this.actions.exportReports ? this.actions.exportReports(type) : null;
    }
  }

  window.BillingAccountant = Accountant;
})();
