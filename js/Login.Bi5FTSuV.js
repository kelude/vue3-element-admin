import { d as defineComponent, aE as useI18n, aJ as useUserStore, ap as useRoute, o as onMounted, r as ref, cN as AuthStorage, c as computed, dI as AuthAPI, as as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, F as toDisplayString, i as unref, w as withCtx, E as ElIcon, a3 as withKeys, e as createBlock, a4 as createTextVNode, ay as router } from "./index.CjDU5CMT.js";
import { E as ElFormItem, a as ElForm } from "./form-item.nVgD0sQO.js";
/* empty css                */
import { E as ElLink } from "./link.KJjpinkR.js";
import { E as ElCheckbox } from "./checkbox.Dum2PTxz.js";
import { E as ElText } from "./text.BhAbWWKi.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.CVURbzwO.js";
import { E as ElInput } from "./input.mLRPLJvT.js";
import { C as CommonWrapper } from "./index.BkvpzYTe.js";
import { E as ElButton } from "./index.D2tRBopO.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./use-form-common-props.BPtRgoS9.js";
import "./castArray.CGtXUNId.js";
import "./error.BVJkE67s.js";
import "./_baseClone.C7MQiCf9.js";
import "./_initCloneObject.tFWjqE6V.js";
import "./index.3UkwCaMF.js";
import "./index.DR0hHISx.js";
import "./event.BZTOGHfp.js";
import "./index.kBJnZjK7.js";
import "./aria.McRhojP9.js";
import "./index.BIuzPtP6.js";
import "./index.CCbVilVt.js";
import "./index.BWKss2Xq.js";
const _hoisted_1 = {
  "text-center": "",
  "m-0": "",
  "mb-20px": ""
};
const _hoisted_2 = {
  flex: "",
  "items-center": "",
  "gap-10px": ""
};
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "flex-x-between w-full" };
const _hoisted_5 = {
  "flex-center": "",
  "gap-10px": ""
};
const _hoisted_6 = { class: "third-party-login" };
const _hoisted_7 = { class: "divider-container" };
const _hoisted_8 = { class: "divider-text" };
const _hoisted_9 = { class: "flex-center gap-x-5 w-full text-[var(--el-text-color-secondary)]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const userStore = useUserStore();
    const route = useRoute();
    onMounted(() => getCaptcha());
    const loginFormRef = ref();
    const loading = ref(false);
    const isCapsLock = ref(false);
    const captchaBase64 = ref();
    const rememberMe = AuthStorage.getRememberMe();
    const loginFormData = ref({
      username: "admin",
      password: "123456",
      captchaKey: "",
      captchaCode: "",
      rememberMe
    });
    const loginRules = computed(() => {
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
        loginFormData.value.captchaKey = data.captchaKey;
        captchaBase64.value = data.captchaBase64;
      }).finally(() => codeLoading.value = false);
    }
    async function handleLoginSubmit() {
      try {
        const valid = await loginFormRef.value?.validate();
        if (!valid) return;
        loading.value = true;
        await userStore.login(loginFormData.value);
        const redirectPath = route.query.redirect || "/";
        await router.push(decodeURIComponent(redirectPath));
      } catch (error) {
        getCaptcha();
        console.error("登录失败:", error);
      } finally {
        loading.value = false;
      }
    }
    function checkCapsLock(event) {
      if (event instanceof KeyboardEvent) {
        isCapsLock.value = event.getModifierState("CapsLock");
      }
    }
    const emit = __emit;
    function toOtherForm(type) {
      emit("update:modelValue", type);
    }
    return (_ctx, _cache) => {
      const _component_User = resolveComponent("User");
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_Lock = resolveComponent("Lock");
      const _component_el_tooltip = ElTooltip;
      const _component_Loading = resolveComponent("Loading");
      const _component_el_text = ElText;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_link = ElLink;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h3", _hoisted_1, toDisplayString(unref(t)("login.login")), 1),
        createVNode(_component_el_form, {
          ref_key: "loginFormRef",
          ref: loginFormRef,
          model: unref(loginFormData),
          rules: unref(loginRules),
          size: "large",
          "validate-on-rule-change": false
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { prop: "username" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: unref(loginFormData).username,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(loginFormData).username = $event),
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
                      modelValue: unref(loginFormData).password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(loginFormData).password = $event),
                      modelModifiers: { trim: true },
                      placeholder: unref(t)("login.password"),
                      type: "password",
                      "show-password": "",
                      onKeyup: [
                        checkCapsLock,
                        withKeys(handleLoginSubmit, ["enter"])
                      ]
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(_component_Lock)
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
                    modelValue: unref(loginFormData).captchaCode,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(loginFormData).captchaCode = $event),
                    modelModifiers: { trim: true },
                    placeholder: unref(t)("login.captchaCode"),
                    clearable: "",
                    class: "flex-1",
                    onKeyup: withKeys(handleLoginSubmit, ["enter"])
                  }, {
                    prefix: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createBaseVNode("div", { class: "i-svg:captcha" }, null, -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"]),
                  createBaseVNode("div", {
                    "cursor-pointer": "",
                    "h-40px": "",
                    "w-120px": "",
                    "flex-center": "",
                    onClick: getCaptcha
                  }, [
                    unref(codeLoading) ? (openBlock(), createBlock(_component_el_icon, {
                      key: 0,
                      class: "is-loading",
                      size: "20"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Loading)
                      ]),
                      _: 1
                    })) : unref(captchaBase64) ? (openBlock(), createElementBlock("img", {
                      key: 1,
                      "border-rd-4px": "",
                      "object-cover": "",
                      shadow: "[0_0_0_1px_var(--el-border-color)_inset]",
                      src: unref(captchaBase64),
                      alt: "captchaCode"
                    }, null, 8, _hoisted_3)) : (openBlock(), createBlock(_component_el_text, {
                      key: 2,
                      type: "info",
                      size: "small"
                    }, {
                      default: withCtx(() => [..._cache[7] || (_cache[7] = [
                        createTextVNode("点击获取验证码", -1)
                      ])]),
                      _: 1
                    }))
                  ])
                ])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_el_checkbox, {
                modelValue: unref(loginFormData).rememberMe,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(loginFormData).rememberMe = $event)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("login.rememberMe")), 1)
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(_component_el_link, {
                type: "primary",
                underline: "never",
                onClick: _cache[4] || (_cache[4] = ($event) => toOtherForm("resetPwd"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("login.forgetPassword")), 1)
                ]),
                _: 1
              })
            ]),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  loading: unref(loading),
                  type: "primary",
                  class: "w-full",
                  onClick: handleLoginSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("login.login")), 1)
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
              createTextVNode(toDisplayString(unref(t)("login.noAccount")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_el_link, {
            type: "primary",
            underline: "never",
            onClick: _cache[5] || (_cache[5] = ($event) => toOtherForm("register"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("login.reg")), 1)
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "divider-line" }, null, -1)),
            createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("login.otherLoginMethods")), 1),
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "divider-line" }, null, -1))
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(CommonWrapper, null, {
              default: withCtx(() => [..._cache[10] || (_cache[10] = [
                createBaseVNode("div", {
                  "text-20px": "",
                  class: "i-svg:wechat"
                }, null, -1)
              ])]),
              _: 1
            }),
            createVNode(CommonWrapper, null, {
              default: withCtx(() => [..._cache[11] || (_cache[11] = [
                createBaseVNode("div", {
                  "text-20px": "",
                  "cursor-pointer": "",
                  class: "i-svg:qq"
                }, null, -1)
              ])]),
              _: 1
            }),
            createVNode(CommonWrapper, null, {
              default: withCtx(() => [..._cache[12] || (_cache[12] = [
                createBaseVNode("div", {
                  "text-20px": "",
                  "cursor-pointer": "",
                  class: "i-svg:github"
                }, null, -1)
              ])]),
              _: 1
            }),
            createVNode(CommonWrapper, null, {
              default: withCtx(() => [..._cache[13] || (_cache[13] = [
                createBaseVNode("div", {
                  "text-20px": "",
                  "cursor-pointer": "",
                  class: "i-svg:gitee"
                }, null, -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83d2f653"]]);
export {
  Login as default
};
