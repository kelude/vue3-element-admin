import { d as defineComponent, r as ref, dN as useVModel, P as watchEffect, ax as onBeforeMount, as as resolveComponent, e as createBlock, f as openBlock, w as withCtx, m as createVNode, i as unref, aA as isRef, E as ElIcon } from "./index.CmLBO_Rw.js";
import { E as ElCard } from "./card.BcK80iPz.js";
import { E as ElTree } from "./tree.CK4NMnAk.js";
import "./checkbox.BVtb9cA-.js";
import "./text.Cc0iYfpt.js";
import { E as ElInput } from "./input.DJmIVgFr.js";
import { D as DeptAPI } from "./dept-api.MbroGFJp.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DeptTree",
  props: {
    modelValue: {
      type: [String, Number],
      default: void 0
    }
  },
  emits: ["node-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const deptList = ref();
    const deptTreeRef = ref();
    const deptName = ref();
    const emits = __emit;
    const deptId = useVModel(props, "modelValue", emits);
    watchEffect(
      () => {
        deptTreeRef.value.filter(deptName.value);
      },
      {
        flush: "post"
        // watchEffect会在DOM挂载或者更新之前就会触发，此属性控制在DOM元素更新后运行
      }
    );
    function handleFilter(value, data) {
      if (!value) {
        return true;
      }
      return data.label.indexOf(value) !== -1;
    }
    function handleNodeClick(data) {
      deptId.value = data.value;
      emits("node-click");
    }
    onBeforeMount(() => {
      DeptAPI.getOptions().then((data) => {
        deptList.value = data;
      });
    });
    return (_ctx, _cache) => {
      const _component_Search = resolveComponent("Search");
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_tree = ElTree;
      const _component_el_card = ElCard;
      return openBlock(), createBlock(_component_el_card, { shadow: "never" }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: unref(deptName),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(deptName) ? deptName.value = $event : null),
            placeholder: "部门名称",
            clearable: ""
          }, {
            prefix: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Search)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(_component_el_tree, {
            ref_key: "deptTreeRef",
            ref: deptTreeRef,
            class: "mt-2",
            data: unref(deptList),
            props: { children: "children", label: "label", disabled: "" },
            "expand-on-click-node": false,
            "filter-node-method": handleFilter,
            "default-expand-all": "",
            onNodeClick: handleNodeClick
          }, null, 8, ["data"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _
};
