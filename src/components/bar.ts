import type { BarProps } from "../model/bar-props.ts";
import type { EventProps } from "../model/config-props.ts";
import $ from "dax";
import { expandArray } from "../util.ts";

export default class Bar {
  props: BarProps = {};
  defaults = {};
  events: EventProps = {};

  constructor(props = {}, defaults = {}, events = {}) {
    Object.assign(this.props, props);
    Object.assign(this.defaults, defaults);
    Object.assign(this.events, events);
  }

  get addCommand() {
    return "--bar";
  }

  get propsCommand() {
    return expandArray(this.props);
  }

  get installCommand() {
    return [this.addCommand, this.propsCommand].join(" ");
  }

  async install() {
    return await $`sketchybar ${this.installCommand}`;
  }
}
