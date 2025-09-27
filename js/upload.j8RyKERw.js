import { d as defineComponent, bK as mergeModels, bL as useModel, r as ref, I as watch, as as resolveComponent, g as createElementBlock, f as openBlock, m as createVNode, k as normalizeStyle, i as unref, aA as isRef, w as withCtx, a4 as createTextVNode, F as toDisplayString, C as createBaseVNode, E as ElIcon, j as withModifiers, aG as ElMessage, bX as useCssVars, e as createBlock, P as Fragment, o as onMounted, h as createCommentVNode } from "./index.By1HG0zl.js";
import { E as ElFormItem, a as ElForm } from "./form-item.DPbtp_43.js";
import { E as ElUpload } from "./upload.ClIAxNoG.js";
import { E as ElProgress } from "./progress.Br8fFBoG.js";
/* empty css                */
import { F as FileAPI } from "./file-api.D1nwlcVx.js";
import { E as ElButton } from "./index.DrmDPqoI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import { E as ElImage, a as ElImageViewer } from "./image-viewer.CR7h--j2.js";
import { E as ElLink } from "./link.DJfoi8j4.js";
import "./use-form-common-props.DPAYUUkh.js";
import "./castArray.B9kvtQKh.js";
import "./error.BVJkE67s.js";
import "./_baseClone.CBVZP9kp.js";
import "./_initCloneObject.CO4fE7pF.js";
import "./index.BQ1YrHne.js";
import "./index.Cbuy3c8U.js";
import "./aria.McRhojP9.js";
import "./debounce.RYRk7CTE.js";
import "./toNumber.BPY58h9e.js";
import "./index.B9QRmu6l.js";
import "./scroll.BXCqQu3M.js";
const _hoisted_1$2 = {
  key: 0,
  class: "el-upload-list__item-info"
};
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = { class: "el-upload-list__item-file-name" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = {
  key: 1,
  class: "el-upload-list__item-info"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FileUpload",
  props: /* @__PURE__ */ mergeModels({
    /**
     * 请求携带的额外参数
     */
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * 上传文件的参数名
     */
    name: {
      type: String,
      default: "file"
    },
    /**
     * 文件上传数量限制
     */
    limit: {
      type: Number,
      default: 10
    },
    /**
     * 单个文件上传大小限制(单位MB)
     */
    maxFileSize: {
      type: Number,
      default: 10
    },
    /**
     * 上传文件类型
     */
    accept: {
      type: String,
      default: "*"
    },
    /**
     * 上传按钮文本
     */
    uploadBtnText: {
      type: String,
      default: "上传文件"
    },
    /**
     * 样式
     */
    style: {
      type: Object,
      default: () => {
        return {
          width: "300px"
        };
      }
    }
  }, {
    "modelValue": {
      type: [Array],
      required: true,
      default: () => []
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const fileList = ref([]);
    watch(
      modelValue,
      (value) => {
        fileList.value = value.map((item) => {
          const name = item.name ? item.name : item.url?.substring(item.url.lastIndexOf("/") + 1);
          return {
            name,
            url: item.url,
            status: "success",
            uid: getUid()
          };
        });
      },
      {
        immediate: true
      }
    );
    function handleBeforeUpload(file) {
      if (file.size > props.maxFileSize * 1024 * 1024) {
        ElMessage.warning("上传文件不能大于" + props.maxFileSize + "M");
        return false;
      }
      return true;
    }
    function handleUpload(options) {
      return new Promise((resolve, reject) => {
        const file = options.file;
        const formData = new FormData();
        formData.append(props.name, file);
        Object.keys(props.data).forEach((key) => {
          formData.append(key, props.data[key]);
        });
        FileAPI.upload(formData, (percent) => {
          const uid = file.uid;
          const fileItem = fileList.value.find((file2) => file2.uid === uid);
          if (fileItem) {
            fileItem.percentage = percent;
          }
        }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    }
    const handleSuccess = (response, uploadFile, files) => {
      ElMessage.success("上传成功");
      if (files.every((file) => {
        return file.status === "success" || file.status === "fail";
      })) {
        const fileInfos = [];
        files.map((file) => {
          if (file.status === "success") {
            const res = file.response;
            if (res) {
              fileInfos.push({ name: res.name, url: res.url });
            }
          } else {
            fileList.value.splice(
              fileList.value.findIndex((e) => e.uid === file.uid),
              1
            );
          }
        });
        if (fileInfos.length > 0) {
          modelValue.value = [...modelValue.value, ...fileInfos];
        }
      }
    };
    const handleError = (_error) => {
      console.error(_error);
      ElMessage.error("上传失败");
    };
    function handleRemove(fileUrl) {
      FileAPI.delete(fileUrl).then(() => {
        modelValue.value = modelValue.value.filter((file) => file.url !== fileUrl);
      });
    }
    function handleDownload(file) {
      const { url, name } = file;
      if (url) {
        FileAPI.download(url, name);
      }
    }
    function getUid() {
      return Date.now() << 13 | Math.floor(Math.random() * 8192);
    }
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_Document = resolveComponent("Document");
      const _component_el_icon = ElIcon;
      const _component_Close = resolveComponent("Close");
      const _component_el_progress = ElProgress;
      const _component_el_upload = ElUpload;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_upload, {
          "file-list": unref(fileList),
          "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          style: normalizeStyle(props.style),
          "before-upload": handleBeforeUpload,
          "http-request": handleUpload,
          "on-success": handleSuccess,
          "on-error": handleError,
          accept: props.accept,
          limit: props.limit,
          multiple: ""
        }, {
          file: withCtx(({ file }) => [
            file.status === "success" ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
              createBaseVNode("a", {
                class: "el-upload-list__item-name",
                onClick: ($event) => handleDownload(file)
              }, [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_Document)
                  ]),
                  _: 1
                }),
                createBaseVNode("span", _hoisted_3$1, toDisplayString(file.name), 1),
                createBaseVNode("span", {
                  class: "el-icon--close",
                  onClick: withModifiers(($event) => handleRemove(file.url), ["stop"])
                }, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_Close)
                    ]),
                    _: 1
                  })
                ], 8, _hoisted_4$1)
              ], 8, _hoisted_2$1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createVNode(_component_el_progress, {
                style: { "display": "inline-flex" },
                percentage: file.percentage
              }, null, 8, ["percentage"])
            ]))
          ]),
          default: withCtx(() => [
            createVNode(_component_el_button, {
              type: "primary",
              disabled: unref(fileList).length >= props.limit
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.uploadBtnText), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          _: 1
        }, 8, ["file-list", "style", "accept", "limit"])
      ]);
    };
  }
});
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-007ca51b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SingleImageUpload",
  props: /* @__PURE__ */ mergeModels({
    /**
     * 请求携带的额外参数
     */
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * 上传文件的参数名
     */
    name: {
      type: String,
      default: "file"
    },
    /**
     * 最大文件大小（单位：M）
     */
    maxFileSize: {
      type: Number,
      default: 10
    },
    /**
     * 上传图片格式，默认支持所有图片(image/*)，指定格式示例：'.png,.jpg,.jpeg,.gif,.bmp'
     */
    accept: {
      type: String,
      default: "image/*"
    },
    /**
     * 自定义样式，用于设置组件的宽度和高度等其他样式
     */
    style: {
      type: Object,
      default: () => {
        return {
          width: "150px",
          height: "150px"
        };
      }
    }
  }, {
    "modelValue": {
      type: String,
      default: () => ""
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "v25d788e4": props.style.width ?? "150px",
      "v424efe59": props.style.height ?? "150px"
    }));
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    function handleBeforeUpload(file) {
      const acceptTypes = props.accept.split(",").map((type) => type.trim());
      const isValidType = acceptTypes.some((type) => {
        if (type === "image/*") {
          return file.type.startsWith("image/");
        } else if (type.startsWith(".")) {
          return file.name.toLowerCase().endsWith(type);
        } else {
          return file.type === type;
        }
      });
      if (!isValidType) {
        ElMessage.warning(`上传文件的格式不正确，仅支持：${props.accept}`);
        return false;
      }
      if (file.size > props.maxFileSize * 1024 * 1024) {
        ElMessage.warning("上传图片不能大于" + props.maxFileSize + "M");
        return false;
      }
      return true;
    }
    function handleUpload(options) {
      return new Promise((resolve, reject) => {
        const file = options.file;
        const formData = new FormData();
        formData.append(props.name, file);
        Object.keys(props.data).forEach((key) => {
          formData.append(key, props.data[key]);
        });
        FileAPI.upload(formData).then((data) => {
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    }
    function handlePreview() {
      console.log("预览图片,停止冒泡");
    }
    function handleDelete() {
      modelValue.value = "";
    }
    const onSuccess = (fileInfo) => {
      ElMessage.success("上传成功");
      modelValue.value = fileInfo.url;
    };
    const onError = (error) => {
      console.log("onError");
      ElMessage.error("上传失败: " + error.message);
    };
    return (_ctx, _cache) => {
      const _component_el_image = ElImage;
      const _component_CircleCloseFilled = resolveComponent("CircleCloseFilled");
      const _component_el_icon = ElIcon;
      const _component_Plus = resolveComponent("Plus");
      const _component_el_upload = ElUpload;
      return openBlock(), createBlock(_component_el_upload, {
        class: "single-upload",
        "list-type": "picture-card",
        "show-file-list": false,
        accept: props.accept,
        "before-upload": handleBeforeUpload,
        "http-request": handleUpload,
        "on-success": onSuccess,
        "on-error": onError
      }, {
        default: withCtx(() => [
          modelValue.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(_component_el_image, {
              class: "single-upload__image",
              src: modelValue.value,
              "preview-src-list": [modelValue.value],
              onClick: withModifiers(handlePreview, ["stop"])
            }, null, 8, ["src", "preview-src-list"]),
            createVNode(_component_el_icon, {
              class: "single-upload__delete-btn",
              onClick: withModifiers(handleDelete, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(_component_CircleCloseFilled)
              ]),
              _: 1
            })
          ], 64)) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
            default: withCtx(() => [
              createVNode(_component_Plus)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["accept"]);
    };
  }
});
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bd22d71e"]]);
const _hoisted_1$1 = { style: { "width": "100%" } };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "el-upload-list__item-actions" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MultiImageUpload",
  props: /* @__PURE__ */ mergeModels({
    /**
     * 请求携带的额外参数
     */
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * 上传文件的参数名
     */
    name: {
      type: String,
      default: "file"
    },
    /**
     * 文件上传数量限制
     */
    limit: {
      type: Number,
      default: 10
    },
    /**
     * 单个文件的最大允许大小
     */
    maxFileSize: {
      type: Number,
      default: 10
    },
    /**
     * 上传文件类型
     */
    accept: {
      type: String,
      default: "image/*"
      //  默认支持所有图片格式 ，如果需要指定格式，格式如下：'.png,.jpg,.jpeg,.gif,.bmp'
    }
  }, {
    "modelValue": {
      type: [Array],
      default: () => []
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const previewVisible = ref(false);
    const previewImageIndex = ref(0);
    const modelValue = useModel(__props, "modelValue");
    const fileList = ref([]);
    function handleRemove(imageUrl) {
      FileAPI.delete(imageUrl).then(() => {
        const index = modelValue.value.indexOf(imageUrl);
        if (index !== -1) {
          modelValue.value.splice(index, 1);
          fileList.value.splice(index, 1);
        }
      });
    }
    function handleBeforeUpload(file) {
      const acceptTypes = props.accept.split(",").map((type) => type.trim());
      const isValidType = acceptTypes.some((type) => {
        if (type === "image/*") {
          return file.type.startsWith("image/");
        } else if (type.startsWith(".")) {
          return file.name.toLowerCase().endsWith(type);
        } else {
          return file.type === type;
        }
      });
      if (!isValidType) {
        ElMessage.warning(`上传文件的格式不正确，仅支持：${props.accept}`);
        return false;
      }
      if (file.size > props.maxFileSize * 1024 * 1024) {
        ElMessage.warning("上传图片不能大于" + props.maxFileSize + "M");
        return false;
      }
      return true;
    }
    function handleUpload(options) {
      return new Promise((resolve, reject) => {
        const file = options.file;
        const formData = new FormData();
        formData.append(props.name, file);
        Object.keys(props.data).forEach((key) => {
          formData.append(key, props.data[key]);
        });
        FileAPI.upload(formData).then((data) => {
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    }
    function handleExceed() {
      ElMessage.warning("最多只能上传" + props.limit + "张图片");
    }
    const handleSuccess = (fileInfo, uploadFile) => {
      ElMessage.success("上传成功");
      const index = fileList.value.findIndex((file) => file.uid === uploadFile.uid);
      if (index !== -1) {
        fileList.value[index].url = fileInfo.url;
        fileList.value[index].status = "success";
        modelValue.value[index] = fileInfo.url;
      }
    };
    const handleError = (error) => {
      console.log("handleError");
      ElMessage.error("上传失败: " + error.message);
    };
    const handlePreviewImage = (imageUrl) => {
      previewImageIndex.value = modelValue.value.findIndex((url) => url === imageUrl);
      previewVisible.value = true;
    };
    const handlePreviewClose = () => {
      previewVisible.value = false;
    };
    onMounted(() => {
      fileList.value = modelValue.value.map((url) => ({ url }));
    });
    return (_ctx, _cache) => {
      const _component_Plus = resolveComponent("Plus");
      const _component_el_icon = ElIcon;
      const _component_zoom_in = resolveComponent("zoom-in");
      const _component_Delete = resolveComponent("Delete");
      const _component_el_upload = ElUpload;
      const _component_el_image_viewer = ElImageViewer;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_upload, {
          "file-list": unref(fileList),
          "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          "list-type": "picture-card",
          "before-upload": handleBeforeUpload,
          "http-request": handleUpload,
          "on-success": handleSuccess,
          "on-error": handleError,
          "on-exceed": handleExceed,
          accept: props.accept,
          limit: props.limit,
          multiple: ""
        }, {
          file: withCtx(({ file }) => [
            createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("img", {
                class: "el-upload-list__item-thumbnail",
                src: file.url
              }, null, 8, _hoisted_2),
              createBaseVNode("span", _hoisted_3, [
                createBaseVNode("span", {
                  onClick: ($event) => handlePreviewImage(file.url)
                }, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_zoom_in)
                    ]),
                    _: 1
                  })
                ], 8, _hoisted_4),
                createBaseVNode("span", {
                  onClick: ($event) => handleRemove(file.url)
                }, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_Delete)
                    ]),
                    _: 1
                  })
                ], 8, _hoisted_5)
              ])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_Plus)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["file-list", "accept", "limit"]),
        unref(previewVisible) ? (openBlock(), createBlock(_component_el_image_viewer, {
          key: 0,
          "zoom-rate": 1.2,
          "initial-index": unref(previewImageIndex),
          "url-list": modelValue.value,
          onClose: handlePreviewClose
        }, null, 8, ["initial-index", "url-list"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upload",
  setup(__props) {
    const picUrl = ref("https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg");
    const picUrls = ref(["https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg"]);
    const fileUrls = ref([
      { name: "照片1.jpg", url: "https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg" },
      { name: "照片2.jpg", url: "https://s2.loli.net/2023/05/24/RuHFMwW4rG5lIqs.jpg" }
    ]);
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_SingleImageUpload = __unplugin_components_1;
      const _component_el_form_item = ElFormItem;
      const _component_FileUpload = __unplugin_components_3;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/upload.vue",
          type: "primary",
          target: "_blank",
          class: "mb-10"
        }, {
          default: withCtx(() => [..._cache[3] || (_cache[3] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_el_form, null, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "单图上传" }, {
              default: withCtx(() => [
                createVNode(_component_SingleImageUpload, {
                  modelValue: unref(picUrl),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(picUrl) ? picUrl.value = $event : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "多图上传" }, {
              default: withCtx(() => [
                createVNode(_sfc_main$1, {
                  modelValue: unref(picUrls),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(picUrls) ? picUrls.value = $event : null),
                  limit: 2
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "文件上传" }, {
              default: withCtx(() => [
                createVNode(_component_FileUpload, {
                  modelValue: unref(fileUrls),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(fileUrls) ? fileUrls.value = $event : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
