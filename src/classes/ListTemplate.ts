import { HasFormatter } from "../interfaces/HasFormatter.js";
import { Invoice } from "./Invoice.js";
import { Payment } from "./Payment.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement){};

  render(
    item: HasFormatter,
    heading: string,
    pos: 'start' | 'end',
    id: string
  ){
    const li = document.createElement('li');
    li.setAttribute('id', id);
    
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', (e: Event) => {
      e.preventDefault();
      this.container.removeChild(li);
      const deleteFromLocalStorage = (key: string): void => {
        const localStorageInvoices = localStorage.getItem('invoices');
        const localStoragePayments = localStorage.getItem('payments');

        if (localStorageInvoices) {
          const invoicesFromStorage = JSON.parse(localStorageInvoices) as Invoice[];
          const indexInInvoices = invoicesFromStorage.findIndex((item) => item.uid.toString() == key);
          if (indexInInvoices !== -1) {
            invoicesFromStorage.splice(indexInInvoices, 1);
            localStorage.setItem('invoices', JSON.stringify(invoicesFromStorage));
            return;
          }
        }
        if (localStoragePayments) {
          const paymentsFromStorage = JSON.parse(localStoragePayments) as Payment[];
          const indexInPayments = paymentsFromStorage.findIndex((item) => item.uid.toString() === key);
          if (indexInPayments !== -1) {
            paymentsFromStorage.splice(indexInPayments, 1);
            localStorage.setItem('payments', JSON.stringify(paymentsFromStorage));
            return;
          }
        }
      }
      deleteFromLocalStorage(id);
    });

    li.append(deleteBtn);

    if(pos === 'start'){
      this.container.prepend(li);
    } else{
      this.container.append(li);
    }
  }
}
