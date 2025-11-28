import { E as ElSelect, a as ElOption, s as selectKey } from "./select.Bg8H27aw.js";
import { E as ElTree } from "./tree.CK4NMnAk.js";
import { b as useNamespace, I as watch, o as onMounted, u as useEventListener, K as getEventCode, L as EVENT_CODE, U as nextTick, c as computed, aP as toRefs, d as defineComponent, B as getCurrentInstance, ad as isArray, bv as isEmpty, N as isNil, bw as isFunction, bx as isEqual, A as inject, H as isClient, _ as _export_sfc, r as ref, S as reactive, ab as h, q as withInstall } from "./index.CmLBO_Rw.js";
import { U as UPDATE_MODEL_EVENT } from "./event.BZTOGHfp.js";
import { p as pick } from "./index.eINu-mWW.js";
import { e as escapeStringRegexp } from "./strings.CZxJc60W.js";
const useSelect = (props, { attrs, emit }, {
  select,
  tree,
  key
}) => {
  const ns = useNamespace("tree-select");
  watch(() => props.data, () => {
    if (props.filterable) {
      nextTick(() => {
        var _a, _b;
        (_b = tree.value) == null ? void 0 : _b.filter((_a = select.value) == null ? void 0 : _a.states.inputValue);
      });
    }
  }, { flush: "post" });
  const focusLastNode = (listNode) => {
    var _a;
    const lastNode = listNode.at(-1);
    if (lastNode.expanded && lastNode.childNodes.at(-1)) {
      focusLastNode([lastNode.childNodes.at(-1)]);
    } else {
      const el = (_a = tree.value.el$) == null ? void 0 : _a.querySelector(`[data-key="${listNode.at(-1).key}"]`);
      el == null ? void 0 : el.focus({ preventScroll: true });
      return;
    }
  };
  onMounted(() => {
    useEventListener(() => {
      var _a;
      return (_a = select.value) == null ? void 0 : _a.$el;
    }, "keydown", async (evt) => {
      const code = getEventCode(evt);
      const { dropdownMenuVisible } = select.value;
      if ([EVENT_CODE.down, EVENT_CODE.up].includes(code) && dropdownMenuVisible) {
        await nextTick();
        setTimeout(() => {
          var _a, _b, _c;
          if (EVENT_CODE.up === code) {
            const listNode = tree.value.store.root.childNodes;
            focusLastNode(listNode);
            return;
          }
          (_c = (_b = (_a = select.value.optionsArray[select.value.states.hoveringIndex].$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.parentNode) == null ? void 0 : _c.focus({ preventScroll: true });
        });
      }
    }, {
      capture: true
    });
  });
  const result = {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    class: computed(() => attrs.class),
    style: computed(() => attrs.style),
    "onUpdate:modelValue": (value) => emit(UPDATE_MODEL_EVENT, value),
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns.e("popper")];
      if (props.popperClass)
        classes.push(props.popperClass);
      return classes.join(" ");
    }),
    filterMethod: (keyword = "") => {
      var _a;
      if (props.filterMethod) {
        props.filterMethod(keyword);
      } else if (props.remoteMethod) {
        props.remoteMethod(keyword);
      } else {
        (_a = tree.value) == null ? void 0 : _a.filter(keyword);
      }
    }
  };
  return result;
};
const component = defineComponent({
  extends: ElOption,
  setup(props, ctx) {
    const result = ElOption.setup(props, ctx);
    delete result.selectOptionClick;
    const vm = getCurrentInstance().proxy;
    nextTick(() => {
      if (!result.select.states.cachedOptions.get(vm.value)) {
        result.select.onOptionCreate(vm);
      }
    });
    watch(() => ctx.attrs.visible, (val) => {
      nextTick(() => {
        result.states.visible = val;
      });
    }, {
      immediate: true
    });
    return result;
  },
  methods: {
    selectOptionClick() {
      this.$el.parentElement.click();
    }
  }
});
function isValidValue(val) {
  return val || val === 0;
}
function isValidArray(val) {
  return isArray(val) && val.length;
}
function toValidArray(val) {
  return isArray(val) ? val : isValidValue(val) ? [val] : [];
}
function treeFind(treeData, findCallback, getChildren, resultCallback, parent) {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i];
    if (findCallback(data, i, treeData, parent)) {
      return resultCallback ? resultCallback(data, i, treeData, parent) : data;
    } else {
      const children = getChildren(data);
      if (isValidArray(children)) {
        const find = treeFind(children, findCallback, getChildren, resultCallback, data);
        if (find)
          return find;
      }
    }
  }
}
function treeEach(treeData, callback, getChildren, parent) {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i];
    callback(data, i, treeData, parent);
    const children = getChildren(data);
    if (isValidArray(children)) {
      treeEach(children, callback, getChildren, data);
    }
  }
}
const useTree = (props, { attrs, slots, emit }, {
  select,
  tree,
  key
}) => {
  watch([() => props.modelValue, tree], () => {
    if (props.showCheckbox) {
      nextTick(() => {
        const treeInstance = tree.value;
        if (treeInstance && !isEqual(treeInstance.getCheckedKeys(), toValidArray(props.modelValue))) {
          treeInstance.setCheckedKeys(toValidArray(props.modelValue));
        }
      });
    }
  }, {
    immediate: true,
    deep: true
  });
  const propsMap = computed(() => ({
    value: key.value,
    label: "label",
    children: "children",
    disabled: "disabled",
    isLeaf: "isLeaf",
    ...props.props
  }));
  const getNodeValByProp = (prop, data) => {
    var _a;
    const propVal = propsMap.value[prop];
    if (isFunction(propVal)) {
      return propVal(data, (_a = tree.value) == null ? void 0 : _a.getNode(getNodeValByProp("value", data)));
    } else {
      return data[propVal];
    }
  };
  const defaultExpandedParentKeys = toValidArray(props.modelValue).map((value) => {
    return treeFind(props.data || [], (data) => getNodeValByProp("value", data) === value, (data) => getNodeValByProp("children", data), (data, index, array, parent) => parent && getNodeValByProp("value", parent));
  }).filter((item) => isValidValue(item));
  const cacheOptions = computed(() => {
    if (!props.renderAfterExpand && !props.lazy)
      return [];
    const options = [];
    treeEach(props.data.concat(props.cacheData), (node) => {
      const value = getNodeValByProp("value", node);
      options.push({
        value,
        currentLabel: getNodeValByProp("label", node),
        isDisabled: getNodeValByProp("disabled", node)
      });
    }, (data) => getNodeValByProp("children", data));
    return options;
  });
  const getChildCheckedKeys = () => {
    var _a;
    return (_a = tree.value) == null ? void 0 : _a.getCheckedKeys().filter((checkedKey) => {
      var _a2;
      const node = (_a2 = tree.value) == null ? void 0 : _a2.getNode(checkedKey);
      return !isNil(node) && isEmpty(node.childNodes);
    });
  };
  return {
    ...pick(toRefs(props), Object.keys(ElTree.props)),
    ...attrs,
    nodeKey: key,
    expandOnClickNode: computed(() => {
      return !props.checkStrictly && props.expandOnClickNode;
    }),
    defaultExpandedKeys: computed(() => {
      return props.defaultExpandedKeys ? props.defaultExpandedKeys.concat(defaultExpandedParentKeys) : defaultExpandedParentKeys;
    }),
    renderContent: (h2, { node, data, store }) => {
      return h2(component, {
        value: getNodeValByProp("value", data),
        label: getNodeValByProp("label", data),
        disabled: getNodeValByProp("disabled", data),
        visible: node.visible
      }, props.renderContent ? () => props.renderContent(h2, { node, data, store }) : slots.default ? () => slots.default({ node, data, store }) : void 0);
    },
    filterNodeMethod: (value, data, node) => {
      if (props.filterNodeMethod)
        return props.filterNodeMethod(value, data, node);
      if (!value)
        return true;
      const regexp = new RegExp(escapeStringRegexp(value), "i");
      return regexp.test(getNodeValByProp("label", data) || "");
    },
    onNodeClick: (data, node, e) => {
      var _a, _b, _c;
      (_a = attrs.onNodeClick) == null ? void 0 : _a.call(attrs, data, node, e);
      if (props.showCheckbox && props.checkOnClickNode)
        return;
      if (!props.showCheckbox && (props.checkStrictly || node.isLeaf)) {
        if (!getNodeValByProp("disabled", data)) {
          const option = (_b = select.value) == null ? void 0 : _b.states.options.get(getNodeValByProp("value", data));
          (_c = select.value) == null ? void 0 : _c.handleOptionSelect(option);
        }
      } else if (props.expandOnClickNode) {
        e.proxy.handleExpandIconClick();
      }
    },
    onCheck: (data, params) => {
      var _a;
      if (!props.showCheckbox)
        return;
      const dataValue = getNodeValByProp("value", data);
      const dataMap = {};
      treeEach([tree.value.store.root], (node) => dataMap[node.key] = node, (node) => node.childNodes);
      const uncachedCheckedKeys = params.checkedKeys;
      const cachedKeys = props.multiple ? toValidArray(props.modelValue).filter((item) => !(item in dataMap) && !uncachedCheckedKeys.includes(item)) : [];
      const checkedKeys = cachedKeys.concat(uncachedCheckedKeys);
      if (props.checkStrictly) {
        emit(UPDATE_MODEL_EVENT, props.multiple ? checkedKeys : checkedKeys.includes(dataValue) ? dataValue : void 0);
      } else {
        if (props.multiple) {
          const childKeys = getChildCheckedKeys();
          emit(UPDATE_MODEL_EVENT, cachedKeys.concat(childKeys));
        } else {
          const firstLeaf = treeFind([data], (data2) => !isValidArray(getNodeValByProp("children", data2)) && !getNodeValByProp("disabled", data2), (data2) => getNodeValByProp("children", data2));
          const firstLeafKey = firstLeaf ? getNodeValByProp("value", firstLeaf) : void 0;
          const hasCheckedChild = isValidValue(props.modelValue) && !!treeFind([data], (data2) => getNodeValByProp("value", data2) === props.modelValue, (data2) => getNodeValByProp("children", data2));
          emit(UPDATE_MODEL_EVENT, firstLeafKey === props.modelValue || hasCheckedChild ? void 0 : firstLeafKey);
        }
      }
      nextTick(() => {
        var _a2;
        const checkedKeys2 = toValidArray(props.modelValue);
        tree.value.setCheckedKeys(checkedKeys2);
        (_a2 = attrs.onCheck) == null ? void 0 : _a2.call(attrs, data, {
          checkedKeys: tree.value.getCheckedKeys(),
          checkedNodes: tree.value.getCheckedNodes(),
          halfCheckedKeys: tree.value.getHalfCheckedKeys(),
          halfCheckedNodes: tree.value.getHalfCheckedNodes()
        });
      });
      (_a = select.value) == null ? void 0 : _a.focus();
    },
    onNodeExpand: (data, node, e) => {
      var _a;
      (_a = attrs.onNodeExpand) == null ? void 0 : _a.call(attrs, data, node, e);
      nextTick(() => {
        if (!props.checkStrictly && props.lazy && props.multiple && node.checked) {
          const dataMap = {};
          const uncachedCheckedKeys = tree.value.getCheckedKeys();
          treeEach([tree.value.store.root], (node2) => dataMap[node2.key] = node2, (node2) => node2.childNodes);
          const cachedKeys = toValidArray(props.modelValue).filter((item) => !(item in dataMap) && !uncachedCheckedKeys.includes(item));
          const childKeys = getChildCheckedKeys();
          emit(UPDATE_MODEL_EVENT, cachedKeys.concat(childKeys));
        }
      });
    },
    cacheOptions
  };
};
var CacheOptions = defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const select = inject(selectKey);
    watch(() => props.data, () => {
      var _a;
      props.data.forEach((item) => {
        if (!select.states.cachedOptions.has(item.value)) {
          select.states.cachedOptions.set(item.value, item);
        }
      });
      const inputs = ((_a = select.selectRef) == null ? void 0 : _a.querySelectorAll("input")) || [];
      if (isClient && !Array.from(inputs).includes(document.activeElement)) {
        select.setSelected();
      }
    }, { flush: "post", immediate: true });
    return () => void 0;
  }
});
const _sfc_main = defineComponent({
  name: "ElTreeSelect",
  inheritAttrs: false,
  props: {
    ...ElSelect.props,
    ...ElTree.props,
    cacheData: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    const { slots, expose } = context;
    const select = ref();
    const tree = ref();
    const key = computed(() => props.nodeKey || props.valueKey || "value");
    const selectProps = useSelect(props, context, { select, tree, key });
    const { cacheOptions, ...treeProps } = useTree(props, context, {
      select,
      tree,
      key
    });
    const methods = reactive({});
    expose(methods);
    onMounted(() => {
      Object.assign(methods, {
        ...pick(tree.value, [
          "filter",
          "updateKeyChildren",
          "getCheckedNodes",
          "setCheckedNodes",
          "getCheckedKeys",
          "setCheckedKeys",
          "setChecked",
          "getHalfCheckedNodes",
          "getHalfCheckedKeys",
          "getCurrentKey",
          "getCurrentNode",
          "setCurrentKey",
          "setCurrentNode",
          "getNode",
          "remove",
          "append",
          "insertBefore",
          "insertAfter"
        ]),
        ...pick(select.value, ["focus", "blur", "selectedLabel"]),
        treeRef: tree.value,
        selectRef: select.value
      });
    });
    return () => h(ElSelect, reactive({
      ...selectProps,
      ref: (ref2) => select.value = ref2
    }), {
      ...slots,
      default: () => [
        h(CacheOptions, { data: cacheOptions.value }),
        h(ElTree, reactive({
          ...treeProps,
          ref: (ref2) => tree.value = ref2
        }))
      ]
    });
  }
});
var TreeSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "tree-select.vue"]]);
const ElTreeSelect = withInstall(TreeSelect);
export {
  ElTreeSelect as E
};
