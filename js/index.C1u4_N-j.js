import { d as defineComponent, aJ as useUserStore, al as useAppStore, r as ref, S as reactive, c as computed, ar as DeviceEnum, o as onMounted, bO as resolveDirective, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, i as unref, C as createBaseVNode, a3 as withKeys, a4 as createTextVNode, $ as withDirectives, e as createBlock, h as createCommentVNode, F as toDisplayString, aA as isRef, P as Fragment, Q as renderList, dK as useDebounceFn, bc as UserAPI, aG as ElMessage } from "./index.CjDU5CMT.js";
import { v as vLoading } from "./loading.VFMs3r9q.js";
import { E as ElDrawer } from "./drawer.Buj1rOle.js";
import "./overlay.o3UQGxY9.js";
import { E as ElSwitch } from "./switch.CIoM6Tkm.js";
import { _ as _sfc_main$3 } from "./index.vue_vue_type_script_setup_true_lang.CA7eg3Kg.js";
/* empty css             */
import { E as ElSelect, a as ElOption } from "./select.k4MfD7cG.js";
import "./scrollbar.Cvm8P6mA.js";
import "./popper.CVURbzwO.js";
import "./tree.BOpUeR1f.js";
import "./checkbox.Dum2PTxz.js";
import "./text.BhAbWWKi.js";
import { E as ElTreeSelect } from "./tree-select.Ckx52jar.js";
import { a as ElCol, E as ElRow } from "./col.BrzLdU_R.js";
import { E as ElCard } from "./card.Llc-pG1g.js";
import { _ as __unplugin_components_12 } from "./index.p6Lj-BJd.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.hLYp9Dcy.js";
/* empty css                 */
import { _ as _sfc_main$2 } from "./DictLabel.vue_vue_type_script_setup_true_lang.pd3aRIJ9.js";
import { a as ElForm, E as ElFormItem } from "./form-item.nVgD0sQO.js";
/* empty css                */
import { E as ElDatePicker } from "./date-picker-panel.D0RieSl5.js";
import { E as ElInput } from "./input.mLRPLJvT.js";
import { D as DeptAPI } from "./dept-api.Bm3jghrQ.js";
import { R as RoleAPI } from "./role-api.9oBlqFsX.js";
import { _ as _sfc_main$1 } from "./DeptTree.vue_vue_type_script_setup_true_lang.Bq4_LyVW.js";
import { _ as _sfc_main$4 } from "./UserImport.vue_vue_type_script_setup_true_lang.DXgPn_Nm.js";
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
import "./index.DR0hHISx.js";
/* empty css                        */
import "./radio-group.BP3ybXHH.js";
import "./token.BqWJQ4CJ.js";
import "./strings.DkiybUg_.js";
import "./castArray.CGtXUNId.js";
import "./index.BWKss2Xq.js";
import "./debounce.DqQI4auM.js";
import "./toNumber.Bjx_Wkzc.js";
import "./_baseIteratee.8Db5_go8.js";
import "./index.Cy9yngL_.js";
import "./index.BIuzPtP6.js";
import "./index.BNPSNYty.js";
import "./pagination.DvJ8Xqy6.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./_initCloneObject.tFWjqE6V.js";
import "./raf.kR-SyviK.js";
import "./_baseClone.C7MQiCf9.js";
import "./dayjs.min.IF1tzgnz.js";
import "./index.6kvQcyfU.js";
import "./index.CCbVilVt.js";
import "./alert.C6R3t23G.js";
import "./dialog.Zc5jz9VX.js";
import "./refs.CxYYXu5Q.js";
import "./upload.BunP5VfD.js";
import "./progress.DfOY8enO.js";
import "./link.KJjpinkR.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "data-table__toolbar" };
const _hoisted_4 = { class: "data-table__toolbar--actions" };
const _hoisted_5 = { class: "data-table__toolbar--tools" };
const _hoisted_6 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "User",
    inheritAttrs: false
  },
  __name: "index",
  setup(__props) {
    const userStore = useUserStore();
    const appStore = useAppStore();
    const queryFormRef = ref();
    const userFormRef = ref();
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const pageData = ref();
    const total = ref(0);
    const loading = ref(false);
    const dialog = reactive({
      visible: false,
      title: "新增用户"
    });
    const drawerSize = computed(() => appStore.device === DeviceEnum.DESKTOP ? "600px" : "90%");
    const formData = reactive({
      status: 1
    });
    const rules = reactive({
      username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      nickname: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
      deptId: [{ required: true, message: "所属部门不能为空", trigger: "blur" }],
      roleIds: [{ required: true, message: "用户角色不能为空", trigger: "blur" }],
      email: [
        {
          pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
          message: "请输入正确的邮箱地址",
          trigger: "blur"
        }
      ],
      mobile: [
        {
          pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: "请输入正确的手机号码",
          trigger: "blur"
        }
      ]
    });
    const selectIds = ref([]);
    const deptOptions = ref();
    const roleOptions = ref();
    const importDialogVisible = ref(false);
    async function fetchData() {
      loading.value = true;
      try {
        const data = await UserAPI.getPage(queryParams);
        pageData.value = data.list;
        total.value = data.total;
      } finally {
        loading.value = false;
      }
    }
    function handleQuery() {
      queryParams.pageNum = 1;
      fetchData();
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      queryParams.pageNum = 1;
      queryParams.deptId = void 0;
      queryParams.createTime = void 0;
      fetchData();
    }
    function handleSelectionChange(selection) {
      selectIds.value = selection.map((item) => item.id);
    }
    function hancleResetPassword(row) {
      ElMessageBox.prompt("请输入用户【" + row.username + "】的新密码", "重置密码", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(
        ({ value }) => {
          if (!value || value.length < 6) {
            ElMessage.warning("密码至少需要6位字符，请重新输入");
            return false;
          }
          UserAPI.resetPassword(row.id, value).then(() => {
            ElMessage.success("密码重置成功，新密码是：" + value);
          });
        },
        () => {
          ElMessage.info("已取消重置密码");
        }
      );
    }
    async function handleOpenDialog(id) {
      dialog.visible = true;
      roleOptions.value = await RoleAPI.getOptions();
      deptOptions.value = await DeptAPI.getOptions();
      if (id) {
        dialog.title = "修改用户";
        UserAPI.getFormData(id).then((data) => {
          Object.assign(formData, { ...data });
        });
      } else {
        dialog.title = "新增用户";
      }
    }
    function handleCloseDialog() {
      dialog.visible = false;
      userFormRef.value.resetFields();
      userFormRef.value.clearValidate();
      formData.id = void 0;
      formData.status = 1;
    }
    const handleSubmit = useDebounceFn(() => {
      userFormRef.value.validate((valid) => {
        if (valid) {
          const userId = formData.id;
          loading.value = true;
          if (userId) {
            UserAPI.update(userId, formData).then(() => {
              ElMessage.success("修改用户成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          } else {
            UserAPI.create(formData).then(() => {
              ElMessage.success("新增用户成功");
              handleCloseDialog();
              handleResetQuery();
            }).finally(() => loading.value = false);
          }
        }
      });
    }, 1e3);
    function isDeletingCurrentUser(singleId, selectedIds = [], currentUserInfo) {
      if (!currentUserInfo?.userId) return false;
      if (singleId && singleId.toString() === currentUserInfo.userId) {
        return true;
      }
      if (!singleId && selectedIds.length > 0) {
        return selectedIds.map(String).includes(currentUserInfo.userId);
      }
      return false;
    }
    function handleDelete(id) {
      const userIds = [id || selectIds.value].join(",");
      if (!userIds) {
        ElMessage.warning("请勾选删除项");
        return;
      }
      const currentUserInfo = userStore.userInfo;
      if (isDeletingCurrentUser(id, selectIds.value, currentUserInfo)) {
        ElMessage.error("不能删除当前登录用户");
        return;
      }
      ElMessageBox.confirm("确认删除用户?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(
        () => {
          loading.value = true;
          UserAPI.deleteByIds(userIds).then(() => {
            ElMessage.success("删除成功");
            handleResetQuery();
          }).finally(() => loading.value = false);
        },
        () => {
          ElMessage.info("已取消删除");
        }
      );
    }
    function handleOpenImportDialog() {
      importDialogVisible.value = true;
    }
    function handleExport() {
      UserAPI.export(queryParams).then((response) => {
        const fileData = response.data;
        const fileName = decodeURI(response.headers["content-disposition"].split(";")[1].split("=")[1]);
        const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8";
        const blob = new Blob([fileData], { type: fileType });
        const downloadUrl = window.URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");
        downloadLink.href = downloadUrl;
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadUrl);
      });
    }
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_el_col = ElCol;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_DictLabel = _sfc_main$2;
      const _component_el_tag = ElTag;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_12;
      const _component_el_card = ElCard;
      const _component_el_row = ElRow;
      const _component_el_tree_select = ElTreeSelect;
      const _component_Dict = _sfc_main$3;
      const _component_el_switch = ElSwitch;
      const _component_el_drawer = ElDrawer;
      const _directive_hasPerm = resolveDirective("hasPerm");
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_row, { gutter: 20 }, {
          default: withCtx(() => [
            createVNode(_component_el_col, {
              lg: 4,
              xs: 24,
              class: "mb-[12px]"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$1, {
                  modelValue: unref(queryParams).deptId,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).deptId = $event),
                  onNodeClick: handleQuery
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_col, {
              lg: 20,
              xs: 24
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_el_form, {
                    ref_key: "queryFormRef",
                    ref: queryFormRef,
                    model: unref(queryParams),
                    inline: true,
                    "label-width": "auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "关键字",
                        prop: "keywords"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(queryParams).keywords,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(queryParams).keywords = $event),
                            placeholder: "用户名/昵称/手机号",
                            clearable: "",
                            onKeyup: withKeys(handleQuery, ["enter"])
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "状态",
                        prop: "status"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: unref(queryParams).status,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(queryParams).status = $event),
                            placeholder: "全部",
                            clearable: "",
                            style: { "width": "100px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_option, {
                                label: "正常",
                                value: 1
                              }),
                              createVNode(_component_el_option, {
                                label: "禁用",
                                value: 0
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "创建时间" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_date_picker, {
                            modelValue: unref(queryParams).createTime,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(queryParams).createTime = $event),
                            editable: false,
                            type: "daterange",
                            "range-separator": "~",
                            "start-placeholder": "开始时间",
                            "end-placeholder": "截止时间",
                            "value-format": "YYYY-MM-DD"
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
                          onClick: _cache[4] || (_cache[4] = ($event) => handleOpenDialog())
                        }, {
                          default: withCtx(() => [..._cache[22] || (_cache[22] = [
                            createTextVNode(" 新增 ", -1)
                          ])]),
                          _: 1
                        })), [
                          [_directive_hasPerm, ["sys:user:add"]]
                        ]),
                        withDirectives((openBlock(), createBlock(_component_el_button, {
                          type: "danger",
                          icon: "delete",
                          disabled: unref(selectIds).length === 0,
                          onClick: _cache[5] || (_cache[5] = ($event) => handleDelete())
                        }, {
                          default: withCtx(() => [..._cache[23] || (_cache[23] = [
                            createTextVNode(" 删除 ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])), [
                          [_directive_hasPerm, "sys:user:delete"]
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_5, [
                        withDirectives((openBlock(), createBlock(_component_el_button, {
                          icon: "upload",
                          onClick: handleOpenImportDialog
                        }, {
                          default: withCtx(() => [..._cache[24] || (_cache[24] = [
                            createTextVNode(" 导入 ", -1)
                          ])]),
                          _: 1
                        })), [
                          [_directive_hasPerm, "sys:user:import"]
                        ]),
                        withDirectives((openBlock(), createBlock(_component_el_button, {
                          icon: "download",
                          onClick: handleExport
                        }, {
                          default: withCtx(() => [..._cache[25] || (_cache[25] = [
                            createTextVNode(" 导出 ", -1)
                          ])]),
                          _: 1
                        })), [
                          [_directive_hasPerm, "sys:user:export"]
                        ])
                      ])
                    ]),
                    withDirectives((openBlock(), createBlock(_component_el_table, {
                      data: unref(pageData),
                      border: "",
                      stripe: "",
                      "highlight-current-row": "",
                      class: "data-table__content",
                      onSelectionChange: handleSelectionChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_table_column, {
                          type: "selection",
                          width: "50",
                          align: "center"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "用户名",
                          prop: "username"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "昵称",
                          width: "150",
                          align: "center",
                          prop: "nickname"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "性别",
                          width: "100",
                          align: "center"
                        }, {
                          default: withCtx((scope) => [
                            createVNode(_component_DictLabel, {
                              modelValue: scope.row.gender,
                              "onUpdate:modelValue": ($event) => scope.row.gender = $event,
                              code: "gender"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "部门",
                          width: "120",
                          align: "center",
                          prop: "deptName"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "手机号码",
                          align: "center",
                          prop: "mobile",
                          width: "120"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "邮箱",
                          align: "center",
                          prop: "email",
                          width: "160"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "状态",
                          align: "center",
                          prop: "status",
                          width: "80"
                        }, {
                          default: withCtx((scope) => [
                            createVNode(_component_el_tag, {
                              type: scope.row.status == 1 ? "success" : "info"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(scope.row.status == 1 ? "正常" : "禁用"), 1)
                              ]),
                              _: 2
                            }, 1032, ["type"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "创建时间",
                          align: "center",
                          prop: "createTime",
                          width: "150"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "操作",
                          fixed: "right",
                          width: "220"
                        }, {
                          default: withCtx((scope) => [
                            withDirectives((openBlock(), createBlock(_component_el_button, {
                              type: "primary",
                              icon: "RefreshLeft",
                              size: "small",
                              link: "",
                              onClick: ($event) => hancleResetPassword(scope.row)
                            }, {
                              default: withCtx(() => [..._cache[26] || (_cache[26] = [
                                createTextVNode(" 重置密码 ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"])), [
                              [_directive_hasPerm, "sys:user:reset-password"]
                            ]),
                            withDirectives((openBlock(), createBlock(_component_el_button, {
                              type: "primary",
                              icon: "edit",
                              link: "",
                              size: "small",
                              onClick: ($event) => handleOpenDialog(scope.row.id)
                            }, {
                              default: withCtx(() => [..._cache[27] || (_cache[27] = [
                                createTextVNode(" 编辑 ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"])), [
                              [_directive_hasPerm, "sys:user:edit"]
                            ]),
                            withDirectives((openBlock(), createBlock(_component_el_button, {
                              type: "danger",
                              icon: "delete",
                              link: "",
                              size: "small",
                              onClick: ($event) => handleDelete(scope.row.id)
                            }, {
                              default: withCtx(() => [..._cache[28] || (_cache[28] = [
                                createTextVNode(" 删除 ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"])), [
                              [_directive_hasPerm, "sys:user:delete"]
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
                      "onUpdate:total": _cache[6] || (_cache[6] = ($event) => isRef(total) ? total.value = $event : null),
                      page: unref(queryParams).pageNum,
                      "onUpdate:page": _cache[7] || (_cache[7] = ($event) => unref(queryParams).pageNum = $event),
                      limit: unref(queryParams).pageSize,
                      "onUpdate:limit": _cache[8] || (_cache[8] = ($event) => unref(queryParams).pageSize = $event),
                      onPagination: fetchData
                    }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_drawer, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          "append-to-body": "",
          size: unref(drawerSize),
          onClose: handleCloseDialog
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: unref(handleSubmit)
              }, {
                default: withCtx(() => [..._cache[29] || (_cache[29] = [
                  createTextVNode("确 定", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_el_button, { onClick: handleCloseDialog }, {
                default: withCtx(() => [..._cache[30] || (_cache[30] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "userFormRef",
              ref: userFormRef,
              model: unref(formData),
              rules: unref(rules),
              "label-width": "80px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "用户名",
                  prop: "username"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).username,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(formData).username = $event),
                      readonly: !!unref(formData).id,
                      placeholder: "请输入用户名"
                    }, null, 8, ["modelValue", "readonly"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "用户昵称",
                  prop: "nickname"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).nickname,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(formData).nickname = $event),
                      placeholder: "请输入用户昵称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "所属部门",
                  prop: "deptId"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_tree_select, {
                      modelValue: unref(formData).deptId,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(formData).deptId = $event),
                      placeholder: "请选择所属部门",
                      data: unref(deptOptions),
                      filterable: "",
                      "check-strictly": "",
                      "render-after-expand": false
                    }, null, 8, ["modelValue", "data"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "性别",
                  prop: "gender"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Dict, {
                      modelValue: unref(formData).gender,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(formData).gender = $event),
                      code: "gender"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "角色",
                  prop: "roleIds"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: unref(formData).roleIds,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(formData).roleIds = $event),
                      multiple: "",
                      placeholder: "请选择"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(roleOptions), (item) => {
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
                }),
                createVNode(_component_el_form_item, {
                  label: "手机号码",
                  prop: "mobile"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).mobile,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(formData).mobile = $event),
                      placeholder: "请输入手机号码",
                      maxlength: "11"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "邮箱",
                  prop: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).email,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(formData).email = $event),
                      placeholder: "请输入邮箱",
                      maxlength: "50"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "状态",
                  prop: "status"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_switch, {
                      modelValue: unref(formData).status,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(formData).status = $event),
                      "inline-prompt": "",
                      "active-text": "正常",
                      "inactive-text": "禁用",
                      "active-value": 1,
                      "inactive-value": 0
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title", "size"]),
        createVNode(_sfc_main$4, {
          modelValue: unref(importDialogVisible),
          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => isRef(importDialogVisible) ? importDialogVisible.value = $event : null),
          onImportSuccess: _cache[19] || (_cache[19] = ($event) => handleQuery())
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
