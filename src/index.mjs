#!/usr/bin/env zx

import Item from './item.mjs';

$.shell = '/bin/zsh';

$.quote = (char, ...args) => {
  console.debug(chalk.blue('Substituting:'), `"${char}"`, [ ...args]);
  return char;
}

if (!argv.json) {
  console.error('Required --json flag missing', e);
  $`exit 1`
}

try {
  const config = JSON.parse(argv.json)

  config.items.forEach(async (item) => {
    const { name, position, props } = item;
    const testItem = new Item(name, position, props);
    await testItem.install();
  })
} catch (e) {
  console.error('JSON Parsing Error:', e);
  $`exit 1`
}

