import { d as defineComponent, r as ref, bV as useDictStore, I as watch, e as createBlock, g as createElementBlock, i as unref, w as withCtx, a4 as createTextVNode, F as toDisplayString, f as openBlock } from "./index.CjDU5CMT.js";
/* empty css             */
import { E as ElTag } from "./index.BR6nY3fC.js";
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DictLabel",
  props: {
    code: String,
    // 字典编码
    modelValue: [String, Number],
    // 字典项的值
    size: {
      type: String,
      default: "default"
      // 标签大小
    }
  },
  setup(__props) {
    const props = __props;
    const label = ref("");
    const tagType = ref();
    const tagSize = ref(props.size);
    const dictStore = useDictStore();
    const getLabelAndTagByValue = async (dictCode, value) => {
      await dictStore.loadDictItems(dictCode);
      const dictItems = dictStore.getDictItems(dictCode);
      const dictItem = dictItems.find((item) => item.value == value);
      return {
        label: dictItem?.label || "",
        tagType: dictItem?.tagType
      };
    };
    const updateLabelAndTag = async () => {
      if (!props.code || props.modelValue === void 0) return;
      const { label: newLabel, tagType: newTagType } = await getLabelAndTagByValue(
        props.code,
        props.modelValue
      );
      label.value = newLabel;
      tagType.value = newTagType;
    };
    watch(
      [() => props.code, () => props.modelValue],
      async () => {
        if (props.code) {
          await updateLabelAndTag();
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_el_tag = ElTag;
      return unref(tagType) ? (openBlock(), createBlock(_component_el_tag, {
        key: 0,
        type: unref(tagType),
        size: unref(tagSize)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(label)), 1)
        ]),
        _: 1
      }, 8, ["type", "size"])) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(label)), 1));
    };
  }
});
export {
  _sfc_main as _
};
