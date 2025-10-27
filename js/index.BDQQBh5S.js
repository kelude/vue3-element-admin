import { d as defineComponent, r as ref, S as reactive, o as onMounted, bO as resolveDirective, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, j as withModifiers, aG as ElMessage } from "./index.C-w1mPR5.js";
import { v as vLoading } from "./loading.D45eDDgt.js";
import { E as ElDialog } from "./dialog.DTSleIRn.js";
import "./overlay.6P5GvOwu.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.BKt65S9k.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { E as ElInputNumber } from "./input-number.DMu3FxpM.js";
/* empty css             */
import { E as ElSelect, a as ElOption } from "./select.DEZ3TM_z.js";
import "./scrollbar.DFEDmrTe.js";
import "./popper.B8758rPD.js";
import "./tree.ynWXrFOv.js";
import "./checkbox.C7Foa8TW.js";
import "./text.CCBnW7lr.js";
import { E as ElTreeSelect } from "./tree-select.yRX5csdz.js";
import { E as ElCard } from "./card.EBLyLLiR.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.CVY5P60L.js";
/* empty css                 */
import { E as ElFormItem, a as ElForm } from "./form-item.Dj1vXnXz.js";
/* empty css                */
import { D as DeptAPI } from "./dept-api.BknzzAqK.js";
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
import "./index.DmNrmtFU.js";
import "./index.Cz0Zbu2t.js";
import "./index.BLtH7mBo.js";
import "./index.DWacv60v.js";
import "./token.BqWJQ4CJ.js";
import "./strings.U77u0PSM.js";
import "./castArray.C7_3uu86.js";
import "./debounce.sHE95kMl.js";
import "./toNumber.BD3fO3HE.js";
import "./_baseIteratee.CQTSDRqz.js";
import "./index.CHVt_Cot.js";
import "./index.D1LU_lkm.js";
import "./index.CmFsai64.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./raf.DEAyVqZt.js";
import "./_baseClone.vDnszwId.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dept",
    inheritAttrs: false
  },
  __name: "index",
  setup(__props) {
    const queryFormRef = ref();
    const deptFormRef = ref();
    const loading = ref(false);
    const selectIds = ref([]);
    const queryParams = reactive({});
    const dialog = reactive({
      title: "",
      visible: false
    });
    const deptList = ref();
    const deptOptions = ref();
    const formData = reactive({
      status: 1,
      parentId: "0",
      sort: 1
    });
    const rules = reactive({
      parentId: [{ required: true, message: "上级部门不能为空", trigger: "change" }],
      name: [{ required: true, message: "部门名称不能为空", trigger: "blur" }],
      code: [{ required: true, message: "部门编号不能为空", trigger: "blur" }],
      sort: [{ required: true, message: "显示排序不能为空", trigger: "blur" }]
    });
    function handleQuery() {
      loading.value = true;
      DeptAPI.getList(queryParams).then((data) => {
        deptList.value = data;
        loading.value = false;
      });
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      handleQuery();
    }
    function handleSelectionChange(selection) {
      selectIds.value = selection.map((item) => item.id);
    }
    async function handleOpenDialog(parentId, deptId) {
      const data = await DeptAPI.getOptions();
      deptOptions.value = [
        {
          value: "0",
          label: "顶级部门",
          children: data
        }
      ];
      dialog.visible = true;
      if (deptId) {
        dialog.title = "修改部门";
        DeptAPI.getFormData(deptId).then((data2) => {
          Object.assign(formData, data2);
        });
      } else {
        dialog.title = "新增部门";
        formData.parentId = parentId || "0";
      }
    }
    function handleSubmit() {
      deptFormRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          const deptId = formData.id;
          if (deptId) {
            DeptAPI.update(deptId, formData).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleQuery();
            }).finally(() => loading.value = false);
          } else {
            DeptAPI.create(formData).then(() => {
              ElMessage.success("新增成功");
              handleCloseDialog();
              handleQuery();
            }).finally(() => loading.value = false);
          }
        }
      });
    }
    function handleDelete(deptId) {
      const deptIds = [deptId || selectIds.value].join(",");
      if (!deptIds) {
        ElMessage.warning("请勾选删除项");
        return;
      }
      ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(
        () => {
          loading.value = true;
          DeptAPI.deleteByIds(deptIds).then(() => {
            ElMessage.success("删除成功");
            handleResetQuery();
          }).finally(() => loading.value = false);
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    function resetForm() {
      deptFormRef.value.resetFields();
      deptFormRef.value.clearValidate();
      formData.id = void 0;
      formData.parentId = "0";
      formData.status = 1;
      formData.sort = 1;
    }
    function handleCloseDialog() {
      dialog.visible = false;
      resetForm();
    }
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      const _component_el_table = ElTable;
      const _component_el_card = ElCard;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_input_number = ElInputNumber;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_dialog = ElDialog;
      const _directive_hasPerm = resolveDirective("hasPerm");
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
                    placeholder: "部门名称",
                    onKeyup: withKeys(handleQuery, ["enter"])
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "部门状态",
                prop: "status"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: unref(queryParams).status,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(queryParams).status = $event),
                    placeholder: "全部",
                    clearable: "",
                    style: { "width": "100px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_option, {
                        value: 1,
                        label: "正常"
                      }),
                      createVNode(_component_el_option, {
                        value: 0,
                        label: "禁用"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { class: "search-buttons" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    class: "filter-item",
                    type: "primary",
                    icon: "search",
                    onClick: handleQuery
                  }, {
                    default: withCtx(() => [..._cache[10] || (_cache[10] = [
                      createTextVNode(" 搜索 ", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: handleResetQuery
                  }, {
                    default: withCtx(() => [..._cache[11] || (_cache[11] = [
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
          shadow: "hover",
          class: "data-table"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                withDirectives((openBlock(), createBlock(_component_el_button, {
                  type: "success",
                  icon: "plus",
                  onClick: _cache[2] || (_cache[2] = ($event) => handleOpenDialog())
                }, {
                  default: withCtx(() => [..._cache[12] || (_cache[12] = [
                    createTextVNode(" 新增 ", -1)
                  ])]),
                  _: 1
                })), [
                  [_directive_hasPerm, ["sys:dept:add"]]
                ]),
                withDirectives((openBlock(), createBlock(_component_el_button, {
                  type: "danger",
                  disabled: unref(selectIds).length === 0,
                  icon: "delete",
                  onClick: _cache[3] || (_cache[3] = ($event) => handleDelete())
                }, {
                  default: withCtx(() => [..._cache[13] || (_cache[13] = [
                    createTextVNode(" 删除 ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])), [
                  [_directive_hasPerm, ["sys:dept:delete"]]
                ])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              data: unref(deptList),
              "row-key": "id",
              "default-expand-all": "",
              "tree-props": { children: "children", hasChildren: "hasChildren" },
              class: "data-table__content",
              onSelectionChange: handleSelectionChange
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: "selection",
                  width: "55",
                  align: "center"
                }),
                createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "部门名称",
                  "min-width": "200"
                }),
                createVNode(_component_el_table_column, {
                  prop: "code",
                  label: "部门编号",
                  width: "200"
                }),
                createVNode(_component_el_table_column, {
                  prop: "status",
                  label: "状态",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    scope.row.status == 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
                        createTextVNode("正常", -1)
                      ])]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
                        createTextVNode("禁用", -1)
                      ])]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  prop: "sort",
                  label: "排序",
                  width: "100"
                }),
                createVNode(_component_el_table_column, {
                  label: "操作",
                  fixed: "right",
                  align: "left",
                  width: "200"
                }, {
                  default: withCtx((scope) => [
                    withDirectives((openBlock(), createBlock(_component_el_button, {
                      type: "primary",
                      link: "",
                      size: "small",
                      icon: "plus",
                      onClick: withModifiers(($event) => handleOpenDialog(scope.row.id, void 0), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[16] || (_cache[16] = [
                        createTextVNode(" 新增 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:dept:add"]]
                    ]),
                    withDirectives((openBlock(), createBlock(_component_el_button, {
                      type: "primary",
                      link: "",
                      size: "small",
                      icon: "edit",
                      onClick: withModifiers(($event) => handleOpenDialog(scope.row.parentId, scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[17] || (_cache[17] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:dept:edit"]]
                    ]),
                    withDirectives((openBlock(), createBlock(_component_el_button, {
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
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:dept:delete"]]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])), [
              [_directive_loading, unref(loading)]
            ])
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: "600px",
          onClosed: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [..._cache[21] || (_cache[21] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[22] || (_cache[22] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "deptFormRef",
              ref: deptFormRef,
              model: unref(formData),
              rules: unref(rules),
              "label-width": "80px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "上级部门",
                  prop: "parentId"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_tree_select, {
                      modelValue: unref(formData).parentId,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(formData).parentId = $event),
                      placeholder: "选择上级部门",
                      data: unref(deptOptions),
                      filterable: "",
                      "check-strictly": "",
                      "render-after-expand": false
                    }, null, 8, ["modelValue", "data"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "部门名称",
                  prop: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(formData).name = $event),
                      placeholder: "请输入部门名称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "部门编号",
                  prop: "code"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).code,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).code = $event),
                      placeholder: "请输入部门编号"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "显示排序",
                  prop: "sort"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input_number, {
                      modelValue: unref(formData).sort,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).sort = $event),
                      "controls-position": "right",
                      style: { "width": "100px" },
                      min: 0
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "部门状态" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).status,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(formData).status = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[19] || (_cache[19] = [
                            createTextVNode("正常", -1)
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
