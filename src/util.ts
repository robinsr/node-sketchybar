import type {
  ArgValue,
  VarMap,
  FlattenedArgs,
  NestedArgs,
} from "./model/types.ts";
import $ from "dax";
import { error, debug, info } from "./log.ts";

const isString = (val: unknown): val is string => {
  return typeof val === "string";
};

/**
 * Maps object values to shell arguments using the provided variable map
 */
const mapValue = (val: ArgValue, vars: VarMap = {}): ArgValue => {
  if (Boolean(val) === val) return val ? "on" : "off";
  if (isString(val)) {
    return Object.keys(vars)
      .filter((k) => val.includes("$" + k))
      .reduce((str, k) => str.replace("$" + k, vars[k]), val);
  }
  return val;
};

/**
 * When mapping JS objects to shell arguments, the "text" property is used as the root value
 * eg { foo: { text: "bar", prop: "baz" } } => foo="bar" foo.prop="baz"
 */
const mapKey = (key: string): string => {
  if (key.endsWith(".text")) {
    return key.replace(".text", "");
  } else {
    return key;
  }
};

/**
 * Recursively flatten nested objects into a single-level object
 */
const flattenKeys = (path: string, obj: object): FlattenedArgs => {
  return Object.entries(obj).reduce((mem, [k, v]) => {
    const newKey = path ? `${path}.${k}` : k;
    return ["string", "number", "boolean"].includes(typeof v)
      ? { ...mem, [newKey]: v }
      : { ...mem, ...flattenKeys(newKey, v) };
  }, {});
};

/**
 * Convert a nested object to a string of shell arguments
 */
export const expandArray = (obj: NestedArgs, vars: VarMap = {}) =>
  Object.entries(flattenKeys("", obj))
    .map(([k, v]) => `${mapKey(k)}="${mapValue(v, vars)}"`)
    .join(" ");

/**
 * Quote a string for shell execution
 */
const quoteFn = (charseq: string, ...args: unknown[]) => {
  debug(`Substituting: "${charseq}"`, [...args]);
  return charseq;
};

/**
 * Set the shell to use for command execution
 */
const getShell = () => {
  const ZSH = "/bin/zsh";
  const shell = Deno.env.get("SHELL") || ZSH;

  if ($.shell) {
    debug("Shell set to:", $.shell);
    return $.shell;
  } else {
    info(`Setting shell to ${shell}`);
    return shell;
  }
};

/**
 * Setup the dax library
 */
export const setup = () => {
  $.shell = getShell();
  $.quote = quoteFn;
};

export const hardExit = (msg = "Exiting on error", code = 1) => {
  error(msg);
  Deno.exit(code);
};
