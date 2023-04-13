import { HasFormatter } from "../interfaces/HasFormatter";

// Creates Invoice class for billing
export class Payment implements HasFormatter{
  constructor(
    public recipient: string,
    public details: string,
    public amount: number,
  ){}

  format() {
    return `${this.recipient} was paid $${this.amount} for ${this.details}.`;
  }
}
