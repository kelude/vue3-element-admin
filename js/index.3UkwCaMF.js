import { I as watch, i as unref } from "./index.CjDU5CMT.js";
const useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
export {
  useDeprecated as u
};
