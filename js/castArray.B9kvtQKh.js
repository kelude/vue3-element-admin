import { cB as isArray } from "./index.By1HG0zl.js";
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}
export {
  castArray as c
};
