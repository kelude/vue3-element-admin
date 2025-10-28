import { _ as _export_sfc, d as defineComponent, x as useLocale, A as inject, c as computed, g as createElementBlock, f as openBlock, C as createBaseVNode, h as createCommentVNode, l as renderSlot, n as normalizeClass, i as unref, F as toDisplayString, m as createVNode, w as withCtx, e as createBlock, D as resolveDynamicComponent, cM as CloseComponents, E as ElIcon, k as normalizeStyle, bz as useSlots, b as useNamespace, r as ref, T as Transition, Z as mergeProps, $ as withDirectives, bo as createSlots, a1 as vShow, y as provide, q as withInstall } from "./index.CjDU5CMT.js";
import { f as dialogContentEmits, g as dialogContentProps, b as useDraggable, h as dialogInjectionKey, d as dialogEmits, a as dialogProps, u as useDialog, E as ElOverlay, e as useSameTarget } from "./overlay.o3UQGxY9.js";
import { F as FOCUS_TRAP_INJECTION_KEY, E as ElFocusTrap, a as ElTeleport } from "./index.kBJnZjK7.js";
import { c as composeRefs } from "./refs.CxYYXu5Q.js";
import { u as useDeprecated } from "./index.3UkwCaMF.js";
const __default__$1 = defineComponent({ name: "ElDialogContent" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => !!props.draggable);
    const overflow = computed(() => !!props.overflow);
    const { resetPosition, updatePosition, isDragging } = useDraggable(dialogRef, headerRef, draggable, overflow);
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", draggable.value),
      ns.is("dragging", isDragging.value),
      ns.is("align-center", !!props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    expose({
      resetPosition,
      updatePosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass(unref(dialogKls)),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createBaseVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass, { "show-close": _ctx.showClose }])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createBaseVNode("span", {
              role: "heading",
              "aria-level": _ctx.ariaLevel,
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 11, ["aria-level"])
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: ($event) => _ctx.$emit("close")
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
        ], 2),
        createBaseVNode("div", {
          id: unref(bodyId),
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, ["id"]),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "dialog-content.vue"]]);
const __default__ = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      transitionConfig,
      zIndex,
      _draggable,
      _alignCenter,
      _overflow,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const penetrable = computed(() => props.modalPenetrable && !props.modal && !props.fullscreen);
    const resetPosition = () => {
      var _a;
      (_a = dialogContentRef.value) == null ? void 0 : _a.resetPosition();
    };
    expose({
      visible,
      dialogContentRef,
      resetPosition,
      handleClose
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, mergeProps(unref(transitionConfig), { persisted: "" }), {
            default: withCtx(() => {
              var _a;
              return [
                withDirectives(createVNode(unref(ElOverlay), {
                  "custom-mask-event": "",
                  mask: _ctx.modal,
                  "overlay-class": [
                    (_a = _ctx.modalClass) != null ? _a : "",
                    `${unref(ns).namespace.value}-modal-dialog`,
                    unref(ns).is("penetrable", unref(penetrable))
                  ],
                  "z-index": unref(zIndex)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": _ctx.title || void 0,
                      "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                      "aria-describedby": unref(bodyId),
                      class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                      style: normalizeStyle(unref(overlayDialogStyle)),
                      onClick: unref(overlayEvent).onClick,
                      onMousedown: unref(overlayEvent).onMousedown,
                      onMouseup: unref(overlayEvent).onMouseup
                    }, [
                      createVNode(unref(ElFocusTrap), {
                        loop: "",
                        trapped: unref(visible),
                        "focus-start-el": "container",
                        onFocusAfterTrapped: unref(onOpenAutoFocus),
                        onFocusAfterReleased: unref(onCloseAutoFocus),
                        onFocusoutPrevented: unref(onFocusoutPrevented),
                        onReleaseRequested: unref(onCloseRequested)
                      }, {
                        default: withCtx(() => [
                          unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                            key: 0,
                            ref_key: "dialogContentRef",
                            ref: dialogContentRef
                          }, _ctx.$attrs, {
                            center: _ctx.center,
                            "align-center": unref(_alignCenter),
                            "close-icon": _ctx.closeIcon,
                            draggable: unref(_draggable),
                            overflow: unref(_overflow),
                            fullscreen: _ctx.fullscreen,
                            "header-class": _ctx.headerClass,
                            "body-class": _ctx.bodyClass,
                            "footer-class": _ctx.footerClass,
                            "show-close": _ctx.showClose,
                            title: _ctx.title,
                            "aria-level": _ctx.headerAriaLevel,
                            onClose: unref(handleClose)
                          }), createSlots({
                            header: withCtx(() => [
                              !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                                key: 0,
                                close: unref(handleClose),
                                titleId: unref(titleId),
                                titleClass: unref(ns).e("title")
                              }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                            ]),
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            _: 2
                          }, [
                            _ctx.$slots.footer ? {
                              name: "footer",
                              fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "footer")
                              ])
                            } : void 0
                          ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : createCommentVNode("v-if", true)
                        ]),
                        _: 3
                      }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                    ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
                  ]),
                  _: 3
                }, 8, ["mask", "overlay-class", "z-index"]), [
                  [vShow, unref(visible)]
                ])
              ];
            }),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "dialog.vue"]]);
const ElDialog = withInstall(Dialog);
export {
  ElDialog as E
};
