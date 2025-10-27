import { d as defineComponent, o as onMounted, e as createBlock, f as openBlock } from "./index.C-w1mPR5.js";
import { E as ElAlert } from "./alert.BF0pzuCE.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel1" },
  __name: "level1",
  setup(__props) {
    onMounted(() => {
      console.log("MultiLevel1 mounted");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      return openBlock(), createBlock(_component_el_alert, {
        closable: false,
        title: "菜单一级"
      });
    };
  }
});
export {
  _sfc_main as _
};
