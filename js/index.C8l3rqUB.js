import { d as defineComponent, r as ref, S as reactive, o as onMounted, as as resolveComponent, bO as resolveDirective, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, w as withCtx, a3 as withKeys, i as unref, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, F as toDisplayString, aA as isRef, P as Fragment, Q as renderList, bc as UserAPI, aG as ElMessage } from "./index.C-w1mPR5.js";
import { v as vLoading } from "./loading.D45eDDgt.js";
import { E as ElDescriptions, a as ElDescriptionsItem } from "./descriptions-item.CU0dZvQ4.js";
import { E as ElDialog } from "./dialog.DTSleIRn.js";
import "./overlay.6P5GvOwu.js";
import { _ as _sfc_main$3 } from "./index.vue_vue_type_script_setup_true_lang.-XO4MEmT.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.BKt65S9k.js";
import { _ as _sfc_main$2 } from "./index.vue_vue_type_script_setup_true_lang.92Z5MAjd.js";
import { E as ElCard } from "./card.EBLyLLiR.js";
import { _ as __unplugin_components_12 } from "./index.D7ylDnoz.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.CVY5P60L.js";
import "./checkbox.C7Foa8TW.js";
/* empty css                 */
import "./popper.B8758rPD.js";
import "./scrollbar.DFEDmrTe.js";
/* empty css             */
import { _ as _sfc_main$1 } from "./DictLabel.vue_vue_type_script_setup_true_lang.OCzdxYx2.js";
import { E as ElFormItem, a as ElForm } from "./form-item.Dj1vXnXz.js";
/* empty css                */
import { E as ElSelect, a as ElOption } from "./select.DEZ3TM_z.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { N as NoticeAPI } from "./notice-api.DC74BjGI.js";
/* empty css                     */
import { E as ElButton } from "./index.BMPR14Hc.js";
import { E as ElTag } from "./index.C28lPzad.js";
import { E as ElMessageBox } from "./index.DacSnX-o.js";
import "./vnode.AKE4hrFO.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./index.Y-PlGRQ9.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.DBHfYhTD.js";
import "./event.BZTOGHfp.js";
import "./error.BVJkE67s.js";
import "./scroll.BCEJlaVo.js";
import "./file-api.Bnb3EA79.js";
import "./index.DmNrmtFU.js";
/* empty css                        */
import "./pagination.Cdh-VGb5.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./raf.DEAyVqZt.js";
import "./_baseIteratee.CQTSDRqz.js";
import "./castArray.C7_3uu86.js";
import "./debounce.sHE95kMl.js";
import "./toNumber.BD3fO3HE.js";
import "./index.CHVt_Cot.js";
import "./index.D1LU_lkm.js";
import "./_baseClone.vDnszwId.js";
import "./token.BqWJQ4CJ.js";
import "./strings.U77u0PSM.js";
import "./index.BLtH7mBo.js";
import "./index.Cz0Zbu2t.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "flex-x-start" };
const _hoisted_6 = {
  key: 0,
  class: "flex-x-start"
};
const _hoisted_7 = {
  key: 1,
  class: "flex-x-start"
};
const _hoisted_8 = { class: "dialog-footer" };
const _hoisted_9 = { class: "flex-x-between" };
const _hoisted_10 = { class: "dialog-toolbar" };
const _hoisted_11 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Notice",
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
      pageSize: 10
    });
    const userOptions = ref([]);
    const pageData = ref([]);
    const dialog = reactive({
      title: "",
      visible: false
    });
    const formData = reactive({
      level: "L",
      // 默认优先级为低
      targetType: 1
      // 默认目标类型为全体
    });
    const rules = reactive({
      title: [{ required: true, message: "请输入通知标题", trigger: "blur" }],
      content: [
        {
          required: true,
          message: "请输入通知内容",
          trigger: "blur",
          validator: (rule, value, callback) => {
            if (!value.replace(/<[^>]+>/g, "").trim()) {
              callback(new Error("请输入通知内容"));
            } else {
              callback();
            }
          }
        }
      ],
      type: [{ required: true, message: "请选择通知类型", trigger: "change" }]
    });
    const detailDialog = reactive({
      visible: false
    });
    const currentNotice = ref({});
    function handleQuery() {
      queryParams.pageNum = 1;
      fetchData();
    }
    function fetchData() {
      loading.value = true;
      NoticeAPI.getPage(queryParams).then((data) => {
        pageData.value = data.list;
        total.value = data.total;
      }).finally(() => {
        loading.value = false;
      });
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      queryParams.pageNum = 1;
      handleQuery();
    }
    function handleSelectionChange(selection) {
      selectIds.value = selection.map((item) => item.id);
    }
    function handleOpenDialog(id) {
      UserAPI.getOptions().then((data) => {
        userOptions.value = data;
      });
      dialog.visible = true;
      if (id) {
        dialog.title = "修改公告";
        NoticeAPI.getFormData(id).then((data) => {
          Object.assign(formData, data);
        });
      } else {
        Object.assign(formData, { level: 0, targetType: 0 });
        dialog.title = "新增公告";
      }
    }
    function handlePublish(id) {
      NoticeAPI.publish(id).then(() => {
        ElMessage.success("发布成功");
        handleQuery();
      });
    }
    function handleRevoke(id) {
      NoticeAPI.revoke(id).then(() => {
        ElMessage.success("撤回成功");
        handleQuery();
      });
    }
    function handleSubmit() {
      dataFormRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          const id = formData.id;
          if (id) {
            NoticeAPI.update(id, formData).then(() => {
              ElMessage.success("修改成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          } else {
            NoticeAPI.create(formData).then(() => {
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
      formData.targetType = 1;
    }
    function handleCloseDialog() {
      dialog.visible = false;
      resetForm();
    }
    function handleDelete(id) {
      const deleteIds = [id || selectIds.value].join(",");
      if (!deleteIds) {
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
          NoticeAPI.deleteByIds(deleteIds).then(() => {
            ElMessage.success("删除成功");
            handleResetQuery();
          }).finally(() => loading.value = false);
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    const closeDetailDialog = () => {
      detailDialog.visible = false;
    };
    const openDetailDialog = async (id) => {
      const noticeDetail = await NoticeAPI.getDetail(id);
      currentNotice.value = noticeDetail;
      detailDialog.visible = true;
    };
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
      const _component_DictLabel = _sfc_main$1;
      const _component_el_tag = ElTag;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
      const _component_Dict = _sfc_main$2;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_WangEditor = _sfc_main$3;
      const _component_el_dialog = ElDialog;
      const _component_Close = resolveComponent("Close");
      const _component_el_descriptions_item = ElDescriptionsItem;
      const _component_el_descriptions = ElDescriptions;
      const _directive_hasPerm = resolveDirective("hasPerm");
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_form, {
            ref_key: "queryFormRef",
            ref: queryFormRef,
            model: unref(queryParams),
            inline: true,
            "label-suffix": ":"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "标题123",
                prop: "title"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).title,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).title = $event),
                    placeholder: "标题",
                    clearable: "",
                    onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => handleQuery(), ["enter"]))
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "发布状态",
                prop: "publishStatus"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: unref(queryParams).publishStatus,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(queryParams).publishStatus = $event),
                    clearable: "",
                    placeholder: "全部",
                    style: { "width": "100px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_option, {
                        value: 0,
                        label: "未发布"
                      }),
                      createVNode(_component_el_option, {
                        value: 1,
                        label: "已发布"
                      }),
                      createVNode(_component_el_option, {
                        value: -1,
                        label: "已撤回"
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
                    type: "primary",
                    icon: "search",
                    onClick: _cache[3] || (_cache[3] = ($event) => handleQuery())
                  }, {
                    default: withCtx(() => [..._cache[21] || (_cache[21] = [
                      createTextVNode("搜索", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    icon: "refresh",
                    onClick: _cache[4] || (_cache[4] = ($event) => handleResetQuery())
                  }, {
                    default: withCtx(() => [..._cache[22] || (_cache[22] = [
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
                  onClick: _cache[5] || (_cache[5] = ($event) => handleOpenDialog())
                }, {
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createTextVNode(" 新增通知 ", -1)
                  ])]),
                  _: 1
                })), [
                  [_directive_hasPerm, ["sys:notice:add"]]
                ]),
                withDirectives((openBlock(), createBlock(_component_el_button, {
                  type: "danger",
                  disabled: unref(selectIds).length === 0,
                  icon: "delete",
                  onClick: _cache[6] || (_cache[6] = ($event) => handleDelete())
                }, {
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode(" 删除 ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])), [
                  [_directive_hasPerm, ["sys:notice:delete"]]
                ])
              ])
            ]),
            withDirectives((openBlock(), createBlock(_component_el_table, {
              ref: "dataTableRef",
              data: unref(pageData),
              "highlight-current-row": "",
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
                  type: "index",
                  label: "序号",
                  width: "60"
                }),
                createVNode(_component_el_table_column, {
                  label: "通知标题",
                  prop: "title",
                  "min-width": "200"
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "通知类型",
                  width: "150"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_DictLabel, {
                      modelValue: scope.row.type,
                      "onUpdate:modelValue": ($event) => scope.row.type = $event,
                      code: "notice_type"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "发布人",
                  prop: "publisherName",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "通知等级",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_DictLabel, {
                      modelValue: scope.row.level,
                      "onUpdate:modelValue": ($event) => scope.row.level = $event,
                      code: "notice_level"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "通告目标类型",
                  prop: "targetType",
                  "min-width": "100"
                }, {
                  default: withCtx((scope) => [
                    scope.row.targetType == 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "warning"
                    }, {
                      default: withCtx(() => [..._cache[25] || (_cache[25] = [
                        createTextVNode("全体", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
                    scope.row.targetType == 2 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[26] || (_cache[26] = [
                        createTextVNode("指定", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  label: "发布状态",
                  "min-width": "100"
                }, {
                  default: withCtx((scope) => [
                    scope.row.publishStatus == 0 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[27] || (_cache[27] = [
                        createTextVNode("未发布", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
                    scope.row.publishStatus == 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[28] || (_cache[28] = [
                        createTextVNode("已发布", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
                    scope.row.publishStatus == -1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 2,
                      type: "warning"
                    }, {
                      default: withCtx(() => [..._cache[29] || (_cache[29] = [
                        createTextVNode("已撤回", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "操作时间",
                  width: "250"
                }, {
                  default: withCtx((scope) => [
                    createBaseVNode("div", _hoisted_5, [
                      _cache[30] || (_cache[30] = createBaseVNode("span", null, "创建时间：", -1)),
                      createBaseVNode("span", null, toDisplayString(scope.row.createTime || "-"), 1)
                    ]),
                    scope.row.publishStatus === 1 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      _cache[31] || (_cache[31] = createBaseVNode("span", null, "发布时间：", -1)),
                      createBaseVNode("span", null, toDisplayString(scope.row.publishTime || "-"), 1)
                    ])) : scope.row.publishStatus === -1 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      _cache[32] || (_cache[32] = createBaseVNode("span", null, "撤回时间：", -1)),
                      createBaseVNode("span", null, toDisplayString(scope.row.revokeTime || "-"), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  align: "center",
                  fixed: "right",
                  label: "操作",
                  width: "150"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      onClick: ($event) => openDetailDialog(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[33] || (_cache[33] = [
                        createTextVNode(" 查看 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    scope.row.publishStatus != 1 ? withDirectives((openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "primary",
                      size: "small",
                      link: "",
                      onClick: ($event) => handlePublish(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[34] || (_cache[34] = [
                        createTextVNode(" 发布 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:notice:publish"]]
                    ]) : createCommentVNode("", true),
                    scope.row.publishStatus == 1 ? withDirectives((openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      type: "primary",
                      size: "small",
                      link: "",
                      onClick: ($event) => handleRevoke(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[35] || (_cache[35] = [
                        createTextVNode(" 撤回 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:notice:revoke"]]
                    ]) : createCommentVNode("", true),
                    scope.row.publishStatus != 1 ? withDirectives((openBlock(), createBlock(_component_el_button, {
                      key: 2,
                      type: "primary",
                      size: "small",
                      link: "",
                      onClick: ($event) => handleOpenDialog(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[36] || (_cache[36] = [
                        createTextVNode(" 编辑 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:notice:edit"]]
                    ]) : createCommentVNode("", true),
                    scope.row.publishStatus != 1 ? withDirectives((openBlock(), createBlock(_component_el_button, {
                      key: 3,
                      type: "danger",
                      size: "small",
                      link: "",
                      onClick: ($event) => handleDelete(scope.row.id)
                    }, {
                      default: withCtx(() => [..._cache[37] || (_cache[37] = [
                        createTextVNode(" 删除 ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])), [
                      [_directive_hasPerm, ["sys:notice:delete"]]
                    ]) : createCommentVNode("", true)
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
              "onUpdate:total": _cache[7] || (_cache[7] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[8] || (_cache[8] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[9] || (_cache[9] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: _cache[10] || (_cache[10] = ($event) => fetchData())
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          top: "3vh",
          width: "80%",
          onClose: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[17] || (_cache[17] = ($event) => handleSubmit())
              }, {
                default: withCtx(() => [..._cache[40] || (_cache[40] = [
                  createTextVNode("确定", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, {
                onClick: _cache[18] || (_cache[18] = ($event) => handleCloseDialog())
              }, {
                default: withCtx(() => [..._cache[41] || (_cache[41] = [
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
              "label-width": "100px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "通知标题",
                  prop: "title"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).title,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(formData).title = $event),
                      placeholder: "通知标题",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "通知类型",
                  prop: "type"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Dict, {
                      modelValue: unref(formData).type,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(formData).type = $event),
                      code: "notice_type"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "通知等级",
                  prop: "level"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Dict, {
                      modelValue: unref(formData).level,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(formData).level = $event),
                      code: "notice_level"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "目标类型",
                  prop: "targetType"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(formData).targetType,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(formData).targetType = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { value: 1 }, {
                          default: withCtx(() => [..._cache[38] || (_cache[38] = [
                            createTextVNode("全体", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { value: 2 }, {
                          default: withCtx(() => [..._cache[39] || (_cache[39] = [
                            createTextVNode("指定", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                unref(formData).targetType == 2 ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 0,
                  label: "指定用户",
                  prop: "targetUserIds"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: unref(formData).targetUserIds,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(formData).targetUserIds = $event),
                      multiple: "",
                      search: "",
                      placeholder: "请选择指定用户"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(userOptions), (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.value,
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_el_form_item, {
                  label: "通知内容",
                  prop: "content"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_WangEditor, {
                      modelValue: unref(formData).content,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(formData).content = $event)
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
        createVNode(_component_el_dialog, {
          modelValue: unref(detailDialog).visible,
          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(detailDialog).visible = $event),
          "show-close": false,
          width: "50%",
          "append-to-body": "",
          onClose: closeDetailDialog
        }, {
          header: withCtx(() => [
            createBaseVNode("div", _hoisted_9, [
              _cache[42] || (_cache[42] = createBaseVNode("span", null, "通知公告详情", -1)),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_el_button, {
                  circle: "",
                  onClick: closeDetailDialog
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Close)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_descriptions, { column: 1 }, {
              default: withCtx(() => [
                createVNode(_component_el_descriptions_item, { label: "标题：" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currentNotice).title), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_descriptions_item, { label: "发布状态：" }, {
                  default: withCtx(() => [
                    unref(currentNotice).publishStatus == 0 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "info"
                    }, {
                      default: withCtx(() => [..._cache[43] || (_cache[43] = [
                        createTextVNode("未发布", -1)
                      ])]),
                      _: 1
                    })) : unref(currentNotice).publishStatus == 1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "success"
                    }, {
                      default: withCtx(() => [..._cache[44] || (_cache[44] = [
                        createTextVNode("已发布", -1)
                      ])]),
                      _: 1
                    })) : unref(currentNotice).publishStatus == -1 ? (openBlock(), createBlock(_component_el_tag, {
                      key: 2,
                      type: "warning"
                    }, {
                      default: withCtx(() => [..._cache[45] || (_cache[45] = [
                        createTextVNode("已撤回", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_descriptions_item, { label: "发布人：" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currentNotice).publisherName), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_descriptions_item, { label: "发布时间：" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currentNotice).publishTime), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_descriptions_item, { label: "公告内容：" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: "notice-content",
                      innerHTML: unref(currentNotice).content
                    }, null, 8, _hoisted_11)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
