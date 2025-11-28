import { M as isString, b2 as isNumber, bB as isBoolean, t as buildProps, W as useSizeProp, r as ref, A as inject, c as computed, aj as isPropAbsent, _ as _export_sfc, d as defineComponent, b as useNamespace, g as createElementBlock, f as openBlock, C as createBaseVNode, $ as withDirectives, cq as vModelRadio, i as unref, j as withModifiers, n as normalizeClass, aA as isRef, l as renderSlot, a4 as createTextVNode, F as toDisplayString, U as nextTick, k as normalizeStyle, z as definePropType, o as onMounted, y as provide, S as reactive, aP as toRefs, I as watch, Q as Fragment, R as renderList, e as createBlock, Z as mergeProps, D as resolveDynamicComponent, bx as isEqual, G as withNoopInstall, q as withInstall } from "./index.CmLBO_Rw.js";
import { C as CHANGE_EVENT, U as UPDATE_MODEL_EVENT } from "./event.BZTOGHfp.js";
import { b as useFormSize, a as useFormDisabled, d as useId, u as useFormItem, c as useFormItemInputId } from "./use-form-common-props.DLum1V4R.js";
import { u as useDeprecated } from "./index.C_1JB0Ji.js";
import { u as useAriaProps } from "./index.eINu-mWW.js";
import { d as debugWarn } from "./error.BVJkE67s.js";
import { o as omit } from "./omit.DmqBmAN3.js";
const radioPropsBase = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  name: {
    type: String,
    default: void 0
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const radioGroupKey = Symbol("radioGroupKey");
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === actualValue.value;
    }
  });
  const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== actualValue.value ? -1 : 0;
  });
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-radio",
    ref: "https://element-plus.org/en-US/component/radio.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
    actualValue
  };
};
const __default__$2 = defineComponent({
  name: "ElRadio"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue, actualValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit(CHANGE_EVENT, modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).is("bordered", _ctx.border),
          unref(ns).is("checked", unref(modelValue) === unref(actualValue)),
          unref(ns).m(unref(size))
        ])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([
            unref(ns).e("input"),
            unref(ns).is("disabled", unref(disabled)),
            unref(ns).is("checked", unref(modelValue) === unref(actualValue))
          ])
        }, [
          withDirectives(createBaseVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
            class: normalizeClass(unref(ns).e("original")),
            value: unref(actualValue),
            name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
            disabled: unref(disabled),
            checked: unref(modelValue) === unref(actualValue),
            type: "radio",
            onFocus: ($event) => focus.value = true,
            onBlur: ($event) => focus.value = false,
            onChange: handleChange,
            onClick: withModifiers(() => {
            }, ["stop"])
          }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [
            [vModelRadio, unref(modelValue)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(unref(ns).e("label")),
          onKeydown: withModifiers(() => {
          }, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 42, ["onKeydown"])
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase
});
const __default__$1 = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup, actualValue } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b("button"),
          unref(ns).is("active", unref(modelValue) === unref(actualValue)),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).bm("button", unref(size))
        ])
      }, [
        withDirectives(createBaseVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
          class: normalizeClass(unref(ns).be("button", "original-radio")),
          value: unref(actualValue),
          type: "radio",
          name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
          disabled: unref(disabled),
          onFocus: ($event) => focus.value = true,
          onBlur: ($event) => focus.value = false,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [
          [vModelRadio, unref(modelValue)]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === unref(actualValue) ? unref(activeStyle) : {}),
          onKeydown: withModifiers(() => {
          }, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 46, ["onKeydown"])
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  fill: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  options: {
    type: definePropType(Array)
  },
  props: {
    type: definePropType(Object),
    default: () => radioDefaultProps
  },
  type: {
    type: String,
    values: ["radio", "button"],
    default: "radio"
  },
  ...useAriaProps(["ariaLabel"])
});
const radioGroupEmits = radioEmits;
const radioDefaultProps = {
  label: "label",
  value: "value",
  disabled: "disabled"
};
const __default__ = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit(CHANGE_EVENT, value));
    };
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = computed(() => {
      return props.name || radioId.value;
    });
    const aliasProps = computed(() => ({
      ...radioDefaultProps,
      ...props.props
    }));
    const getOptionProps = (option) => {
      const { label, value, disabled } = aliasProps.value;
      const base = {
        label: option[label],
        value: option[value],
        disabled: option[disabled]
      };
      return { ...omit(option, [label, value, disabled]), ...base };
    };
    const optionComponent = computed(() => props.type === "button" ? RadioButton : Radio);
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, (newVal, oldValue) => {
      if (props.validateEvent && !isEqual(newVal, oldValue)) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.ariaLabel || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item, index) => {
            return openBlock(), createBlock(resolveDynamicComponent(unref(optionComponent)), mergeProps({ key: index }, getOptionProps(item)), null, 16);
          }), 128))
        ])
      ], 10, ["id", "aria-label", "aria-labelledby"]);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "radio-group.vue"]]);
const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
const ElRadioButton = withNoopInstall(RadioButton);
export {
  ElRadioGroup as E,
  ElRadio as a,
  ElRadioButton as b
};
