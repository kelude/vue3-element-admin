import { d as defineComponent, aE as useI18n, o as onMounted, r as ref, c as computed, dI as AuthAPI, as as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, F as toDisplayString, i as unref, w as withCtx, E as ElIcon, a3 as withKeys, dJ as lock_default, e as createBlock, aA as isRef, a4 as createTextVNode, aG as ElMessage } from "./index.C-w1mPR5.js";
import { E as ElText } from "./text.CCBnW7lr.js";
import { E as ElFormItem, a as ElForm } from "./form-item.Dj1vXnXz.js";
/* empty css                */
import { E as ElLink } from "./link.D-KNl23S.js";
import { E as ElCheckbox } from "./checkbox.C7Foa8TW.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.B8758rPD.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
import { E as ElButton } from "./index.BMPR14Hc.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./castArray.C7_3uu86.js";
import "./error.BVJkE67s.js";
import "./_baseClone.vDnszwId.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./index.DBHfYhTD.js";
import "./index.DmNrmtFU.js";
import "./event.BZTOGHfp.js";
import "./index.Y-PlGRQ9.js";
import "./aria.McRhojP9.js";
import "./index.D1LU_lkm.js";
import "./index.Cz0Zbu2t.js";
import "./index.BLtH7mBo.js";
const _hoisted_1 = {
  "text-center": "",
  "m-0": "",
  "mb-20px": ""
};
const _hoisted_2 = { flex: "" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "flex-y-center w-full gap-10px" };
const _hoisted_5 = {
  "flex-center": "",
  "gap-10px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register",
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const emit = __emit;
    const toLogin = () => emit("update:modelValue", "login");
    onMounted(() => getCaptcha());
    const formRef = ref();
    const loading = ref(false);
    const isCapsLock = ref(false);
    const captchaBase64 = ref();
    const isRead = ref(false);
    const model = ref({
      username: "admin",
      password: "123456",
      confirmPassword: "",
      captchaKey: "",
      captchaCode: "",
      rememberMe: false
    });
    const rules = computed(() => {
      return {
        username: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.username.required")
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.password.required")
          },
          {
            min: 6,
            message: t("login.message.password.min"),
            trigger: "blur"
          }
        ],
        confirmPassword: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.password.required")
          },
          {
            min: 6,
            message: t("login.message.password.min"),
            trigger: "blur"
          },
          {
            validator: (_, value) => {
              return value === model.value.password;
            },
            trigger: "blur",
            message: t("login.message.password.inconformity")
          }
        ],
        captchaCode: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.captchaCode.required")
          }
        ]
      };
    });
    const codeLoading = ref(false);
    function getCaptcha() {
      codeLoading.value = true;
      AuthAPI.getCaptcha().then((data) => {
        model.value.captchaKey = data.captchaKey;
        captchaBase64.value = data.captchaBase64;
      }).finally(() => codeLoading.value = false);
    }
    function checkCapsLock(event) {
      if (event instanceof KeyboardEvent) {
        isCapsLock.value = event.getModifierState("CapsLock");
      }
    }
    const submit = async () => {
      await formRef.value?.validate();
      ElMessage.warning("开发中 ...");
    };
    return (_ctx, _cache) => {
      const _component_User = resolveComponent("User");
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_tooltip = ElTooltip;
      const _component_Loading = resolveComponent("Loading");
      const _component_el_checkbox = ElCheckbox;
      const _component_el_link = ElLink;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_text = ElText;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h3", _hoisted_1, toDisplayString(unref(t)("login.reg")), 1),
        createVNode(_component_el_form, {
          ref_key: "formRef",
          ref: formRef,
          model: unref(model),
          rules: unref(rules),
          size: "large"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { prop: "username" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: unref(model).username,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(model).username = $event),
                  modelModifiers: { trim: true },
                  placeholder: unref(t)("login.username")
                }, {
                  prefix: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_User)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(_component_el_tooltip, {
              visible: unref(isCapsLock),
              content: unref(t)("login.capsLock"),
              placement: "right"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { prop: "password" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(model).password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(model).password = $event),
                      modelModifiers: { trim: true },
                      placeholder: unref(t)("login.password"),
                      type: "password",
                      "show-password": "",
                      onKeyup: [
                        checkCapsLock,
                        withKeys(submit, ["enter"])
                      ]
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(lock_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["visible", "content"]),
            createVNode(_component_el_tooltip, {
              visible: unref(isCapsLock),
              content: unref(t)("login.capsLock"),
              placement: "right"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { prop: "confirmPassword" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(model).confirmPassword,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(model).confirmPassword = $event),
                      modelModifiers: { trim: true },
                      placeholder: unref(t)("login.message.password.confirm"),
                      type: "password",
                      "show-password": "",
                      onKeyup: [
                        checkCapsLock,
                        withKeys(submit, ["enter"])
                      ]
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(lock_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["visible", "content"]),
            createVNode(_component_el_form_item, { prop: "captchaCode" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_el_input, {
                    modelValue: unref(model).captchaCode,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(model).captchaCode = $event),
                    modelModifiers: { trim: true },
                    placeholder: unref(t)("login.captchaCode"),
                    onKeyup: withKeys(submit, ["enter"])
                  }, {
                    prefix: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createBaseVNode("div", { class: "i-svg:captcha" }, null, -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"]),
                  createBaseVNode("div", {
                    "cursor-pointer": "",
                    h: "[40px]",
                    w: "[120px]",
                    "flex-center": "",
                    "ml-10px": "",
                    onClick: getCaptcha
                  }, [
                    unref(codeLoading) ? (openBlock(), createBlock(_component_el_icon, {
                      key: 0,
                      class: "is-loading"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Loading)
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("img", {
                      key: 1,
                      "object-cover": "",
                      "border-rd-4px": "",
                      "p-1px": "",
                      shadow: "[0_0_0_1px_var(--el-border-color)_inset]",
                      src: unref(captchaBase64),
                      alt: "code"
                    }, null, 8, _hoisted_3))
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_el_checkbox, {
                    modelValue: unref(isRead),
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(isRead) ? isRead.value = $event : null)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("login.agree")), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  createVNode(_component_el_link, {
                    type: "primary",
                    underline: "never"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("login.userAgreement")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  loading: unref(loading),
                  type: "success",
                  class: "w-full",
                  onClick: submit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("login.register")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_el_text, { size: "default" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("login.haveAccount")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_el_link, {
            type: "primary",
            underline: "never",
            onClick: toLogin
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("login.login")), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
