// Holds all invoices
let invoices = [];
// Holds all payments
let payments = [];
// Get form from DOM
const form = document.querySelector('.new-item-form');
// Form Fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
export {};
