import type { Position, VarMap } from "./types.ts";
import type { BarProps } from "./bar-props.ts";
import type { LabelProps } from "./item-props.ts";

export type ItemType = "item" | "space";

export interface EventProps {
  mouseEnter?: string;
  mouseExit?: string;
  click?: string;
  scroll?: string;
  front_app_switched?: string;
}

export interface BarComponent {
  name: string;
  type: ItemType;
  position?: Position;
  events?: EventProps;
}

export interface PlainItem extends BarComponent {
  type: "item";
  props: {
    label?: LabelProps;
  };
}

export interface SpaceItem extends BarComponent {
  type: "space";
  props: {
    label?: LabelProps;
  };
}

type ItemTypes = PlainItem | SpaceItem;

type Hooks = {
  pre_start?: string;
  pre_install?: string;
};

export type ConfigProps = {
  vars: VarMap;
  hooks: Hooks;
  bar: {
    props: BarProps;
    events: EventProps;
    defaults: BarProps;
  };
  items: ItemTypes[];
};
