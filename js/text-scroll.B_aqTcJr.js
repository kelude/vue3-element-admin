import { d as defineComponent, r as ref, bY as useElementHover, c as computed, o as onMounted, b4 as onUnmounted, I as watch, as as resolveComponent, g as createElementBlock, f as openBlock, n as normalizeClass, C as createBaseVNode, h as createCommentVNode, m as createVNode, E as ElIcon, w as withCtx, k as normalizeStyle, i as unref } from "./index.CmLBO_Rw.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _hoisted_1$1 = ["typewriter"];
const _hoisted_2 = { class: "left-icon" };
const _hoisted_3 = { class: "scroll-wrapper" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    text: {},
    speed: { default: 70 },
    direction: { default: "left" },
    type: { default: "default" },
    showClose: { type: Boolean, default: false },
    typewriter: { type: Boolean, default: false },
    typewriterSpeed: { default: 100 }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const containerRef = ref(null);
    const isHovered = useElementHover(containerRef);
    const scrollContent = ref(null);
    const animationDuration = ref(0);
    const currentText = ref("");
    let typewriterTimer = null;
    const isTypewriterComplete = ref(false);
    const shouldScroll = computed(() => {
      if (props.typewriter) {
        return !isHovered.value && isTypewriterComplete.value;
      }
      return !isHovered.value;
    });
    const sanitizedContent = computed(() => props.typewriter ? currentText.value : props.text);
    const scrollStyle = computed(() => ({
      "--animation-duration": `${animationDuration.value}s`,
      "--animation-play-state": shouldScroll.value ? "running" : "paused",
      "--animation-direction": props.direction === "left" ? "normal" : "reverse"
    }));
    const calculateDuration = () => {
      if (scrollContent.value) {
        const contentWidth = scrollContent.value.scrollWidth / 2;
        animationDuration.value = contentWidth / props.speed;
      }
    };
    const handleRightIconClick = () => {
      emit("close");
      if (containerRef.value) {
        containerRef.value.remove();
      }
    };
    const startTypewriter = () => {
      let index = 0;
      currentText.value = "";
      isTypewriterComplete.value = false;
      const type = () => {
        if (index < props.text.length) {
          currentText.value += props.text[index];
          index++;
          typewriterTimer = setTimeout(type, props.typewriterSpeed);
        } else {
          isTypewriterComplete.value = true;
        }
      };
      type();
    };
    onMounted(() => {
      calculateDuration();
      window.addEventListener("resize", calculateDuration);
      if (props.typewriter) {
        startTypewriter();
      }
    });
    onUnmounted(() => {
      window.removeEventListener("resize", calculateDuration);
      if (typewriterTimer) {
        clearTimeout(typewriterTimer);
      }
    });
    watch(
      () => props.text,
      () => {
        if (props.typewriter) {
          if (typewriterTimer) {
            clearTimeout(typewriterTimer);
          }
          startTypewriter();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_Bell = resolveComponent("Bell");
      const _component_el_icon = ElIcon;
      const _component_Close = resolveComponent("Close");
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["text-scroll-container", [`text-scroll--${props.type}`]]),
        typewriter: props.typewriter ? "true" : void 0
      }, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_Bell)
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", {
            ref_key: "scrollContent",
            ref: scrollContent,
            class: normalizeClass(["text-scroll-content", { scrolling: unref(shouldScroll) }]),
            style: normalizeStyle(unref(scrollStyle))
          }, [
            createBaseVNode("div", {
              class: "scroll-item",
              innerHTML: unref(sanitizedContent)
            }, null, 8, _hoisted_4),
            createBaseVNode("div", {
              class: "scroll-item",
              innerHTML: unref(sanitizedContent)
            }, null, 8, _hoisted_5)
          ], 6)
        ]),
        __props.showClose ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "right-icon",
          onClick: handleRightIconClick
        }, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_Close)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$1);
    };
  }
});
const TextScroll = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9dd3fad7"]]);
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text-scroll",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(TextScroll, {
          text: "这是一条基础的滚动公告，默认向左滚动。",
          typewriter: ""
        }),
        createVNode(TextScroll, {
          type: "success",
          text: "这是一条成功类型的滚动公告",
          typewriter: ""
        }),
        createVNode(TextScroll, {
          type: "warning",
          text: "这是一条警告类型的滚动公告"
        }),
        createVNode(TextScroll, {
          type: "danger",
          text: "这是一条危险类型的滚动公告"
        }),
        createVNode(TextScroll, {
          type: "info",
          text: "这是一条信息类型的滚动公告"
        }),
        createVNode(TextScroll, {
          text: "这是一条速度较慢、向右滚动的公告",
          speed: 30,
          direction: "right",
          "show-close": ""
        })
      ]);
    };
  }
});
const textScroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-450c01f7"]]);
export {
  textScroll as default
};
