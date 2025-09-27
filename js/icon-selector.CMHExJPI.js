import { _ as __unplugin_components_14 } from "./index.BXEOS1Dk.js";
import { d as defineComponent, r as ref, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref } from "./index.By1HG0zl.js";
import { E as ElLink } from "./link.DJfoi8j4.js";
import "./popper.CCJtDONc.js";
import "./index.nnE0ZPx7.js";
import "./index.Cbuy3c8U.js";
import "./aria.McRhojP9.js";
import "./index.JAlaSwIW.js";
import "./use-form-common-props.DPAYUUkh.js";
import "./popover.CaSyp_ud.js";
import "./dropdown.kDmpLFfc.js";
import "./tab-pane.BtJvngo3.js";
import "./raf.zaId7HXO.js";
import "./_initCloneObject.CO4fE7pF.js";
import "./strings.BPYTyuyG.js";
import "./error.BVJkE67s.js";
import "./toNumber.BPY58h9e.js";
import "./event.BZTOGHfp.js";
import "./index.DlXtWtt3.js";
import "./vnode.44qVz4OH.js";
import "./_baseClone.CBVZP9kp.js";
import "./scrollbar.VeOVMFhI.js";
/* empty css                 */
import "./input.vrG8fnLa.js";
import "./index.B9QRmu6l.js";
import "./index.BJxO8UGY.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.BQ1YrHne.js";
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-selector",
  setup(__props) {
    const iconName = ref("el-icon-edit");
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_icon_select = __unplugin_components_14;
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
