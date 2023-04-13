// Creates Invoice class for billing
export class Invoice {
    constructor(client, details, amount, uid) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.uid = uid;
    }
    format() {
        return `${this.client} owes $${this.amount.toFixed(2)} for ${this.details}.`;
    }
}
