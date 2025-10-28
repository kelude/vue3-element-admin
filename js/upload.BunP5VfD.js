import { ad as isArray, N as isNil, t as buildProps, z as definePropType, by as NOOP, ai as mutable, _ as _export_sfc, d as defineComponent, x as useLocale, b as useNamespace, r as ref, c as computed, e as createBlock, f as openBlock, w as withCtx, g as createElementBlock, l as renderSlot, P as Fragment, Q as renderList, a3 as withKeys, i as unref, n as normalizeClass, h as createCommentVNode, C as createBaseVNode, j as withModifiers, m as createVNode, E as ElIcon, dB as document_default, F as toDisplayString, k as normalizeStyle, ds as circle_check_default, aX as check_default, a2 as close_default, c4 as zoom_in_default, aB as delete_default, bT as TransitionGroup, A as inject, s as shallowRef, cU as isPlainObject, bx as isEqual, dC as entriesOf, bw as isFunction, dD as useVModel, I as watch, aa as onBeforeUnmount, y as provide, ak as toRef, bo as createSlots, Z as mergeProps, q as withInstall } from "./index.CjDU5CMT.js";
import { E as ElProgress } from "./progress.DfOY8enO.js";
import { t as throwError, d as debugWarn } from "./error.BVJkE67s.js";
import { u as useFormDisabled } from "./use-form-common-props.BPtRgoS9.js";
import { b as baseClone } from "./_baseClone.C7MQiCf9.js";
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
const uploadContextKey = Symbol("uploadContextKey");
const SCOPE$1 = "ElUpload";
class UploadAjaxError extends Error {
  constructor(message, status, method, url) {
    super(message);
    this.name = "UploadAjaxError";
    this.status = status;
    this.method = method;
    this.url = url;
  }
}
function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to ${option.method} ${action} ${xhr.status}`;
  }
  return new UploadAjaxError(msg, xhr.status, option.method, action);
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
const ajaxUpload = (option) => {
  if (typeof XMLHttpRequest === "undefined")
    throwError(SCOPE$1, "XMLHttpRequest is undefined");
  const xhr = new XMLHttpRequest();
  const action = option.action;
  if (xhr.upload) {
    xhr.upload.addEventListener("progress", (evt) => {
      const progressEvt = evt;
      progressEvt.percent = evt.total > 0 ? evt.loaded / evt.total * 100 : 0;
      option.onProgress(progressEvt);
    });
  }
  const formData = new FormData();
  if (option.data) {
    for (const [key, value] of Object.entries(option.data)) {
      if (isArray(value) && value.length)
        formData.append(key, ...value);
      else
        formData.append(key, value);
    }
  }
  formData.append(option.filename, option.file, option.file.name);
  xhr.addEventListener("error", () => {
    option.onError(getError(action, option, xhr));
  });
  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  });
  xhr.open(option.method, action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => xhr.setRequestHeader(key, value));
  } else {
    for (const [key, value] of Object.entries(headers)) {
      if (isNil(value))
        continue;
      xhr.setRequestHeader(key, String(value));
    }
  }
  xhr.send(formData);
  return xhr;
};
const uploadListTypes = ["text", "picture", "picture-card"];
let fileId = 1;
const genFileId = () => Date.now() + fileId++;
const uploadBaseProps = buildProps({
  action: {
    type: String,
    default: "#"
  },
  headers: {
    type: definePropType(Object)
  },
  method: {
    type: String,
    default: "post"
  },
  data: {
    type: definePropType([Object, Function, Promise]),
    default: () => mutable({})
  },
  multiple: Boolean,
  name: {
    type: String,
    default: "file"
  },
  drag: Boolean,
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: ""
  },
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  httpRequest: {
    type: definePropType(Function),
    default: ajaxUpload
  },
  disabled: Boolean,
  limit: Number
});
const uploadProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  beforeRemove: {
    type: definePropType(Function)
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onChange: {
    type: definePropType(Function),
    default: NOOP
  },
  onPreview: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const uploadListProps = buildProps({
  files: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  disabled: Boolean,
  handlePreview: {
    type: definePropType(Function),
    default: NOOP
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const uploadListEmits = {
  remove: (file) => !!file
};
const __default__$3 = defineComponent({
  name: "ElUploadList"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: uploadListProps,
  emits: uploadListEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const nsUpload = useNamespace("upload");
    const nsIcon = useNamespace("icon");
    const nsList = useNamespace("list");
    const disabled = useFormDisabled();
    const focusing = ref(false);
    const containerKls = computed(() => [
      nsUpload.b("list"),
      nsUpload.bm("list", props.listType),
      nsUpload.is("disabled", props.disabled)
    ]);
    const handleRemove = (file) => {
      emit("remove", file);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        tag: "ul",
        class: normalizeClass(unref(containerKls)),
        name: unref(nsList).b()
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, (file, index) => {
            return openBlock(), createElementBlock("li", {
              key: file.uid || file.name,
              class: normalizeClass([
                unref(nsUpload).be("list", "item"),
                unref(nsUpload).is(file.status),
                { focusing: focusing.value }
              ]),
              tabindex: "0",
              onKeydown: withKeys(($event) => !unref(disabled) && handleRemove(file), ["delete"]),
              onFocus: ($event) => focusing.value = true,
              onBlur: ($event) => focusing.value = false,
              onClick: ($event) => focusing.value = false
            }, [
              renderSlot(_ctx.$slots, "default", {
                file,
                index
              }, () => [
                _ctx.listType === "picture" || file.status !== "uploading" && _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: normalizeClass(unref(nsUpload).be("list", "item-thumbnail")),
                  src: file.url,
                  crossorigin: _ctx.crossorigin,
                  alt: ""
                }, null, 10, ["src", "crossorigin"])) : createCommentVNode("v-if", true),
                file.status === "uploading" || _ctx.listType !== "picture-card" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(nsUpload).be("list", "item-info"))
                }, [
                  createBaseVNode("a", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-name")),
                    onClick: withModifiers(($event) => _ctx.handlePreview(file), ["prevent"])
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("document"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(document_default))
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createBaseVNode("span", {
                      class: normalizeClass(unref(nsUpload).be("list", "item-file-name")),
                      title: file.name
                    }, toDisplayString(file.name), 11, ["title"])
                  ], 10, ["onClick"]),
                  file.status === "uploading" ? (openBlock(), createBlock(unref(ElProgress), {
                    key: 0,
                    type: _ctx.listType === "picture-card" ? "circle" : "line",
                    "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
                    percentage: Number(file.percentage),
                    style: normalizeStyle(_ctx.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                  }, null, 8, ["type", "stroke-width", "percentage", "style"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true),
                createBaseVNode("label", {
                  class: normalizeClass(unref(nsUpload).be("list", "item-status-label"))
                }, [
                  _ctx.listType === "text" ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("circle-check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(circle_check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : ["picture-card", "picture"].includes(_ctx.listType) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 1,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 2),
                !unref(disabled) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass(unref(nsIcon).m("close")),
                  onClick: ($event) => handleRemove(file)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])) : createCommentVNode("v-if", true),
                createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
                createCommentVNode(" This is a bug which needs to be fixed "),
                createCommentVNode(" TODO: Fix the incorrect navigation interaction "),
                !unref(disabled) ? (openBlock(), createElementBlock("i", {
                  key: 3,
                  class: normalizeClass(unref(nsIcon).m("close-tip"))
                }, toDisplayString(unref(t)("el.upload.deleteTip")), 3)) : createCommentVNode("v-if", true),
                _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("span", {
                  key: 4,
                  class: normalizeClass(unref(nsUpload).be("list", "item-actions"))
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-preview")),
                    onClick: ($event) => _ctx.handlePreview(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("zoom-in"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(zoom_in_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, ["onClick"]),
                  !unref(disabled) ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref(nsUpload).be("list", "item-delete")),
                    onClick: ($event) => handleRemove(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("delete"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(delete_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, ["onClick"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true)
              ])
            ], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]);
          }), 128)),
          renderSlot(_ctx.$slots, "append")
        ]),
        _: 3
      }, 8, ["class", "name"]);
    };
  }
});
var UploadList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "upload-list.vue"]]);
const uploadDraggerProps = buildProps({
  disabled: Boolean
});
const uploadDraggerEmits = {
  file: (file) => isArray(file)
};
const COMPONENT_NAME = "ElUploadDrag";
const __default__$2 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: uploadDraggerProps,
  emits: uploadDraggerEmits,
  setup(__props, { emit }) {
    const uploaderContext = inject(uploadContextKey);
    if (!uploaderContext) {
      throwError(COMPONENT_NAME, "usage: <el-upload><el-upload-dragger /></el-upload>");
    }
    const ns = useNamespace("upload");
    const dragover = ref(false);
    const disabled = useFormDisabled();
    const onDrop = (e) => {
      if (disabled.value)
        return;
      dragover.value = false;
      e.stopPropagation();
      const files = Array.from(e.dataTransfer.files);
      const items = e.dataTransfer.items || [];
      files.forEach((file, index) => {
        var _a;
        const item = items[index];
        const entry = (_a = item == null ? void 0 : item.webkitGetAsEntry) == null ? void 0 : _a.call(item);
        if (entry) {
          file.isDirectory = entry.isDirectory;
        }
      });
      emit("file", files);
    };
    const onDragover = () => {
      if (!disabled.value)
        dragover.value = true;
    };
    const onDragleave = (e) => {
      if (!e.currentTarget.contains(e.relatedTarget))
        dragover.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b("dragger"), unref(ns).is("dragover", dragover.value)]),
        onDrop: withModifiers(onDrop, ["prevent"]),
        onDragover: withModifiers(onDragover, ["prevent"]),
        onDragleave: withModifiers(onDragleave, ["prevent"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, ["onDrop", "onDragover", "onDragleave"]);
    };
  }
});
var UploadDragger = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "upload-dragger.vue"]]);
const uploadContentProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onStart: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});
const __default__$1 = defineComponent({
  name: "ElUploadContent",
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: uploadContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("upload");
    const disabled = useFormDisabled();
    const requests = shallowRef({});
    const inputRef = shallowRef();
    const uploadFiles = (files) => {
      if (files.length === 0)
        return;
      const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props;
      if (limit && fileList.length + files.length > limit) {
        onExceed(files, fileList);
        return;
      }
      if (!multiple) {
        files = files.slice(0, 1);
      }
      for (const file of files) {
        const rawFile = file;
        rawFile.uid = genFileId();
        onStart(rawFile);
        if (autoUpload)
          upload(rawFile);
      }
    };
    const upload = async (rawFile) => {
      inputRef.value.value = "";
      if (!props.beforeUpload) {
        return doUpload(rawFile);
      }
      let hookResult;
      let beforeData = {};
      try {
        const originData = props.data;
        const beforeUploadPromise = props.beforeUpload(rawFile);
        beforeData = isPlainObject(props.data) ? cloneDeep(props.data) : props.data;
        hookResult = await beforeUploadPromise;
        if (isPlainObject(props.data) && isEqual(originData, beforeData)) {
          beforeData = cloneDeep(props.data);
        }
      } catch (e) {
        hookResult = false;
      }
      if (hookResult === false) {
        props.onRemove(rawFile);
        return;
      }
      let file = rawFile;
      if (hookResult instanceof Blob) {
        if (hookResult instanceof File) {
          file = hookResult;
        } else {
          file = new File([hookResult], rawFile.name, {
            type: rawFile.type
          });
        }
      }
      doUpload(Object.assign(file, {
        uid: rawFile.uid
      }), beforeData);
    };
    const resolveData = async (data, rawFile) => {
      if (isFunction(data)) {
        return data(rawFile);
      }
      return data;
    };
    const doUpload = async (rawFile, beforeData) => {
      const {
        headers,
        data,
        method,
        withCredentials,
        name: filename,
        action,
        onProgress,
        onSuccess,
        onError,
        httpRequest
      } = props;
      try {
        beforeData = await resolveData(beforeData != null ? beforeData : data, rawFile);
      } catch (e) {
        props.onRemove(rawFile);
        return;
      }
      const { uid } = rawFile;
      const options = {
        headers: headers || {},
        withCredentials,
        file: rawFile,
        data: beforeData,
        method,
        filename,
        action,
        onProgress: (evt) => {
          onProgress(evt, rawFile);
        },
        onSuccess: (res) => {
          onSuccess(res, rawFile);
          delete requests.value[uid];
        },
        onError: (err) => {
          onError(err, rawFile);
          delete requests.value[uid];
        }
      };
      const request = httpRequest(options);
      requests.value[uid] = request;
      if (request instanceof Promise) {
        request.then(options.onSuccess, options.onError);
      }
    };
    const handleChange = (e) => {
      const files = e.target.files;
      if (!files)
        return;
      uploadFiles(Array.from(files));
    };
    const handleClick = () => {
      if (!disabled.value) {
        inputRef.value.value = "";
        inputRef.value.click();
      }
    };
    const handleKeydown = () => {
      handleClick();
    };
    const abort = (file) => {
      const _reqs = entriesOf(requests.value).filter(file ? ([uid]) => String(file.uid) === uid : () => true);
      _reqs.forEach(([uid, req]) => {
        if (req instanceof XMLHttpRequest)
          req.abort();
        delete requests.value[uid];
      });
    };
    expose({
      abort,
      upload
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.listType),
          unref(ns).is("drag", _ctx.drag),
          unref(ns).is("disabled", unref(disabled))
        ]),
        tabindex: unref(disabled) ? "-1" : "0",
        onClick: handleClick,
        onKeydown: withKeys(withModifiers(handleKeydown, ["self"]), ["enter", "space"])
      }, [
        _ctx.drag ? (openBlock(), createBlock(UploadDragger, {
          key: 0,
          disabled: unref(disabled),
          onFile: uploadFiles
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["disabled"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
        createBaseVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          class: normalizeClass(unref(ns).e("input")),
          name: _ctx.name,
          disabled: unref(disabled),
          multiple: _ctx.multiple,
          accept: _ctx.accept,
          type: "file",
          onChange: handleChange,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])
      ], 42, ["tabindex", "onKeydown"]);
    };
  }
});
var UploadContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "upload-content.vue"]]);
const SCOPE = "ElUpload";
const revokeFileObjectURL = (file) => {
  var _a;
  if ((_a = file.url) == null ? void 0 : _a.startsWith("blob:")) {
    URL.revokeObjectURL(file.url);
  }
};
const useHandlers = (props, uploadRef) => {
  const uploadFiles = useVModel(props, "fileList", void 0, { passive: true });
  const getFile = (rawFile) => uploadFiles.value.find((file) => file.uid === rawFile.uid);
  function abort(file) {
    var _a;
    (_a = uploadRef.value) == null ? void 0 : _a.abort(file);
  }
  function clearFiles(states = ["ready", "uploading", "success", "fail"]) {
    uploadFiles.value = uploadFiles.value.filter((row) => !states.includes(row.status));
  }
  function removeFile(file) {
    uploadFiles.value = uploadFiles.value.filter((uploadFile) => uploadFile.uid !== file.uid);
  }
  const handleError = (err, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    console.error(err);
    file.status = "fail";
    removeFile(file);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleProgress = (evt, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    props.onProgress(evt, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = Math.round(evt.percent);
  };
  const handleSuccess = (response, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    file.status = "success";
    file.response = response;
    props.onSuccess(response, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleStart = (file) => {
    if (isNil(file.uid))
      file.uid = genFileId();
    const uploadFile = {
      name: file.name,
      percentage: 0,
      status: "ready",
      size: file.size,
      raw: file,
      uid: file.uid
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        uploadFile.url = URL.createObjectURL(file);
      } catch (err) {
        debugWarn(SCOPE, err.message);
        props.onError(err, uploadFile, uploadFiles.value);
      }
    }
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile, uploadFiles.value);
  };
  const handleRemove = async (file) => {
    const uploadFile = file instanceof File ? getFile(file) : file;
    if (!uploadFile)
      throwError(SCOPE, "file to be removed not found");
    const doRemove = (file2) => {
      abort(file2);
      removeFile(file2);
      props.onRemove(file2, uploadFiles.value);
      revokeFileObjectURL(file2);
    };
    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value);
      if (before !== false)
        doRemove(uploadFile);
    } else {
      doRemove(uploadFile);
    }
  };
  function submit() {
    uploadFiles.value.filter(({ status }) => status === "ready").forEach(({ raw }) => {
      var _a;
      return raw && ((_a = uploadRef.value) == null ? void 0 : _a.upload(raw));
    });
  }
  watch(() => props.listType, (val) => {
    if (val !== "picture-card" && val !== "picture") {
      return;
    }
    uploadFiles.value = uploadFiles.value.map((file) => {
      const { raw, url } = file;
      if (!url && raw) {
        try {
          file.url = URL.createObjectURL(raw);
        } catch (err) {
          props.onError(err, file, uploadFiles.value);
        }
      }
      return file;
    });
  });
  watch(uploadFiles, (files) => {
    for (const file of files) {
      file.uid || (file.uid = genFileId());
      file.status || (file.status = "success");
    }
  }, { immediate: true, deep: true });
  return {
    uploadFiles,
    abort,
    clearFiles,
    handleError,
    handleProgress,
    handleStart,
    handleSuccess,
    handleRemove,
    submit,
    revokeFileObjectURL
  };
};
const __default__ = defineComponent({
  name: "ElUpload"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const disabled = useFormDisabled();
    const uploadRef = shallowRef();
    const {
      abort,
      submit,
      clearFiles,
      uploadFiles,
      handleStart,
      handleError,
      handleRemove,
      handleSuccess,
      handleProgress,
      revokeFileObjectURL: revokeFileObjectURL2
    } = useHandlers(props, uploadRef);
    const isPictureCard = computed(() => props.listType === "picture-card");
    const uploadContentProps2 = computed(() => ({
      ...props,
      fileList: uploadFiles.value,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    onBeforeUnmount(() => {
      uploadFiles.value.forEach(revokeFileObjectURL2);
    });
    provide(uploadContextKey, {
      accept: toRef(props, "accept")
    });
    expose({
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 0,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          crossorigin: _ctx.crossorigin,
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          append: withCtx(() => [
            createVNode(UploadContent, mergeProps({
              ref_key: "uploadRef",
              ref: uploadRef
            }, unref(uploadContentProps2)), {
              default: withCtx(() => [
                _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
                !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16)
          ]),
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file, index }) => [
              renderSlot(_ctx.$slots, "file", {
                file,
                index
              })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true),
        !unref(isPictureCard) || unref(isPictureCard) && !_ctx.showFileList ? (openBlock(), createBlock(UploadContent, mergeProps({
          key: 1,
          ref_key: "uploadRef",
          ref: uploadRef
        }, unref(uploadContentProps2)), {
          default: withCtx(() => [
            _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
            !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16)) : createCommentVNode("v-if", true),
        _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "default", { key: 2 }) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "tip"),
        !unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 3,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          crossorigin: _ctx.crossorigin,
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file, index }) => [
              renderSlot(_ctx.$slots, "file", {
                file,
                index
              })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
var Upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "upload.vue"]]);
const ElUpload = withInstall(Upload);
export {
  ElUpload as E,
  cloneDeep as c,
  genFileId as g
};
