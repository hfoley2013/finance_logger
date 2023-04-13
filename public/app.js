import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// Holds all invoices
let invoices = [];
// Holds all payments
let payments = [];
// Holds all documents
let docs = [];
// Get form from DOM
const form = document.querySelector('.new-item-form');
// Form Fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Instantiate ListTemplate
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        invoices.push(doc);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        payments.push(doc);
    }
    docs.push(doc);
    list.render(doc, type.value, 'end');
});
