import { HasFormatter } from "../interface/HasFormatter.js";
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} from ${this.details}`;
  }
}
