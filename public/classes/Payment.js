// Creates Invoice class for billing
export class Payment {
    constructor(recipient, details, amount, uid) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.uid = uid;
    }
    format() {
        return `${this.recipient} was paid $${this.amount.toFixed(2)} for ${this.details}.`;
    }
}
