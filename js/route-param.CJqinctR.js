import { d as defineComponent, ap as useRoute, g as createElementBlock, f as openBlock, F as toDisplayString, i as unref } from "./index.CjDU5CMT.js";
const _hoisted_1 = { class: "p-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Other",
    inheritAttrs: false
  },
  __name: "route-param",
  setup(__props) {
    const query = useRoute().query.type;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "路由参数type：" + toDisplayString(unref(query)), 1);
    };
  }
});
export {
  _sfc_main as default
};
