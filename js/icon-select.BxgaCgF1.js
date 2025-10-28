import { d as defineComponent, r as ref, as as resolveComponent, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref } from "./index.CjDU5CMT.js";
import { E as ElLink } from "./link.KJjpinkR.js";
import "./index.3UkwCaMF.js";
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-select",
  setup(__props) {
    const iconName = ref("el-icon-edit");
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_icon_select = resolveComponent("icon-select", true);
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/icon-selector.vue",
          type: "primary",
          target: "_blank",
          class: "mb-10"
        }, {
          default: withCtx(() => [..._cache[1] || (_cache[1] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_icon_select, {
          modelValue: unref(iconName),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(iconName) ? iconName.value = $event : null)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
