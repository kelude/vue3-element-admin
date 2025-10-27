import { a9 as isUndefined, t as buildProps, c6 as keysOf, cv as TypeComponentsMap, _ as _export_sfc, d as defineComponent, bz as useSlots, b as useNamespace, r as ref, c as computed, ak as toRef, H as isClient, e as createBlock, f as openBlock, w as withCtx, $ as withDirectives, C as createBaseVNode, n as normalizeClass, i as unref, h as createCommentVNode, E as ElIcon, l as renderSlot, D as resolveDynamicComponent, g as createElementBlock, a4 as createTextVNode, F as toDisplayString, P as Fragment, m as createVNode, ct as TypeComponents, a1 as vShow, T as Transition, q as withInstall } from "./index.C-w1mPR5.js";
import { u as useDelayedToggleProps, a as useDelayedToggle } from "./index.D1LU_lkm.js";
const alertEffects = ["light", "dark"];
const alertProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: keysOf(TypeComponentsMap),
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: alertEffects,
    default: "light"
  },
  ...useDelayedToggleProps,
  showAfter: Number
});
const alertEmits = {
  open: () => true,
  close: (evt) => isUndefined(evt) || evt instanceof Event
};
const __default__ = defineComponent({
  name: "ElAlert"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: alertProps,
  emits: alertEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { Close } = TypeComponents;
    const slots = useSlots();
    const ns = useNamespace("alert");
    const visible = ref(isUndefined(props.showAfter));
    const iconComponent = computed(() => TypeComponentsMap[props.type]);
    const hasDesc = computed(() => !!(props.description || slots.default));
    const open = () => {
      visible.value = true;
      emit("open");
    };
    const close = (event) => {
      visible.value = false;
      emit("close", event);
    };
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter", 0),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open,
      close
    });
    if (isClient) {
      onOpen();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.type), unref(ns).is("center", _ctx.center), unref(ns).is(_ctx.effect)]),
            role: "alert"
          }, [
            _ctx.showIcon && (_ctx.$slots.icon || unref(iconComponent)) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(ns).e("icon"), { [unref(ns).is("big")]: unref(hasDesc) }])
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "icon", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
                ])
              ]),
              _: 3
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass([unref(ns).e("title"), { "with-description": unref(hasDesc) }])
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true),
              unref(hasDesc) ? (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(unref(ns).e("description"))
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(_ctx.description), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                _ctx.closeText ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass([unref(ns).e("close-btn"), unref(ns).is("customed")]),
                  onClick: close
                }, toDisplayString(_ctx.closeText), 3)) : (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass(unref(ns).e("close-btn")),
                  onClick: unref(onClose)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Close))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"]))
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)
          ], 2), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "alert.vue"]]);
const ElAlert = withInstall(Alert);
export {
  ElAlert as E
};
