import { d as defineComponent, as as resolveComponent, e as createBlock, f as openBlock, w as withCtx, l as renderSlot, m as createVNode, E as ElIcon, k as normalizeStyle, aG as ElMessage } from "./index.CmLBO_Rw.js";
/* empty css                */
import { E as ElButton } from "./index.BHX3RtPE.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CopyButton",
    inheritAttrs: false
  },
  __name: "index",
  props: {
    text: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    function handleClipboard() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(props.text).then(() => {
          ElMessage.success("Copy successfully");
        }).catch((error) => {
          ElMessage.warning("Copy failed");
          console.log("[CopyButton] Copy failed", error);
        });
      } else {
        const input = document.createElement("input");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        input.setAttribute("value", props.text);
        document.body.appendChild(input);
        input.select();
        try {
          const successful = document.execCommand("copy");
          if (successful) {
            ElMessage.success("Copy successfully!");
          } else {
            ElMessage.warning("Copy failed!");
          }
        } catch (err) {
          ElMessage.error("Copy failed.");
          console.log("[CopyButton] Copy failed.", err);
        } finally {
          document.body.removeChild(input);
        }
      }
    }
    return (_ctx, _cache) => {
      const _component_DocumentCopy = resolveComponent("DocumentCopy");
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      return openBlock(), createBlock(_component_el_button, {
        link: "",
        style: normalizeStyle(__props.style),
        onClick: handleClipboard
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_DocumentCopy, { color: "var(--el-color-primary)" })
              ]),
              _: 1
            })
          ])
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
export {
  _sfc_main as _
};
