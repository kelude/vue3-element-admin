import { d as defineComponent, ap as useRoute, r as ref, S as reactive, c as computed, o as onMounted, as as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, F as toDisplayString, j as withModifiers, aA as isRef, P as Fragment, Q as renderList, E as ElIcon, bl as DictAPI, aG as ElMessage } from "./index.C-w1mPR5.js";
import { v as vLoading } from "./loading.D45eDDgt.js";
import { E as ElDialog } from "./dialog.DTSleIRn.js";
import "./overlay.6P5GvOwu.js";
/* empty css             */
import { E as ElSelect, a as ElOption } from "./select.DEZ3TM_z.js";
import "./scrollbar.DFEDmrTe.js";
import { E as ElTooltip } from "./popper.B8758rPD.js";
/* empty css                 */
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { E as ElInputNumber } from "./input-number.DMu3FxpM.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.BKt65S9k.js";
import { E as ElCard } from "./card.EBLyLLiR.js";
import { _ as __unplugin_components_12 } from "./index.D7ylDnoz.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.CVY5P60L.js";
import "./checkbox.C7Foa8TW.js";
import { E as ElFormItem, a as ElForm } from "./form-item.Dj1vXnXz.js";
/* empty css                */
/* empty css                     */
import { E as ElButton } from "./index.BMPR14Hc.js";
import { E as ElTag } from "./index.C28lPzad.js";
import { E as ElMessageBox } from "./index.DacSnX-o.js";
import "./index.Y-PlGRQ9.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.DBHfYhTD.js";
import "./vnode.AKE4hrFO.js";
import "./event.BZTOGHfp.js";
import "./error.BVJkE67s.js";
import "./scroll.BCEJlaVo.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./token.BqWJQ4CJ.js";
import "./strings.U77u0PSM.js";
import "./castArray.C7_3uu86.js";
import "./index.BLtH7mBo.js";
import "./debounce.sHE95kMl.js";
import "./toNumber.BD3fO3HE.js";
import "./_baseIteratee.CQTSDRqz.js";
import "./index.DmNrmtFU.js";
import "./index.CHVt_Cot.js";
import "./index.D1LU_lkm.js";
import "./index.Cz0Zbu2t.js";
import "./index.DWacv60v.js";
import "./pagination.Cdh-VGb5.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./raf.DEAyVqZt.js";
import "./_baseClone.vDnszwId.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "flex-y-center" };
const _hoisted_6 = {
  "flex-y-center": "",
  "gap-10px": ""
};
const _hoisted_7 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dict-item",
  setup(__props) {
    const route = useRoute();
    const dictCode = ref(route.query.dictCode);
    const queryFormRef = ref();
    const dataFormRef = ref();
    const loading = ref(false);
    const ids = ref([]);
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const tableData = ref();
    const dialog = reactive({
      title: "",
      visible: false
    });
    const formData = reactive({});
    const tagType = ["primary", "success", "info", "warning", "danger"];
    const computedRules = computed(() => {
      const rules = {
        value: [{ required: true, message: "请输入字典值", trigger: "blur" }],
        label: [{ required: true, message: "请输入字典标签", trigger: "blur" }]
      };
      return rules;
    });
    function fetchData() {
      loading.value = true;
      DictAPI.getDictItemPage(dictCode.value, queryParams).then((data) => {
        tableData.value = data.list;
        total.value = data.total;
      }).finally(() => {
        loading.value = false;
      });
    }
    function handleQuery() {
      queryParams.pageNum = 1;
      fetchData();
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      queryParams.pageNum = 1;
      fetchData();
    }
    function handleSelectionChange(selection) {
      ids.value = selection.map((item) => item.id);
    }
    function handleOpenDialog(row) {
      dialog.visible = true;
      dialog.title = row ? "编辑字典项" : "新增字典项";
      if (row?.id) {
        DictAPI.getDictItemFormData(dictCode.value, row.id).then((data) => {
          Object.assign(formData, data);
        });
      }
    }
    function handleSubmitClick() {
      dataFormRef.value.validate((isValid) => {
        if (isValid) {
          loading.value = true;
          const id = formData.id;
          formData.dictCode = dictCode.value;
          if (id) {
            DictAPI.updateDictItem(dictCode.value, id, formData).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleQuery();
            }).finally(() => loading.value = false);
          } else {
            DictAPI.createDictItem(dictCode.value, formData).then(() => {
              ElMessage.success("新增成功");
              handleCloseDialog();
              handleQuery();
            }).finally(() => loading.value = false);
          }
        }
      });
    }
    function handleCloseDialog() {
      dataFormRef.value.resetFields();
      dataFormRef.value.clearValidate();
      formData.id = void 0;
      formData.sort = 1;
      formData.status = 1;
      formData.tagType = "";
      dialog.visible = false;
    }
    function handleDelete(id) {
      const itemIds = [id || ids.value].join(",");
      if (!itemIds) {
        ElMessage.warning("请勾选删除项");
        return;
      }
      ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(
        () => {
          DictAPI.deleteDictItems(dictCode.value, itemIds).then(() => {
            ElMessage.success("删除成功");
            handleResetQuery();
          });
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_input_number = ElInputNumber;
      const _component_QuestionFilled = resolveComponent("QuestionFilled");
      const _component_el_icon = ElIcon;
      const _component_el_tooltip = ElTooltip;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_dialog = ElDialog;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_form, {
            ref_key: "queryFormRef",
            ref: queryFormRef,
            model: unref(queryParams),
            inline: true
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "关键字",
                prop: "keywords"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).keywords,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).keywords = $event),
                    placeholder: "字典标签/字典值",
                    clearable: "",
                    onKeyup: withKeys(handleQuery, ["enter"])
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { class: "search-buttons" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    icon: "search",
                    onClick: handleQuery
                  }, {
                    default: withCtx(() => [..._cache[13] || (_cache[13] = [
                      createTextVNode("搜索", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: handleResetQuery
                  }, {
                    default: withCtx(() => [..._cache[14] || (_cache[14] = [
                      createTextVNode("重置", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createVNode(_component_el_card, {
          shadow: "never",
          class: "data-table"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_el_button, {
                  type: "success",
                  icon: "plus",
                  onClick: _cache[1] || (_cache[1] = ($event) => handleOpenDialog())
                }, {
                  default: withCtx(() => [..._cache[15] || (_cache[15] = [
                    createTextVNode("新增", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  type: "danger",
                  disabled: unref(ids).length === 0,
                  icon: "delete",
                  onClick: _cache[2] || (_cache[2] = ($event) => handleDelete())
                }, {
                  default: withCtx(() => [..._cache[16] || (_cache[16] = [
                    createTextVNode(" 删除 ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              "highlight-current-row": "",
              data: unref(tableData),
              border: "",
              onSelectionChange: handleSelectionChange
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: "selection",
                  width: "55",
                  align: "center"
                }),
                createVNode(_component_el_table_column, {
                  label: "字典项标签",
                  prop: "label"
                }),
                createVNode(_component_el_table_column, {
                  label: "字典项值",
                  prop: "value"
                }),
                createVNode(_component_el_table_column, {
                  label: "排序",
                  prop: "sort"
                }),
                createVNode(_component_el_table_column, { label: "状态" }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_tag, {
                      type: scope.row.status === 1 ? "success" : "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(scope.row.status === 1 ? "启用" : "禁用"), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  fixed: "right",
                  label: "操作",
                  align: "center",
                  width: "220"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      size: "small",
                      icon: "edit",
                      onClick: withModifiers(($event) => handleOpenDialog(scope.row), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[17] || (_cache[17] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "danger",
                      link: "",
                      size: "small",
                      icon: "delete",
                      onClick: withModifiers(($event) => handleDelete(scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[18] || (_cache[18] = [
                        createTextVNode(" 删除 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])), [
              [_directive_loading, unref(loading)]
            ]),
            unref(total) > 0 ? (openBlock(), createBlock(_component_pagination, {
              key: 0,
              total: unref(total),
              "onUpdate:total": _cache[3] || (_cache[3] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[4] || (_cache[4] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[5] || (_cache[5] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: fetchData
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: "600px",
          onClose: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmitClick
              }, {
                default: withCtx(() => [..._cache[23] || (_cache[23] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[24] || (_cache[24] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "dataFormRef",
              ref: dataFormRef,
              model: unref(formData),
              rules: unref(computedRules),
              "label-width": "100px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "字典项标签",
                  prop: "label"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).label,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).label = $event),
                      placeholder: "请输入字典标签"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "字典项值",
                  prop: "value"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).value,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).value = $event),
                      placeholder: "请输入字典值"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "状态" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).status,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(formData).status = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[19] || (_cache[19] = [
                            createTextVNode("启用", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 0 }, {
                          default: withCtx(() => [..._cache[20] || (_cache[20] = [
                            createTextVNode("禁用", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "排序" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input_number, {
                      modelValue: unref(formData).sort,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(formData).sort = $event),
                      "controls-position": "right"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, null, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_5, [
                      _cache[22] || (_cache[22] = createTextVNode(" 标签类型 ", -1)),
                      createVNode(_component_el_tooltip, null, {
                        content: withCtx(() => [..._cache[21] || (_cache[21] = [
                          createTextVNode("回显样式，为空时则显示 '文本'", -1)
                        ])]),
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { class: "ml-1 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode(_component_QuestionFilled)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: unref(formData).tagType,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(formData).tagType = $event),
                      placeholder: "请选择标签类型",
                      clearable: "",
                      onClear: _cache[11] || (_cache[11] = ($event) => unref(formData).tagType = "")
                    }, {
                      label: withCtx(({ value }) => [
                        value ? (openBlock(), createBlock(_component_el_tag, {
                          key: 0,
                          type: value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formData).label ? unref(formData).label : "字典标签"), 1)
                          ]),
                          _: 1
                        }, 8, ["type"])) : createCommentVNode("", true)
                      ]),
                      default: withCtx(() => [
                        (openBlock(), createElementBlock(Fragment, null, renderList(tagType, (type) => {
                          return createVNode(_component_el_option, {
                            key: type,
                            label: type,
                            value: type
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_6, [
                                createVNode(_component_el_tag, { type }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(formData).label ?? "字典标签"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["type"]),
                                createBaseVNode("span", null, toDisplayString(type), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["label", "value"]);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
