
const mapValue = (val) => {
  if (Boolean(val) === val) return val ? 'on' : 'off';
  return val;
}

export const expandArray = (obj) => Object.entries(obj)
  .map(([ k, v ]) => `${k}="${mapValue(v)}"`)
  .join(' ')