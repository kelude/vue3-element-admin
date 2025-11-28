import { d as defineComponent, bM as mergeModels, bN as useModel, r as ref, S as reactive, I as watch, as as resolveComponent, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, i as unref, C as createBaseVNode, E as ElIcon, a4 as createTextVNode, e as createBlock, h as createCommentVNode, aA as isRef, F as toDisplayString, aG as ElMessage, bc as UserAPI, dO as ApiCodeEnum } from "./index.CmLBO_Rw.js";
import { a as ElTable, E as ElTableColumn } from "./table-column.DFvtT2rE.js";
import "./checkbox.BVtb9cA-.js";
/* empty css                 */
import "./popper.D_c7zDnS.js";
import { E as ElScrollbar } from "./scrollbar.DfgyWjDz.js";
/* empty css             */
import { E as ElAlert } from "./alert.EVIJrCuR.js";
import { E as ElDialog } from "./dialog.XrzQjVL9.js";
import "./overlay.hoy_H4Ys.js";
/* empty css                */
import { a as ElForm, E as ElFormItem } from "./form-item.DzcJXr31.js";
import { E as ElUpload } from "./upload.C69fMnOn.js";
import "./progress.D5Rn8Kyr.js";
import { E as ElLink } from "./link.C6e_Yed-.js";
import { E as ElButton } from "./index.BHX3RtPE.js";
const _hoisted_1 = { class: "el-upload__tip" };
const _hoisted_2 = { style: { "padding-right": "var(--el-dialog-padding-primary)" } };
const _hoisted_3 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserImport",
  props: {
    "modelValue": {
      type: Boolean,
      required: true,
      default: false
    },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["import-success"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const visible = useModel(__props, "modelValue");
    const resultVisible = ref(false);
    const resultData = ref([]);
    const invalidCount = ref(0);
    const validCount = ref(0);
    const importFormRef = ref(null);
    const uploadRef = ref(null);
    const importFormData = reactive({
      files: []
    });
    watch(visible, (newValue) => {
      if (newValue) {
        resultData.value = [];
        resultVisible.value = false;
        invalidCount.value = 0;
        validCount.value = 0;
      }
    });
    const importFormRules = {
      files: [{ required: true, message: "文件不能为空", trigger: "blur" }]
    };
    const handleFileExceed = () => {
      ElMessage.warning("只能上传一个文件");
    };
    const handleDownloadTemplate = () => {
      UserAPI.downloadTemplate().then((response) => {
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
    };
    const handleUpload = async () => {
      if (!importFormData.files.length) {
        ElMessage.warning("请选择文件");
        return;
      }
      try {
        const result = await UserAPI.import("1", importFormData.files[0].raw);
        if (result.code === ApiCodeEnum.SUCCESS && result.invalidCount === 0) {
          ElMessage.success("导入成功，导入数据：" + result.validCount + "条");
          emit("import-success");
          handleClose();
        } else {
          ElMessage.error("上传失败");
          resultVisible.value = true;
          resultData.value = result.messageList;
          invalidCount.value = result.invalidCount;
          validCount.value = result.validCount;
        }
      } catch (error) {
        console.error(error);
        ElMessage.error("上传失败：" + error);
      }
    };
    const handleShowResult = () => {
      resultVisible.value = true;
    };
    const handleCloseResult = () => {
      resultVisible.value = false;
    };
    const handleClose = () => {
      importFormData.files.length = 0;
      visible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_upload_filled = resolveComponent("upload-filled");
      const _component_el_icon = ElIcon;
      const _component_el_link = ElLink;
      const _component_el_upload = ElUpload;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_button = ElButton;
      const _component_el_dialog = ElDialog;
      const _component_el_alert = ElAlert;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_dialog, {
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
          "align-center": true,
          title: "导入数据",
          width: "600px",
          onClose: handleClose
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              unref(resultData).length > 0 ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                type: "primary",
                onClick: handleShowResult
              }, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createTextVNode(" 错误信息 ", -1)
                ])]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_el_button, {
                type: "primary",
                disabled: unref(importFormData).files.length === 0,
                onClick: handleUpload
              }, {
                default: withCtx(() => [..._cache[7] || (_cache[7] = [
                  createTextVNode(" 确 定 ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              createVNode(_component_el_button, { onClick: handleClose }, {
                default: withCtx(() => [..._cache[8] || (_cache[8] = [
                  createTextVNode("取 消", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_scrollbar, { "max-height": "60vh" }, {
              default: withCtx(() => [
                createVNode(_component_el_form, {
                  ref_key: "importFormRef",
                  ref: importFormRef,
                  style: { "padding-right": "var(--el-dialog-padding-primary)" },
                  model: unref(importFormData),
                  rules: importFormRules
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, {
                      label: "文件名",
                      prop: "files"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_upload, {
                          ref_key: "uploadRef",
                          ref: uploadRef,
                          "file-list": unref(importFormData).files,
                          "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => unref(importFormData).files = $event),
                          class: "w-full",
                          accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                          drag: true,
                          limit: 1,
                          "auto-upload": false,
                          "on-exceed": handleFileExceed
                        }, {
                          tip: withCtx(() => [
                            createBaseVNode("div", _hoisted_1, [
                              _cache[4] || (_cache[4] = createTextVNode(" 格式为*.xlsx / *.xls，文件不超过一个 ", -1)),
                              createVNode(_component_el_link, {
                                type: "primary",
                                icon: "download",
                                underline: "never",
                                onClick: handleDownloadTemplate
                              }, {
                                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                  createTextVNode(" 下载模板 ", -1)
                                ])]),
                                _: 1
                              })
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { class: "el-icon--upload" }, {
                              default: withCtx(() => [
                                createVNode(_component_upload_filled)
                              ]),
                              _: 1
                            }),
                            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "el-upload__text" }, [
                              createTextVNode(" 将文件拖到此处，或 "),
                              createBaseVNode("em", null, "点击上传")
                            ], -1))
                          ]),
                          _: 1
                        }, 8, ["file-list"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_dialog, {
          modelValue: unref(resultVisible),
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(resultVisible) ? resultVisible.value = $event : null),
          title: "导入结果",
          width: "600px"
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_el_button, { onClick: handleCloseResult }, {
                default: withCtx(() => [..._cache[9] || (_cache[9] = [
                  createTextVNode("关闭", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_alert, {
              title: `导入结果：${unref(invalidCount)}条无效数据，${unref(validCount)}条有效数据`,
              type: "warning",
              closable: false
            }, null, 8, ["title"]),
            createVNode(_component_el_table, {
              data: unref(resultData),
              style: { "width": "100%", "max-height": "400px" }
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  prop: "index",
                  align: "center",
                  width: "100",
                  type: "index",
                  label: "序号"
                }),
                createVNode(_component_el_table_column, {
                  prop: "message",
                  label: "错误信息",
                  width: "400"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString(scope.row), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
