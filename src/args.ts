import type { ConfigProps } from "./model/config-props.ts";
import { parseArgs } from "std/cli/parse_args.ts";
import * as YAML from "std/yaml/mod.ts";
import { hardExit } from "./util.ts";

type CLIArgOpts = string[];

type CLIargs = {
  json?: string;
  yaml?: string;
  install: boolean;
  dryrun?: boolean;
  query?: CLIArgOpts;
  // "query-all"?: boolean;
  end?: boolean;
  _: string[];
};

const defaultArgs: CLIargs = {
  install: false,
  _: [],
};

type DenoArgs = string[];

export const getArgs = (args: DenoArgs): CLIargs => {
  return Object.assign({}, defaultArgs, parseArgs(args));
};

type ConfFileArgs = Pick<CLIargs, "json" | "yaml">;

export const getConfig = (args: ConfFileArgs): ConfigProps => {
  const { json, yaml } = args;

  if (json) {
    return JSON.parse(json) as ConfigProps;
  }

  if (yaml) {
    return YAML.parse(yaml) as ConfigProps;
  }

  hardExit("Required config flag missing (--json|--yaml)");
};
