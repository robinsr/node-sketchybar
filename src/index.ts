#!/usr/bin/env -S deno run --allow-all

import $ from "dax";
import { setup } from "./util.ts";
import log from "./log.ts";
import { getConfig, getArgs } from "./args.ts";
import Item from "./components/item.ts";
import Space from "./components/space.ts";

await setup();

const argv = getArgs(Deno.args);
log.debug("CLI Args:", argv);

async function main(): Promise<void> {
  try {
    const config = getConfig(argv);
    const vars = config.vars || {};

    const items = config.items.map(({ type, name, position, props }) => {
      switch (type) {
        case "space":
          return new Space(name, position, props, vars);
        default:
          return new Item(name, position, props, vars);
      }
    });

    if (argv.install) {
      if (config.hooks && config.hooks.pre_install) {
        const ex = await $`${config.hooks.pre_install}`.noThrow();

        if (ex.code !== 0) {
          log.warn("Pre-install hook failed:", ex.stderr);
        }
      }

      items.forEach(async (item) => item.install());
      return;
    }

    if (argv) {
      items
        .map((item) => `sketchybar ${item.installCommand}`)
        .forEach((cmd) => log.info(cmd));
    }
  } catch (e) {
    log.error("JSON Parsing Error:", e);
    $`exit 1`;
  }
}

await main();
