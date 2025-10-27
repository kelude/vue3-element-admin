import { d as defineComponent, g as createElementBlock, C as createBaseVNode, m as createVNode, a4 as createTextVNode, w as withCtx, aK as useRouter, f as openBlock } from "./index.C-w1mPR5.js";
/* empty css                */
import { E as ElLink } from "./link.D-KNl23S.js";
import { E as ElButton } from "./index.BMPR14Hc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.DBHfYhTD.js";
import "./use-form-common-props.BiHzdJ5v.js";
const _imports_0 = "/vue3-element-admin/img/404.B7nq_1Oy.svg";
const _hoisted_1 = { class: "wh-full mx-auto flex-center flex-col lg:flex-row" };
const _hoisted_2 = { class: "w-75" };
const _hoisted_3 = { class: "info text-gray mb-7 text-[0.8125rem]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Page404" },
  __name: "404",
  setup(__props) {
    const router = useRouter();
    const back = () => router.push("/");
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[6] || (_cache[6] = createBaseVNode("img", {
          class: "min-w-[23.4375rem] sm:w-150",
          src: _imports_0,
          alt: "404"
        }, null, -1)),
        createBaseVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "oops mb-5 text-[2rem] font-bold" }, "OOPS！", -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[1] || (_cache[1] = createTextVNode(" 该页面无法访问。 ", -1)),
            createVNode(_component_el_link, {
              type: "primary",
              href: "https://www.youlai.tech.com",
              target: "_blank"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(" 有来开源官网 ", -1)
              ])]),
              _: 1
            })
          ]),
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "headline mb-2.5 text-xl font-bold text-[#222]" }, "抱歉，您访问的页面不存在。", -1)),
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "info text-gray mb-7 text-[0.8125rem]" }, " 请确认您输入的网址是否正确，或者点击下方按钮返回首页。 ", -1)),
          createVNode(_component_el_button, {
            round: "",
            type: "primary",
            class: "btn h-9 w-28 mb-10",
            onClick: back
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("返回首页", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3338ebc3"]]);
export {
  Error404 as default
};
