import { ArgbHex, PosNumber, PositiveIntList, SketchBool } from "./types.ts";

export type BarPosition = "Top" | "Bottom";

export interface BarProps
  extends Partial<{
    // "0x44000000"; Color of the bar
    color: ArgbHex;
    // "0xffff0000"; Color of the bars border
    border_color: ArgbHex;
    // "top"; Position of the bar on the screen
    position: BarPosition;
    // 25; Height of the bar
    height: number;
    // 0; Margin around the bar
    margin: number;
    // 0; Vertical offset of the bar from its default position
    y_offset: number;
    // 0; Corner radius of the bar
    corner_radius: PosNumber;
    // 0;	Width of the bar's border
    border_width: PosNumber;
    // 0o Blur radius applied to the background of the bar
    blur_radius: PosNumber;
    // 0;	Padding between the left bar border and the leftmost item
    padding_left: PosNumber;
    // 0;	Padding between the left bar border and the leftmost item
    padding_right: PosNumber;
    // 200; The width of the notch to be accounted for on the internal display
    notch_width: PosNumber;
    // 0; Additional y_offset exclusively applied to notched screens
    notch_offset: PosNumber;
    // all; Display to show the bar on
    display: "all" | "main" | PositiveIntList;
    // off; If the bar should be drawn on top of everything, or on top of all windows
    hidden: SketchBool | "current";
    // off; If the bar should be drawn on top of everything, or on top of all windows
    topmost: SketchBool | "window";
    // ono Makes the bar sticky during space changes
    sticky: SketchBool;
    // off; If fonts should be smoothened
    font_smoothing: SketchBool;
    // off; If the bar should draw a shadow
    shadow: SketchBool;
  }> {}
