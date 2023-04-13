import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Holds all invoices
let invoices: Invoice[] = [];

// Holds all payments
let payments: Payment[] = [];

// Holds all documents
let docs: HasFormatter[] = [];

// Get form from DOM
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Form Fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Instantiate ListTemplate
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  let doc: HasFormatter;

  if(type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(doc as Invoice);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    payments.push(doc as Payment);
  }
  docs.push(doc)  
  list.render(doc, type.value, 'end');
});
