#!/usr/bin/env zx

import Item from './item.mjs';

$.shell = '/bin/zsh';

$.quote = (char, ...args) => {
  console.debug(chalk.blue('Substituting:'), `"${char}"`, [ ...args]);
  return char;
}

const testItem = new Item('test-item', 'right', {
  label: 'TestItem',
  'label.drawing': true,
});

await testItem.install();