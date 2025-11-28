import { d as defineComponent, r as ref, g as createElementBlock, f as openBlock, m as createVNode, C as createBaseVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref, $ as withDirectives, bF as vModelText } from "./index.CmLBO_Rw.js";
import { E as ElLink } from "./link.C6e_Yed-.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.tRuFmHIZ.js";
import "./index.C_1JB0Ji.js";
import "./file-api.DZBXo3KH.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { style: { "margin-top": "10px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wang-editor",
  setup(__props) {
    const value = ref("初始化内容");
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/wang-editor.vue",
          type: "primary",
          target: "_blank",
          class: "mb-[20px]"
        }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          modelValue: unref(value),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
          height: "400px"
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          withDirectives(createBaseVNode("textarea", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(value) ? value.value = $event : null),
            readonly: "",
            style: { "width": "100%", "height": "200px", "outline": "none" }
          }, null, 512), [
            [vModelText, unref(value)]
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
