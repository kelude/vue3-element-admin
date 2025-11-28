import { bh as httpRequest, d as defineComponent, r as ref, S as reactive, o as onMounted, bQ as resolveDirective, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, dM as useDebounceFn, aA as isRef, aG as ElMessage } from "./index.CmLBO_Rw.js";
import { v as vLoading } from "./loading.BYt_X4MC.js";
import { E as ElDialog } from "./dialog.XrzQjVL9.js";
import "./overlay.hoy_H4Ys.js";
import { E as ElCard } from "./card.BcK80iPz.js";
import { _ as __unplugin_components_12 } from "./index.BRz42IyW.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.DFvtT2rE.js";
import "./checkbox.BVtb9cA-.js";
/* empty css                 */
import "./popper.D_c7zDnS.js";
import "./scrollbar.DfgyWjDz.js";
/* empty css             */
import { E as ElFormItem, a as ElForm } from "./form-item.DzcJXr31.js";
/* empty css                */
import { E as ElInput } from "./input.DJmIVgFr.js";
import { E as ElButton } from "./index.BHX3RtPE.js";
import { E as ElMessageBox } from "./index.D4KNrtgG.js";
import "./index.CKZ7CIQk.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.C_1JB0Ji.js";
import "./vnode.Cq1YVPHL.js";
import "./event.BZTOGHfp.js";
import "./index.CORpYRAj.js";
import "./error.BVJkE67s.js";
import "./scroll.DVdS4xA0.js";
import "./use-form-common-props.DLum1V4R.js";
import "./pagination.hnvEqliF.js";
import "./select.Bg8H27aw.js";
import "./index.BwU84BJ3.js";
import "./strings.CZxJc60W.js";
import "./toNumber.BXiAJuPj.js";
import "./castArray.DnojkoQZ.js";
import "./index.DlY5bQhi.js";
import "./_baseIteratee.BXnAdr3M.js";
import "./index.eINu-mWW.js";
import "./index.CF3ReAxE.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./_baseClone.BCSmaN9a.js";
import "./omit.DmqBmAN3.js";
import "./debounce.jyiH45I7.js";
import "./raf.CGlEGMqF.js";
import "./index.DlUwldQ9.js";
import "./index.CaGOe3Xg.js";
const CONFIG_BASE_URL = "/api/v1/config";
const ConfigAPI = {
  /** 获取配置分页数据 */
  getPage(queryParams) {
    return httpRequest({
      url: `${CONFIG_BASE_URL}/page`,
      method: "get",
      params: queryParams
    });
  },
  /** 获取配置表单数据 */
  getFormData(id) {
    return httpRequest({
      url: `${CONFIG_BASE_URL}/${id}/form`,
      method: "get"
    });
  },
  /** 新增配置 */
  create(data) {
    return httpRequest({ url: `${CONFIG_BASE_URL}`, method: "post", data });
  },
  /** 修改配置 */
  update(id, data) {
    return httpRequest({ url: `${CONFIG_BASE_URL}/${id}`, method: "put", data });
  },
  /** 删除配置 */
  deleteById(id) {
    return httpRequest({ url: `${CONFIG_BASE_URL}/${id}`, method: "delete" });
  },
  /** 刷新配置缓存 */
  refreshCache() {
    return httpRequest({ url: `${CONFIG_BASE_URL}/refresh`, method: "PUT" });
  }
};
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Config",
    inheritAttrs: false
  },
  __name: "index",
  setup(__props) {
    const queryFormRef = ref();
    const dataFormRef = ref();
    const loading = ref(false);
    const selectIds = ref([]);
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10,
      keywords: ""
    });
    const pageData = ref([]);
    const dialog = reactive({
      title: "",
      visible: false
    });
    const formData = reactive({
      id: void 0,
      configName: "",
      configKey: "",
      configValue: "",
      remark: ""
    });
    const rules = reactive({
      configName: [{ required: true, message: "请输入系统配置名称", trigger: "blur" }],
      configKey: [{ required: true, message: "请输入系统配置编码", trigger: "blur" }],
      configValue: [{ required: true, message: "请输入系统配置值", trigger: "blur" }]
    });
    function fetchData() {
      loading.value = true;
      ConfigAPI.getPage(queryParams).then((data) => {
        pageData.value = data.list;
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
      selectIds.value = selection.map((item) => item.id);
    }
    function handleOpenDialog(id) {
      dialog.visible = true;
      if (id) {
        dialog.title = "修改系统配置";
        ConfigAPI.getFormData(id).then((data) => {
          Object.assign(formData, data);
        });
      } else {
        dialog.title = "新增系统配置";
        formData.id = void 0;
      }
    }
    const handleRefreshCache = useDebounceFn(() => {
      ConfigAPI.refreshCache().then(() => {
        ElMessage.success("刷新成功");
      });
    }, 1e3);
    function handleSubmit() {
      dataFormRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          const id = formData.id;
          if (id) {
            ConfigAPI.update(id, formData).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          } else {
            ConfigAPI.create(formData).then(() => {
              ElMessage.success("新增成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          }
        }
      });
    }
    function resetForm() {
      dataFormRef.value.resetFields();
      dataFormRef.value.clearValidate();
      formData.id = void 0;
    }
    function handleCloseDialog() {
      dialog.visible = false;
      resetForm();
    }
    function handleDelete(id) {
      ElMessageBox.confirm("确认删除该项配置?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        loading.value = true;
        ConfigAPI.deleteById(id).then(() => {
          ElMessage.success("删除成功");
          handleResetQuery();
        }).finally(() => loading.value = false);
      });
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
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
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
                    placeholder: "请输入配置键\\配置名称",
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
                    default: withCtx(() => [..._cache[10] || (_cache[10] = [
                      createTextVNode("搜索", -1)
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
                  onClick: _cache[1] || (_cache[1] = ($event) => handleOpenDialog())
                }, {
                  default: withCtx(() => [..._cache[12] || (_cache[12] = [
                    createTextVNode(" 新增 ", -1)
                  ])]),
                  _: 1
                })), [
                  [_directive_hasPerm, ["sys:config:add"]]
                ]),
                withDirectives((openBlock(), createBlock(_component_el_button, {
                  color: "#626aef",
                  icon: "RefreshLeft",
                  onClick: unref(handleRefreshCache)
                }, {
                  default: withCtx(() => [..._cache[13] || (_cache[13] = [
                    createTextVNode(" 刷新缓存 ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])), [
                  [_directive_hasPerm, ["sys:config:refresh"]]
                ])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              ref: "dataTableRef",
              data: unref(pageData),
              "highlight-current-row": "",
              class: "data-table__content",
              border: "",
              onSelectionChange: handleSelectionChange
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: "index",
                  label: "序号",
                  width: "60"
                }),
                createVNode(_component_el_table_column, {
                  key: "configName",
                  label: "配置名称",
                  prop: "configName",
                  "min-width": "100"
                }),
                createVNode(_component_el_table_column, {
                  key: "configKey",
                  label: "配置键",
                  prop: "configKey",
                  "min-width": "100"
                }),
                createVNode(_component_el_table_column, {
                  key: "configValue",
                  label: "配置值",
                  prop: "configValue",
                  "min-width": "100"
                }),
                createVNode(_component_el_table_column, {
                  key: "remark",
                  label: "描述",
                  prop: "remark",
                  "min-width": "100"
                }),
                createVNode(_component_el_table_column, {
                  fixed: "right",
                  label: "操作",
                  width: "220"
                }, {
                  default: withCtx((scope) => [
                    withDirectives((openBlock(), createBlock(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      icon: "edit",
                      onClick: ($event) => handleOpenDialog(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:config:update"]]
                    ]),
                    withDirectives((openBlock(), createBlock(_component_el_button, {
                      type: "danger",
                      size: "small",
                      link: "",
                      icon: "delete",
                      onClick: ($event) => handleDelete(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
                        createTextVNode(" 删除 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:config:delete"]]
                    ])
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
              "onUpdate:total": _cache[2] || (_cache[2] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[3] || (_cache[3] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[4] || (_cache[4] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: fetchData
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(dialog).visible = $event),
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
                default: withCtx(() => [..._cache[16] || (_cache[16] = [
                  createTextVNode("确定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[17] || (_cache[17] = [
                  createTextVNode("取消", -1)
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
              rules: unref(rules),
              "label-suffix": ":",
              "label-width": "100px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "配置名称",
                  prop: "configName"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).configName,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(formData).configName = $event),
                      placeholder: "请输入配置名称",
                      maxlength: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "配置键",
                  prop: "configKey"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).configKey,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).configKey = $event),
                      placeholder: "请输入配置键",
                      maxlength: 50
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "配置值",
                  prop: "configValue"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).configValue,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).configValue = $event),
                      placeholder: "请输入配置值",
                      maxlength: 100
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "描述",
                  prop: "remark"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).remark,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(formData).remark = $event),
                      rows: 4,
                      maxlength: 100,
                      "show-word-limit": "",
                      type: "textarea",
                      placeholder: "请输入描述"
                    }, null, 8, ["modelValue"])
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
