import { d as defineComponent, bb as useUserStoreHook, r as ref, I as watch, o as onMounted, aa as onBeforeUnmount, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref, e as createBlock, C as createBaseVNode, P as Fragment, Q as renderList, n as normalizeClass, F as toDisplayString } from "./index.By1HG0zl.js";
import { a as ElForm, E as ElFormItem } from "./form-item.DPbtp_43.js";
import { E as ElCard } from "./card.BL4RZj1y.js";
import { a as ElCol, E as ElRow } from "./col.BnmjuHeR.js";
/* empty css             */
/* empty css                */
import { E as ElInput } from "./input.vrG8fnLa.js";
import { E as ElLink } from "./link.DJfoi8j4.js";
import { u as useStomp } from "./useStomp.DLOZjHee.js";
import { E as ElButton } from "./index.DrmDPqoI.js";
import { E as ElTag } from "./index.dmQYA_e_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./use-form-common-props.DPAYUUkh.js";
import "./castArray.B9kvtQKh.js";
import "./error.BVJkE67s.js";
import "./_baseClone.CBVZP9kp.js";
import "./_initCloneObject.CO4fE7pF.js";
import "./index.nnE0ZPx7.js";
import "./event.BZTOGHfp.js";
import "./index.B9QRmu6l.js";
import "./index.BJxO8UGY.js";
import "./aria.McRhojP9.js";
import "./index.BQ1YrHne.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "chat-messages-wrapper" };
const _hoisted_3 = {
  key: 0,
  class: "chat-message__content"
};
const _hoisted_4 = { class: "text-gray-600" };
const _hoisted_5 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "websocket",
  setup(__props) {
    const userStore = useUserStoreHook();
    const socketEndpoint = ref(void 0);
    const messages = ref([]);
    const topicMessage = ref("亲爱的朋友们，系统已恢复最新状态。");
    const queneMessage = ref("Hi, " + userStore.userInfo.username + " 这里是点对点消息示例！");
    const receiver = ref("root");
    const { isConnected, connect, subscribe, disconnect } = useStomp({
      debug: true
    });
    watch(
      () => isConnected.value,
      (connected) => {
        if (connected) {
          subscribe("/topic/notice", (res) => {
            messages.value.push({
              sender: "Server",
              content: res.body
            });
          });
          subscribe("/user/queue/greeting", (res) => {
            const messageData = JSON.parse(res.body);
            messages.value.push({
              sender: messageData.sender,
              content: messageData.content
            });
          });
          messages.value.push({
            sender: "Server",
            content: "Websocket 已连接",
            type: "tip"
          });
        } else {
          messages.value.push({
            sender: "Server",
            content: "Websocket 已断开",
            type: "tip"
          });
        }
      }
    );
    function connectWebSocket() {
      connect();
    }
    function disconnectWebSocket() {
      disconnect();
    }
    function sendToAll() {
      if (isConnected.value) {
        subscribe("/app/broadcast", () => {
        });
        messages.value.push({
          sender: userStore.userInfo.username,
          content: topicMessage.value
        });
      }
    }
    function sendToUser() {
      if (isConnected.value) {
        subscribe(`/app/sendToUser/${receiver.value}`, () => {
        });
        messages.value.push({
          sender: userStore.userInfo.username,
          content: queneMessage.value
        });
      }
    }
    onMounted(() => {
      connectWebSocket();
    });
    onBeforeUnmount(() => {
      disconnectWebSocket();
    });
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_col = ElCol;
      const _component_el_tag = ElTag;
      const _component_el_row = ElRow;
      const _component_el_card = ElCard;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/websocket.vue",
          type: "primary",
          target: "_blank",
          class: "mb-[20px]"
        }, {
          default: withCtx(() => [..._cache[4] || (_cache[4] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_el_row, { gutter: 10 }, {
          default: withCtx(() => [
            createVNode(_component_el_col, { span: 12 }, {
              default: withCtx(() => [
                createVNode(_component_el_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_col, { span: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(socketEndpoint),
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(socketEndpoint) ? socketEndpoint.value = $event : null),
                              style: { "width": "200px" }
                            }, null, 8, ["modelValue"]),
                            createVNode(_component_el_button, {
                              type: "primary",
                              class: "ml-5",
                              disabled: unref(isConnected),
                              onClick: connectWebSocket
                            }, {
                              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                                createTextVNode(" 连接 ", -1)
                              ])]),
                              _: 1
                            }, 8, ["disabled"]),
                            createVNode(_component_el_button, {
                              type: "danger",
                              disabled: !unref(isConnected),
                              onClick: disconnectWebSocket
                            }, {
                              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                                createTextVNode(" 断开 ", -1)
                              ])]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_col, {
                          span: 6,
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            _cache[9] || (_cache[9] = createTextVNode(" 连接状态： ", -1)),
                            unref(isConnected) ? (openBlock(), createBlock(_component_el_tag, {
                              key: 0,
                              type: "success"
                            }, {
                              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                                createTextVNode("已连接", -1)
                              ])]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_tag, {
                              key: 1,
                              type: "info"
                            }, {
                              default: withCtx(() => [..._cache[8] || (_cache[8] = [
                                createTextVNode("已断开", -1)
                              ])]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_card, { class: "mt-5" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form, { "label-width": "90px" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, { label: "消息内容" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(topicMessage),
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(topicMessage) ? topicMessage.value = $event : null),
                              type: "textarea"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_button, {
                              type: "primary",
                              onClick: sendToAll
                            }, {
                              default: withCtx(() => [..._cache[10] || (_cache[10] = [
                                createTextVNode("发送广播", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_card, { class: "mt-5" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form, { "label-width": "90px" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, { label: "消息内容" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(queneMessage),
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(queneMessage) ? queneMessage.value = $event : null),
                              type: "textarea"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "消息接收人" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(receiver),
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(receiver) ? receiver.value = $event : null)
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_button, {
                              type: "primary",
                              onClick: sendToUser
                            }, {
                              default: withCtx(() => [..._cache[11] || (_cache[11] = [
                                createTextVNode("发送点对点消息", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_col, { span: 12 }, {
              default: withCtx(() => [
                createVNode(_component_el_card, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(messages), (message, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: index,
                          class: normalizeClass([
                            message.type === "tip" ? "system-notice" : "chat-message",
                            {
                              "chat-message--sent": message.sender === unref(userStore).userInfo.username,
                              "chat-message--received": message.sender !== unref(userStore).userInfo.username
                            }
                          ])
                        }, [
                          message.type != "tip" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                            createBaseVNode("div", {
                              class: normalizeClass({
                                "chat-message__sender": message.sender === unref(userStore).userInfo.username,
                                "chat-message__receiver": message.sender !== unref(userStore).userInfo.username
                              })
                            }, toDisplayString(message.sender), 3),
                            createBaseVNode("div", _hoisted_4, toDisplayString(message.content), 1)
                          ])) : (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(message.content), 1))
                        ], 2);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
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
const websocket = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c87c754"]]);
export {
  websocket as default
};
