export type Position = "left" | "center" | "right";
// A comma separated list of positive integers
export type PositiveIntList = string;
// The various types of boolean values that Sketchybar supports
export type SketchBool =
  | "on"
  | "off"
  | "yes"
  | "no"
  | true
  | false
  | 1
  | 0
  | "toggle";
// Color as an 8 digit hex with alpha, red, green and blue channels
export type ArgbHex = string;
// A positive integer
export type PosNumber = number;
// A font string in the format "<family>:<type>:<size>"
export type FontString = string;
// <path>, app.<bundle-id>, app.<name>, media.artwork
export type AssetPath = string;
export type ArgValue = string | number | boolean;
export type NestedArgs = { [key: string]: ArgValue | NestedArgs };
export type FlattenedArgs = Record<string, ArgValue>;
export type VarMap = Record<string, string>;
