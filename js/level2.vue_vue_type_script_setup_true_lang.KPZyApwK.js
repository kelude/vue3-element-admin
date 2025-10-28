import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, m as createVNode, aA as isRef, i as unref, P as Fragment } from "./index.CjDU5CMT.js";
import { E as ElInput } from "./input.mLRPLJvT.js";
import { E as ElAlert } from "./alert.C6R3t23G.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel2" },
  __name: "level2",
  setup(__props) {
    const value = ref("");
    onMounted(() => {
      console.log("MultiLevel2 mounted");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_alert, {
          closable: false,
          title: "菜单二级",
          type: "success"
        }),
        createVNode(_component_el_input, {
          modelValue: unref(value),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
          placeholder: "缓存测试"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
});
export {
  _sfc_main as _
};
