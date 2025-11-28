import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.CmLBO_Rw.js";
import { E as ElInput } from "./input.DJmIVgFr.js";
import { E as ElAlert } from "./alert.EVIJrCuR.js";
import { T as ToDetail } from "./detail.CnuUK1_U.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.C08DtKli.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.db2klp4_.js";
import "./index.eINu-mWW.js";
import "./event.BZTOGHfp.js";
import "./index.CaGOe3Xg.js";
import "./use-form-common-props.DLum1V4R.js";
import "./index.DlY5bQhi.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.DlUwldQ9.js";
import "./index.BHX3RtPE.js";
import "./index.C_1JB0Ji.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = {
  flex: "",
  "flex-col": "",
  "gap-20px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel32" },
  __name: "level3-2",
  setup(__props) {
    const value = ref("");
    onMounted(() => {
      console.log("Multilevel32 onMounted");
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
            title: "菜单三级-2",
            type: "warning"
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
