// Creates Invoice class for billing
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} was paid $${this.amount} for ${this.details}.`;
    }
}
