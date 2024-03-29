import BaseItem from "./item.ts";

export default class Space extends BaseItem {
  constructor(name = "Space", position = "right", props = {}, vars = {}) {
    super(name, position, props, vars);
    this.setType("space");
    console.log(this);
  }
}
