import { t as buildProps, cl as useWindowSize, c as computed, c1 as clamp, r as ref, I as watch, u as useEventListener, aa as onBeforeUnmount, J as addUnit, _ as _export_sfc, d as defineComponent, bz as useSlots, b as useNamespace, x as useLocale, e as createBlock, f as openBlock, w as withCtx, m as createVNode, T as Transition, i as unref, $ as withDirectives, C as createBaseVNode, Z as mergeProps, j as withModifiers, g as createElementBlock, h as createCommentVNode, n as normalizeClass, l as renderSlot, F as toDisplayString, E as ElIcon, a2 as close_default, k as normalizeStyle, a1 as vShow, q as withInstall } from "./index.C-w1mPR5.js";
import { d as dialogEmits, a as dialogProps, u as useDialog, E as ElOverlay } from "./overlay.6P5GvOwu.js";
import { E as ElFocusTrap, a as ElTeleport } from "./index.Y-PlGRQ9.js";
import { u as useDeprecated } from "./index.DBHfYhTD.js";
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  resizable: Boolean,
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
function useResizable(props, target) {
  const { width, height } = useWindowSize();
  const isHorizontal = computed(() => ["ltr", "rtl"].includes(props.direction));
  const sign = computed(() => ["ltr", "ttb"].includes(props.direction) ? 1 : -1);
  const windowSize = computed(() => isHorizontal.value ? width.value : height.value);
  const getSize = computed(() => {
    return clamp(startSize.value + sign.value * offset.value, 4, windowSize.value);
  });
  const startSize = ref(0);
  const offset = ref(0);
  const isResizing = ref(false);
  const hasStartedDragging = ref(false);
  let startPos = [];
  let cleanups = [];
  const getActualSize = () => {
    var _a;
    const drawerEl = (_a = target.value) == null ? void 0 : _a.closest('[aria-modal="true"]');
    if (drawerEl) {
      return isHorizontal.value ? drawerEl.offsetWidth : drawerEl.offsetHeight;
    }
    return 100;
  };
  watch(() => [props.size, props.resizable], () => {
    hasStartedDragging.value = false;
    startSize.value = 0;
    offset.value = 0;
    onMouseUp();
  });
  const onMousedown = (e) => {
    if (!props.resizable)
      return;
    if (!hasStartedDragging.value) {
      startSize.value = getActualSize();
      hasStartedDragging.value = true;
    }
    startPos = [e.pageX, e.pageY];
    isResizing.value = true;
    cleanups.push(useEventListener(window, "mouseup", onMouseUp), useEventListener(window, "mousemove", onMouseMove));
  };
  const onMouseMove = (e) => {
    const { pageX, pageY } = e;
    const offsetX = pageX - startPos[0];
    const offsetY = pageY - startPos[1];
    offset.value = isHorizontal.value ? offsetX : offsetY;
  };
  const onMouseUp = () => {
    startPos = [];
    startSize.value = getSize.value;
    offset.value = 0;
    isResizing.value = false;
    cleanups.forEach((cleanup2) => cleanup2 == null ? void 0 : cleanup2());
    cleanups = [];
  };
  const cleanup = useEventListener(target, "mousedown", onMousedown);
  onBeforeUnmount(() => {
    cleanup();
    onMouseUp();
  });
  return {
    size: computed(() => {
      return hasStartedDragging.value ? `${getSize.value}px` : addUnit(props.size);
    }),
    isResizing,
    isHorizontal
  };
}
const __default__ = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const draggerRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const { isHorizontal, size, isResizing } = useResizable(props, draggerRef);
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ns).b("fade"),
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => {
              var _a;
              return [
                withDirectives(createVNode(unref(ElOverlay), {
                  mask: _ctx.modal,
                  "overlay-class": [unref(ns).is("drawer"), (_a = _ctx.modalClass) != null ? _a : ""],
                  "z-index": unref(zIndex),
                  onClick: unref(onModalClick)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ElFocusTrap), {
                      loop: "",
                      trapped: unref(visible),
                      "focus-trap-el": drawerRef.value,
                      "focus-start-el": focusStartRef.value,
                      onFocusAfterTrapped: unref(onOpenAutoFocus),
                      onFocusAfterReleased: unref(onCloseAutoFocus),
                      onFocusoutPrevented: unref(onFocusoutPrevented),
                      onReleaseRequested: unref(onCloseRequested)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", mergeProps({
                          ref_key: "drawerRef",
                          ref: drawerRef,
                          "aria-modal": "true",
                          "aria-label": _ctx.title || void 0,
                          "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                          "aria-describedby": unref(bodyId)
                        }, _ctx.$attrs, {
                          class: [
                            unref(ns).b(),
                            _ctx.direction,
                            unref(visible) && "open",
                            unref(ns).is("dragging", unref(isResizing))
                          ],
                          style: { [unref(isHorizontal) ? "width" : "height"]: unref(size) },
                          role: "dialog",
                          onClick: withModifiers(() => {
                          }, ["stop"])
                        }), [
                          createBaseVNode("span", {
                            ref_key: "focusStartRef",
                            ref: focusStartRef,
                            class: normalizeClass(unref(ns).e("sr-focus")),
                            tabindex: "-1"
                          }, null, 2),
                          _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                            key: 0,
                            class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
                          }, [
                            !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                              key: 0,
                              close: unref(handleClose),
                              titleId: unref(titleId),
                              titleClass: unref(ns).e("title")
                            }, () => [
                              createBaseVNode("span", {
                                id: unref(titleId),
                                role: "heading",
                                "aria-level": _ctx.headerAriaLevel,
                                class: normalizeClass(unref(ns).e("title"))
                              }, toDisplayString(_ctx.title), 11, ["id", "aria-level"])
                            ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                              createCommentVNode(" DEPRECATED SLOT ")
                            ]),
                            _ctx.showClose ? (openBlock(), createElementBlock("button", {
                              key: 2,
                              "aria-label": unref(t)("el.drawer.close"),
                              class: normalizeClass(unref(ns).e("close-btn")),
                              type: "button",
                              onClick: unref(handleClose)
                            }, [
                              createVNode(unref(ElIcon), {
                                class: normalizeClass(unref(ns).e("close"))
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(close_default))
                                ]),
                                _: 1
                              }, 8, ["class"])
                            ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
                          ], 2)) : createCommentVNode("v-if", true),
                          unref(rendered) ? (openBlock(), createElementBlock("div", {
                            key: 1,
                            id: unref(bodyId),
                            class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
                          }, [
                            renderSlot(_ctx.$slots, "default")
                          ], 10, ["id"])) : createCommentVNode("v-if", true),
                          _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                            key: 2,
                            class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
                          }, [
                            renderSlot(_ctx.$slots, "footer")
                          ], 2)) : createCommentVNode("v-if", true),
                          _ctx.resizable ? (openBlock(), createElementBlock("div", {
                            key: 3,
                            ref_key: "draggerRef",
                            ref: draggerRef,
                            style: normalizeStyle({ zIndex: unref(zIndex) }),
                            class: normalizeClass(unref(ns).e("dragger"))
                          }, null, 6)) : createCommentVNode("v-if", true)
                        ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                      ]),
                      _: 3
                    }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                  ]),
                  _: 3
                }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                  [vShow, unref(visible)]
                ])
              ];
            }),
            _: 3
          }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
export {
  ElDrawer as E
};
