import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { ListTemplate } from "./classes/listTemplates.js";
let docOne;
let docTwo;
docOne = new Invoice("sugan", "work", 400);
docTwo = new Payment("flip", "oil", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
//Forms
const form = document.querySelector(".new-item-form");
console.log(form.children);
//Input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
//listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
