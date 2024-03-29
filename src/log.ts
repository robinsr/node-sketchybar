import * as fmt from "std/fmt/colors.ts";

export const debug = (...msg: unknown[]) =>
  console.log(fmt.cyan("debug"), ...msg);
export const info = (...msg: unknown[]) =>
  console.log(fmt.blue("info"), ...msg);
export const warn = (...msg: unknown[]) =>
  console.warn(fmt.yellow("warn"), ...msg);
export const error = (...msg: unknown[]) =>
  console.error(fmt.red("error"), ...msg);

const log = {
  debug,
  info,
  warn,
  error,
};

export default log;
