import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormatter";

// Holds all invoices
let invoices: Invoice[] = [];

// Holds all payments
let payments: Payment[] = [];

// Get form from DOM
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Form Fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber,
    );
});
