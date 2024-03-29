import { expandArray } from "../util.ts";
import Item from "./item.ts";

export interface Item {
  addCommand: string;
  setCommand: string;
  installCommand: string;
  install(): Promise<any>;
}

export default class BaseItem implements Item {
  type = "item";

  constructor(name = "AnonItem", position = "right", props = {}, vars = {}) {
    this.name = name;
    this.position = position;
    this.props = props;
    this.vars = vars;
  }

  setType(type: string) {
    this.type = type;
  }

  get addCommand() {
    return `--add ${this.type} ${this.name} ${this.position}`;
  }

  get setCommand() {
    return `--set ${this.name} ${expandArray(this.props, this.vars)}`;
  }

  get installCommand() {
    return [this.addCommand, this.setCommand].join(" ");
  }

  async install() {
    return await $`sketchybar ${this.installCommand}`;
  }
}
