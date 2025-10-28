import { d as defineComponent, r as ref, S as reactive, b5 as useResizeObserver, c as computed, as as resolveComponent, g as createElementBlock, f as openBlock, k as normalizeStyle, i as unref, m as createVNode, Z as mergeProps, w as withCtx, C as createBaseVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, P as Fragment, Q as renderList, a3 as withKeys, a4 as createTextVNode, n as normalizeClass, l as renderSlot, F as toDisplayString, E as ElIcon, aG as ElMessage, bc as UserAPI, bV as useDictStore } from "./index.CjDU5CMT.js";
import { v as vLoading } from "./loading.VFMs3r9q.js";
import "./popper.CVURbzwO.js";
import { E as ElPopover } from "./popover.C7yG1fr8.js";
import { _ as __unplugin_components_12 } from "./index.p6Lj-BJd.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.hLYp9Dcy.js";
import "./checkbox.Dum2PTxz.js";
/* empty css                 */
import "./scrollbar.Cvm8P6mA.js";
/* empty css             */
import { a as ElForm, E as ElFormItem } from "./form-item.nVgD0sQO.js";
/* empty css                */
import { E as ElDatePicker } from "./date-picker-panel.D0RieSl5.js";
import { E as ElInput } from "./input.mLRPLJvT.js";
import { E as ElSelect, a as ElOption } from "./select.k4MfD7cG.js";
import "./tree.BOpUeR1f.js";
import "./text.BhAbWWKi.js";
import { E as ElTreeSelect } from "./tree-select.Ckx52jar.js";
import { E as ElButton } from "./index.D2tRBopO.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import { _ as _sfc_main$2 } from "./DictLabel.vue_vue_type_script_setup_true_lang.pd3aRIJ9.js";
import { E as ElLink } from "./link.KJjpinkR.js";
import { E as ElTag } from "./index.BR6nY3fC.js";
import "./index.DR0hHISx.js";
import "./index.kBJnZjK7.js";
import "./aria.McRhojP9.js";
import "./index.BIuzPtP6.js";
import "./use-form-common-props.BPtRgoS9.js";
import "./dropdown.J82WwAtK.js";
import "./pagination.DvJ8Xqy6.js";
import "./event.BZTOGHfp.js";
import "./index.3UkwCaMF.js";
import "./error.BVJkE67s.js";
import "./_initCloneObject.tFWjqE6V.js";
import "./raf.kR-SyviK.js";
import "./_baseIteratee.8Db5_go8.js";
import "./castArray.CGtXUNId.js";
import "./debounce.DqQI4auM.js";
import "./toNumber.Bjx_Wkzc.js";
import "./index.Cy9yngL_.js";
import "./_baseClone.C7MQiCf9.js";
import "./dayjs.min.IF1tzgnz.js";
import "./index.6kvQcyfU.js";
import "./index.CCbVilVt.js";
import "./index.BWKss2Xq.js";
import "./token.BqWJQ4CJ.js";
import "./strings.DkiybUg_.js";
import "./scroll.B3F9zOvi.js";
import "./vnode.CaTm_f_o.js";
import "./index.BNPSNYty.js";
const _hoisted_1$1 = { class: "feedback" };
const pageSize = 10;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    selectConfig: {},
    text: { default: "" }
  },
  emits: ["confirmClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const pk = props.selectConfig.pk ?? "id";
    const isMultiple = props.selectConfig.multiple === true;
    const width = props.selectConfig.width ?? "100%";
    const placeholder = props.selectConfig.placeholder ?? "请选择";
    const popoverVisible = ref(false);
    const loading = ref(false);
    const total = ref(0);
    const pageData = ref([]);
    const queryParams = reactive({
      pageNum: 1,
      pageSize
    });
    const tableSelectRef = ref();
    const popoverWidth = ref(width);
    useResizeObserver(tableSelectRef, (entries) => {
      popoverWidth.value = `${entries[0].contentRect.width}px`;
    });
    const formRef = ref();
    for (const item of props.selectConfig.formItems) {
      queryParams[item.prop] = item.initialValue ?? "";
    }
    function handleReset() {
      formRef.value?.resetFields();
      fetchPageData(true);
    }
    function handleQuery() {
      fetchPageData(true);
    }
    function fetchPageData(isRestart = false) {
      loading.value = true;
      if (isRestart) {
        queryParams.pageNum = 1;
        queryParams.pageSize = pageSize;
      }
      props.selectConfig.indexAction(queryParams).then((data) => {
        total.value = data.total;
        pageData.value = data.list;
      }).finally(() => {
        loading.value = false;
      });
    }
    const tableRef = ref();
    for (const item of props.selectConfig.tableColumns) {
      if (item.type === "selection") {
        item.reserveSelection = true;
        break;
      }
    }
    const selectedItems = ref([]);
    const confirmText = computed(() => {
      return selectedItems.value.length > 0 ? `已选(${selectedItems.value.length})` : "确 定";
    });
    function handleSelect(selection) {
      if (isMultiple || selection.length === 0) {
        selectedItems.value = selection;
      } else {
        selectedItems.value = [selection[selection.length - 1]];
        tableRef.value?.clearSelection();
        tableRef.value?.toggleRowSelection(selectedItems.value[0], true);
        tableRef.value?.setCurrentRow(selectedItems.value[0]);
      }
    }
    function handleSelectAll(selection) {
      if (isMultiple) {
        selectedItems.value = selection;
      }
    }
    function handlePagination() {
      fetchPageData();
    }
    const isInit = ref(false);
    function handleShow() {
      if (isInit.value === false) {
        isInit.value = true;
        fetchPageData();
      }
    }
    function handleConfirm() {
      if (selectedItems.value.length === 0) {
        ElMessage.error("请选择数据");
        return;
      }
      popoverVisible.value = false;
      emit("confirmClick", selectedItems.value);
    }
    function handleClear() {
      tableRef.value?.clearSelection();
      selectedItems.value = [];
    }
    function handleClose() {
      popoverVisible.value = false;
    }
    const popoverContentRef = ref();
    return (_ctx, _cache) => {
      const _component_ArrowDown = resolveComponent("ArrowDown");
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_popover = ElPopover;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", {
        ref_key: "tableSelectRef",
        ref: tableSelectRef,
        style: normalizeStyle("width:" + unref(width))
      }, [
        createVNode(_component_el_popover, mergeProps({
          visible: popoverVisible.value,
          width: popoverWidth.value,
          placement: "bottom-end"
        }, __props.selectConfig.popover, { onShow: handleShow }), {
          reference: withCtx(() => [
            createBaseVNode("div", {
              onClick: _cache[0] || (_cache[0] = ($event) => popoverVisible.value = !popoverVisible.value)
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_el_input, {
                  class: "reference",
                  "model-value": __props.text,
                  readonly: true,
                  placeholder: unref(placeholder)
                }, {
                  suffix: withCtx(() => [
                    createVNode(_component_el_icon, {
                      style: normalizeStyle({
                        transform: popoverVisible.value ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform .5s"
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ArrowDown)
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                }, 8, ["model-value", "placeholder"])
              ], true)
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              ref_key: "popoverContentRef",
              ref: popoverContentRef
            }, [
              createVNode(_component_el_form, {
                ref_key: "formRef",
                ref: formRef,
                model: queryParams,
                inline: true
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.selectConfig.formItems, (item) => {
                    return openBlock(), createBlock(_component_el_form_item, {
                      key: item.prop,
                      label: item.label,
                      prop: item.prop
                    }, {
                      default: withCtx(() => [
                        item.type === "input" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          item.attrs?.type === "number" ? (openBlock(), createBlock(_component_el_input, mergeProps({
                            key: 0,
                            modelValue: queryParams[item.prop],
                            "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event,
                            modelModifiers: { number: true }
                          }, { ref_for: true }, item.attrs, {
                            onKeyup: withKeys(handleQuery, ["enter"])
                          }), null, 16, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_el_input, mergeProps({
                            key: 1,
                            modelValue: queryParams[item.prop],
                            "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event
                          }, { ref_for: true }, item.attrs, {
                            onKeyup: withKeys(handleQuery, ["enter"])
                          }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                        ], 64)) : item.type === "select" ? (openBlock(), createBlock(_component_el_select, mergeProps({
                          key: 1,
                          modelValue: queryParams[item.prop],
                          "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event
                        }, { ref_for: true }, item.attrs), {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: option.value,
                                label: option.label,
                                value: option.value
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1040, ["modelValue", "onUpdate:modelValue"])) : item.type === "tree-select" ? (openBlock(), createBlock(_component_el_tree_select, mergeProps({
                          key: 2,
                          modelValue: queryParams[item.prop],
                          "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event
                        }, { ref_for: true }, item.attrs), null, 16, ["modelValue", "onUpdate:modelValue"])) : item.type === "date-picker" ? (openBlock(), createBlock(_component_el_date_picker, mergeProps({
                          key: 3,
                          modelValue: queryParams[item.prop],
                          "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event
                        }, { ref_for: true }, item.attrs), null, 16, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                          item.attrs?.type === "number" ? (openBlock(), createBlock(_component_el_input, mergeProps({
                            key: 0,
                            modelValue: queryParams[item.prop],
                            "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event,
                            modelModifiers: { number: true }
                          }, { ref_for: true }, item.attrs, {
                            onKeyup: withKeys(handleQuery, ["enter"])
                          }), null, 16, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_el_input, mergeProps({
                            key: 1,
                            modelValue: queryParams[item.prop],
                            "onUpdate:modelValue": ($event) => queryParams[item.prop] = $event
                          }, { ref_for: true }, item.attrs, {
                            onKeyup: withKeys(handleQuery, ["enter"])
                          }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                        ], 64))
                      ]),
                      _: 2
                    }, 1032, ["label", "prop"]);
                  }), 128)),
                  createVNode(_component_el_form_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_button, {
                        type: "primary",
                        icon: "search",
                        onClick: handleQuery
                      }, {
                        default: withCtx(() => [..._cache[4] || (_cache[4] = [
                          createTextVNode("搜索", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_el_button, {
                        icon: "refresh",
                        onClick: handleReset
                      }, {
                        default: withCtx(() => [..._cache[5] || (_cache[5] = [
                          createTextVNode("重置", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"]),
              withDirectives((openBlock(), createBlock(_component_el_table, {
                ref_key: "tableRef",
                ref: tableRef,
                data: pageData.value,
                border: true,
                "max-height": 250,
                "row-key": unref(pk),
                "highlight-current-row": true,
                class: normalizeClass({ radio: !isMultiple }),
                onSelect: handleSelect,
                onSelectAll: handleSelectAll
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.selectConfig.tableColumns, (col) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: col.prop
                    }, [
                      col.templet === "custom" ? (openBlock(), createBlock(_component_el_table_column, mergeProps({
                        key: 0,
                        ref_for: true
                      }, col), {
                        default: withCtx((scope) => [
                          renderSlot(_ctx.$slots, col.slotName ?? col.prop, mergeProps({
                            prop: col.prop
                          }, { ref_for: true }, scope), void 0, true)
                        ]),
                        _: 2
                      }, 1040)) : (openBlock(), createBlock(_component_el_table_column, mergeProps({
                        key: 1,
                        ref_for: true
                      }, col), null, 16))
                    ], 64);
                  }), 128))
                ]),
                _: 3
              }, 8, ["data", "row-key", "class"])), [
                [_directive_loading, loading.value]
              ]),
              total.value > 0 ? (openBlock(), createBlock(_component_pagination, {
                key: 0,
                total: total.value,
                "onUpdate:total": _cache[1] || (_cache[1] = ($event) => total.value = $event),
                page: queryParams.pageNum,
                "onUpdate:page": _cache[2] || (_cache[2] = ($event) => queryParams.pageNum = $event),
                limit: queryParams.pageSize,
                "onUpdate:limit": _cache[3] || (_cache[3] = ($event) => queryParams.pageSize = $event),
                onPagination: handlePagination
              }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(_component_el_button, {
                  type: "primary",
                  size: "small",
                  onClick: handleConfirm
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(confirmText.value), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  size: "small",
                  onClick: handleClear
                }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createTextVNode("清 空", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  size: "small",
                  onClick: handleClose
                }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode("关 闭", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 512)
          ]),
          _: 3
        }, 16, ["visible", "width"])
      ], 4);
    };
  }
});
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-50915979"]]);
const selectConfig = {
  pk: "id",
  width: "70%",
  placeholder: "请选择用户",
  formItems: [
    {
      type: "input",
      label: "关键字",
      prop: "keywords",
      attrs: {
        placeholder: "用户名/昵称/手机号",
        clearable: true,
        style: {
          width: "200px"
        }
      }
    },
    {
      type: "tree-select",
      label: "部门",
      prop: "deptId",
      attrs: {
        placeholder: "请选择",
        data: [
          {
            value: 1,
            label: "有来技术",
            children: [
              {
                value: 2,
                label: "研发部门"
              },
              {
                value: 3,
                label: "测试部门"
              }
            ]
          }
        ],
        filterable: true,
        "check-strictly": true,
        "render-after-expand": false,
        clearable: true,
        style: {
          width: "150px"
        }
      }
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      attrs: {
        placeholder: "全部",
        clearable: true,
        style: {
          width: "100px"
        }
      },
      options: [
        { label: "启用", value: 1 },
        { label: "禁用", value: 0 }
      ]
    },
    {
      type: "date-picker",
      label: "创建时间",
      prop: "createAt",
      attrs: {
        type: "daterange",
        "range-separator": "~",
        "start-placeholder": "开始时间",
        "end-placeholder": "截止时间",
        "value-format": "YYYY-MM-DD",
        style: {
          width: "240px"
        }
      }
    }
  ],
  indexAction(params) {
    if ("createAt" in params) {
      const createAt = params.createAt;
      if (createAt?.length > 1) {
        params.startTime = createAt[0];
        params.endTime = createAt[1];
      }
      delete params.createAt;
    }
    return UserAPI.getPage(params);
  },
  tableColumns: [
    { type: "selection", width: 50, align: "center" },
    { label: "编号", align: "center", prop: "id", width: 100 },
    { label: "用户名", align: "center", prop: "username" },
    { label: "用户昵称", align: "center", prop: "nickname", width: 120 },
    {
      label: "性别",
      align: "center",
      prop: "gender",
      width: 100,
      templet: "custom",
      slotName: "gender"
    },
    { label: "部门", align: "center", prop: "deptName", width: 120 },
    { label: "手机号码", align: "center", prop: "mobile", width: 120 },
    {
      label: "状态",
      align: "center",
      prop: "status",
      templet: "custom",
      slotName: "status"
    },
    { label: "创建时间", align: "center", prop: "createTime", width: 180 }
  ]
};
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const dictStore = useDictStore();
    const selectedUser = ref();
    function handleConfirm(data) {
      selectedUser.value = data[0];
    }
    const text = computed(() => {
      const dictData = dictStore.getDictItems("gender");
      const genderLabel = dictData.find((item) => item.value == selectedUser.value?.gender)?.label;
      return selectedUser.value ? `${selectedUser.value.username} - ${genderLabel} - ${selectedUser.value.deptName}` : "";
    });
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_el_tag = ElTag;
      const _component_DictLabel = _sfc_main$2;
      const _component_table_select = __unplugin_components_3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/table-select/index.vue",
          type: "primary",
          target: "_blank",
          class: "mb-10"
        }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_table_select, {
          text: unref(text),
          "select-config": unref(selectConfig),
          onConfirmClick: handleConfirm
        }, {
          status: withCtx((scope) => [
            createVNode(_component_el_tag, {
              type: scope.row[scope.prop] == 1 ? "success" : "info"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(scope.row[scope.prop] == 1 ? "启用" : "禁用"), 1)
              ]),
              _: 2
            }, 1032, ["type"])
          ]),
          gender: withCtx((scope) => [
            createVNode(_component_DictLabel, {
              modelValue: scope.row.gender,
              "onUpdate:modelValue": ($event) => scope.row.gender = $event,
              code: "gender"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 1
        }, 8, ["text", "select-config"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
