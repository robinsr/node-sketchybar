

export default class Bar {
  constructor() {
    this.name = 'Bar';
  }

  say() {
    return `I'm ${this.name}`;
  }

  toCommand() {
    return `--bar `
  }
}