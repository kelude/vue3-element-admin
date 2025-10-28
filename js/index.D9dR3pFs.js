import { d as defineComponent, al as useAppStore, r as ref, S as reactive, c as computed, ar as DeviceEnum, o as onMounted, as as resolveComponent, bO as resolveDirective, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, E as ElIcon, D as resolveDynamicComponent, n as normalizeClass, F as toDisplayString, j as withModifiers, bo as createSlots, P as Fragment, Q as renderList, bk as MenuAPI, aG as ElMessage } from "./index.CjDU5CMT.js";
import { v as vLoading } from "./loading.VFMs3r9q.js";
import { E as ElDrawer } from "./drawer.Buj1rOle.js";
import "./overlay.o3UQGxY9.js";
import { _ as __unplugin_components_14 } from "./index.D3lNOqVH.js";
import { E as ElInput } from "./input.mLRPLJvT.js";
import { E as ElInputNumber } from "./input-number.CQjktDKA.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.CVURbzwO.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.BP3ybXHH.js";
/* empty css             */
import "./select.k4MfD7cG.js";
import "./scrollbar.Cvm8P6mA.js";
import "./tree.BOpUeR1f.js";
import "./checkbox.Dum2PTxz.js";
import "./text.BhAbWWKi.js";
import { E as ElTreeSelect } from "./tree-select.Ckx52jar.js";
import { E as ElCard } from "./card.Llc-pG1g.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.hLYp9Dcy.js";
import { E as ElFormItem, a as ElForm } from "./form-item.nVgD0sQO.js";
/* empty css                */
/* empty css                     */
import { E as ElButton } from "./index.D2tRBopO.js";
import { E as ElTag } from "./index.BR6nY3fC.js";
import { E as ElMessageBox } from "./index.CXVUs7Yj.js";
import "./index.kBJnZjK7.js";
import "./aria.McRhojP9.js";
import "./index.3UkwCaMF.js";
import "./vnode.CaTm_f_o.js";
import "./event.BZTOGHfp.js";
import "./error.BVJkE67s.js";
import "./scroll.B3F9zOvi.js";
import "./use-form-common-props.BPtRgoS9.js";
import "./popover.C7yG1fr8.js";
import "./dropdown.J82WwAtK.js";
import "./tab-pane.BonYoTnl.js";
import "./raf.kR-SyviK.js";
import "./_initCloneObject.tFWjqE6V.js";
import "./strings.DkiybUg_.js";
import "./toNumber.Bjx_Wkzc.js";
import "./index.-_Dxa3Oc.js";
import "./_baseClone.C7MQiCf9.js";
import "./index.DR0hHISx.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.CCbVilVt.js";
import "./index.BWKss2Xq.js";
import "./index.6kvQcyfU.js";
import "./index.BIuzPtP6.js";
import "./token.BqWJQ4CJ.js";
import "./castArray.CGtXUNId.js";
import "./debounce.DqQI4auM.js";
import "./_baseIteratee.8Db5_go8.js";
import "./index.Cy9yngL_.js";
import "./index.BNPSNYty.js";
var MenuTypeEnum = /* @__PURE__ */ ((MenuTypeEnum2) => {
  MenuTypeEnum2[MenuTypeEnum2["CATALOG"] = 2] = "CATALOG";
  MenuTypeEnum2[MenuTypeEnum2["MENU"] = 1] = "MENU";
  MenuTypeEnum2[MenuTypeEnum2["BUTTON"] = 4] = "BUTTON";
  MenuTypeEnum2[MenuTypeEnum2["EXTLINK"] = 3] = "EXTLINK";
  return MenuTypeEnum2;
})(MenuTypeEnum || {});
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "flex-y-center" };
const _hoisted_6 = { class: "flex-y-center" };
const _hoisted_7 = { class: "flex-y-center" };
const _hoisted_8 = { class: "flex-y-center" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "flex-y-center" };
const _hoisted_12 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SysMenu",
    inheritAttrs: false
  },
  __name: "index",
  setup(__props) {
    const appStore = useAppStore();
    const queryFormRef = ref();
    const menuFormRef = ref();
    const loading = ref(false);
    const dialog = reactive({
      title: "新增菜单",
      visible: false
    });
    const drawerSize = computed(() => appStore.device === DeviceEnum.DESKTOP ? "600px" : "90%");
    const queryParams = reactive({});
    const menuTableData = ref([]);
    const menuOptions = ref([]);
    const initialMenuFormData = ref({
      id: void 0,
      parentId: "0",
      visible: 1,
      sort: 1,
      type: MenuTypeEnum.MENU,
      // 默认菜单
      alwaysShow: 0,
      keepAlive: 1,
      params: []
    });
    const formData = ref({ ...initialMenuFormData.value });
    const rules = reactive({
      parentId: [{ required: true, message: "请选择父级菜单", trigger: "blur" }],
      name: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
      type: [{ required: true, message: "请选择菜单类型", trigger: "blur" }],
      routeName: [{ required: true, message: "请输入路由名称", trigger: "blur" }],
      routePath: [{ required: true, message: "请输入路由路径", trigger: "blur" }],
      component: [{ required: true, message: "请输入组件路径", trigger: "blur" }],
      visible: [{ required: true, message: "请选择显示状态", trigger: "change" }]
    });
    const selectedMenuId = ref();
    function handleQuery() {
      loading.value = true;
      MenuAPI.getList(queryParams).then((data) => {
        menuTableData.value = data;
      }).finally(() => {
        loading.value = false;
      });
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      handleQuery();
    }
    function handleRowClick(row) {
      selectedMenuId.value = row.id;
    }
    function handleOpenDialog(parentId, menuId) {
      MenuAPI.getOptions(true).then((data) => {
        menuOptions.value = [{ value: "0", label: "顶级菜单", children: data }];
      }).then(() => {
        dialog.visible = true;
        if (menuId) {
          dialog.title = "编辑菜单";
          MenuAPI.getFormData(menuId).then((data) => {
            initialMenuFormData.value = { ...data };
            formData.value = data;
          });
        } else {
          dialog.title = "新增菜单";
          formData.value.parentId = parentId?.toString();
        }
      });
    }
    function handleMenuTypeChange() {
      if (formData.value.type !== initialMenuFormData.value.type) {
        if (formData.value.type === MenuTypeEnum.MENU) {
          if (initialMenuFormData.value.type === MenuTypeEnum.CATALOG) {
            formData.value.component = "";
          } else {
            formData.value.routePath = initialMenuFormData.value.routePath;
            formData.value.component = initialMenuFormData.value.component;
          }
        }
      }
    }
    function handleSubmit() {
      menuFormRef.value.validate((isValid) => {
        if (isValid) {
          const menuId = formData.value.id;
          if (menuId) {
            if (formData.value.parentId == menuId) {
              ElMessage.error("父级菜单不能为当前菜单");
              return;
            }
            MenuAPI.update(menuId, formData.value).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleQuery();
            });
          } else {
            MenuAPI.create(formData.value).then(() => {
              ElMessage.success("新增成功");
              handleCloseDialog();
              handleQuery();
            });
          }
        }
      });
    }
    function handleDelete(menuId) {
      if (!menuId) {
        ElMessage.warning("请勾选删除项");
        return false;
      }
      ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(
        () => {
          loading.value = true;
          MenuAPI.deleteById(menuId).then(() => {
            ElMessage.success("删除成功");
            handleQuery();
          }).finally(() => {
            loading.value = false;
          });
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    function resetForm() {
      menuFormRef.value.resetFields();
      menuFormRef.value.clearValidate();
      formData.value = {
        id: void 0,
        parentId: "0",
        visible: 1,
        sort: 1,
        type: MenuTypeEnum.MENU,
        // 默认菜单
        alwaysShow: 0,
        keepAlive: 1,
        params: []
      };
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
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_icon = ElIcon;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      const _component_el_table = ElTable;
      const _component_el_card = ElCard;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_QuestionFilled = resolveComponent("QuestionFilled");
      const _component_el_tooltip = ElTooltip;
      const _component_CirclePlusFilled = resolveComponent("CirclePlusFilled");
      const _component_DeleteFilled = resolveComponent("DeleteFilled");
      const _component_el_input_number = ElInputNumber;
      const _component_icon_select = __unplugin_components_14;
      const _component_el_drawer = ElDrawer;
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
                    placeholder: "菜单名称",
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
                    default: withCtx(() => [..._cache[20] || (_cache[20] = [
                      createTextVNode("搜索", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: handleResetQuery
                  }, {
                    default: withCtx(() => [..._cache[21] || (_cache[21] = [
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
                  onClick: _cache[1] || (_cache[1] = ($event) => handleOpenDialog("0"))
                }, {
                  default: withCtx(() => [..._cache[22] || (_cache[22] = [
                    createTextVNode(" 新增 ", -1)
                  ])]),
                  _: 1
                })), [
                  [_directive_hasPerm, ["sys:menu:add"]]
                ])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              ref: "dataTableRef",
              "row-key": "id",
              data: unref(menuTableData),
              "tree-props": {
                children: "children",
                hasChildren: "hasChildren"
              },
              class: "data-table__content",
              onRowClick: handleRowClick
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  label: "菜单名称",
                  "min-width": "200"
                }, {
                  default: withCtx((scope) => [
                    scope.row.icon && scope.row.icon.startsWith("el-icon") ? (openBlock(), createBlock(_component_el_icon, {
                      key: 0,
                      style: { "vertical-align": "-0.15em" }
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(scope.row.icon.replace("el-icon-", ""))))
                      ]),
                      _: 2
                    }, 1024)) : scope.row.icon ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass(`i-svg:${scope.row.icon}`)
                    }, null, 2)) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(scope.row.name), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "类型",
                  align: "center",
                  width: "80"
                }, {
                  default: withCtx((scope) => [
                    scope.row.type === unref(MenuTypeEnum).CATALOG ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "warning"
                    }, {
                      default: withCtx(() => [..._cache[23] || (_cache[23] = [
                        createTextVNode("目录", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
                    scope.row.type === unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[24] || (_cache[24] = [
                        createTextVNode("菜单", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
                    scope.row.type === unref(MenuTypeEnum).BUTTON ? (openBlock(), createBlock(_component_el_tag, {
                      key: 2,
                      type: "danger"
                    }, {
                      default: withCtx(() => [..._cache[25] || (_cache[25] = [
                        createTextVNode("按钮", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
                    scope.row.type === unref(MenuTypeEnum).EXTLINK ? (openBlock(), createBlock(_component_el_tag, {
                      key: 3,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[26] || (_cache[26] = [
                        createTextVNode("外链", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "路由名称",
                  align: "left",
                  width: "150",
                  prop: "routeName"
                }),
                createVNode(_component_el_table_column, {
                  label: "路由路径",
                  align: "left",
                  width: "150",
                  prop: "routePath"
                }),
                createVNode(_component_el_table_column, {
                  label: "组件路径",
                  align: "left",
                  width: "250",
                  prop: "component"
                }),
                createVNode(_component_el_table_column, {
                  label: "权限标识",
                  align: "center",
                  width: "200",
                  prop: "perm"
                }),
                createVNode(_component_el_table_column, {
                  label: "状态",
                  align: "center",
                  width: "80"
                }, {
                  default: withCtx((scope) => [
                    scope.row.visible === 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[27] || (_cache[27] = [
                        createTextVNode("显示", -1)
                      ])]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[28] || (_cache[28] = [
                        createTextVNode("隐藏", -1)
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
                  align: "center",
                  label: "操作",
                  width: "220"
                }, {
                  default: withCtx((scope) => [
                    scope.row.type == unref(MenuTypeEnum).CATALOG || scope.row.type == unref(MenuTypeEnum).MENU ? withDirectives((openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "primary",
                      link: "",
                      size: "small",
                      icon: "plus",
                      onClick: withModifiers(($event) => handleOpenDialog(scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[29] || (_cache[29] = [
                        createTextVNode(" 新增 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:menu:add"]]
                    ]) : createCommentVNode("", true),
                    withDirectives((openBlock(), createBlock(_component_el_button, {
                      type: "primary",
                      link: "",
                      size: "small",
                      icon: "edit",
                      onClick: withModifiers(($event) => handleOpenDialog(void 0, scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[30] || (_cache[30] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:menu:edit"]]
                    ]),
                    withDirectives((openBlock(), createBlock(_component_el_button, {
                      type: "danger",
                      link: "",
                      size: "small",
                      icon: "delete",
                      onClick: withModifiers(($event) => handleDelete(scope.row.id), ["stop"])
                    }, {
                      default: withCtx(() => [..._cache[31] || (_cache[31] = [
                        createTextVNode(" 删除 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:menu:delete"]]
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
        createVNode(_component_el_drawer, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          size: unref(drawerSize),
          onClose: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [..._cache[56] || (_cache[56] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[57] || (_cache[57] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "menuFormRef",
              ref: menuFormRef,
              model: unref(formData),
              rules: unref(rules),
              "label-width": "100px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "父级菜单",
                  prop: "parentId"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_tree_select, {
                      modelValue: unref(formData).parentId,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(formData).parentId = $event),
                      placeholder: "选择上级菜单",
                      data: unref(menuOptions),
                      filterable: "",
                      "check-strictly": "",
                      "render-after-expand": false
                    }, null, 8, ["modelValue", "data"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "菜单名称",
                  prop: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(formData).name = $event),
                      placeholder: "请输入菜单名称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "菜单类型",
                  prop: "type"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).type,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(formData).type = $event),
                      onChange: handleMenuTypeChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, {
                          value: unref(MenuTypeEnum).CATALOG
                        }, {
                          default: withCtx(() => [..._cache[32] || (_cache[32] = [
                            createTextVNode("目录", -1)
                          ])]),
                          _: 1
                        }, 8, ["value"]),
                        createVNode(_component_el_radio, {
                          value: unref(MenuTypeEnum).MENU
                        }, {
                          default: withCtx(() => [..._cache[33] || (_cache[33] = [
                            createTextVNode("菜单", -1)
                          ])]),
                          _: 1
                        }, 8, ["value"]),
                        createVNode(_component_el_radio, {
                          value: unref(MenuTypeEnum).BUTTON
                        }, {
                          default: withCtx(() => [..._cache[34] || (_cache[34] = [
                            createTextVNode("按钮", -1)
                          ])]),
                          _: 1
                        }, 8, ["value"]),
                        createVNode(_component_el_radio, {
                          value: unref(MenuTypeEnum).EXTLINK
                        }, {
                          default: withCtx(() => [..._cache[35] || (_cache[35] = [
                            createTextVNode("外链", -1)
                          ])]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                unref(formData).type == unref(MenuTypeEnum).EXTLINK ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 0,
                  label: "外链地址",
                  prop: "path"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).routePath,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(formData).routePath = $event),
                      placeholder: "请输入外链完整路径"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type == unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 1,
                  prop: "routeName"
                }, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_5, [
                      _cache[37] || (_cache[37] = createTextVNode(" 路由名称 ", -1)),
                      createVNode(_component_el_tooltip, {
                        placement: "bottom",
                        effect: "light"
                      }, {
                        content: withCtx(() => [..._cache[36] || (_cache[36] = [
                          createTextVNode(" 如果需要开启缓存，需保证页面 defineOptions 中的 name 与此处一致，建议使用驼峰。 ", -1)
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
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).routeName,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).routeName = $event),
                      placeholder: "User"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type == unref(MenuTypeEnum).CATALOG || unref(formData).type == unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 2,
                  prop: "routePath"
                }, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_6, [
                      _cache[39] || (_cache[39] = createTextVNode(" 路由路径 ", -1)),
                      createVNode(_component_el_tooltip, {
                        placement: "bottom",
                        effect: "light"
                      }, {
                        content: withCtx(() => [..._cache[38] || (_cache[38] = [
                          createTextVNode(" 定义应用中不同页面对应的 URL 路径，目录需以 / 开头，菜单项不用。例如：系统管理目录 /system，系统管理下的用户管理菜单 user。 ", -1)
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
                    unref(formData).type == unref(MenuTypeEnum).CATALOG ? (openBlock(), createBlock(_component_el_input, {
                      key: 0,
                      modelValue: unref(formData).routePath,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).routePath = $event),
                      placeholder: "system"
                    }, null, 8, ["modelValue"])) : (openBlock(), createBlock(_component_el_input, {
                      key: 1,
                      modelValue: unref(formData).routePath,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(formData).routePath = $event),
                      placeholder: "user"
                    }, null, 8, ["modelValue"]))
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type == unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 3,
                  prop: "component"
                }, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_7, [
                      _cache[41] || (_cache[41] = createTextVNode(" 组件路径 ", -1)),
                      createVNode(_component_el_tooltip, {
                        placement: "bottom",
                        effect: "light"
                      }, {
                        content: withCtx(() => [..._cache[40] || (_cache[40] = [
                          createTextVNode(" 组件页面完整路径，相对于 src/views/，如 system/user/index，缺省后缀 .vue ", -1)
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
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).component,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(formData).component = $event),
                      placeholder: "system/user/index",
                      style: { "width": "95%" }
                    }, createSlots({ _: 2 }, [
                      unref(formData).type == unref(MenuTypeEnum).MENU ? {
                        name: "prepend",
                        fn: withCtx(() => [
                          _cache[42] || (_cache[42] = createTextVNode("src/views/", -1))
                        ]),
                        key: "0"
                      } : void 0,
                      unref(formData).type == unref(MenuTypeEnum).MENU ? {
                        name: "append",
                        fn: withCtx(() => [
                          _cache[43] || (_cache[43] = createTextVNode(".vue", -1))
                        ]),
                        key: "1"
                      } : void 0
                    ]), 1032, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type == unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_form_item, { key: 4 }, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_8, [
                      _cache[45] || (_cache[45] = createTextVNode(" 路由参数 ", -1)),
                      createVNode(_component_el_tooltip, {
                        placement: "bottom",
                        effect: "light"
                      }, {
                        content: withCtx(() => [..._cache[44] || (_cache[44] = [
                          createTextVNode(" 组件页面使用 `useRoute().query.参数名` 获取路由参数值。 ", -1)
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
                    !unref(formData).params || unref(formData).params.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                      createVNode(_component_el_button, {
                        type: "success",
                        plain: "",
                        onClick: _cache[10] || (_cache[10] = ($event) => unref(formData).params = [{ key: "", value: "" }])
                      }, {
                        default: withCtx(() => [..._cache[46] || (_cache[46] = [
                          createTextVNode(" 添加路由参数 ", -1)
                        ])]),
                        _: 1
                      })
                    ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).params, (item, index) => {
                        return openBlock(), createElementBlock("div", { key: index }, [
                          createVNode(_component_el_input, {
                            modelValue: item.key,
                            "onUpdate:modelValue": ($event) => item.key = $event,
                            placeholder: "参数名",
                            style: { "width": "100px" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          _cache[47] || (_cache[47] = createBaseVNode("span", { class: "mx-1" }, "=", -1)),
                          createVNode(_component_el_input, {
                            modelValue: item.value,
                            "onUpdate:modelValue": ($event) => item.value = $event,
                            placeholder: "参数值",
                            style: { "width": "100px" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(formData).params.indexOf(item) === unref(formData).params.length - 1 ? (openBlock(), createBlock(_component_el_icon, {
                            key: 0,
                            class: "ml-2 cursor-pointer color-[var(--el-color-success)]",
                            style: { "vertical-align": "-0.15em" },
                            onClick: _cache[11] || (_cache[11] = ($event) => unref(formData).params.push({ key: "", value: "" }))
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_CirclePlusFilled)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_el_icon, {
                            class: "ml-2 cursor-pointer color-[var(--el-color-danger)]",
                            style: { "vertical-align": "-0.15em" },
                            onClick: ($event) => unref(formData).params.splice(unref(formData).params.indexOf(item), 1)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_DeleteFilled)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]);
                      }), 128))
                    ]))
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type !== unref(MenuTypeEnum).BUTTON ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 5,
                  prop: "visible",
                  label: "显示状态"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).visible,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(formData).visible = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[48] || (_cache[48] = [
                            createTextVNode("显示", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 0 }, {
                          default: withCtx(() => [..._cache[49] || (_cache[49] = [
                            createTextVNode("隐藏", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type === unref(MenuTypeEnum).CATALOG || unref(formData).type === unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_form_item, { key: 6 }, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      _cache[51] || (_cache[51] = createTextVNode(" 始终显示 ", -1)),
                      createVNode(_component_el_tooltip, {
                        placement: "bottom",
                        effect: "light"
                      }, {
                        content: withCtx(() => [..._cache[50] || (_cache[50] = [
                          createTextVNode(' 选择"是"，即使目录或菜单下只有一个子节点，也会显示父节点。 ', -1),
                          createBaseVNode("br", null, null, -1),
                          createTextVNode(' 选择"否"，如果目录或菜单下只有一个子节点，则只显示该子节点，隐藏父节点。 ', -1),
                          createBaseVNode("br", null, null, -1),
                          createTextVNode(' 如果是叶子节点，请选择"否"。 ', -1)
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
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).alwaysShow,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(formData).alwaysShow = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[52] || (_cache[52] = [
                            createTextVNode("是", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 0 }, {
                          default: withCtx(() => [..._cache[53] || (_cache[53] = [
                            createTextVNode("否", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type === unref(MenuTypeEnum).MENU ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 7,
                  label: "缓存页面"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).keepAlive,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(formData).keepAlive = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[54] || (_cache[54] = [
                            createTextVNode("开启", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 0 }, {
                          default: withCtx(() => [..._cache[55] || (_cache[55] = [
                            createTextVNode("关闭", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_el_form_item, {
                  label: "排序",
                  prop: "sort"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input_number, {
                      modelValue: unref(formData).sort,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(formData).sort = $event),
                      style: { "width": "100px" },
                      "controls-position": "right",
                      min: 0
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                unref(formData).type == unref(MenuTypeEnum).BUTTON ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 8,
                  label: "权限标识",
                  prop: "perm"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).perm,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(formData).perm = $event),
                      placeholder: "sys:user:add"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type !== unref(MenuTypeEnum).BUTTON ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 9,
                  label: "图标",
                  prop: "icon"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_icon_select, {
                      modelValue: unref(formData).icon,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(formData).icon = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(formData).type == unref(MenuTypeEnum).CATALOG ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 10,
                  label: "跳转路由"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).redirect,
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(formData).redirect = $event),
                      placeholder: "跳转路由"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["model", "rules"])
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
