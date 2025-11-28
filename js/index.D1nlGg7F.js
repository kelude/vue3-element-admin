import { d as defineComponent, g as createElementBlock, f as openBlock, n as normalizeClass, l as renderSlot } from "./index.CmLBO_Rw.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    padding: {
      type: String,
      default: "p-2"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "cursor-pointer": "",
        "flex-center": "",
        rounded: "",
        class: normalizeClass(["el", __props.padding])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const CommonWrapper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a27dadb"]]);
export {
  CommonWrapper as C
};
