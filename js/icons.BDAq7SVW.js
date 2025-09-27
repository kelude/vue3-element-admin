import { d as defineComponent, r as ref, bU as ElementPlusIconsVue, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, C as createBaseVNode, P as Fragment, Q as renderList, n as normalizeClass, F as toDisplayString, i as unref, E as ElIcon, e as createBlock, D as resolveDynamicComponent } from "./index.By1HG0zl.js";
import { E as ElTabPane, a as ElTabs } from "./tab-pane.BtJvngo3.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.D5W9Rywr.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.CCJtDONc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./raf.zaId7HXO.js";
import "./_initCloneObject.CO4fE7pF.js";
import "./strings.BPYTyuyG.js";
import "./error.BVJkE67s.js";
import "./toNumber.BPY58h9e.js";
import "./event.BZTOGHfp.js";
import "./index.DlXtWtt3.js";
import "./vnode.44qVz4OH.js";
import "./_baseClone.CBVZP9kp.js";
import "./index.nnE0ZPx7.js";
/* empty css                */
import "./index.DrmDPqoI.js";
import "./index.BQ1YrHne.js";
import "./use-form-common-props.DPAYUUkh.js";
import "./index.Cbuy3c8U.js";
import "./aria.McRhojP9.js";
import "./index.JAlaSwIW.js";
const _hoisted_1 = { class: "icons-container" };
const _hoisted_2 = { class: "grid" };
const _hoisted_3 = { class: "icon-item" };
const _hoisted_4 = { class: "grid" };
const _hoisted_5 = { class: "icon-item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Icons",
    inheritAttrs: false
  },
  __name: "icons",
  setup(__props) {
    const svg_icons = [
      "api",
      "cascader",
      "client",
      "close",
      "close_all",
      "close_left",
      "close_other",
      "close_right",
      "dict",
      "document",
      "download",
      "drag",
      "edit",
      "exit-fullscreen",
      "eye-open",
      "eye",
      "fullscreen",
      "github",
      "homepage",
      "language",
      "link",
      "menu",
      "message",
      "money",
      "monitor",
      "order",
      "password",
      "peoples",
      "perm",
      "publish",
      "role",
      "security",
      "size",
      "skill",
      "system",
      "tree",
      "user",
      "uv",
      "verify-code"
    ];
    const icons2 = ref(ElementPlusIconsVue);
    function generateIconCode(symbol) {
      return `<div class="i-svg:${symbol}" />`;
    }
    function generateElementIconCode(symbol) {
      return `<el-icon><${symbol} /></el-icon>`;
    }
    return (_ctx, _cache) => {
      const _component_el_tooltip = ElTooltip;
      const _component_copy_button = _sfc_main$1;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_icon = ElIcon;
      const _component_el_tabs = ElTabs;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_tabs, { type: "border-card" }, {
          default: withCtx(() => [
            createVNode(_component_el_tab_pane, { label: "Icons" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(svg_icons, (item) => {
                    return createBaseVNode("div", { key: item }, [
                      createVNode(_component_copy_button, {
                        text: generateIconCode(item)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_tooltip, {
                            effect: "dark",
                            content: generateIconCode(item),
                            placement: "top"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_3, [
                                createBaseVNode("div", {
                                  class: normalizeClass(`i-svg:${item}`)
                                }, null, 2),
                                createBaseVNode("span", null, toDisplayString(item), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["content"])
                        ]),
                        _: 2
                      }, 1032, ["text"])
                    ]);
                  }), 64))
                ])
              ]),
              _: 1
            }),
            createVNode(_component_el_tab_pane, { label: "Element-UI Icons" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(icons2), (icon, name) => {
                    return openBlock(), createElementBlock("div", { key: name }, [
                      createVNode(_component_copy_button, {
                        text: generateElementIconCode(name)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_tooltip, {
                            effect: "dark",
                            content: generateElementIconCode(name),
                            placement: "top"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_5, [
                                createVNode(_component_el_icon, { size: 20 }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(icon)))
                                  ]),
                                  _: 2
                                }, 1024),
                                createBaseVNode("span", null, toDisplayString(name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["content"])
                        ]),
                        _: 2
                      }, 1032, ["text"])
                    ]);
                  }), 128))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f83b0fa"]]);
export {
  icons as default
};
