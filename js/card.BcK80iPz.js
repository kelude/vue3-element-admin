import { t as buildProps, z as definePropType, _ as _export_sfc, d as defineComponent, co as useGlobalConfig, b as useNamespace, g as createElementBlock, f as openBlock, h as createCommentVNode, C as createBaseVNode, n as normalizeClass, i as unref, l as renderSlot, a4 as createTextVNode, F as toDisplayString, k as normalizeStyle, q as withInstall } from "./index.CmLBO_Rw.js";
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: void 0
  }
});
const __default__ = defineComponent({
  name: "ElCard"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: cardProps,
  setup(__props) {
    const globalConfig = useGlobalConfig("card");
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is(`${_ctx.shadow || ((_a = unref(globalConfig)) == null ? void 0 : _a.shadow) || "always"}-shadow`)
        ])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
        }, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "card.vue"]]);
const ElCard = withInstall(Card);
export {
  ElCard as E
};
