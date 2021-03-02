import { HasFormatter } from "../interface/HasFormatter.js";
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} is owed $${this.amount} from ${this.details}`;
  }
}
