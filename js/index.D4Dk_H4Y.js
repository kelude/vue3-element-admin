import { d as defineComponent, al as useAppStore, r as ref, S as reactive, c as computed, ar as DeviceEnum, I as watch, o as onMounted, as as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, aA as isRef, F as toDisplayString, E as ElIcon, aG as ElMessage, bk as MenuAPI } from "./index.C-w1mPR5.js";
import { v as vLoading } from "./loading.D45eDDgt.js";
import { E as ElDrawer } from "./drawer.DcHXG3IO.js";
import "./overlay.6P5GvOwu.js";
import { E as ElTree } from "./tree.ynWXrFOv.js";
import { E as ElCheckbox } from "./checkbox.C7Foa8TW.js";
import "./text.CCBnW7lr.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.B8758rPD.js";
import { E as ElDialog } from "./dialog.DTSleIRn.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { E as ElInputNumber } from "./input-number.DMu3FxpM.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.BKt65S9k.js";
/* empty css             */
import { E as ElSelect, a as ElOption } from "./select.DEZ3TM_z.js";
import "./scrollbar.DFEDmrTe.js";
import { E as ElCard } from "./card.EBLyLLiR.js";
import { _ as __unplugin_components_12 } from "./index.D7ylDnoz.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.CVY5P60L.js";
import { E as ElFormItem, a as ElForm } from "./form-item.Dj1vXnXz.js";
/* empty css                */
import { R as RoleAPI } from "./role-api.uhSOk78b.js";
/* empty css                     */
import { E as ElButton } from "./index.BMPR14Hc.js";
import { E as ElTag } from "./index.C28lPzad.js";
import { E as ElMessageBox } from "./index.DacSnX-o.js";
import "./index.Y-PlGRQ9.js";
import "./aria.McRhojP9.js";
import "./index.DBHfYhTD.js";
import "./vnode.AKE4hrFO.js";
import "./event.BZTOGHfp.js";
import "./error.BVJkE67s.js";
import "./scroll.BCEJlaVo.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./token.BqWJQ4CJ.js";
import "./index.CmFsai64.js";
import "./index.DmNrmtFU.js";
import "./index.D1LU_lkm.js";
import "./refs.CxYYXu5Q.js";
import "./index.Cz0Zbu2t.js";
import "./index.BLtH7mBo.js";
import "./index.DWacv60v.js";
import "./strings.U77u0PSM.js";
import "./castArray.C7_3uu86.js";
import "./debounce.sHE95kMl.js";
import "./toNumber.BD3fO3HE.js";
import "./_baseIteratee.CQTSDRqz.js";
import "./index.CHVt_Cot.js";
import "./pagination.Cdh-VGb5.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./raf.DEAyVqZt.js";
import "./_baseClone.vDnszwId.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "dialog-footer" };
const _hoisted_6 = { class: "flex-x-between" };
const _hoisted_7 = { class: "flex-center ml-5" };
const _hoisted_8 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Role",
    inheritAttrs: false
  },
  __name: "index",
  setup(__props) {
    const appStore = useAppStore();
    const queryFormRef = ref();
    const roleFormRef = ref();
    const permTreeRef = ref();
    const loading = ref(false);
    const ids = ref([]);
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const roleList = ref();
    const menuPermOptions = ref([]);
    const dialog = reactive({
      title: "",
      visible: false
    });
    const drawerSize = computed(() => appStore.device === DeviceEnum.DESKTOP ? "600px" : "90%");
    const formData = reactive({
      sort: 1,
      status: 1
    });
    const rules = reactive({
      name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
      code: [{ required: true, message: "请输入角色编码", trigger: "blur" }],
      dataScope: [{ required: true, message: "请选择数据权限", trigger: "blur" }],
      status: [{ required: true, message: "请选择状态", trigger: "blur" }]
    });
    const checkedRole = ref({});
    const assignPermDialogVisible = ref(false);
    const permKeywords = ref("");
    const isExpanded = ref(true);
    const parentChildLinked = ref(true);
    function fetchData() {
      loading.value = true;
      RoleAPI.getPage(queryParams).then((data) => {
        roleList.value = data.list;
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
    function handleOpenDialog(roleId) {
      dialog.visible = true;
      if (roleId) {
        dialog.title = "修改角色";
        RoleAPI.getFormData(roleId).then((data) => {
          Object.assign(formData, data);
        });
      } else {
        dialog.title = "新增角色";
      }
    }
    function handleSubmit() {
      roleFormRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          const roleId = formData.id;
          if (roleId) {
            RoleAPI.update(roleId, formData).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          } else {
            RoleAPI.create(formData).then(() => {
              ElMessage.success("新增成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          }
        }
      });
    }
    function handleCloseDialog() {
      dialog.visible = false;
      roleFormRef.value.resetFields();
      roleFormRef.value.clearValidate();
      formData.id = void 0;
      formData.sort = 1;
      formData.status = 1;
    }
    function handleDelete(roleId) {
      const roleIds = [roleId || ids.value].join(",");
      if (!roleIds) {
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
          RoleAPI.deleteByIds(roleIds).then(() => {
            ElMessage.success("删除成功");
            handleResetQuery();
          }).finally(() => loading.value = false);
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    async function handleOpenAssignPermDialog(row) {
      const roleId = row.id;
      if (roleId) {
        assignPermDialogVisible.value = true;
        loading.value = true;
        checkedRole.value.id = roleId;
        checkedRole.value.name = row.name;
        menuPermOptions.value = await MenuAPI.getOptions();
        RoleAPI.getRoleMenuIds(roleId).then((data) => {
          const checkedMenuIds = data;
          checkedMenuIds.forEach((menuId) => permTreeRef.value.setChecked(menuId, true, false));
        }).finally(() => {
          loading.value = false;
        });
      }
    }
    function handleAssignPermSubmit() {
      const roleId = checkedRole.value.id;
      if (roleId) {
        const checkedMenuIds = permTreeRef.value.getCheckedNodes(false, true).map((node) => node.value);
        loading.value = true;
        RoleAPI.updateRoleMenus(roleId, checkedMenuIds).then(() => {
          ElMessage.success("分配权限成功");
          assignPermDialogVisible.value = false;
          handleResetQuery();
        }).finally(() => {
          loading.value = false;
        });
      }
    }
    function togglePermTree() {
      isExpanded.value = !isExpanded.value;
      if (permTreeRef.value) {
        Object.values(permTreeRef.value.store.nodesMap).forEach((node) => {
          if (isExpanded.value) {
            node.expand();
          } else {
            node.collapse();
          }
        });
      }
    }
    watch(permKeywords, (val) => {
      permTreeRef.value.filter(val);
    });
    function handlePermFilter(value, data) {
      if (!value) return true;
      return data.label.includes(value);
    }
    function handleparentChildLinkedChange(val) {
      parentChildLinked.value = val;
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
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_input_number = ElInputNumber;
      const _component_el_dialog = ElDialog;
      const _component_Search = resolveComponent("Search");
      const _component_Switch = resolveComponent("Switch");
      const _component_el_checkbox = ElCheckbox;
      const _component_QuestionFilled = resolveComponent("QuestionFilled");
      const _component_el_icon = ElIcon;
      const _component_el_tooltip = ElTooltip;
      const _component_el_tree = ElTree;
      const _component_el_drawer = ElDrawer;
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
                prop: "keywords",
                label: "关键字"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).keywords,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).keywords = $event),
                    placeholder: "角色名称",
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
                    default: withCtx(() => [..._cache[16] || (_cache[16] = [
                      createTextVNode("搜索", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: handleResetQuery
                  }, {
                    default: withCtx(() => [..._cache[17] || (_cache[17] = [
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
                createVNode(_component_el_button, {
                  type: "success",
                  icon: "plus",
                  onClick: _cache[1] || (_cache[1] = ($event) => handleOpenDialog())
                }, {
                  default: withCtx(() => [..._cache[18] || (_cache[18] = [
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
                  default: withCtx(() => [..._cache[19] || (_cache[19] = [
                    createTextVNode(" 删除 ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              ref: "dataTableRef",
              data: unref(roleList),
              "highlight-current-row": "",
              border: "",
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
                  label: "角色名称",
                  prop: "name",
                  "min-width": "100"
                }),
                createVNode(_component_el_table_column, {
                  label: "角色编码",
                  prop: "code",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  label: "状态",
                  align: "center",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    scope.row.status === 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[20] || (_cache[20] = [
                        createTextVNode("正常", -1)
                      ])]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[21] || (_cache[21] = [
                        createTextVNode("禁用", -1)
                      ])]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "排序",
                  align: "center",
                  width: "80",
                  prop: "sort"
                }),
                createVNode(_component_el_table_column, {
                  fixed: "right",
                  label: "操作",
                  width: "220"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      icon: "position",
                      onClick: ($event) => handleOpenAssignPermDialog(scope.row)
                    }, {
                      default: withCtx(() => [..._cache[22] || (_cache[22] = [
                        createTextVNode(" 分配权限 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      icon: "edit",
                      onClick: ($event) => handleOpenDialog(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[23] || (_cache[23] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "danger",
                      size: "small",
                      link: "",
                      icon: "delete",
                      onClick: ($event) => handleDelete(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[24] || (_cache[24] = [
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
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: "500px",
          onClose: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [..._cache[27] || (_cache[27] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[28] || (_cache[28] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "roleFormRef",
              ref: roleFormRef,
              model: unref(formData),
              rules: unref(rules),
              "label-width": "100px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "角色名称",
                  prop: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).name = $event),
                      placeholder: "请输入角色名称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "角色编码",
                  prop: "code"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).code,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).code = $event),
                      placeholder: "请输入角色编码"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "数据权限",
                  prop: "dataScope"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: unref(formData).dataScope,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(formData).dataScope = $event)
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(_component_el_option, {
                          key: 1,
                          label: "全部数据",
                          value: 1
                        })),
                        (openBlock(), createBlock(_component_el_option, {
                          key: 2,
                          label: "部门及子部门数据",
                          value: 2
                        })),
                        (openBlock(), createBlock(_component_el_option, {
                          key: 3,
                          label: "本部门数据",
                          value: 3
                        })),
                        (openBlock(), createBlock(_component_el_option, {
                          key: 4,
                          label: "本人数据",
                          value: 4
                        }))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "状态",
                  prop: "status"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).status,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(formData).status = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[25] || (_cache[25] = [
                            createTextVNode("正常", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 0 }, {
                          default: withCtx(() => [..._cache[26] || (_cache[26] = [
                            createTextVNode("停用", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "排序",
                  prop: "sort"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input_number, {
                      modelValue: unref(formData).sort,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(formData).sort = $event),
                      "controls-position": "right",
                      min: 0,
                      style: { "width": "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createVNode(_component_el_drawer, {
          modelValue: unref(assignPermDialogVisible),
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => isRef(assignPermDialogVisible) ? assignPermDialogVisible.value = $event : null),
          title: "【" + unref(checkedRole).name + "】权限分配",
          size: unref(drawerSize)
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleAssignPermSubmit
              }, {
                default: withCtx(() => [..._cache[31] || (_cache[31] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, {
                onClick: _cache[14] || (_cache[14] = ($event) => assignPermDialogVisible.value = false)
              }, {
                default: withCtx(() => [..._cache[32] || (_cache[32] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_el_input, {
                modelValue: unref(permKeywords),
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(permKeywords) ? permKeywords.value = $event : null),
                clearable: "",
                class: "w-[150px]",
                placeholder: "菜单权限名称"
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_Search)
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_el_button, {
                  type: "primary",
                  size: "small",
                  plain: "",
                  onClick: togglePermTree
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Switch)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(isExpanded) ? "收缩" : "展开"), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_checkbox, {
                  modelValue: unref(parentChildLinked),
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(parentChildLinked) ? parentChildLinked.value = $event : null),
                  class: "ml-5",
                  onChange: handleparentChildLinkedChange
                }, {
                  default: withCtx(() => [..._cache[29] || (_cache[29] = [
                    createTextVNode(" 父子联动 ", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_tooltip, { placement: "bottom" }, {
                  content: withCtx(() => [..._cache[30] || (_cache[30] = [
                    createTextVNode(" 如果只需勾选菜单权限，不需要勾选子菜单或者按钮权限，请关闭父子联动 ", -1)
                  ])]),
                  default: withCtx(() => [
                    createVNode(_component_el_icon, { class: "ml-1 color-[--el-color-primary] inline-block cursor-pointer" }, {
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
            createVNode(_component_el_tree, {
              ref_key: "permTreeRef",
              ref: permTreeRef,
              "node-key": "value",
              "show-checkbox": "",
              data: unref(menuPermOptions),
              "filter-node-method": handlePermFilter,
              "default-expand-all": true,
              "check-strictly": !unref(parentChildLinked),
              class: "mt-5"
            }, {
              default: withCtx(({ data }) => [
                createTextVNode(toDisplayString(data.label), 1)
              ]),
              _: 1
            }, 8, ["data", "check-strictly"])
          ]),
          _: 1
        }, 8, ["modelValue", "title", "size"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
