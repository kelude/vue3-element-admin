import { H as isClient } from "./index.CmLBO_Rw.js";
const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
export {
  cAF as c,
  rAF as r
};
