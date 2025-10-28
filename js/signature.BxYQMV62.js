import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, h as createCommentVNode, m as createVNode, w as withCtx, a4 as createTextVNode, j as withModifiers, i as unref, aG as ElMessage } from "./index.CjDU5CMT.js";
/* empty css                */
import { F as FileAPI } from "./file-api.Cb7jJT02.js";
import { E as ElButton } from "./index.D2tRBopO.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.3UkwCaMF.js";
import "./use-form-common-props.BPtRgoS9.js";
const _hoisted_1 = { class: "canvas-dom" };
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signature",
  setup(__props) {
    const imgUrl = ref("");
    const canvas = ref();
    let ctx;
    let painting = false;
    const getOffset = (event) => {
      let offset;
      if (event.offsetX) {
        const { offsetX, offsetY } = event;
        offset = [offsetX, offsetY];
      } else {
        const { top, left } = canvas.value.getBoundingClientRect();
        const offsetX = event.touches[0].clientX - left;
        const offsetY = event.touches[0].clientY - top;
        offset = [offsetX, offsetY];
      }
      return offset;
    };
    let startX = 0, startY = 0;
    const onEventStart = (event) => {
      [startX, startY] = getOffset(event);
      painting = true;
    };
    const onEventMove = (event) => {
      if (painting) {
        const [endX, endY] = getOffset(event);
        paint(startX, startY, endX, endY, ctx);
        startX = endX;
        startY = endY;
      }
    };
    const onEventEnd = () => {
      if (painting) {
        painting = false;
      }
    };
    onMounted(() => {
      ctx = canvas.value.getContext("2d");
    });
    const handleToFile = async () => {
      if (isCanvasBlank(canvas.value)) {
        ElMessage({
          type: "warning",
          message: "当前签名文件为空"
        });
        return;
      }
      const file = dataURLtoFile(canvas.value.toDataURL(), "签名.png");
      if (!file) return;
      const data = await FileAPI.uploadFile(file);
      handleClearSign();
      imgUrl.value = data.url;
    };
    const handleClearSign = () => {
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    };
    const isCanvasBlank = (canvas2) => {
      const blank = document.createElement("canvas");
      blank.width = canvas2.width;
      blank.height = canvas2.height;
      return canvas2.toDataURL() == blank.toDataURL();
    };
    const handleSaveImg = () => {
      if (isCanvasBlank(canvas.value)) {
        ElMessage({
          type: "warning",
          message: "当前签名文件为空"
        });
        return;
      }
      const el = document.createElement("a");
      el.href = canvas.value.toDataURL();
      el.download = "签名";
      const event = new MouseEvent("click");
      el.dispatchEvent(event);
    };
    const dataURLtoFile = (dataurl, filename) => {
      const arr = dataurl.split(",");
      if (!arr.length) return;
      const mime = arr[0].match(/:(.*?);/);
      if (mime) {
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime[1] });
      }
    };
    function paint(startX2, startY2, endX, endY, ctx2) {
      ctx2.beginPath();
      ctx2.globalAlpha = 1;
      ctx2.lineWidth = 2;
      ctx2.strokeStyle = "#000";
      ctx2.moveTo(startX2, startY2);
      ctx2.lineTo(endX, endY);
      ctx2.closePath();
      ctx2.stroke();
    }
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[3] || (_cache[3] = createBaseVNode("h3", null, "基于canvas实现的签名组件", -1)),
        createBaseVNode("header", null, [
          createVNode(_component_el_button, {
            type: "primary",
            onClick: handleSaveImg
          }, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createTextVNode("保存为图片", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_el_button, { onClick: handleToFile }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("保存到后端", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_el_button, { onClick: handleClearSign }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode("清空签名", -1)
            ])]),
            _: 1
          })
        ]),
        createBaseVNode("canvas", {
          ref_key: "canvas",
          ref: canvas,
          height: "200",
          width: "500",
          onMousedown: onEventStart,
          onMousemove: withModifiers(onEventMove, ["stop", "prevent"]),
          onMouseup: onEventEnd,
          onTouchstart: onEventStart,
          onTouchmove: withModifiers(onEventMove, ["stop", "prevent"]),
          onTouchend: onEventEnd
        }, null, 544),
        unref(imgUrl) ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: unref(imgUrl),
          alt: "签名"
        }, null, 8, _hoisted_2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const signature = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e049ea72"]]);
export {
  signature as default
};
