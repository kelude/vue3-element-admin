import { c$ as isObjectLike, dq as baseGetTag, H as isClient } from "./index.CjDU5CMT.js";
import { g as getPrototype } from "./_initCloneObject.tFWjqE6V.js";
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
export {
  cAF as c,
  isPlainObject as i,
  rAF as r
};
