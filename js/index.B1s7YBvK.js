import { t as buildProps, z as definePropType, v as iconPropType, b2 as isNumber, ba as componentSizes, _ as _export_sfc, d as defineComponent, b as useNamespace, r as ref, c as computed, M as isString, J as addUnit, I as watch, g as createElementBlock, f as openBlock, e as createBlock, l as renderSlot, k as normalizeStyle, i as unref, w as withCtx, D as resolveDynamicComponent, E as ElIcon, n as normalizeClass, q as withInstall, bb as useUserStoreHook, S as reactive, o as onMounted, m as createVNode, bc as UserAPI, C as createBaseVNode, bd as camera_default, F as toDisplayString, as as resolveComponent, a4 as createTextVNode, h as createCommentVNode, aG as ElMessage } from "./index.C-w1mPR5.js";
import { E as ElDialog } from "./dialog.DTSleIRn.js";
import "./overlay.6P5GvOwu.js";
import { E as ElFormItem, a as ElForm } from "./form-item.Dj1vXnXz.js";
import { _ as _sfc_main$2 } from "./index.vue_vue_type_script_setup_true_lang.92Z5MAjd.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { E as ElRow, a as ElCol } from "./col.CBCG_qqL.js";
import { E as ElDescriptions, a as ElDescriptionsItem } from "./descriptions-item.CU0dZvQ4.js";
import { E as ElCard } from "./card.EBLyLLiR.js";
import { E as ElDivider } from "./divider.7d_E-FZ6.js";
/* empty css                */
import { F as FileAPI } from "./file-api.Bnb3EA79.js";
import { E as ElButton } from "./index.BMPR14Hc.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.Y-PlGRQ9.js";
import "./aria.McRhojP9.js";
import "./refs.CxYYXu5Q.js";
import "./index.DBHfYhTD.js";
import "./vnode.AKE4hrFO.js";
import "./event.BZTOGHfp.js";
import "./error.BVJkE67s.js";
import "./scroll.BCEJlaVo.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./castArray.C7_3uu86.js";
import "./_baseClone.vDnszwId.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./checkbox.C7Foa8TW.js";
import "./index.DmNrmtFU.js";
/* empty css                        */
import "./radio-group.BKt65S9k.js";
/* empty css             */
import "./select.DEZ3TM_z.js";
import "./popper.B8758rPD.js";
import "./index.D1LU_lkm.js";
import "./scrollbar.DFEDmrTe.js";
import "./index.C28lPzad.js";
import "./token.BqWJQ4CJ.js";
import "./strings.U77u0PSM.js";
import "./index.BLtH7mBo.js";
import "./debounce.sHE95kMl.js";
import "./toNumber.BD3fO3HE.js";
import "./_baseIteratee.CQTSDRqz.js";
import "./index.CHVt_Cot.js";
import "./index.Cz0Zbu2t.js";
const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const __default__ = defineComponent({
  name: "ElAvatar"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, ["src", "alt", "srcset"])) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const _hoisted_1 = { class: "profile-container" };
const _hoisted_2 = { class: "user-info" };
const _hoisted_3 = { class: "avatar-wrapper" };
const _hoisted_4 = { class: "user-name" };
const _hoisted_5 = { class: "nickname" };
const _hoisted_6 = { class: "user-role" };
const _hoisted_7 = { class: "security-item" };
const _hoisted_8 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = useUserStoreHook();
    const userProfile = ref({});
    const dialog = reactive({
      visible: false,
      title: "",
      type: ""
      // 修改账号资料,修改密码、绑定手机、绑定邮箱
    });
    const userProfileFormRef = ref();
    const passwordChangeFormRef = ref();
    const mobileBindingFormRef = ref();
    const emailBindingFormRef = ref();
    const userProfileForm = reactive({});
    const passwordChangeForm = reactive({});
    const mobileUpdateForm = reactive({});
    const emailUpdateForm = reactive({});
    const mobileCountdown = ref(0);
    const mobileTimer = ref();
    const emailCountdown = ref(0);
    const emailTimer = ref();
    const passwordChangeRules = {
      oldPassword: [{ required: true, message: "请输入原密码", trigger: "blur" }],
      newPassword: [{ required: true, message: "请输入新密码", trigger: "blur" }],
      confirmPassword: [{ required: true, message: "请再次输入新密码", trigger: "blur" }]
    };
    const mobileBindingRules = {
      mobile: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        {
          pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: "请输入正确的手机号码",
          trigger: "blur"
        }
      ],
      code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
    };
    const emailBindingRules = {
      email: [
        { required: true, message: "请输入邮箱", trigger: "blur" },
        {
          pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
          message: "请输入正确的邮箱地址",
          trigger: "blur"
        }
      ],
      code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
    };
    const handleOpenDialog = (type) => {
      dialog.type = type;
      dialog.visible = true;
      switch (type) {
        case "account":
          dialog.title = "账号资料";
          userProfileForm.id = userProfile.value.id;
          userProfileForm.nickname = userProfile.value.nickname;
          userProfileForm.gender = userProfile.value.gender;
          break;
        case "password":
          dialog.title = "修改密码";
          break;
        case "mobile":
          dialog.title = "绑定手机";
          break;
        case "email":
          dialog.title = "绑定邮箱";
          break;
      }
    };
    function handleSendMobileCode() {
      if (!mobileUpdateForm.mobile) {
        ElMessage.error("请输入手机号");
        return;
      }
      const reg = /^1[3-9]\d{9}$/;
      if (!reg.test(mobileUpdateForm.mobile)) {
        ElMessage.error("手机号格式不正确");
        return;
      }
      UserAPI.sendMobileCode(mobileUpdateForm.mobile).then(() => {
        ElMessage.success("验证码发送成功");
        mobileCountdown.value = 60;
        mobileTimer.value = setInterval(() => {
          if (mobileCountdown.value > 0) {
            mobileCountdown.value -= 1;
          } else {
            clearInterval(mobileTimer.value);
          }
        }, 1e3);
      });
    }
    function handleSendEmailCode() {
      if (!emailUpdateForm.email) {
        ElMessage.error("请输入邮箱");
        return;
      }
      const reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!reg.test(emailUpdateForm.email)) {
        ElMessage.error("邮箱格式不正确");
        return;
      }
      UserAPI.sendEmailCode(emailUpdateForm.email).then(() => {
        ElMessage.success("验证码发送成功");
        emailCountdown.value = 60;
        emailTimer.value = setInterval(() => {
          if (emailCountdown.value > 0) {
            emailCountdown.value -= 1;
          } else {
            clearInterval(emailTimer.value);
          }
        }, 1e3);
      });
    }
    const handleSubmit = async () => {
      if (dialog.type === "account") {
        UserAPI.updateProfile(userProfileForm).then(() => {
          ElMessage.success("账号资料修改成功");
          dialog.visible = false;
          loadUserProfile();
        });
      } else if (dialog.type === "password") {
        if (passwordChangeForm.newPassword !== passwordChangeForm.confirmPassword) {
          ElMessage.error("两次输入的密码不一致");
          return;
        }
        UserAPI.changePassword(passwordChangeForm).then(() => {
          ElMessage.success("密码修改成功");
          dialog.visible = false;
        });
      } else if (dialog.type === "mobile") {
        UserAPI.bindOrChangeMobile(mobileUpdateForm).then(() => {
          ElMessage.success("手机号绑定成功");
          dialog.visible = false;
          loadUserProfile();
        });
      } else if (dialog.type === "email") {
        UserAPI.bindOrChangeEmail(emailUpdateForm).then(() => {
          ElMessage.success("邮箱绑定成功");
          dialog.visible = false;
          loadUserProfile();
        });
      }
    };
    const handleCancel = () => {
      dialog.visible = false;
      if (dialog.type === "account") {
        userProfileFormRef.value?.resetFields();
      } else if (dialog.type === "password") {
        passwordChangeFormRef.value?.resetFields();
      } else if (dialog.type === "mobile") {
        mobileBindingFormRef.value?.resetFields();
      } else if (dialog.type === "email") {
        emailBindingFormRef.value?.resetFields();
      }
    };
    const fileInput = ref(null);
    const triggerFileUpload = () => {
      fileInput.value?.click();
    };
    const handleFileChange = async (event) => {
      const target = event.target;
      const file = target.files ? target.files[0] : null;
      if (file) {
        try {
          const data = await FileAPI.uploadFile(file);
          await UserAPI.updateProfile({
            avatar: data.url
          });
          userStore.userInfo.avatar = data.url;
        } catch (error) {
          console.error("头像上传失败：" + error);
          ElMessage.error("头像上传失败");
        }
      }
    };
    const loadUserProfile = async () => {
      const data = await UserAPI.getProfile();
      userProfile.value = data;
    };
    onMounted(async () => {
      if (mobileTimer.value) {
        clearInterval(mobileTimer.value);
      }
      if (emailTimer.value) {
        clearInterval(emailTimer.value);
      }
      await loadUserProfile();
    });
    return (_ctx, _cache) => {
      const _component_el_avatar = ElAvatar;
      const _component_el_button = ElButton;
      const _component_Edit = resolveComponent("Edit");
      const _component_el_icon = ElIcon;
      const _component_el_divider = ElDivider;
      const _component_el_card = ElCard;
      const _component_el_col = ElCol;
      const _component_Male = resolveComponent("Male");
      const _component_Female = resolveComponent("Female");
      const _component_el_descriptions_item = ElDescriptionsItem;
      const _component_el_descriptions = ElDescriptions;
      const _component_el_row = ElRow;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_Dict = _sfc_main$2;
      const _component_el_form = ElForm;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_row, { gutter: 20 }, {
          default: withCtx(() => [
            createVNode(_component_el_col, { span: 8 }, {
              default: withCtx(() => [
                createVNode(_component_el_card, { class: "user-card" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(_component_el_avatar, {
                          src: unref(userStore).userInfo.avatar,
                          size: 100
                        }, null, 8, ["src"]),
                        createVNode(_component_el_button, {
                          type: "info",
                          class: "avatar-edit-btn",
                          circle: "",
                          icon: unref(camera_default),
                          size: "small",
                          onClick: triggerFileUpload
                        }, null, 8, ["icon"]),
                        createBaseVNode("input", {
                          ref_key: "fileInput",
                          ref: fileInput,
                          type: "file",
                          style: { "display": "none" },
                          accept: "image/*",
                          onChange: handleFileChange
                        }, null, 544)
                      ]),
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("span", _hoisted_5, toDisplayString(unref(userProfile).nickname), 1),
                        createVNode(_component_el_icon, {
                          class: "edit-icon",
                          onClick: _cache[0] || (_cache[0] = ($event) => handleOpenDialog(
                            "account"
                            /* ACCOUNT */
                          ))
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Edit)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_6, toDisplayString(unref(userProfile).roleNames), 1)
                    ]),
                    createVNode(_component_el_divider),
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "user-stats" }, [
                      createBaseVNode("div", { class: "stat-item" }, [
                        createBaseVNode("div", { class: "stat-value" }, "0"),
                        createBaseVNode("div", { class: "stat-label" }, "待办")
                      ]),
                      createBaseVNode("div", { class: "stat-item" }, [
                        createBaseVNode("div", { class: "stat-value" }, "0"),
                        createBaseVNode("div", { class: "stat-label" }, "消息")
                      ]),
                      createBaseVNode("div", { class: "stat-item" }, [
                        createBaseVNode("div", { class: "stat-value" }, "0"),
                        createBaseVNode("div", { class: "stat-label" }, "通知")
                      ])
                    ], -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_col, { span: 16 }, {
              default: withCtx(() => [
                createVNode(_component_el_card, { class: "info-card" }, {
                  header: withCtx(() => [..._cache[17] || (_cache[17] = [
                    createBaseVNode("div", { class: "card-header" }, [
                      createBaseVNode("span", null, "账号信息")
                    ], -1)
                  ])]),
                  default: withCtx(() => [
                    createVNode(_component_el_descriptions, {
                      column: 1,
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_descriptions_item, { label: "用户名" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).username) + " ", 1),
                            unref(userProfile).gender === 1 ? (openBlock(), createBlock(_component_el_icon, {
                              key: 0,
                              class: "gender-icon male"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Male)
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_icon, {
                              key: 1,
                              class: "gender-icon female"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Female)
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "手机号码" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).mobile || "未绑定") + " ", 1),
                            unref(userProfile).mobile ? (openBlock(), createBlock(_component_el_button, {
                              key: 0,
                              type: "primary",
                              link: "",
                              onClick: _cache[1] || (_cache[1] = () => handleOpenDialog(
                                "mobile"
                                /* MOBILE */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[18] || (_cache[18] = [
                                createTextVNode(" 更换 ", -1)
                              ])]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "primary",
                              link: "",
                              onClick: _cache[2] || (_cache[2] = () => handleOpenDialog(
                                "mobile"
                                /* MOBILE */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[19] || (_cache[19] = [
                                createTextVNode(" 绑定 ", -1)
                              ])]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "邮箱" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).email || "未绑定") + " ", 1),
                            unref(userProfile).email ? (openBlock(), createBlock(_component_el_button, {
                              key: 0,
                              type: "primary",
                              link: "",
                              onClick: _cache[3] || (_cache[3] = () => handleOpenDialog(
                                "email"
                                /* EMAIL */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[20] || (_cache[20] = [
                                createTextVNode(" 更换 ", -1)
                              ])]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "primary",
                              link: "",
                              onClick: _cache[4] || (_cache[4] = () => handleOpenDialog(
                                "email"
                                /* EMAIL */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[21] || (_cache[21] = [
                                createTextVNode(" 绑定 ", -1)
                              ])]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "部门" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).deptName), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "创建时间" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).createTime), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_card, { class: "security-card" }, {
                  header: withCtx(() => [..._cache[22] || (_cache[22] = [
                    createBaseVNode("div", { class: "card-header" }, [
                      createBaseVNode("span", null, "安全设置")
                    ], -1)
                  ])]),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7, [
                      _cache[24] || (_cache[24] = createBaseVNode("div", { class: "security-info" }, [
                        createBaseVNode("div", { class: "security-title" }, "账户密码"),
                        createBaseVNode("div", { class: "security-desc" }, "定期修改密码有助于保护账户安全")
                      ], -1)),
                      createVNode(_component_el_button, {
                        type: "primary",
                        link: "",
                        onClick: _cache[5] || (_cache[5] = () => handleOpenDialog(
                          "password"
                          /* PASSWORD */
                        ))
                      }, {
                        default: withCtx(() => [..._cache[23] || (_cache[23] = [
                          createTextVNode(" 修改 ", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: 500
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_8, [
              createVNode(_component_el_button, { onClick: handleCancel }, {
                default: withCtx(() => [..._cache[25] || (_cache[25] = [
                  createTextVNode("取消", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [..._cache[26] || (_cache[26] = [
                  createTextVNode("确定", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            unref(dialog).type === "account" ? (openBlock(), createBlock(_component_el_form, {
              key: 0,
              ref_key: "userProfileFormRef",
              ref: userProfileFormRef,
              model: unref(userProfileForm),
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { label: "昵称" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(userProfileForm).nickname,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(userProfileForm).nickname = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "性别" }, {
                  default: withCtx(() => [
                    createVNode(_component_Dict, {
                      modelValue: unref(userProfileForm).gender,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(userProfileForm).gender = $event),
                      code: "gender"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : createCommentVNode("", true),
            unref(dialog).type === "password" ? (openBlock(), createBlock(_component_el_form, {
              key: 1,
              ref_key: "passwordChangeFormRef",
              ref: passwordChangeFormRef,
              model: unref(passwordChangeForm),
              rules: passwordChangeRules,
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "原密码",
                  prop: "oldPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(passwordChangeForm).oldPassword,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(passwordChangeForm).oldPassword = $event),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "新密码",
                  prop: "newPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(passwordChangeForm).newPassword,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(passwordChangeForm).newPassword = $event),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "确认密码",
                  prop: "confirmPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(passwordChangeForm).confirmPassword,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(passwordChangeForm).confirmPassword = $event),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : unref(dialog).type === "mobile" ? (openBlock(), createBlock(_component_el_form, {
              key: 2,
              ref_key: "mobileBindingFormRef",
              ref: mobileBindingFormRef,
              model: unref(mobileUpdateForm),
              rules: mobileBindingRules,
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "手机号码",
                  prop: "mobile"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(mobileUpdateForm).mobile,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(mobileUpdateForm).mobile = $event),
                      style: { "width": "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "验证码",
                  prop: "code"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(mobileUpdateForm).code,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(mobileUpdateForm).code = $event),
                      style: { "width": "250px" }
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_el_button, {
                          disabled: unref(mobileCountdown) > 0,
                          onClick: handleSendMobileCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(mobileCountdown) > 0 ? `${unref(mobileCountdown)}s后重新发送` : "发送验证码"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : unref(dialog).type === "email" ? (openBlock(), createBlock(_component_el_form, {
              key: 3,
              ref_key: "emailBindingFormRef",
              ref: emailBindingFormRef,
              model: unref(emailUpdateForm),
              rules: emailBindingRules,
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "邮箱",
                  prop: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(emailUpdateForm).email,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(emailUpdateForm).email = $event),
                      style: { "width": "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "验证码",
                  prop: "code"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(emailUpdateForm).code,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(emailUpdateForm).code = $event),
                      style: { "width": "250px" }
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_el_button, {
                          disabled: unref(emailCountdown) > 0,
                          onClick: handleSendEmailCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(emailCountdown) > 0 ? `${unref(emailCountdown)}s后重新发送` : "发送验证码"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-77100819"]]);
export {
  index as default
};
