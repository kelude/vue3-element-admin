import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.C-w1mPR5.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { E as ElAlert } from "./alert.BF0pzuCE.js";
import { T as ToDetail } from "./detail.jRaKFkrc.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.DYS1QEUi.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.ihNxnr_q.js";
import "./index.DmNrmtFU.js";
import "./event.BZTOGHfp.js";
import "./index.Cz0Zbu2t.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./index.BLtH7mBo.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.D1LU_lkm.js";
import "./index.BMPR14Hc.js";
import "./index.DBHfYhTD.js";
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
