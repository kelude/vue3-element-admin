import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.By1HG0zl.js";
import { E as ElInput } from "./input.vrG8fnLa.js";
import { E as ElAlert } from "./alert.DlwOIgOR.js";
import { T as ToDetail } from "./detail.B9ByB3Ku.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.BUKaIhgH.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.Co6esjSr.js";
import "./index.nnE0ZPx7.js";
import "./event.BZTOGHfp.js";
import "./index.B9QRmu6l.js";
import "./use-form-common-props.DPAYUUkh.js";
import "./index.BJxO8UGY.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.JAlaSwIW.js";
import "./index.DrmDPqoI.js";
import "./index.BQ1YrHne.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = {
  flex: "",
  "flex-col": "",
  "gap-20px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel31" },
  __name: "level3-1",
  setup(__props) {
    const value = ref("");
    onMounted(() => {
      console.log("Multilevel31 onMounted");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1),
          createVNode(_sfc_main$2),
          createVNode(_component_el_alert, {
            closable: false,
            title: "菜单三级-1",
            type: "error"
          }),
          createVNode(_component_el_input, {
            modelValue: unref(value),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            placeholder: "缓存测试"
          }, null, 8, ["modelValue"]),
          createVNode(unref(ToDetail))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
