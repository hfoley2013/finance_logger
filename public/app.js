import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// Holds all invoices
let invoices = [];
// Holds all payments
let payments = [];
// Instantiate ListTemplate
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Retrieve docs from localStorage
const localStorageInvoices = localStorage.getItem('invoices');
const localStoragePayments = localStorage.getItem('payments');
if (localStorageInvoices) {
    let invoicesFromStorage = JSON.parse(localStorageInvoices);
    invoicesFromStorage.forEach((invoice) => {
        let invoiceObj = new Invoice(invoice.client, invoice.details, invoice.amount, invoice.uid);
        list.render(invoiceObj, 'invoice', 'end', invoiceObj.uid.toString());
    });
}
;
if (localStoragePayments) {
    let paymentsFromStorage = JSON.parse(localStoragePayments);
    paymentsFromStorage.forEach((payment) => {
        let paymentObj = new Invoice(payment.recipient, payment.details, payment.amount, payment.uid);
        console.log(paymentObj);
        list.render(paymentObj, 'payment', 'end', paymentObj.uid.toString());
    });
}
;
// Get form from DOM
const form = document.querySelector('.new-item-form');
// Form Fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber, addUID());
        console.log(doc);
        console.log(doc.format());
        invoices.push(doc);
        localStorage.setItem('invoices', JSON.stringify(invoices));
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber, addUID());
        payments.push(doc);
        localStorage.setItem('payments', JSON.stringify(payments));
    }
    list.render(doc, type.value, 'end', doc.uid.toString());
});
// Generate UID for Documents for Update & Deletion
const addUID = () => {
    let uid = Math.floor(Math.random() * 100);
    return uid;
};
console.log(invoices);
console.log(payments);
