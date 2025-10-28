import { d as defineComponent, bK as mergeModels, r as ref, bU as ElementPlusIconsVue, bL as useModel, c as computed, dv as onClickOutside, o as onMounted, as as resolveComponent, g as createElementBlock, f as openBlock, k as normalizeStyle, m as createVNode, i as unref, w as withCtx, C as createBaseVNode, aA as isRef, P as Fragment, Q as renderList, n as normalizeClass, E as ElIcon, e as createBlock, D as resolveDynamicComponent, l as renderSlot, h as createCommentVNode, j as withModifiers, a$ as __vitePreload } from "./index.CjDU5CMT.js";
import { E as ElTooltip } from "./popper.CVURbzwO.js";
import { E as ElPopover } from "./popover.C7yG1fr8.js";
import { a as ElTabs, E as ElTabPane } from "./tab-pane.BonYoTnl.js";
import { E as ElScrollbar } from "./scrollbar.Cvm8P6mA.js";
/* empty css                 */
import { E as ElInput } from "./input.mLRPLJvT.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _hoisted_1 = { class: "icon-grid" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "icon-grid" };
const _hoisted_4 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: /* @__PURE__ */ mergeModels({
    modelValue: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "500px"
    }
  }, {
    "modelValue": {
      type: String,
      required: true,
      default: ""
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const iconSelectRef = ref();
    const popoverContentRef = ref();
    const popoverVisible = ref(false);
    const activeTab = ref("svg");
    const svgIcons = ref([]);
    const elementIcons = ref(Object.keys(ElementPlusIconsVue));
    const selectedIcon = useModel(__props, "modelValue");
    const filterText = ref("");
    const filteredSvgIcons = ref([]);
    const filteredElementIcons = ref(elementIcons.value);
    const isElementIcon = computed(() => {
      return selectedIcon.value && selectedIcon.value.startsWith("el-icon");
    });
    function loadIcons() {
      const icons = /* @__PURE__ */ Object.assign({ "../../assets/icons/api.svg": () => __vitePreload(() => import("./api.l2b6jUI8.js"), true ? [] : void 0), "../../assets/icons/backtop.svg": () => __vitePreload(() => import("./backtop.CCrlZ6DW.js"), true ? [] : void 0), "../../assets/icons/bell.svg": () => __vitePreload(() => import("./bell.COgEvfUU.js"), true ? [] : void 0), "../../assets/icons/bilibili.svg": () => __vitePreload(() => import("./bilibili.Cm8g2EuW.js"), true ? [] : void 0), "../../assets/icons/browser.svg": () => __vitePreload(() => import("./browser.D_BmO5dF.js"), true ? [] : void 0), "../../assets/icons/captcha.svg": () => __vitePreload(() => import("./captcha.1vRMn3QA.js"), true ? [] : void 0), "../../assets/icons/cascader.svg": () => __vitePreload(() => import("./cascader.BuOGRWAt.js"), true ? [] : void 0), "../../assets/icons/client.svg": () => __vitePreload(() => import("./client.DbSnLnBW.js"), true ? [] : void 0), "../../assets/icons/close.svg": () => __vitePreload(() => import("./close.CcKySo1D.js"), true ? [] : void 0), "../../assets/icons/close_all.svg": () => __vitePreload(() => import("./close_all.RVlc-Muj.js"), true ? [] : void 0), "../../assets/icons/close_left.svg": () => __vitePreload(() => import("./close_left.Ct6_5Rdv.js"), true ? [] : void 0), "../../assets/icons/close_other.svg": () => __vitePreload(() => import("./close_other.CR-Zm5Wk.js"), true ? [] : void 0), "../../assets/icons/close_right.svg": () => __vitePreload(() => import("./close_right.Sw3LAzEG.js"), true ? [] : void 0), "../../assets/icons/cnblogs.svg": () => __vitePreload(() => import("./cnblogs.Cnl0uwlj.js"), true ? [] : void 0), "../../assets/icons/code.svg": () => __vitePreload(() => import("./code.B6RkDdZW.js"), true ? [] : void 0), "../../assets/icons/collapse.svg": () => __vitePreload(() => import("./collapse.C7n3W7WQ.js"), true ? [] : void 0), "../../assets/icons/csdn.svg": () => __vitePreload(() => import("./csdn.D4sMADXk.js"), true ? [] : void 0), "../../assets/icons/dict.svg": () => __vitePreload(() => import("./dict.DXhYZbiw.js"), true ? [] : void 0), "../../assets/icons/document.svg": () => __vitePreload(() => import("./document.D6H9J6FJ.js"), true ? [] : void 0), "../../assets/icons/down.svg": () => __vitePreload(() => import("./down.BAyd2bp1.js"), true ? [] : void 0), "../../assets/icons/download.svg": () => __vitePreload(() => import("./download.CQwZ95Ts.js"), true ? [] : void 0), "../../assets/icons/enter.svg": () => __vitePreload(() => import("./enter.Cr5JgEAl.js"), true ? [] : void 0), "../../assets/icons/esc.svg": () => __vitePreload(() => import("./esc.G4tY5jp6.js"), true ? [] : void 0), "../../assets/icons/file.svg": () => __vitePreload(() => import("./file.B2KeudPq.js"), true ? [] : void 0), "../../assets/icons/fullscreen-exit.svg": () => __vitePreload(() => import("./fullscreen-exit.naRBo3z1.js"), true ? [] : void 0), "../../assets/icons/fullscreen.svg": () => __vitePreload(() => import("./fullscreen.DoFVIQAe.js"), true ? [] : void 0), "../../assets/icons/gitcode.svg": () => __vitePreload(() => import("./gitcode.D9ZPXluz.js"), true ? [] : void 0), "../../assets/icons/gitee.svg": () => __vitePreload(() => import("./gitee.BtenfK5P.js"), true ? [] : void 0), "../../assets/icons/github.svg": () => __vitePreload(() => import("./github.CNBHlQQa.js"), true ? [] : void 0), "../../assets/icons/homepage.svg": () => __vitePreload(() => import("./homepage.DfQh6yqE.js"), true ? [] : void 0), "../../assets/icons/java.svg": () => __vitePreload(() => import("./java.C0GV_Cjb.js"), true ? [] : void 0), "../../assets/icons/juejin.svg": () => __vitePreload(() => import("./juejin.DVYJr425.js"), true ? [] : void 0), "../../assets/icons/language.svg": () => __vitePreload(() => import("./language.B3rIcKBu.js"), true ? [] : void 0), "../../assets/icons/menu.svg": () => __vitePreload(() => import("./menu.ChzwFmc0.js"), true ? [] : void 0), "../../assets/icons/message.svg": () => __vitePreload(() => import("./message.B6Quu42i.js"), true ? [] : void 0), "../../assets/icons/monitor.svg": () => __vitePreload(() => import("./monitor.BSyzfv0x.js"), true ? [] : void 0), "../../assets/icons/project.svg": () => __vitePreload(() => import("./project.XjFff9nj.js"), true ? [] : void 0), "../../assets/icons/qq.svg": () => __vitePreload(() => import("./qq.DTxJA0AE.js"), true ? [] : void 0), "../../assets/icons/refresh.svg": () => __vitePreload(() => import("./refresh.CqWaxVEi.js"), true ? [] : void 0), "../../assets/icons/role.svg": () => __vitePreload(() => import("./role.8tXq_2Gi.js"), true ? [] : void 0), "../../assets/icons/search.svg": () => __vitePreload(() => import("./search.CV925Gyl.js"), true ? [] : void 0), "../../assets/icons/setting.svg": () => __vitePreload(() => import("./setting.DK3SiLcn.js"), true ? [] : void 0), "../../assets/icons/size.svg": () => __vitePreload(() => import("./size.CI4tFiut.js"), true ? [] : void 0), "../../assets/icons/system.svg": () => __vitePreload(() => import("./system.Afd1pne6.js"), true ? [] : void 0), "../../assets/icons/table.svg": () => __vitePreload(() => import("./table.D_fEZ9jt.js"), true ? [] : void 0), "../../assets/icons/todo.svg": () => __vitePreload(() => import("./todo.Dgowz3ls.js"), true ? [] : void 0), "../../assets/icons/tree.svg": () => __vitePreload(() => import("./tree.DYKDdUYx.js"), true ? [] : void 0), "../../assets/icons/typescript.svg": () => __vitePreload(() => import("./typescript.B4mPtSqT.js"), true ? [] : void 0), "../../assets/icons/up.svg": () => __vitePreload(() => import("./up.Db84LfX4.js"), true ? [] : void 0), "../../assets/icons/user.svg": () => __vitePreload(() => import("./user.B1n1Qs30.js"), true ? [] : void 0), "../../assets/icons/visitor.svg": () => __vitePreload(() => import("./visitor.CqHLD15H.js"), true ? [] : void 0), "../../assets/icons/vue.svg": () => __vitePreload(() => import("./vue.CjoOGL0S.js"), true ? [] : void 0), "../../assets/icons/wechat.svg": () => __vitePreload(() => import("./wechat.COjJPdQs.js"), true ? [] : void 0), "../../assets/icons/xml.svg": () => __vitePreload(() => import("./xml.CMJUyG--.js"), true ? [] : void 0) });
      for (const path in icons) {
        const iconName = path.replace(/.*\/(.*)\.svg$/, "$1");
        svgIcons.value.push(iconName);
      }
      filteredSvgIcons.value = svgIcons.value;
    }
    function handleTabClick(tabPane) {
      activeTab.value = tabPane.props.name;
      filterIcons();
    }
    function filterIcons() {
      if (activeTab.value === "svg") {
        filteredSvgIcons.value = filterText.value ? svgIcons.value.filter((icon) => icon.toLowerCase().includes(filterText.value.toLowerCase())) : svgIcons.value;
      } else {
        filteredElementIcons.value = filterText.value ? elementIcons.value.filter(
          (icon) => icon.toLowerCase().includes(filterText.value.toLowerCase())
        ) : elementIcons.value;
      }
    }
    function selectIcon(icon) {
      const iconName = activeTab.value === "element" ? "el-icon-" + icon : icon;
      emit("update:modelValue", iconName);
      popoverVisible.value = false;
    }
    function togglePopover() {
      popoverVisible.value = !popoverVisible.value;
    }
    onClickOutside(iconSelectRef, () => popoverVisible.value = false, {
      ignore: [popoverContentRef]
    });
    function clearSelectedIcon() {
      selectedIcon.value = "";
    }
    onMounted(() => {
      loadIcons();
      if (selectedIcon.value) {
        if (elementIcons.value.includes(selectedIcon.value.replace("el-icon-", ""))) {
          activeTab.value = "element";
        } else {
          activeTab.value = "svg";
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_CircleClose = resolveComponent("CircleClose");
      const _component_ArrowDown = resolveComponent("ArrowDown");
      const _component_el_input = ElInput;
      const _component_el_tooltip = ElTooltip;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_popover = ElPopover;
      return openBlock(), createElementBlock("div", {
        ref_key: "iconSelectRef",
        ref: iconSelectRef,
        style: normalizeStyle({ width: props.width })
      }, [
        createVNode(_component_el_popover, {
          visible: unref(popoverVisible),
          width: props.width,
          placement: "bottom-end"
        }, {
          reference: withCtx(() => [
            createBaseVNode("div", {
              onClick: _cache[1] || (_cache[1] = ($event) => popoverVisible.value = !unref(popoverVisible))
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_el_input, {
                  modelValue: selectedIcon.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedIcon.value = $event),
                  readonly: "",
                  placeholder: "点击选择图标",
                  class: "reference"
                }, {
                  prepend: withCtx(() => [
                    unref(isElementIcon) ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(selectedIcon.value.replace("el-icon-", ""))))
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass(`i-svg:${selectedIcon.value}`)
                    }, null, 2))
                  ]),
                  suffix: withCtx(() => [
                    selectedIcon.value ? (openBlock(), createBlock(_component_el_icon, {
                      key: 0,
                      style: { "margin-right": "8px" },
                      onClick: withModifiers(clearSelectedIcon, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CircleClose)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_el_icon, {
                      style: normalizeStyle({
                        transform: unref(popoverVisible) ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform .5s"
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ArrowDown, {
                          onClick: withModifiers(togglePopover, ["stop"])
                        })
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], true)
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              ref_key: "popoverContentRef",
              ref: popoverContentRef
            }, [
              createVNode(_component_el_input, {
                modelValue: unref(filterText),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(filterText) ? filterText.value = $event : null),
                placeholder: "搜索图标",
                clearable: "",
                onInput: filterIcons
              }, null, 8, ["modelValue"]),
              createVNode(_component_el_tabs, {
                modelValue: unref(activeTab),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
                onTabClick: handleTabClick
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_tab_pane, {
                    label: "SVG 图标",
                    name: "svg"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_scrollbar, { height: "300px" }, {
                        default: withCtx(() => [
                          createBaseVNode("ul", _hoisted_1, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredSvgIcons), (icon) => {
                              return openBlock(), createElementBlock("li", {
                                key: "svg-" + icon,
                                class: "icon-grid-item",
                                onClick: ($event) => selectIcon(icon)
                              }, [
                                createVNode(_component_el_tooltip, {
                                  content: icon,
                                  placement: "bottom",
                                  effect: "light"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", {
                                      class: normalizeClass(`i-svg:${icon}`)
                                    }, null, 2)
                                  ]),
                                  _: 2
                                }, 1032, ["content"])
                              ], 8, _hoisted_2);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_tab_pane, {
                    label: "Element 图标",
                    name: "element"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_scrollbar, { height: "300px" }, {
                        default: withCtx(() => [
                          createBaseVNode("ul", _hoisted_3, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredElementIcons), (icon) => {
                              return openBlock(), createElementBlock("li", {
                                key: icon,
                                class: "icon-grid-item",
                                onClick: ($event) => selectIcon(icon)
                              }, [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(icon)))
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 8, _hoisted_4);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "width"])
      ], 4);
    };
  }
});
const __unplugin_components_14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-96f794f6"]]);
export {
  __unplugin_components_14 as _
};
