import { bS as useDictStoreHook, r as ref, d as defineComponent, c as computed, o as onMounted, b4 as onUnmounted, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, C as createBaseVNode, e as createBlock, i as unref, aA as isRef, P as Fragment, Q as renderList, F as toDisplayString, b6 as useDateFormat, U as nextTick, aG as ElMessage, bl as DictAPI } from "./index.C-w1mPR5.js";
import { E as ElRow, a as ElCol } from "./col.CBCG_qqL.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.BKt65S9k.js";
import { E as ElCard } from "./card.EBLyLLiR.js";
import { E as ElEmpty } from "./empty.CbJbz5RQ.js";
import { a as ElForm, E as ElFormItem } from "./form-item.Dj1vXnXz.js";
/* empty css             */
import { E as ElSelect, a as ElOption } from "./select.DEZ3TM_z.js";
import "./scrollbar.DFEDmrTe.js";
import "./popper.B8758rPD.js";
import { E as ElInput } from "./input.CTUtO4DQ.js";
/* empty css                */
import { E as ElAlert } from "./alert.BF0pzuCE.js";
import { u as useStomp } from "./useStomp.CXphT37n.js";
import { E as ElTag } from "./index.C28lPzad.js";
import { E as ElButton } from "./index.BMPR14Hc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./event.BZTOGHfp.js";
import "./use-form-common-props.BiHzdJ5v.js";
import "./index.DBHfYhTD.js";
import "./index.DmNrmtFU.js";
import "./error.BVJkE67s.js";
import "./castArray.C7_3uu86.js";
import "./_baseClone.vDnszwId.js";
import "./_initCloneObject.BsyJ7anb.js";
import "./token.BqWJQ4CJ.js";
import "./strings.U77u0PSM.js";
import "./index.BLtH7mBo.js";
import "./aria.McRhojP9.js";
import "./scroll.BCEJlaVo.js";
import "./debounce.sHE95kMl.js";
import "./toNumber.BD3fO3HE.js";
import "./_baseIteratee.CQTSDRqz.js";
import "./index.CHVt_Cot.js";
import "./vnode.AKE4hrFO.js";
import "./index.Y-PlGRQ9.js";
import "./index.D1LU_lkm.js";
import "./index.Cz0Zbu2t.js";
let instance = null;
function createDictSyncHook() {
  const dictStore = useDictStoreHook();
  const { isConnected, connect, subscribe, unsubscribe, disconnect } = useStomp({
    reconnectDelay: 2e4,
    // 字典更新重连时间
    connectionTimeout: 15e3,
    // 连接超时阈值
    useExponentialBackoff: false,
    // 使用固定间隔重连策略
    maxReconnectAttempts: 3
    // 最多重连3次
  });
  const subscriptionIds = ref([]);
  const subscribedTopics = ref(/* @__PURE__ */ new Set());
  const messageCallbacks = ref([]);
  let retryTimer = null;
  const onDictMessage = (callback) => {
    messageCallbacks.value.push(callback);
    return () => {
      const index = messageCallbacks.value.indexOf(callback);
      if (index !== -1) {
        messageCallbacks.value.splice(index, 1);
      }
    };
  };
  const initWebSocket = async () => {
    try {
      const wsEndpoint = void 0;
      if (!wsEndpoint) {
        console.log("[DictSync] 未配置WebSocket端点,跳过连接");
        return;
      }
      connect();
      setupDictSubscription();
    } catch (error) {
      console.error("[DictSync] 初始化失败:", error);
    }
  };
  const closeWebSocket = () => {
    if (retryTimer) {
      clearTimeout(retryTimer);
      retryTimer = null;
    }
    subscriptionIds.value.forEach((id) => {
      unsubscribe(id);
    });
    subscriptionIds.value = [];
    subscribedTopics.value.clear();
    disconnect();
  };
  const setupDictSubscription = () => {
    const topic = "/topic/dict";
    if (subscribedTopics.value.has(topic)) {
      console.log(`[DictSync] 跳过重复订阅: ${topic}`);
      return;
    }
    console.log(`[DictSync] 开始尝试订阅字典主题: ${topic}`);
    const attemptSubscribe = () => {
      if (!isConnected.value) {
        console.log("[DictSync] 等待WebSocket连接建立...");
        if (retryTimer) {
          clearTimeout(retryTimer);
        }
        retryTimer = setTimeout(() => {
          retryTimer = null;
          attemptSubscribe();
        }, 1e4);
        return;
      }
      if (retryTimer) {
        clearTimeout(retryTimer);
        retryTimer = null;
      }
      if (subscribedTopics.value.has(topic)) {
        return;
      }
      console.log(`[DictSync] 连接已建立，开始订阅: ${topic}`);
      const subId = subscribe(topic, (message) => {
        handleDictEvent(message);
      });
      if (subId) {
        subscriptionIds.value.push(subId);
        subscribedTopics.value.add(topic);
        console.log(`[DictSync] 字典主题订阅成功: ${topic}`);
      } else {
        console.warn(`[DictSync] 字典主题订阅失败: ${topic}`);
      }
    };
    attemptSubscribe();
  };
  const handleDictEvent = (message) => {
    if (!message.body) return;
    try {
      console.log(`[DictSync] 收到字典更新消息: ${message.body}`);
      const parsedData = JSON.parse(message.body);
      const dictCode = parsedData.dictCode;
      if (!dictCode) return;
      dictStore.removeDictItem(dictCode);
      console.log(`[DictSync] 字典缓存已清除: ${dictCode}`);
      messageCallbacks.value.forEach((callback) => {
        try {
          callback(parsedData);
        } catch (callbackError) {
          console.error("[DictSync] 回调执行失败:", callbackError);
        }
      });
      console.info(`[DictSync] 字典 ${dictCode} 已变更，将在下次使用时自动加载`);
    } catch (error) {
      console.error("[DictSync] 解析消息失败:", error);
    }
  };
  return {
    isConnected,
    initWebSocket,
    closeWebSocket,
    handleDictEvent,
    onDictMessage
  };
}
function useDictSync() {
  if (!instance) {
    instance = createDictSyncHook();
  }
  return instance;
}
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "card-header" };
const _hoisted_3 = { class: "flex justify-between items-center" };
const _hoisted_4 = {
  key: 0,
  class: "dict-form"
};
const _hoisted_5 = { class: "flex justify-between items-center" };
const _hoisted_6 = { class: "dict-component-demo" };
const _hoisted_7 = { class: "mt-4 pt-3 border-top" };
const _hoisted_8 = { class: "text-muted mb-2" };
const _hoisted_9 = { class: "text-muted" };
const _hoisted_10 = { class: "flex justify-between items-center" };
const _hoisted_11 = { class: "cache-content" };
const _hoisted_12 = { class: "cache-data" };
const DICT_CODE = "gender";
const MALE_ITEM_ID = "1";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dict-sync",
  setup(__props) {
    const dictStore = useDictStoreHook();
    const saving = ref(false);
    const lastUpdateTime = ref("-");
    const dictForm = ref(null);
    const selectedGender = ref("");
    const dictWebSocket = useDictSync();
    const wsConnected = computed(() => dictWebSocket.isConnected);
    const wsStatusText = computed(() => wsConnected.value ? "已连接" : "未连接");
    let unregisterCallback = null;
    const dictCacheStatus = computed(() => {
      return dictStore.getDictItems(DICT_CODE).length > 0;
    });
    const setupWebSocket = () => {
      dictWebSocket.initWebSocket();
      unregisterCallback = dictWebSocket.onDictMessage((message) => {
        if (message.dictCode === DICT_CODE) {
          lastUpdateTime.value = useDateFormat(/* @__PURE__ */ new Date(), "YYYY-MM-DD HH:mm:ss").value;
          nextTick(() => {
            refreshDictComponent();
          });
        }
      });
    };
    const refreshDictComponent = async () => {
      await dictStore.loadDictItems(DICT_CODE);
      ElMessage.success("字典组件已刷新");
    };
    const loadMaleDict = async () => {
      const data = await DictAPI.getDictItemFormData(DICT_CODE, MALE_ITEM_ID);
      dictForm.value = data;
    };
    const saveDict = async () => {
      if (!dictForm.value) return;
      saving.value = true;
      try {
        await DictAPI.updateDictItem(DICT_CODE, MALE_ITEM_ID, dictForm.value);
        lastUpdateTime.value = useDateFormat(/* @__PURE__ */ new Date(), "YYYY-MM-DD HH:mm:ss").value;
        ElMessage.success("保存成功，后端将通过WebSocket通知所有客户端");
      } catch (error) {
        console.error("保存字典项失败:", error);
        ElMessage.error("保存失败");
      } finally {
        saving.value = false;
      }
    };
    onMounted(async () => {
      await loadMaleDict();
      await dictStore.loadDictItems(DICT_CODE);
      selectedGender.value = "1";
      setupWebSocket();
    });
    onUnmounted(() => {
      unregisterCallback?.();
    });
    return (_ctx, _cache) => {
      const _component_el_tag = ElTag;
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_form = ElForm;
      const _component_el_empty = ElEmpty;
      const _component_el_card = ElCard;
      const _component_el_col = ElCol;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_row = ElRow;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_card, { class: "box-card" }, {
          header: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              _cache[5] || (_cache[5] = createBaseVNode("span", null, "字典WebSocket实时更新演示", -1)),
              createVNode(_component_el_tag, {
                type: unref(wsConnected) ? "success" : "danger",
                size: "small",
                class: "ml-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" WebSocket " + toDisplayString(unref(wsStatusText)), 1)
                ]),
                _: 1
              }, 8, ["type"])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_alert, {
              type: "info",
              closable: false,
              class: "mb-4"
            }, {
              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                createTextVNode(' 本示例展示WebSocket实时更新字典缓存的效果。您可以编辑"男"性别字典项，保存后后端将通过WebSocket通知所有客户端刷新缓存。 ', -1)
              ])]),
              _: 1
            }),
            createVNode(_component_el_row, { gutter: 16 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_card, {
                      shadow: "hover",
                      class: "dict-card"
                    }, {
                      header: withCtx(() => [
                        createBaseVNode("div", _hoisted_3, [
                          _cache[8] || (_cache[8] = createBaseVNode("span", null, "性别字典项 - 男", -1)),
                          createVNode(_component_el_button, {
                            type: "warning",
                            size: "small",
                            onClick: loadMaleDict
                          }, {
                            default: withCtx(() => [..._cache[7] || (_cache[7] = [
                              createTextVNode("重新加载", -1)
                            ])]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", null, [
                          unref(dictForm) ? (openBlock(), createElementBlock("div", _hoisted_4, [
                            createVNode(_component_el_form, {
                              model: unref(dictForm),
                              "label-width": "80px"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_form_item, { label: "字典编码" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: unref(dictForm).dictCode,
                                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(dictForm).dictCode = $event),
                                      disabled: ""
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_form_item, { label: "字典标签" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: unref(dictForm).label,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(dictForm).label = $event)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_form_item, { label: "字典值" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: unref(dictForm).value,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(dictForm).value = $event),
                                      disabled: ""
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_form_item, { label: "标记颜色" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_select, {
                                      modelValue: unref(dictForm).tagType,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(dictForm).tagType = $event),
                                      placeholder: "选择标签类型",
                                      style: { "width": "100%" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_option, {
                                          value: "success",
                                          label: "success"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_tag, { type: "success" }, {
                                              default: withCtx(() => [..._cache[9] || (_cache[9] = [
                                                createTextVNode("success", -1)
                                              ])]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_option, {
                                          value: "warning",
                                          label: "warning"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_tag, { type: "warning" }, {
                                              default: withCtx(() => [..._cache[10] || (_cache[10] = [
                                                createTextVNode("warning", -1)
                                              ])]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_option, {
                                          value: "danger",
                                          label: "danger"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_tag, { type: "danger" }, {
                                              default: withCtx(() => [..._cache[11] || (_cache[11] = [
                                                createTextVNode("danger", -1)
                                              ])]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_option, {
                                          value: "info",
                                          label: "info"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_tag, { type: "info" }, {
                                              default: withCtx(() => [..._cache[12] || (_cache[12] = [
                                                createTextVNode("info", -1)
                                              ])]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_option, {
                                          value: "primary",
                                          label: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_tag, { type: "primary" }, {
                                              default: withCtx(() => [..._cache[13] || (_cache[13] = [
                                                createTextVNode("primary", -1)
                                              ])]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_form_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_button, {
                                      type: "primary",
                                      loading: unref(saving),
                                      onClick: saveDict
                                    }, {
                                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
                                        createTextVNode("保存", -1)
                                      ])]),
                                      _: 1
                                    }, 8, ["loading"]),
                                    createVNode(_component_el_button, { onClick: loadMaleDict }, {
                                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
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
                          ])) : (openBlock(), createBlock(_component_el_empty, {
                            key: 1,
                            description: "暂无字典数据"
                          }))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_card, {
                      shadow: "hover",
                      class: "dict-card"
                    }, {
                      header: withCtx(() => [
                        createBaseVNode("div", _hoisted_5, [
                          _cache[17] || (_cache[17] = createBaseVNode("span", null, "字典组件展示", -1)),
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "small",
                            onClick: refreshDictComponent
                          }, {
                            default: withCtx(() => [..._cache[16] || (_cache[16] = [
                              createTextVNode(" 手动刷新 ", -1)
                            ])]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_6, [
                          _cache[18] || (_cache[18] = createBaseVNode("h4", { class: "mt-4 mb-3" }, "性别组件", -1)),
                          createVNode(_component_el_radio_group, {
                            modelValue: unref(selectedGender),
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(selectedGender) ? selectedGender.value = $event : null)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dictStore).getDictItems("gender"), (item) => {
                                return openBlock(), createBlock(_component_el_radio, {
                                  key: item.value,
                                  value: item.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          _cache[19] || (_cache[19] = createBaseVNode("h4", { class: "mt-4 mb-3" }, "性别标签", -1)),
                          createBaseVNode("div", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dictStore).getDictItems("gender"), (item) => {
                              return openBlock(), createBlock(_component_el_tag, {
                                key: item.value,
                                type: item.tagType || void 0,
                                class: "mr-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["type"]);
                            }), 128))
                          ]),
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("div", _hoisted_8, "已选择值: " + toDisplayString(unref(selectedGender)), 1),
                            createBaseVNode("div", _hoisted_9, "最后更新: " + toDisplayString(unref(lastUpdateTime)), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_card, {
                      shadow: "hover",
                      class: "dict-card"
                    }, {
                      header: withCtx(() => [
                        createBaseVNode("div", _hoisted_10, [
                          _cache[22] || (_cache[22] = createBaseVNode("span", null, "字典缓存数据", -1)),
                          createBaseVNode("div", null, [
                            unref(dictCacheStatus) ? (openBlock(), createBlock(_component_el_tag, {
                              key: 0,
                              type: "success",
                              class: "ml-2",
                              size: "small"
                            }, {
                              default: withCtx(() => [..._cache[20] || (_cache[20] = [
                                createTextVNode(" 已缓存 ", -1)
                              ])]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_tag, {
                              key: 1,
                              type: "danger",
                              class: "ml-2",
                              size: "small"
                            }, {
                              default: withCtx(() => [..._cache[21] || (_cache[21] = [
                                createTextVNode("未缓存", -1)
                              ])]),
                              _: 1
                            }))
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("pre", _hoisted_12, toDisplayString(JSON.stringify(unref(dictStore).getDictItems("gender"), null, 2)), 1)
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
          ]),
          _: 1
        })
      ]);
    };
  }
});
const dictSync = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5b454f1"]]);
export {
  dictSync as default
};
