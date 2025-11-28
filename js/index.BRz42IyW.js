import { d as defineComponent, bM as mergeModels, bN as useModel, I as watch, e as createBlock, w as withCtx, C as createBaseVNode, m as createVNode, n as normalizeClass, f as openBlock } from "./index.CmLBO_Rw.js";
import { E as ElScrollbar } from "./scrollbar.DfgyWjDz.js";
import { E as ElPagination } from "./pagination.hnvEqliF.js";
/* empty css             */
import "./select.Bg8H27aw.js";
import "./popper.D_c7zDnS.js";
import "./input.DJmIVgFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: /* @__PURE__ */ mergeModels({
    total: {
      type: Number,
      default: 0
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  }, {
    "page": {
      type: Number,
      required: true,
      default: 1
    },
    "pageModifiers": {},
    "limit": {
      type: Number,
      required: true,
      default: 10
    },
    "limitModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["pagination"], ["update:page", "update:limit"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentPage = useModel(__props, "page");
    const pageSize = useModel(__props, "limit");
    watch(
      () => props.total,
      (newVal) => {
        const lastPage = Math.ceil(newVal / pageSize.value);
        if (newVal > 0 && currentPage.value > lastPage) {
          currentPage.value = lastPage;
          emit("pagination", { page: currentPage.value, limit: pageSize.value });
        }
      }
    );
    function handleSizeChange(val) {
      currentPage.value = 1;
      emit("pagination", { page: currentPage.value, limit: val });
    }
    function handleCurrentChange(val) {
      emit("pagination", { page: val, limit: pageSize.value });
    }
    return (_ctx, _cache) => {
      const _component_el_pagination = ElPagination;
      const _component_el_scrollbar = ElScrollbar;
      return openBlock(), createBlock(_component_el_scrollbar, null, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([{ hidden: __props.hidden }, "pagination"])
          }, [
            createVNode(_component_el_pagination, {
              "current-page": currentPage.value,
              "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => currentPage.value = $event),
              "page-size": pageSize.value,
              "onUpdate:pageSize": _cache[1] || (_cache[1] = ($event) => pageSize.value = $event),
              background: __props.background,
              layout: __props.layout,
              "page-sizes": __props.pageSizes,
              total: __props.total,
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["current-page", "page-size", "background", "layout", "page-sizes", "total"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const __unplugin_components_12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b84deba9"]]);
export {
  __unplugin_components_12 as _
};
