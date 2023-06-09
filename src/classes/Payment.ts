import { HasFormatter } from "../interfaces/HasFormatter.js";

// Creates Invoice class for billing
export class Payment implements HasFormatter{
  constructor(
    public recipient: string,
    public details: string,
    public amount: number,
    public uid: number,
  ){}

  format() {
    return `${this.recipient} was paid $${this.amount.toFixed(2)} for ${this.details}.`;
  }
}
