import { d as defineComponent, bV as useDictStore, r as ref, I as watch, o as onMounted, e as createBlock, h as createCommentVNode, k as normalizeStyle, i as unref, aA as isRef, w as withCtx, g as createElementBlock, P as Fragment, Q as renderList, f as openBlock, a4 as createTextVNode, F as toDisplayString } from "./index.By1HG0zl.js";
import { a as ElCheckboxGroup, E as ElCheckbox } from "./checkbox.BGGbaRqo.js";
/* empty css                        */
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.DKATiaIf.js";
/* empty css             */
import { E as ElSelect, a as ElOption } from "./select.5Z49GATu.js";
import "./scrollbar.VeOVMFhI.js";
import "./popper.CCJtDONc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    code: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    type: {
      type: String,
      default: "select",
      validator: (value) => ["select", "radio", "checkbox"].includes(value)
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: () => {
        return {
          width: "300px"
        };
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const dictStore = useDictStore();
    const props = __props;
    const emit = __emit;
    const options = ref([]);
    const selectedValue = ref(
      typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : Array.isArray(props.modelValue) ? props.modelValue : void 0
    );
    watch(
      [() => props.modelValue, () => options.value],
      ([newValue, newOptions]) => {
        if (newOptions.length > 0 && newValue !== void 0) {
          if (props.type === "checkbox") {
            selectedValue.value = Array.isArray(newValue) ? newValue : [];
          } else {
            const matchedOption = newOptions.find(
              (option) => String(option.value) === String(newValue)
            );
            selectedValue.value = matchedOption?.value;
          }
        } else {
          selectedValue.value = void 0;
        }
      },
      { immediate: true }
    );
    function handleChange(val) {
      emit("update:modelValue", val);
    }
    onMounted(async () => {
      await dictStore.loadDictItems(props.code);
      options.value = dictStore.getDictItems(props.code);
    });
    return (_ctx, _cache) => {
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup;
      return __props.type === "select" ? (openBlock(), createBlock(_component_el_select, {
        key: 0,
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(selectedValue) ? selectedValue.value = $event : null),
        placeholder: __props.placeholder,
        disabled: __props.disabled,
        clearable: "",
        style: normalizeStyle(__props.style),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
            return openBlock(), createBlock(_component_el_option, {
              key: option.value,
              label: option.label,
              value: option.value
            }, null, 8, ["label", "value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "disabled", "style"])) : __props.type === "radio" ? (openBlock(), createBlock(_component_el_radio_group, {
        key: 1,
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectedValue) ? selectedValue.value = $event : null),
        disabled: __props.disabled,
        style: normalizeStyle(__props.style),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
            return openBlock(), createBlock(_component_el_radio, {
              key: option.value,
              value: option.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(option.label), 1)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "style"])) : __props.type === "checkbox" ? (openBlock(), createBlock(_component_el_checkbox_group, {
        key: 2,
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(selectedValue) ? selectedValue.value = $event : null),
        disabled: __props.disabled,
        style: normalizeStyle(__props.style),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
            return openBlock(), createBlock(_component_el_checkbox, {
              key: option.value,
              value: option.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(option.label), 1)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "style"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _
};
