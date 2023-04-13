export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ;
    render(item, heading, pos, id) {
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
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.container.removeChild(li);
            deleteFromLocalStorage(id);
        });
        li.append(deleteBtn);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
const deleteFromLocalStorage = (key) => {
    const localStorageInvoices = localStorage.getItem('invoices');
    const localStoragePayments = localStorage.getItem('payments');
    if (localStorageInvoices) {
        const invoicesFromStorage = JSON.parse(localStorageInvoices);
        const indexInInvoices = invoicesFromStorage.findIndex((item) => item.uid.toString() == key);
        if (indexInInvoices !== -1) {
            invoicesFromStorage.splice(indexInInvoices, 1);
            localStorage.setItem('invoices', JSON.stringify(invoicesFromStorage));
            return;
        }
    }
    if (localStoragePayments) {
        const paymentsFromStorage = JSON.parse(localStoragePayments);
        const indexInPayments = paymentsFromStorage.findIndex((item) => item.uid.toString() === key);
        if (indexInPayments !== -1) {
            paymentsFromStorage.splice(indexInPayments, 1);
            localStorage.setItem('payments', JSON.stringify(paymentsFromStorage));
            return;
        }
    }
};
