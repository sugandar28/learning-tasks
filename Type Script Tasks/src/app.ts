import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interface/HasFormatter.js";
import { ListTemplate } from "./classes/listTemplates.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("sugan", "work", 400);
docTwo = new Payment("flip", "oil", 300);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

//Forms

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

//Input

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

//listener
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
