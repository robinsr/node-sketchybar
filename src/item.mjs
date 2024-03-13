import { expandArray } from "./util.mjs";

export default class Item {
  props = {};

  constructor(name = 'Item', position = 'right', props = {}) {
    this.name = name;
    this.position = 'right';
    Object.assign(this.props, props);
  }

  get addCommand() {
    return `--add item ${this.name} ${this.position}`;
  }

  get propsCommand() {
    return `--set ${this.name} ${expandArray(this.props)}`;
  }

  get installCommand() {
    return [
      this.addCommand,
      this.propsCommand
    ]. join(' ')
  }

  async install() {
    return await $`sketchybar ${this.installCommand}`;
  }
}