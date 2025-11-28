import { d as dayjs } from "./dayjs.min.BlxeShp-.js";
import { ad as isArray, bv as isEmpty, dB as isDate, aL as getDefaultExportFromCjs, x as useLocale, r as ref, c as computed, bx as isEqual, t as buildProps, z as definePropType, V as useEmptyValuesProps, W as useSizeProp, bC as circle_close_default, _ as _export_sfc, d as defineComponent, S as reactive, b as useNamespace, g as createElementBlock, f as openBlock, l as renderSlot, C as createBaseVNode, Z as mergeProps, i as unref, k as normalizeStyle, n as normalizeClass, bD as useAttrs$1, A as inject, X as useEmptyValues, I as watch, aC as clock_default, dC as calendar_default, cl as onClickOutside, aa as onBeforeUnmount, e as createBlock, w as withCtx, j as withModifiers, h as createCommentVNode, E as ElIcon, by as NOOP, D as resolveDynamicComponent, F as toDisplayString, K as getEventCode, L as EVENT_CODE, U as nextTick, ag as unrefElement, y as provide, bJ as getStyle, o as onMounted, Q as Fragment, R as renderList, a4 as createTextVNode, $ as withDirectives, m as createVNode, bT as arrow_up_default, a0 as arrow_down_default, b2 as isNumber, a9 as isUndefined, T as Transition, M as isString, a3 as withKeys, a6 as hasClass, bz as useSlots, ak as toRef, a1 as vShow, dq as d_arrow_left_default, c4 as arrow_left_default, a8 as arrow_right_default, ds as d_arrow_right_default, bw as isFunction, B as getCurrentInstance, aP as toRefs, be as isVNode, q as withInstall } from "./index.CmLBO_Rw.js";
import { E as ElButton } from "./index.BHX3RtPE.js";
import { E as ElInput } from "./input.DJmIVgFr.js";
import { b as Ee, u as useTooltipContentProps, E as ElTooltip, c as castArray, e as extractFirst } from "./popper.D_c7zDnS.js";
import { u as useAriaProps, a as flatten } from "./index.eINu-mWW.js";
import { E as ElScrollbar } from "./scrollbar.DfgyWjDz.js";
import { v as vRepeatClick } from "./index.BHtZaCR6.js";
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT } from "./event.BZTOGHfp.js";
import { d as debounce } from "./debounce.jyiH45I7.js";
import { C as ClickOutside } from "./index.CF3ReAxE.js";
import { u as useFormItem, c as useFormItemInputId, a as useFormDisabled, b as useFormSize } from "./use-form-common-props.DLum1V4R.js";
import { u as useAttrs } from "./index.CaGOe3Xg.js";
import { u as useFocusController } from "./index.DlY5bQhi.js";
import { d as debugWarn } from "./error.BVJkE67s.js";
const buildTimeList = (value, bound) => {
  return [
    value > 0 ? value - 1 : void 0,
    value,
    value < bound ? value + 1 : void 0
  ];
};
const rangeArr = (n) => Array.from(Array.from({ length: n }).keys());
const extractDateFormat = (format) => {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format) => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};
const dateEquals = function(a, b) {
  const aIsDate = isDate(a);
  const bIsDate = isDate(b);
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a === b;
  }
  return false;
};
const valueEquals = function(a, b) {
  const aIsArray = isArray(a);
  const bIsArray = isArray(b);
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => dateEquals(item, b[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};
const parseDate = function(date, format, lang) {
  const day = isEmpty(format) || format === "x" ? dayjs(date).locale(lang) : dayjs(date, format).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date, format, lang) {
  if (isEmpty(format))
    return date;
  if (format === "x")
    return +date;
  return dayjs(date).locale(lang).format(format);
};
const makeList = (total, method) => {
  var _a;
  const arr = [];
  const disabledArr = method == null ? void 0 : method();
  for (let i = 0; i < total; i++) {
    arr.push((_a = disabledArr == null ? void 0 : disabledArr.includes(i)) != null ? _a : false);
  }
  return arr;
};
const dayOrDaysToDate = (dayOrDays) => {
  return isArray(dayOrDays) ? dayOrDays.map((d) => d.toDate()) : dayOrDays.toDate();
};
var localeData$2 = { exports: {} };
var localeData$1 = localeData$2.exports;
var hasRequiredLocaleData;
function requireLocaleData() {
  if (hasRequiredLocaleData) return localeData$2.exports;
  hasRequiredLocaleData = 1;
  (function(module, exports) {
    !(function(n, e) {
      module.exports = e();
    })(localeData$1, (function() {
      return function(n, e, t) {
        var r = e.prototype, o = function(n2) {
          return n2 && (n2.indexOf ? n2 : n2.s);
        }, u = function(n2, e2, t2, r2, u2) {
          var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map((function(n3) {
            return n3.slice(0, r2);
          }));
          if (!u2) return f;
          var d = i2.weekStart;
          return f.map((function(n3, e3) {
            return f[(e3 + (d || 0)) % 7];
          }));
        }, i = function() {
          return t.Ls[t.locale()];
        }, a = function(n2, e2) {
          return n2.formats[e2] || (function(n3) {
            return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(n4, e3, t2) {
              return e3 || t2.slice(1);
            }));
          })(n2.formats[e2.toUpperCase()]);
        }, s = function() {
          var n2 = this;
          return { months: function(e2) {
            return e2 ? e2.format("MMMM") : u(n2, "months");
          }, monthsShort: function(e2) {
            return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return n2.$locale().weekStart || 0;
          }, weekdays: function(e2) {
            return e2 ? e2.format("dddd") : u(n2, "weekdays");
          }, weekdaysMin: function(e2) {
            return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(e2) {
            return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(e2) {
            return a(n2.$locale(), e2);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        r.localeData = function() {
          return s.bind(this)();
        }, t.localeData = function() {
          var n2 = i();
          return { firstDayOfWeek: function() {
            return n2.weekStart || 0;
          }, weekdays: function() {
            return t.weekdays();
          }, weekdaysShort: function() {
            return t.weekdaysShort();
          }, weekdaysMin: function() {
            return t.weekdaysMin();
          }, months: function() {
            return t.months();
          }, monthsShort: function() {
            return t.monthsShort();
          }, longDateFormat: function(e2) {
            return a(n2, e2);
          }, meridiem: n2.meridiem, ordinal: n2.ordinal };
        }, t.months = function() {
          return u(i(), "months");
        }, t.monthsShort = function() {
          return u(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n2) {
          return u(i(), "weekdays", null, null, n2);
        }, t.weekdaysShort = function(n2) {
          return u(i(), "weekdaysShort", "weekdays", 3, n2);
        }, t.weekdaysMin = function(n2) {
          return u(i(), "weekdaysMin", "weekdays", 2, n2);
        };
      };
    }));
  })(localeData$2);
  return localeData$2.exports;
}
var localeDataExports = requireLocaleData();
const localeData = /* @__PURE__ */ getDefaultExportFromCjs(localeDataExports);
const datePickTypes = [
  "year",
  "years",
  "month",
  "months",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange",
  "yearrange"
];
var customParseFormat$2 = { exports: {} };
var customParseFormat$1 = customParseFormat$2.exports;
var hasRequiredCustomParseFormat;
function requireCustomParseFormat() {
  if (hasRequiredCustomParseFormat) return customParseFormat$2.exports;
  hasRequiredCustomParseFormat = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(customParseFormat$1, (function() {
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = (function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        })(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map((function(e3) {
          return e3.slice(0, 3);
        }))).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t3, n4) {
            return t3 || n4.slice(1);
          }));
        }))).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return (function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          })(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = (function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            })(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    }));
  })(customParseFormat$2);
  return customParseFormat$2.exports;
}
var customParseFormatExports = requireCustomParseFormat();
const customParseFormat = /* @__PURE__ */ getDefaultExportFromCjs(customParseFormatExports);
const timeUnits = ["hours", "minutes", "seconds"];
const PICKER_BASE_INJECTION_KEY = "EP_PICKER_BASE";
const PICKER_POPPER_OPTIONS_INJECTION_KEY = "ElPopperOptions";
const ROOT_COMMON_PICKER_INJECTION_KEY = Symbol("commonPickerContextKey");
const DEFAULT_FORMATS_TIME = "HH:mm:ss";
const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: "gggg[w]ww",
  year: "YYYY",
  years: "YYYY",
  month: "YYYY-MM",
  months: "YYYY-MM",
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: "YYYY-MM",
  yearrange: "YYYY",
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
};
const useCommonPicker = (props, emit) => {
  const { lang } = useLocale();
  const pickerVisible = ref(false);
  const pickerActualVisible = ref(false);
  const userInput = ref(null);
  const valueIsEmpty = computed(() => {
    const { modelValue } = props;
    return !modelValue || isArray(modelValue) && !modelValue.filter(Boolean).length;
  });
  const emitInput = (input) => {
    if (!valueEquals(props.modelValue, input)) {
      let formatted;
      if (isArray(input)) {
        formatted = input.map((item) => formatter(item, props.valueFormat, lang.value));
      } else if (input) {
        formatted = formatter(input, props.valueFormat, lang.value);
      }
      const emitVal = input ? formatted : input;
      emit(UPDATE_MODEL_EVENT, emitVal, lang.value);
    }
  };
  const parsedValue = computed(() => {
    var _a;
    let dayOrDays;
    if (valueIsEmpty.value) {
      if (pickerOptions.value.getDefaultValue) {
        dayOrDays = pickerOptions.value.getDefaultValue();
      }
    } else {
      if (isArray(props.modelValue)) {
        dayOrDays = props.modelValue.map((d) => parseDate(d, props.valueFormat, lang.value));
      } else {
        dayOrDays = parseDate((_a = props.modelValue) != null ? _a : "", props.valueFormat, lang.value);
      }
    }
    if (pickerOptions.value.getRangeAvailableTime) {
      const availableResult = pickerOptions.value.getRangeAvailableTime(dayOrDays);
      if (!isEqual(availableResult, dayOrDays)) {
        dayOrDays = availableResult;
        if (!valueIsEmpty.value) {
          emitInput(dayOrDaysToDate(dayOrDays));
        }
      }
    }
    if (isArray(dayOrDays) && dayOrDays.some((day) => !day)) {
      dayOrDays = [];
    }
    return dayOrDays;
  });
  const pickerOptions = ref({});
  const onSetPickerOption = (e) => {
    pickerOptions.value[e[0]] = e[1];
    pickerOptions.value.panelReady = true;
  };
  const onCalendarChange = (e) => {
    emit("calendar-change", e);
  };
  const onPanelChange = (value, mode, view) => {
    emit("panel-change", value, mode, view);
  };
  const onPick = (date = "", visible = false) => {
    pickerVisible.value = visible;
    let result;
    if (isArray(date)) {
      result = date.map((_) => _.toDate());
    } else {
      result = date ? date.toDate() : date;
    }
    userInput.value = null;
    emitInput(result);
  };
  return {
    parsedValue,
    pickerActualVisible,
    pickerOptions,
    pickerVisible,
    userInput,
    valueIsEmpty,
    emitInput,
    onCalendarChange,
    onPanelChange,
    onPick,
    onSetPickerOption
  };
};
const disabledTimeListsProps = buildProps({
  disabledHours: {
    type: definePropType(Function)
  },
  disabledMinutes: {
    type: definePropType(Function)
  },
  disabledSeconds: {
    type: definePropType(Function)
  }
});
const timePanelSharedProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
});
const timePickerDefaultProps = buildProps({
  automaticDropdown: {
    type: Boolean,
    default: true
  },
  id: {
    type: definePropType([Array, String])
  },
  name: {
    type: definePropType([Array, String])
  },
  popperClass: useTooltipContentProps.popperClass,
  popperStyle: useTooltipContentProps.popperStyle,
  format: String,
  valueFormat: String,
  dateFormat: String,
  timeFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: definePropType([String, Object]),
    default: circle_close_default
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  size: useSizeProp,
  readonly: Boolean,
  disabled: Boolean,
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  modelValue: {
    type: definePropType([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: definePropType([Date, Array])
  },
  defaultTime: {
    type: definePropType([Date, Array])
  },
  isRange: Boolean,
  ...disabledTimeListsProps,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: Boolean,
  tabindex: {
    type: definePropType([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  unlinkPanels: Boolean,
  placement: {
    type: definePropType(String),
    values: Ee,
    default: "bottom"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom", "top", "right", "left"]
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"]),
  showNow: {
    type: Boolean,
    default: true
  },
  showConfirm: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  showWeekNumber: Boolean
});
const timePickerRangeTriggerProps = buildProps({
  id: {
    type: definePropType(Array)
  },
  name: {
    type: definePropType(Array)
  },
  modelValue: {
    type: definePropType([Array, String])
  },
  startPlaceholder: String,
  endPlaceholder: String,
  disabled: Boolean
});
const __default__$3 = defineComponent({
  name: "PickerRangeTrigger",
  inheritAttrs: false
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: timePickerRangeTriggerProps,
  emits: [
    "mouseenter",
    "mouseleave",
    "click",
    "touchstart",
    "focus",
    "blur",
    "startInput",
    "endInput",
    "startChange",
    "endChange"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = useFormItem();
    const { inputId } = useFormItemInputId(reactive({ id: computed(() => {
      var _a;
      return (_a = props.id) == null ? void 0 : _a[0];
    }) }), {
      formItemContext: formItem
    });
    const attrs = useAttrs();
    const nsDate = useNamespace("date");
    const nsRange = useNamespace("range");
    const inputRef = ref();
    const endInputRef = ref();
    const { wrapperRef, isFocused } = useFocusController(inputRef, {
      disabled: computed(() => props.disabled)
    });
    const handleClick = (evt) => {
      emit("click", evt);
    };
    const handleMouseEnter = (evt) => {
      emit("mouseenter", evt);
    };
    const handleMouseLeave = (evt) => {
      emit("mouseleave", evt);
    };
    const handleTouchStart = (evt) => {
      emit("touchstart", evt);
    };
    const handleStartInput = (evt) => {
      emit("startInput", evt);
    };
    const handleEndInput = (evt) => {
      emit("endInput", evt);
    };
    const handleStartChange = (evt) => {
      emit("startChange", evt);
    };
    const handleEndChange = (evt) => {
      emit("endChange", evt);
    };
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a, _b;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
      (_b = endInputRef.value) == null ? void 0 : _b.blur();
    };
    expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "wrapperRef",
        ref: wrapperRef,
        class: normalizeClass([unref(nsDate).is("active", unref(isFocused)), _ctx.$attrs.class]),
        style: normalizeStyle(_ctx.$attrs.style),
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onTouchstartPassive: handleTouchStart
      }, [
        renderSlot(_ctx.$slots, "prefix"),
        createBaseVNode("input", mergeProps(unref(attrs), {
          id: unref(inputId),
          ref_key: "inputRef",
          ref: inputRef,
          name: _ctx.name && _ctx.name[0],
          placeholder: _ctx.startPlaceholder,
          value: _ctx.modelValue && _ctx.modelValue[0],
          class: unref(nsRange).b("input"),
          disabled: _ctx.disabled,
          onInput: handleStartInput,
          onChange: handleStartChange
        }), null, 16, ["id", "name", "placeholder", "value", "disabled"]),
        renderSlot(_ctx.$slots, "range-separator"),
        createBaseVNode("input", mergeProps(unref(attrs), {
          id: _ctx.id && _ctx.id[1],
          ref_key: "endInputRef",
          ref: endInputRef,
          name: _ctx.name && _ctx.name[1],
          placeholder: _ctx.endPlaceholder,
          value: _ctx.modelValue && _ctx.modelValue[1],
          class: unref(nsRange).b("input"),
          disabled: _ctx.disabled,
          onInput: handleEndInput,
          onChange: handleEndChange
        }), null, 16, ["id", "name", "placeholder", "value", "disabled"]),
        renderSlot(_ctx.$slots, "suffix")
      ], 38);
    };
  }
});
var PickerRangeTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "picker-range-trigger.vue"]]);
const __default__$2 = defineComponent({
  name: "Picker"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: timePickerDefaultProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "focus",
    "blur",
    "clear",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const attrs = useAttrs$1();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const { formItem } = useFormItem();
    const elPopperOptions = inject(PICKER_POPPER_OPTIONS_INJECTION_KEY, {});
    const emptyValues = useEmptyValues(props, null);
    const refPopper = ref();
    const inputRef = ref();
    const valueOnOpen = ref(null);
    let hasJustTabExitedInput = false;
    const pickerDisabled = useFormDisabled();
    const commonPicker = useCommonPicker(props, emit);
    const {
      parsedValue,
      pickerActualVisible,
      userInput,
      pickerVisible,
      pickerOptions,
      valueIsEmpty,
      emitInput,
      onPick,
      onSetPickerOption,
      onCalendarChange,
      onPanelChange
    } = commonPicker;
    const { isFocused, handleFocus, handleBlur } = useFocusController(inputRef, {
      disabled: pickerDisabled,
      beforeFocus() {
        return props.readonly;
      },
      afterFocus() {
        if (!props.automaticDropdown)
          return;
        pickerVisible.value = true;
      },
      beforeBlur(event) {
        var _a;
        return !hasJustTabExitedInput && ((_a = refPopper.value) == null ? void 0 : _a.isFocusInsideContent(event));
      },
      afterBlur() {
        handleChange();
        pickerVisible.value = false;
        hasJustTabExitedInput = false;
        props.validateEvent && (formItem == null ? void 0 : formItem.validate("blur").catch((err) => debugWarn()));
      }
    });
    const hovering = ref(false);
    const rangeInputKls = computed(() => [
      nsDate.b("editor"),
      nsDate.bm("editor", props.type),
      nsInput.e("wrapper"),
      nsDate.is("disabled", pickerDisabled.value),
      nsDate.is("active", pickerVisible.value),
      nsRange.b("editor"),
      pickerSize ? nsRange.bm("editor", pickerSize.value) : "",
      attrs.class
    ]);
    const clearIconKls = computed(() => [
      nsInput.e("icon"),
      nsRange.e("close-icon"),
      !showClearBtn.value ? nsRange.em("close-icon", "hidden") : ""
    ]);
    watch(pickerVisible, (val) => {
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
      } else {
        nextTick(() => {
          if (val) {
            valueOnOpen.value = props.modelValue;
          }
        });
      }
    });
    const emitChange = (val, isClear) => {
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        emit(CHANGE_EVENT, val);
        isClear && (valueOnOpen.value = val);
        props.validateEvent && (formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn()));
      }
    };
    const emitKeydown = (e) => {
      emit("keydown", e);
    };
    const refInput = computed(() => {
      if (inputRef.value) {
        return Array.from(inputRef.value.$el.querySelectorAll("input"));
      }
      return [];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      emit("visible-change", true);
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      pickerVisible.value = false;
      emit("visible-change", false);
    };
    const handleOpen = () => {
      pickerVisible.value = true;
    };
    const handleClose = () => {
      pickerVisible.value = false;
    };
    const displayValue = computed(() => {
      const formattedValue = formatToString(parsedValue.value);
      if (isArray(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return "";
      if (!pickerVisible.value && valueIsEmpty.value)
        return "";
      if (formattedValue) {
        return isDatesPicker.value || isMonthsPicker.value || isYearsPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = computed(() => props.type.includes("time"));
    const isTimePicker = computed(() => props.type.startsWith("time"));
    const isDatesPicker = computed(() => props.type === "dates");
    const isMonthsPicker = computed(() => props.type === "months");
    const isYearsPicker = computed(() => props.type === "years");
    const triggerIcon = computed(() => props.prefixIcon || (isTimeLikePicker.value ? clock_default : calendar_default));
    const showClearBtn = computed(() => props.clearable && !pickerDisabled.value && !props.readonly && !valueIsEmpty.value && (hovering.value || isFocused.value));
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClearBtn.value) {
        event.stopPropagation();
        if (pickerOptions.value.handleClear) {
          pickerOptions.value.handleClear();
        } else {
          emitInput(emptyValues.valueOnClear.value);
        }
        emitChange(emptyValues.valueOnClear.value, true);
        onHide();
      }
      emit("clear");
    };
    const onMouseDownInput = async (event) => {
      var _a;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a = event.target) == null ? void 0 : _a.tagName) !== "INPUT" || isFocused.value || !props.automaticDropdown) {
        pickerVisible.value = true;
      }
    };
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        hovering.value = true;
      }
    };
    const onMouseLeave = () => {
      hovering.value = false;
    };
    const onTouchStartInput = (event) => {
      var _a;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a = event.touches[0].target) == null ? void 0 : _a.tagName) !== "INPUT" || isFocused.value || !props.automaticDropdown) {
        pickerVisible.value = true;
      }
    };
    const isRangeInput = computed(() => {
      return props.type.includes("range");
    });
    const pickerSize = useFormSize();
    const popperEl = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(refPopper)) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const stophandle = onClickOutside(inputRef, (e) => {
      const unrefedPopperEl = unref(popperEl);
      const inputEl = unrefElement(inputRef);
      if (unrefedPopperEl && (e.target === unrefedPopperEl || e.composedPath().includes(unrefedPopperEl)) || e.target === inputEl || inputEl && e.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    onBeforeUnmount(() => {
      stophandle == null ? void 0 : stophandle();
    });
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue(value)) {
            emitInput(dayOrDaysToDate(value));
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(emptyValues.valueOnClear.value);
        emitChange(emptyValues.valueOnClear.value, true);
        userInput.value = null;
      }
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      const res = isArray(value) ? value.map((_) => _.format(props.format)) : value.format(props.format);
      return res;
    };
    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydownInput = async (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      const code = getEventCode(event);
      emitKeydown(event);
      if (code === EVENT_CODE.esc) {
        if (pickerVisible.value === true) {
          pickerVisible.value = false;
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (code === EVENT_CODE.down) {
        if (pickerOptions.value.handleFocusPicker) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (pickerVisible.value === false) {
          pickerVisible.value = true;
          await nextTick();
        }
        if (pickerOptions.value.handleFocusPicker) {
          pickerOptions.value.handleFocusPicker();
          return;
        }
      }
      if (code === EVENT_CODE.tab) {
        hasJustTabExitedInput = true;
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (!pickerVisible.value) {
          pickerVisible.value = true;
        } else if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydownInput) {
        pickerOptions.value.handleKeydownInput(event);
      }
    };
    const onUserInput = (e) => {
      userInput.value = e;
      if (!pickerVisible.value) {
        pickerVisible.value = true;
      }
    };
    const handleStartInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [target.value, userInput.value[1]];
      } else {
        userInput.value = [target.value, null];
      }
    };
    const handleEndInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [userInput.value[0], target.value];
      } else {
        userInput.value = [null, target.value];
      }
    };
    const handleStartChange = () => {
      var _a;
      const values = userInput.value;
      const value = parseUserInputToDayjs(values && values[0]);
      const parsedVal = unref(parsedValue);
      if (value && value.isValid()) {
        userInput.value = [
          formatToString(value),
          ((_a = displayValue.value) == null ? void 0 : _a[1]) || null
        ];
        const newValue = [value, parsedVal && (parsedVal[1] || null)];
        if (isValidValue(newValue)) {
          emitInput(dayOrDaysToDate(newValue));
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      var _a;
      const values = unref(userInput);
      const value = parseUserInputToDayjs(values && values[1]);
      const parsedVal = unref(parsedValue);
      if (value && value.isValid()) {
        userInput.value = [
          ((_a = unref(displayValue)) == null ? void 0 : _a[0]) || null,
          formatToString(value)
        ];
        const newValue = [parsedVal && parsedVal[0], value];
        if (isValidValue(newValue)) {
          emitInput(dayOrDaysToDate(newValue));
          userInput.value = null;
        }
      }
    };
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
    };
    provide(PICKER_BASE_INJECTION_KEY, {
      props,
      emptyValues
    });
    provide(ROOT_COMMON_PICKER_INJECTION_KEY, commonPicker);
    expose({
      focus,
      blur,
      handleOpen,
      handleClose,
      onPick
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "refPopper",
        ref: refPopper,
        visible: unref(pickerVisible),
        effect: "light",
        pure: "",
        trigger: "click"
      }, _ctx.$attrs, {
        role: "dialog",
        teleported: "",
        transition: `${unref(nsDate).namespace.value}-zoom-in-top`,
        "popper-class": [`${unref(nsDate).namespace.value}-picker__popper`, _ctx.popperClass],
        "popper-style": _ctx.popperStyle,
        "popper-options": unref(elPopperOptions),
        "fallback-placements": _ctx.fallbackPlacements,
        "gpu-acceleration": false,
        placement: _ctx.placement,
        "stop-popper-mouse-event": false,
        "hide-after": 0,
        persistent: "",
        onBeforeShow,
        onShow,
        onHide
      }), {
        default: withCtx(() => [
          !unref(isRangeInput) ? (openBlock(), createBlock(unref(ElInput), {
            key: 0,
            id: _ctx.id,
            ref_key: "inputRef",
            ref: inputRef,
            "container-role": "combobox",
            "model-value": unref(displayValue),
            name: _ctx.name,
            size: unref(pickerSize),
            disabled: unref(pickerDisabled),
            placeholder: _ctx.placeholder,
            class: normalizeClass([
              unref(nsDate).b("editor"),
              unref(nsDate).bm("editor", _ctx.type),
              unref(nsDate).is("focus", unref(pickerVisible)),
              _ctx.$attrs.class
            ]),
            style: normalizeStyle(_ctx.$attrs.style),
            readonly: !_ctx.editable || _ctx.readonly || unref(isDatesPicker) || unref(isMonthsPicker) || unref(isYearsPicker) || _ctx.type === "week",
            "aria-label": _ctx.ariaLabel,
            tabindex: _ctx.tabindex,
            "validate-event": false,
            onInput: onUserInput,
            onFocus: unref(handleFocus),
            onBlur: unref(handleBlur),
            onKeydown: handleKeydownInput,
            onChange: handleChange,
            onMousedown: onMouseDownInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstartPassive: onTouchStartInput,
            onClick: withModifiers(() => {
            }, ["stop"])
          }, {
            prefix: withCtx(() => [
              unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(nsInput).e("icon")),
                onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
                onTouchstartPassive: onTouchStartInput
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
            ]),
            suffix: withCtx(() => [
              unref(showClearBtn) && _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(`${unref(nsInput).e("icon")} clear-icon`),
                onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                onClick: onClearIconClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "aria-label", "tabindex", "onFocus", "onBlur", "onClick"])) : (openBlock(), createBlock(PickerRangeTrigger, {
            key: 1,
            id: _ctx.id,
            ref_key: "inputRef",
            ref: inputRef,
            "model-value": unref(displayValue),
            name: _ctx.name,
            disabled: unref(pickerDisabled),
            readonly: !_ctx.editable || _ctx.readonly,
            "start-placeholder": _ctx.startPlaceholder,
            "end-placeholder": _ctx.endPlaceholder,
            class: normalizeClass(unref(rangeInputKls)),
            style: normalizeStyle(_ctx.$attrs.style),
            "aria-label": _ctx.ariaLabel,
            tabindex: _ctx.tabindex,
            autocomplete: "off",
            role: "combobox",
            onClick: onMouseDownInput,
            onFocus: unref(handleFocus),
            onBlur: unref(handleBlur),
            onStartInput: handleStartInput,
            onStartChange: handleStartChange,
            onEndInput: handleEndInput,
            onEndChange: handleEndChange,
            onMousedown: onMouseDownInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstartPassive: onTouchStartInput,
            onKeydown: handleKeydownInput
          }, {
            prefix: withCtx(() => [
              unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass([unref(nsInput).e("icon"), unref(nsRange).e("icon")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ]),
            "range-separator": withCtx(() => [
              renderSlot(_ctx.$slots, "range-separator", {}, () => [
                createBaseVNode("span", {
                  class: normalizeClass(unref(nsRange).b("separator"))
                }, toDisplayString(_ctx.rangeSeparator), 3)
              ])
            ]),
            suffix: withCtx(() => [
              _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(clearIconKls)),
                onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                onClick: onClearIconClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["id", "model-value", "name", "disabled", "readonly", "start-placeholder", "end-placeholder", "class", "style", "aria-label", "tabindex", "onFocus", "onBlur"]))
        ]),
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            visible: unref(pickerVisible),
            actualVisible: unref(pickerActualVisible),
            parsedValue: unref(parsedValue),
            format: _ctx.format,
            dateFormat: _ctx.dateFormat,
            timeFormat: _ctx.timeFormat,
            unlinkPanels: _ctx.unlinkPanels,
            type: _ctx.type,
            defaultValue: _ctx.defaultValue,
            showNow: _ctx.showNow,
            showConfirm: _ctx.showConfirm,
            showFooter: _ctx.showFooter,
            showWeekNumber: _ctx.showWeekNumber,
            onPick: unref(onPick),
            onSelectRange: setSelectionRange,
            onSetPickerOption: unref(onSetPickerOption),
            onCalendarChange: unref(onCalendarChange),
            onPanelChange: unref(onPanelChange),
            onMousedown: withModifiers(() => {
            }, ["stop"])
          })
        ]),
        _: 3
      }, 16, ["visible", "transition", "popper-class", "popper-style", "popper-options", "fallback-placements", "placement"]);
    };
  }
});
var CommonPicker = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "picker.vue"]]);
const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType(Object)
  }
});
const useTimePanel = ({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds
}) => {
  const getAvailableTime = (date, role, first, compareDate) => {
    const availableTimeGetters = {
      hour: getAvailableHours,
      minute: getAvailableMinutes,
      second: getAvailableSeconds
    };
    let result = date;
    ["hour", "minute", "second"].forEach((type) => {
      if (availableTimeGetters[type]) {
        let availableTimeSlots;
        const method = availableTimeGetters[type];
        switch (type) {
          case "minute": {
            availableTimeSlots = method(result.hour(), role, compareDate);
            break;
          }
          case "second": {
            availableTimeSlots = method(result.hour(), result.minute(), role, compareDate);
            break;
          }
          default: {
            availableTimeSlots = method(role, compareDate);
            break;
          }
        }
        if ((availableTimeSlots == null ? void 0 : availableTimeSlots.length) && !availableTimeSlots.includes(result[type]())) {
          const pos = first ? 0 : availableTimeSlots.length - 1;
          result = result[type](availableTimeSlots[pos]);
        }
      }
    });
    return result;
  };
  const timePickerOptions = {};
  const onSetOption = ([key, val]) => {
    timePickerOptions[key] = val;
  };
  return {
    timePickerOptions,
    getAvailableTime,
    onSetOption
  };
};
const makeAvailableArr = (disabledList) => {
  const trueOrNumber = (isDisabled, index) => isDisabled || index;
  const getNumber = (predicate) => predicate !== true;
  return disabledList.map(trueOrNumber).filter(getNumber);
};
const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare) => {
    return makeList(24, disabledHours && (() => disabledHours == null ? void 0 : disabledHours(role, compare)));
  };
  const getMinutesList = (hour, role, compare) => {
    return makeList(60, disabledMinutes && (() => disabledMinutes == null ? void 0 : disabledMinutes(hour, role, compare)));
  };
  const getSecondsList = (hour, minute, role, compare) => {
    return makeList(60, disabledSeconds && (() => disabledSeconds == null ? void 0 : disabledSeconds(hour, minute, role, compare)));
  };
  return {
    getHoursList,
    getMinutesList,
    getSecondsList
  };
};
const buildAvailableTimeSlotGetter = (disabledHours, disabledMinutes, disabledSeconds) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
  const getAvailableHours = (role, compare) => {
    return makeAvailableArr(getHoursList(role, compare));
  };
  const getAvailableMinutes = (hour, role, compare) => {
    return makeAvailableArr(getMinutesList(hour, role, compare));
  };
  const getAvailableSeconds = (hour, minute, role, compare) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare));
  };
  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds
  };
};
const useOldValue = (props) => {
  const oldValue = ref(props.parsedValue);
  watch(() => props.visible, (val) => {
    if (!val) {
      oldValue.value = props.parsedValue;
    }
  });
  return oldValue;
};
const basicTimeSpinnerProps = buildProps({
  role: {
    type: String,
    required: true
  },
  spinnerDate: {
    type: definePropType(Object),
    required: true
  },
  showSeconds: {
    type: Boolean,
    default: true
  },
  arrowControl: Boolean,
  amPmMode: {
    type: definePropType(String),
    default: ""
  },
  ...disabledTimeListsProps
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "basic-time-spinner",
  props: basicTimeSpinnerProps,
  emits: [CHANGE_EVENT, "select-range", "set-option"],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
    const { isRange, format } = pickerBase.props;
    const ns = useNamespace("time");
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    let isScrolling = false;
    const currentScrollbar = ref();
    const listHoursRef = ref();
    const listMinutesRef = ref();
    const listSecondsRef = ref();
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = computed(() => {
      return props.showSeconds ? timeUnits : timeUnits.slice(0, 2);
    });
    const timePartials = computed(() => {
      const { spinnerDate } = props;
      const hours = spinnerDate.hour();
      const minutes = spinnerDate.minute();
      const seconds = spinnerDate.second();
      return { hours, minutes, seconds };
    });
    const timeList = computed(() => {
      const { hours, minutes } = unref(timePartials);
      const { role, spinnerDate } = props;
      const compare = !isRange ? spinnerDate : void 0;
      return {
        hours: getHoursList(role, compare),
        minutes: getMinutesList(hours, role, compare),
        seconds: getSecondsList(hours, minutes, role, compare)
      };
    });
    const arrowControlTimeList = computed(() => {
      const { hours, minutes, seconds } = unref(timePartials);
      return {
        hours: buildTimeList(hours, 23),
        minutes: buildTimeList(minutes, 59),
        seconds: buildTimeList(seconds, 59)
      };
    });
    const debouncedResetScroll = debounce((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      let range = [0, 0];
      const actualFormat = format || DEFAULT_FORMATS_TIME;
      const hourIndex = actualFormat.indexOf("HH");
      const minuteIndex = actualFormat.indexOf("mm");
      const secondIndex = actualFormat.indexOf("ss");
      switch (type) {
        case "hours":
          if (hourIndex !== -1) {
            range = [hourIndex, hourIndex + 2];
          }
          break;
        case "minutes":
          if (minuteIndex !== -1) {
            range = [minuteIndex, minuteIndex + 2];
          }
          break;
        case "seconds":
          if (secondIndex !== -1) {
            range = [secondIndex, secondIndex + 2];
          }
          break;
      }
      const [left, right] = range;
      emit("select-range", left, right);
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, unref(timePartials)[type]);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const scrollbar = unref(listRefsMap[type]);
      if (scrollbar && scrollbar.$el) {
        getScrollbarElement(scrollbar.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const scrollbar = unref(listRefsMap[type]);
      const listItem = scrollbar == null ? void 0 : scrollbar.$el.querySelector("li");
      if (listItem) {
        return Number.parseFloat(getStyle(listItem, "height")) || 0;
      }
      return 0;
    };
    const onIncrement = () => {
      scrollDown(1);
    };
    const onDecrement = () => {
      scrollDown(-1);
    };
    const scrollDown = (step2) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      const now = unref(timePartials)[label];
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      const next = findNextUnDisabled(label, now, step2, total);
      modifyDateField(label, next);
      adjustSpinner(label, next);
      nextTick(() => emitSelectRange(label));
    };
    const findNextUnDisabled = (type, now, step2, total) => {
      let next = (now + step2 + total) % total;
      const list = unref(timeList)[type];
      while (list[next] && next !== now) {
        next = (next + step2 + total) % total;
      }
      return next;
    };
    const modifyDateField = (type, value) => {
      const list = unref(timeList)[type];
      const isDisabled = list[value];
      if (isDisabled)
        return;
      const { hours, minutes, seconds } = unref(timePartials);
      let changeTo;
      switch (type) {
        case "hours":
          changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds);
          break;
        case "minutes":
          changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds);
          break;
        case "seconds":
          changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value);
          break;
      }
      emit(CHANGE_EVENT, changeTo);
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      const scrollbar = unref(listRefsMap[type]);
      if (!scrollbar)
        return;
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((getScrollbarElement(scrollbar.$el).scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return unref(listRefsMap[type]).$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        const scrollbar = unref(listRefsMap[type]);
        if (scrollbar && scrollbar.$el) {
          getScrollbarElement(scrollbar.$el).onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar, type) => {
      listRefsMap[type].value = scrollbar != null ? scrollbar : void 0;
    };
    emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b("spinner"), { "has-seconds": _ctx.showSeconds }])
      }, [
        !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createBlock(unref(ElScrollbar), {
            key: item,
            ref_for: true,
            ref: (scrollbar) => setRef(scrollbar, item),
            class: normalizeClass(unref(ns).be("spinner", "wrapper")),
            "wrap-style": "max-height: inherit;",
            "view-class": unref(ns).be("spinner", "list"),
            noresize: "",
            tag: "ul",
            onMouseenter: ($event) => emitSelectRange(item),
            onMousemove: ($event) => adjustCurrentSpinner(item)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(timeList)[item], (disabled, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([
                    unref(ns).be("spinner", "item"),
                    unref(ns).is("active", key === unref(timePartials)[item]),
                    unref(ns).is("disabled", disabled)
                  ]),
                  onClick: ($event) => handleClick(item, { value: key, disabled })
                }, [
                  item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(getAmPmFlag(key)), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)
                  ], 64))
                ], 10, ["onClick"]);
              }), 128))
            ]),
            _: 2
          }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
        }), 128)) : createCommentVNode("v-if", true),
        _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item,
            class: normalizeClass([unref(ns).be("spinner", "wrapper"), unref(ns).is("arrow")]),
            onMouseenter: ($event) => emitSelectRange(item)
          }, [
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-up", unref(ns).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_up_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(vRepeatClick), onDecrement]
            ]),
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-down", unref(ns).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(vRepeatClick), onIncrement]
            ]),
            createBaseVNode("ul", {
              class: normalizeClass(unref(ns).be("spinner", "list"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(arrowControlTimeList)[item], (time, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([
                    unref(ns).be("spinner", "item"),
                    unref(ns).is("active", time === unref(timePartials)[item]),
                    unref(ns).is("disabled", unref(timeList)[item][time])
                  ])
                }, [
                  unref(isNumber)(time) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(getAmPmFlag(time)), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)
                    ], 64))
                  ], 64)) : createCommentVNode("v-if", true)
                ], 2);
              }), 128))
            ], 2)
          ], 42, ["onMouseenter"]);
        }), 128)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var TimeSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "basic-time-spinner.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "panel-time-pick",
  props: panelTimePickerProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds);
    const ns = useNamespace("time");
    const { t, lang } = useLocale();
    const selectionRange = ref([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = computed(() => {
      return isUndefined(props.actualVisible) ? `${ns.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue = (_date) => {
      const parsedDate = dayjs(_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      const old = oldValue.value;
      emit("pick", old, false);
      nextTick(() => {
        oldValue.value = old;
      });
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step2) => {
      const actualFormat = props.format;
      const hourIndex = actualFormat.indexOf("HH");
      const minuteIndex = actualFormat.indexOf("mm");
      const secondIndex = actualFormat.indexOf("ss");
      const list = [];
      const mapping = [];
      if (hourIndex !== -1) {
        list.push(hourIndex);
        mapping.push("hours");
      }
      if (minuteIndex !== -1) {
        list.push(minuteIndex);
        mapping.push("minutes");
      }
      if (secondIndex !== -1 && showSeconds.value) {
        list.push(secondIndex);
        mapping.push("seconds");
      }
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step2 + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = getEventCode(event);
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step2 = code === left ? -1 : 1;
        changeSelectionRange(step2);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step2 = code === up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step2);
        event.preventDefault();
        return;
      }
    };
    const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const getRangeAvailableTime = (date) => {
      return getAvailableTime(date, props.datetimeRole || "", true);
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs(value, props.format).locale(lang.value);
    };
    const getDefaultValue2 = () => {
      return dayjs(defaultValue).locale(lang.value);
    };
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue2]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: unref(transitionName) }, {
        default: withCtx(() => [
          _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).b("panel"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass([unref(ns).be("panel", "content"), { "has-seconds": unref(showSeconds) }])
            }, [
              createVNode(TimeSpinner, {
                ref: "spinner",
                role: _ctx.datetimeRole || "start",
                "arrow-control": unref(arrowControl),
                "show-seconds": unref(showSeconds),
                "am-pm-mode": unref(amPmMode),
                "spinner-date": _ctx.parsedValue,
                "disabled-hours": unref(disabledHours),
                "disabled-minutes": unref(disabledMinutes),
                "disabled-seconds": unref(disabledSeconds),
                onChange: handleChange,
                onSetOption: unref(onSetOption),
                onSelectRange: setSelectionRange
              }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(unref(ns).be("panel", "footer"))
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns).be("panel", "btn"), "cancel"]),
                onClick: handleCancel
              }, toDisplayString(unref(t)("el.datepicker.cancel")), 3),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns).be("panel", "btn"), "confirm"]),
                onClick: ($event) => handleConfirm()
              }, toDisplayString(unref(t)("el.datepicker.confirm")), 11, ["onClick"])
            ], 2)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var TimePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "panel-time-pick.vue"]]);
var advancedFormat$2 = { exports: {} };
var advancedFormat$1 = advancedFormat$2.exports;
var hasRequiredAdvancedFormat;
function requireAdvancedFormat() {
  if (hasRequiredAdvancedFormat) return advancedFormat$2.exports;
  hasRequiredAdvancedFormat = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(advancedFormat$1, (function() {
      return function(e, t) {
        var r = t.prototype, n = r.format;
        r.format = function(e2) {
          var t2 = this, r2 = this.$locale();
          if (!this.isValid()) return n.bind(this)(e2);
          var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e3) {
            switch (e3) {
              case "Q":
                return Math.ceil((t2.$M + 1) / 3);
              case "Do":
                return r2.ordinal(t2.$D);
              case "gggg":
                return t2.weekYear();
              case "GGGG":
                return t2.isoWeekYear();
              case "wo":
                return r2.ordinal(t2.week(), "W");
              case "w":
              case "ww":
                return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
              case "X":
                return Math.floor(t2.$d.getTime() / 1e3);
              case "x":
                return t2.$d.getTime();
              case "z":
                return "[" + t2.offsetName() + "]";
              case "zzz":
                return "[" + t2.offsetName("long") + "]";
              default:
                return e3;
            }
          }));
          return n.bind(this)(a);
        };
      };
    }));
  })(advancedFormat$2);
  return advancedFormat$2.exports;
}
var advancedFormatExports = requireAdvancedFormat();
const advancedFormat = /* @__PURE__ */ getDefaultExportFromCjs(advancedFormatExports);
var weekOfYear$2 = { exports: {} };
var weekOfYear$1 = weekOfYear$2.exports;
var hasRequiredWeekOfYear;
function requireWeekOfYear() {
  if (hasRequiredWeekOfYear) return weekOfYear$2.exports;
  hasRequiredWeekOfYear = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(weekOfYear$1, (function() {
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    }));
  })(weekOfYear$2);
  return weekOfYear$2.exports;
}
var weekOfYearExports = requireWeekOfYear();
const weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs(weekOfYearExports);
var weekYear$2 = { exports: {} };
var weekYear$1 = weekYear$2.exports;
var hasRequiredWeekYear;
function requireWeekYear() {
  if (hasRequiredWeekYear) return weekYear$2.exports;
  hasRequiredWeekYear = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(weekYear$1, (function() {
      return function(e, t) {
        t.prototype.weekYear = function() {
          var e2 = this.month(), t2 = this.week(), n = this.year();
          return 1 === t2 && 11 === e2 ? n + 1 : 0 === e2 && t2 >= 52 ? n - 1 : n;
        };
      };
    }));
  })(weekYear$2);
  return weekYear$2.exports;
}
var weekYearExports = requireWeekYear();
const weekYear = /* @__PURE__ */ getDefaultExportFromCjs(weekYearExports);
var dayOfYear$2 = { exports: {} };
var dayOfYear$1 = dayOfYear$2.exports;
var hasRequiredDayOfYear;
function requireDayOfYear() {
  if (hasRequiredDayOfYear) return dayOfYear$2.exports;
  hasRequiredDayOfYear = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(dayOfYear$1, (function() {
      return function(e, t, n) {
        t.prototype.dayOfYear = function(e2) {
          var t2 = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
          return null == e2 ? t2 : this.add(e2 - t2, "day");
        };
      };
    }));
  })(dayOfYear$2);
  return dayOfYear$2.exports;
}
var dayOfYearExports = requireDayOfYear();
const dayOfYear = /* @__PURE__ */ getDefaultExportFromCjs(dayOfYearExports);
var isSameOrAfter$2 = { exports: {} };
var isSameOrAfter$1 = isSameOrAfter$2.exports;
var hasRequiredIsSameOrAfter;
function requireIsSameOrAfter() {
  if (hasRequiredIsSameOrAfter) return isSameOrAfter$2.exports;
  hasRequiredIsSameOrAfter = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(isSameOrAfter$1, (function() {
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    }));
  })(isSameOrAfter$2);
  return isSameOrAfter$2.exports;
}
var isSameOrAfterExports = requireIsSameOrAfter();
const isSameOrAfter = /* @__PURE__ */ getDefaultExportFromCjs(isSameOrAfterExports);
var isSameOrBefore$2 = { exports: {} };
var isSameOrBefore$1 = isSameOrBefore$2.exports;
var hasRequiredIsSameOrBefore;
function requireIsSameOrBefore() {
  if (hasRequiredIsSameOrBefore) return isSameOrBefore$2.exports;
  hasRequiredIsSameOrBefore = 1;
  (function(module, exports) {
    !(function(e, i) {
      module.exports = i();
    })(isSameOrBefore$1, (function() {
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    }));
  })(isSameOrBefore$2);
  return isSameOrBefore$2.exports;
}
var isSameOrBeforeExports = requireIsSameOrBefore();
const isSameOrBefore = /* @__PURE__ */ getDefaultExportFromCjs(isSameOrBeforeExports);
const datePickerPanelProps = buildProps({
  valueFormat: String,
  dateFormat: String,
  timeFormat: String,
  disabled: Boolean,
  modelValue: {
    type: definePropType([Date, Array, String, Number]),
    default: ""
  },
  defaultValue: {
    type: definePropType([Date, Array])
  },
  defaultTime: {
    type: definePropType([Date, Array])
  },
  isRange: Boolean,
  ...disabledTimeListsProps,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: Boolean,
  unlinkPanels: Boolean,
  showNow: {
    type: Boolean,
    default: true
  },
  showConfirm: Boolean,
  showFooter: Boolean,
  showWeekNumber: Boolean,
  type: {
    type: definePropType(String),
    default: "date"
  },
  clearable: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  }
});
const ROOT_PICKER_INJECTION_KEY = Symbol("rootPickerContextKey");
const ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY = "ElIsDefaultFormat";
const selectionModes = [
  "date",
  "dates",
  "year",
  "years",
  "month",
  "months",
  "week",
  "range"
];
const datePickerSharedProps = buildProps({
  cellClassName: {
    type: definePropType(Function)
  },
  disabledDate: {
    type: definePropType(Function)
  },
  date: {
    type: definePropType(Object),
    required: true
  },
  minDate: {
    type: definePropType(Object)
  },
  maxDate: {
    type: definePropType(Object)
  },
  parsedValue: {
    type: definePropType([Object, Array])
  },
  rangeState: {
    type: definePropType(Object),
    default: () => ({
      endDate: null,
      selecting: false
    })
  },
  disabled: Boolean
});
const panelSharedProps = buildProps({
  type: {
    type: definePropType(String),
    required: true,
    values: datePickTypes
  },
  dateFormat: String,
  timeFormat: String,
  showNow: {
    type: Boolean,
    default: true
  },
  showConfirm: Boolean,
  showFooter: {
    type: Boolean,
    default: true
  },
  showWeekNumber: Boolean,
  border: Boolean,
  disabled: Boolean
});
const panelRangeSharedProps = buildProps({
  unlinkPanels: Boolean,
  visible: {
    type: Boolean,
    default: true
  },
  showConfirm: Boolean,
  showFooter: {
    type: Boolean,
    default: true
  },
  border: Boolean,
  disabled: Boolean,
  parsedValue: {
    type: definePropType(Array)
  }
});
const selectionModeWithDefault = (mode) => {
  return {
    type: String,
    values: selectionModes,
    default: mode
  };
};
const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType([Object, Array])
  },
  visible: {
    type: Boolean,
    default: true
  },
  format: {
    type: String,
    default: ""
  }
});
const isValidRange = (range) => {
  if (!isArray(range))
    return false;
  const [left, right] = range;
  return dayjs.isDayjs(left) && dayjs.isDayjs(right) && dayjs(left).isValid() && dayjs(right).isValid() && left.isSameOrBefore(right);
};
const getDefaultValue = (defaultValue, { lang, step: step2 = 1, unit: unit2, unlinkPanels }) => {
  let start;
  if (isArray(defaultValue)) {
    let [left, right] = defaultValue.map((d) => dayjs(d).locale(lang));
    if (!unlinkPanels) {
      right = left.add(step2, unit2);
    }
    return [left, right];
  } else if (defaultValue) {
    start = dayjs(defaultValue);
  } else {
    start = dayjs();
  }
  start = start.locale(lang);
  return [start, start.add(step2, unit2)];
};
const buildPickerTable = (dimension, rows, {
  columnIndexOffset,
  startDate,
  nextEndDate,
  now,
  unit: unit2,
  relativeDateGetter,
  setCellMetadata,
  setRowMetadata
}) => {
  for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
    const row = rows[rowIndex];
    for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
      let cell = row[columnIndex + columnIndexOffset];
      if (!cell) {
        cell = {
          row: rowIndex,
          column: columnIndex,
          type: "normal",
          inRange: false,
          start: false,
          end: false
        };
      }
      const index = rowIndex * dimension.column + columnIndex;
      const nextStartDate = relativeDateGetter(index);
      cell.dayjs = nextStartDate;
      cell.date = nextStartDate.toDate();
      cell.timestamp = nextStartDate.valueOf();
      cell.type = "normal";
      cell.inRange = !!(startDate && nextStartDate.isSameOrAfter(startDate, unit2) && nextEndDate && nextStartDate.isSameOrBefore(nextEndDate, unit2)) || !!(startDate && nextStartDate.isSameOrBefore(startDate, unit2) && nextEndDate && nextStartDate.isSameOrAfter(nextEndDate, unit2));
      if (startDate == null ? void 0 : startDate.isSameOrAfter(nextEndDate)) {
        cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit2);
        cell.end = startDate && nextStartDate.isSame(startDate, unit2);
      } else {
        cell.start = !!startDate && nextStartDate.isSame(startDate, unit2);
        cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit2);
      }
      const isToday = nextStartDate.isSame(now, unit2);
      if (isToday) {
        cell.type = "today";
      }
      setCellMetadata == null ? void 0 : setCellMetadata(cell, { rowIndex, columnIndex });
      row[columnIndex + columnIndexOffset] = cell;
    }
    setRowMetadata == null ? void 0 : setRowMetadata(row);
  }
};
const datesInMonth = (date, year, month, lang) => {
  const firstDay = dayjs().locale(lang).startOf("month").month(month).year(year).hour(date.hour()).minute(date.minute()).second(date.second());
  const numOfDays = firstDay.daysInMonth();
  return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
};
const getValidDateOfMonth = (date, year, month, lang, disabledDate) => {
  const _value = dayjs().year(year).month(month).startOf("month").hour(date.hour()).minute(date.minute()).second(date.second());
  const _date = datesInMonth(date, year, month, lang).find((date2) => {
    return !(disabledDate == null ? void 0 : disabledDate(date2));
  });
  if (_date) {
    return dayjs(_date).locale(lang);
  }
  return _value.locale(lang);
};
const getValidDateOfYear = (value, lang, disabledDate) => {
  const year = value.year();
  if (!(disabledDate == null ? void 0 : disabledDate(value.toDate()))) {
    return value.locale(lang);
  }
  const month = value.month();
  if (!datesInMonth(value, year, month, lang).every(disabledDate)) {
    return getValidDateOfMonth(value, year, month, lang, disabledDate);
  }
  for (let i = 0; i < 12; i++) {
    if (!datesInMonth(value, year, i, lang).every(disabledDate)) {
      return getValidDateOfMonth(value, year, i, lang, disabledDate);
    }
  }
  return value;
};
const correctlyParseUserInput = (value, format, lang, defaultFormat) => {
  if (isArray(value)) {
    return value.map((v) => correctlyParseUserInput(v, format, lang, defaultFormat));
  }
  if (isString(value)) {
    const dayjsValue = (defaultFormat == null ? void 0 : defaultFormat.value) ? dayjs(value) : dayjs(value, format);
    if (!dayjsValue.isValid()) {
      return dayjsValue;
    }
  }
  return dayjs(value, format).locale(lang);
};
const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault("date")
});
const basicDateTableEmits = ["changerange", "pick", "select"];
const isNormalDay = (type = "") => {
  return ["normal", "today"].includes(type);
};
const useBasicDateTable = (props, emit) => {
  const { lang } = useLocale();
  const tbodyRef = ref();
  const currentCellRef = ref();
  const lastRow = ref();
  const lastColumn = ref();
  const tableRows = ref([[], [], [], [], [], []]);
  let focusWithClick = false;
  const firstDayOfWeek = props.date.$locale().weekStart || 7;
  const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_) => _.toLowerCase());
  const offsetDay = computed(() => {
    return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
  });
  const startDate = computed(() => {
    const startDayOfMonth = props.date.startOf("month");
    return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
  });
  const WEEKS = computed(() => {
    return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
  });
  const hasCurrent = computed(() => {
    return flatten(unref(rows)).some((row) => {
      return row.isCurrent;
    });
  });
  const days = computed(() => {
    const startOfMonth = props.date.startOf("month");
    const startOfMonthDay = startOfMonth.day() || 7;
    const dateCountOfMonth = startOfMonth.daysInMonth();
    const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
    return {
      startOfMonthDay,
      dateCountOfMonth,
      dateCountOfLastMonth
    };
  });
  const selectedDate = computed(() => {
    return props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
  });
  const setDateText = (cell, { count, rowIndex, columnIndex }) => {
    const { startOfMonthDay, dateCountOfMonth, dateCountOfLastMonth } = unref(days);
    const offset = unref(offsetDay);
    if (rowIndex >= 0 && rowIndex <= 1) {
      const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
      if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
        cell.text = count;
        return true;
      } else {
        cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - columnIndex % 7) + 1 + rowIndex * 7;
        cell.type = "prev-month";
      }
    } else {
      if (count <= dateCountOfMonth) {
        cell.text = count;
      } else {
        cell.text = count - dateCountOfMonth;
        cell.type = "next-month";
      }
      return true;
    }
    return false;
  };
  const setCellMetadata = (cell, { columnIndex, rowIndex }, count) => {
    const { disabledDate, cellClassName } = props;
    const _selectedDate = unref(selectedDate);
    const shouldIncrement = setDateText(cell, { count, rowIndex, columnIndex });
    const cellDate = cell.dayjs.toDate();
    cell.selected = _selectedDate.find((d) => d.isSame(cell.dayjs, "day"));
    cell.isSelected = !!cell.selected;
    cell.isCurrent = isCurrent(cell);
    cell.disabled = disabledDate == null ? void 0 : disabledDate(cellDate);
    cell.customClass = cellClassName == null ? void 0 : cellClassName(cellDate);
    return shouldIncrement;
  };
  const setRowMetadata = (row) => {
    if (props.selectionMode === "week") {
      const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6];
      const isActive = isWeekActive(row[start + 1]);
      row[start].inRange = isActive;
      row[start].start = isActive;
      row[end].inRange = isActive;
      row[end].end = isActive;
    }
  };
  const rows = computed(() => {
    const { minDate, maxDate, rangeState, showWeekNumber } = props;
    const offset = unref(offsetDay);
    const rows_ = unref(tableRows);
    const dateUnit = "day";
    let count = 1;
    buildPickerTable({ row: 6, column: 7 }, rows_, {
      startDate: minDate,
      columnIndexOffset: showWeekNumber ? 1 : 0,
      nextEndDate: rangeState.endDate || maxDate || rangeState.selecting && minDate || null,
      now: dayjs().locale(unref(lang)).startOf(dateUnit),
      unit: dateUnit,
      relativeDateGetter: (idx) => unref(startDate).add(idx - offset, dateUnit),
      setCellMetadata: (...args) => {
        if (setCellMetadata(...args, count)) {
          count += 1;
        }
      },
      setRowMetadata
    });
    if (showWeekNumber) {
      for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        if (rows_[rowIndex][1].dayjs) {
          rows_[rowIndex][0] = {
            type: "week",
            text: rows_[rowIndex][1].dayjs.week()
          };
        }
      }
    }
    return rows_;
  });
  watch(() => props.date, async () => {
    var _a;
    if ((_a = unref(tbodyRef)) == null ? void 0 : _a.contains(document.activeElement)) {
      await nextTick();
      await focus();
    }
  });
  const focus = async () => {
    var _a;
    return (_a = unref(currentCellRef)) == null ? void 0 : _a.focus();
  };
  const isCurrent = (cell) => {
    return props.selectionMode === "date" && isNormalDay(cell.type) && cellMatchesDate(cell, props.parsedValue);
  };
  const cellMatchesDate = (cell, date) => {
    if (!date)
      return false;
    return dayjs(date).locale(unref(lang)).isSame(props.date.date(Number(cell.text)), "day");
  };
  const getDateOfCell = (row, column) => {
    const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - unref(offsetDay);
    return unref(startDate).add(offsetFromStart, "day");
  };
  const handleMouseMove = (event) => {
    var _a;
    if (!props.rangeState.selecting)
      return;
    let target = event.target;
    if (target.tagName === "SPAN") {
      target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
    }
    if (target.tagName === "DIV") {
      target = target.parentNode;
    }
    if (target.tagName !== "TD")
      return;
    const row = target.parentNode.rowIndex - 1;
    const column = target.cellIndex;
    if (unref(rows)[row][column].disabled)
      return;
    if (row !== unref(lastRow) || column !== unref(lastColumn)) {
      lastRow.value = row;
      lastColumn.value = column;
      emit("changerange", {
        selecting: true,
        endDate: getDateOfCell(row, column)
      });
    }
  };
  const isSelectedCell = (cell) => {
    return !unref(hasCurrent) && (cell == null ? void 0 : cell.text) === 1 && isNormalDay(cell.type) || cell.isCurrent;
  };
  const handleFocus = (event) => {
    if (focusWithClick || unref(hasCurrent) || props.selectionMode !== "date")
      return;
    handlePickDate(event, true);
  };
  const handleMouseDown = (event) => {
    const target = event.target.closest("td");
    if (!target)
      return;
    focusWithClick = true;
  };
  const handleMouseUp = (event) => {
    const target = event.target.closest("td");
    if (!target)
      return;
    focusWithClick = false;
  };
  const handleRangePick = (newDate) => {
    if (!props.rangeState.selecting || !props.minDate) {
      emit("pick", { minDate: newDate, maxDate: null });
      emit("select", true);
    } else {
      if (newDate >= props.minDate) {
        emit("pick", { minDate: props.minDate, maxDate: newDate });
      } else {
        emit("pick", { minDate: newDate, maxDate: props.minDate });
      }
      emit("select", false);
    }
  };
  const handleWeekPick = (newDate) => {
    const weekNumber = newDate.week();
    const value = `${newDate.year()}w${weekNumber}`;
    emit("pick", {
      year: newDate.year(),
      week: weekNumber,
      value,
      date: newDate.startOf("week")
    });
  };
  const handleDatesPick = (newDate, selected) => {
    const newValue = selected ? castArray(props.parsedValue).filter((d) => (d == null ? void 0 : d.valueOf()) !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]);
    emit("pick", newValue);
  };
  const handlePickDate = (event, isKeyboardMovement = false) => {
    if (props.disabled)
      return;
    const target = event.target.closest("td");
    if (!target)
      return;
    const row = target.parentNode.rowIndex - 1;
    const column = target.cellIndex;
    const cell = unref(rows)[row][column];
    if (cell.disabled || cell.type === "week")
      return;
    const newDate = getDateOfCell(row, column);
    switch (props.selectionMode) {
      case "range": {
        handleRangePick(newDate);
        break;
      }
      case "date": {
        emit("pick", newDate, isKeyboardMovement);
        break;
      }
      case "week": {
        handleWeekPick(newDate);
        break;
      }
      case "dates": {
        handleDatesPick(newDate, !!cell.selected);
        break;
      }
    }
  };
  const isWeekActive = (cell) => {
    if (props.selectionMode !== "week")
      return false;
    let newDate = props.date.startOf("day");
    if (cell.type === "prev-month") {
      newDate = newDate.subtract(1, "month");
    }
    if (cell.type === "next-month") {
      newDate = newDate.add(1, "month");
    }
    newDate = newDate.date(Number.parseInt(cell.text, 10));
    if (props.parsedValue && !isArray(props.parsedValue)) {
      const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
      const weekDate = props.parsedValue.subtract(dayOffset, "day");
      return weekDate.isSame(newDate, "day");
    }
    return false;
  };
  return {
    WEEKS,
    rows,
    tbodyRef,
    currentCellRef,
    focus,
    isCurrent,
    isWeekActive,
    isSelectedCell,
    handlePickDate,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
    handleFocus
  };
};
const useBasicDateTableDOM = (props, {
  isCurrent,
  isWeekActive
}) => {
  const ns = useNamespace("date-table");
  const { t } = useLocale();
  const tableKls = computed(() => [
    ns.b(),
    ns.is("week-mode", props.selectionMode === "week" && !props.disabled)
  ]);
  const tableLabel = computed(() => t("el.datepicker.dateTablePrompt"));
  const getCellClasses = (cell) => {
    const classes = [];
    if (isNormalDay(cell.type) && !cell.disabled) {
      classes.push("available");
      if (cell.type === "today") {
        classes.push("today");
      }
    } else {
      classes.push(cell.type);
    }
    if (isCurrent(cell)) {
      classes.push("current");
    }
    if (cell.inRange && (isNormalDay(cell.type) || props.selectionMode === "week")) {
      classes.push("in-range");
      if (cell.start) {
        classes.push("start-date");
      }
      if (cell.end) {
        classes.push("end-date");
      }
    }
    if (cell.disabled || props.disabled) {
      classes.push("disabled");
    }
    if (cell.selected) {
      classes.push("selected");
    }
    if (cell.customClass) {
      classes.push(cell.customClass);
    }
    return classes.join(" ");
  };
  const getRowKls = (cell) => [
    ns.e("row"),
    { current: isWeekActive(cell) }
  ];
  return {
    tableKls,
    tableLabel,
    weekHeaderClass: ns.e("week-header"),
    getCellClasses,
    getRowKls,
    t
  };
};
const basicCellProps = buildProps({
  cell: {
    type: definePropType(Object)
  }
});
var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace("date-table-cell");
    const {
      slots
    } = inject(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const {
        cell
      } = props;
      return renderSlot(slots, "default", {
        ...cell
      }, () => {
        var _a;
        return [createVNode("div", {
          "class": ns.b()
        }, [createVNode("span", {
          "class": ns.e("text")
        }, [(_a = cell == null ? void 0 : cell.renderText) != null ? _a : cell == null ? void 0 : cell.text])])];
      });
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "basic-date-table",
  props: basicDateTableProps,
  emits: basicDateTableEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      WEEKS,
      rows,
      tbodyRef,
      currentCellRef,
      focus,
      isCurrent,
      isWeekActive,
      isSelectedCell,
      handlePickDate,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
      handleFocus
    } = useBasicDateTable(props, emit);
    const { tableLabel, tableKls, getCellClasses, getRowKls, weekHeaderClass, t } = useBasicDateTableDOM(props, {
      isCurrent,
      isWeekActive
    });
    let isUnmounting = false;
    onBeforeUnmount(() => {
      isUnmounting = true;
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        "aria-label": unref(tableLabel),
        class: normalizeClass(unref(tableKls)),
        cellspacing: "0",
        cellpadding: "0",
        role: "grid",
        onClick: unref(handlePickDate),
        onMousemove: unref(handleMouseMove),
        onMousedown: unref(handleMouseDown),
        onMouseup: unref(handleMouseUp)
      }, [
        createBaseVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          createBaseVNode("tr", null, [
            _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", {
              key: 0,
              scope: "col",
              class: normalizeClass(unref(weekHeaderClass))
            }, null, 2)) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(WEEKS), (week, key) => {
              return openBlock(), createElementBlock("th", {
                key,
                "aria-label": unref(t)("el.datepicker.weeksFull." + week),
                scope: "col"
              }, toDisplayString(unref(t)("el.datepicker.weeks." + week)), 9, ["aria-label"]);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, rowKey) => {
            return openBlock(), createElementBlock("tr", {
              key: rowKey,
              class: normalizeClass(unref(getRowKls)(_ctx.showWeekNumber ? row[2] : row[1]))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, columnKey) => {
                return openBlock(), createElementBlock("td", {
                  key: `${rowKey}.${columnKey}`,
                  ref_for: true,
                  ref: (el) => !unref(isUnmounting) && unref(isSelectedCell)(cell) && (currentCellRef.value = el),
                  class: normalizeClass(unref(getCellClasses)(cell)),
                  "aria-current": cell.isCurrent ? "date" : void 0,
                  "aria-selected": cell.isCurrent,
                  tabindex: unref(isSelectedCell)(cell) ? 0 : -1,
                  onFocus: unref(handleFocus)
                }, [
                  createVNode(unref(ElDatePickerCell), { cell }, null, 8, ["cell"])
                ], 42, ["aria-current", "aria-selected", "tabindex", "onFocus"]);
              }), 128))
            ], 2);
          }), 128))
        ], 512)
      ], 42, ["aria-label", "onClick", "onMousemove", "onMousedown", "onMouseup"]);
    };
  }
});
var DateTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "basic-date-table.vue"]]);
const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("month")
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "basic-month-table",
  props: basicMonthTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("month-table");
    const { t, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const months = ref(props.date.locale("en").localeData().monthsShort().map((_) => _.toLowerCase()));
    const tableRows = ref([[], [], []]);
    const lastRow = ref();
    const lastColumn = ref();
    const rows = computed(() => {
      var _a, _b, _c;
      const rows2 = tableRows.value;
      const now = dayjs().locale(lang.value).startOf("month");
      for (let i = 0; i < 3; i++) {
        const row = rows2[i];
        for (let j = 0; j < 4; j++) {
          const cell = row[j] || (row[j] = {
            row: i,
            column: j,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false,
            isSelected: false,
            customClass: void 0,
            date: void 0,
            dayjs: void 0,
            isCurrent: void 0,
            selected: void 0,
            renderText: void 0,
            timestamp: void 0
          });
          cell.type = "normal";
          const index = i * 4 + j;
          const calTime = props.date.startOf("year").month(index);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
          cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month"));
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = !!(calEndDate && calTime.isSame(calEndDate, "month"));
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = !!(props.minDate && calTime.isSame(props.minDate, "month"));
            cell.end = !!(calEndDate && calTime.isSame(calEndDate, "month"));
          }
          const isToday = now.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          const cellDate = calTime.toDate();
          cell.text = index;
          cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, cellDate)) || false;
          cell.date = cellDate;
          cell.customClass = (_c = props.cellClassName) == null ? void 0 : _c.call(props, cellDate);
          cell.dayjs = calTime;
          cell.timestamp = calTime.valueOf();
          cell.isSelected = isSelectedCell(cell);
        }
      }
      return rows2;
    });
    const focus = () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const getCellStyle = (cell) => {
      const style = {};
      const year = props.date.year();
      const today = /* @__PURE__ */ new Date();
      const month = cell.text;
      style.disabled = props.disabled || (props.disabledDate ? datesInMonth(props.date, year, month, lang.value).every(props.disabledDate) : false);
      style.current = castArray(props.parsedValue).some((date) => dayjs.isDayjs(date) && date.year() === year && date.month() === month);
      style.today = today.getFullYear() === year && today.getMonth() === month;
      if (cell.customClass) {
        style[cell.customClass] = true;
      }
      if (cell.inRange) {
        style["in-range"] = true;
        if (cell.start) {
          style["start-date"] = true;
        }
        if (cell.end) {
          style["end-date"] = true;
        }
      }
      return style;
    };
    const isSelectedCell = (cell) => {
      const year = props.date.year();
      const month = cell.text;
      return castArray(props.date).some((date) => date.year() === year && date.month() === month);
    };
    const handleMouseMove = (event) => {
      var _a;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: props.date.startOf("year").month(row * 4 + column)
        });
      }
    };
    const handleMonthTableClick = (event) => {
      var _a;
      if (props.disabled)
        return;
      const target = (_a = event.target) == null ? void 0 : _a.closest("td");
      if ((target == null ? void 0 : target.tagName) !== "TD")
        return;
      if (hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const month = row * 4 + column;
      const newDate = props.date.startOf("year").month(month);
      if (props.selectionMode === "months") {
        if (event.type === "keydown") {
          emit("pick", castArray(props.parsedValue), false);
          return;
        }
        const newMonth = getValidDateOfMonth(props.date, props.date.year(), month, lang.value, props.disabledDate);
        const newValue = hasClass(target, "current") ? castArray(props.parsedValue).filter((d) => (d == null ? void 0 : d.year()) !== newMonth.year() || (d == null ? void 0 : d.month()) !== newMonth.month()) : castArray(props.parsedValue).concat([dayjs(newMonth)]);
        emit("pick", newValue);
      } else if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (props.minDate && newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else {
        emit("pick", month);
      }
    };
    watch(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t)("el.datepicker.monthTablePrompt"),
        class: normalizeClass(unref(ns).b()),
        onClick: handleMonthTableClick,
        onMousemove: handleMouseMove
      }, [
        createBaseVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, key) => {
            return openBlock(), createElementBlock("tr", { key }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
                return openBlock(), createElementBlock("td", {
                  key: key_,
                  ref_for: true,
                  ref: (el) => cell.isSelected && (currentCellRef.value = el),
                  class: normalizeClass(getCellStyle(cell)),
                  "aria-selected": !!cell.isSelected,
                  "aria-label": unref(t)(`el.datepicker.month${+cell.text + 1}`),
                  tabindex: cell.isSelected ? 0 : -1,
                  onKeydown: [
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["space"]),
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["enter"])
                  ]
                }, [
                  createVNode(unref(ElDatePickerCell), {
                    cell: {
                      ...cell,
                      renderText: unref(t)("el.datepicker.months." + months.value[cell.text])
                    }
                  }, null, 8, ["cell"])
                ], 42, ["aria-selected", "aria-label", "tabindex", "onKeydown"]);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 42, ["aria-label"]);
    };
  }
});
var MonthTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "basic-month-table.vue"]]);
const basicYearTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("year")
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "basic-year-table",
  props: basicYearTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInYear = (year, lang2) => {
      const firstDay = dayjs(String(year)).locale(lang2).startOf("year");
      const lastDay = firstDay.endOf("year");
      const numOfDays = lastDay.dayOfYear();
      return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
    };
    const ns = useNamespace("year-table");
    const { t, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10;
    });
    const tableRows = ref([[], [], []]);
    const lastRow = ref();
    const lastColumn = ref();
    const rows = computed(() => {
      var _a, _b, _c;
      const rows2 = tableRows.value;
      const now = dayjs().locale(lang.value).startOf("year");
      for (let i = 0; i < 3; i++) {
        const row = rows2[i];
        for (let j = 0; j < 4; j++) {
          if (i * 4 + j >= 10) {
            break;
          }
          let cell = row[j];
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: "normal",
              inRange: false,
              start: false,
              end: false,
              text: -1,
              disabled: false,
              isSelected: false,
              customClass: void 0,
              date: void 0,
              dayjs: void 0,
              isCurrent: void 0,
              selected: void 0,
              renderText: void 0,
              timestamp: void 0
            };
          }
          cell.type = "normal";
          const index = i * 4 + j + startYear.value;
          const calTime = dayjs().year(index);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
          cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "year") && calEndDate && calTime.isSameOrBefore(calEndDate, "year")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "year") && calEndDate && calTime.isSameOrAfter(calEndDate, "year"));
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = !!(calEndDate && calTime.isSame(calEndDate, "year"));
            cell.end = !!(props.minDate && calTime.isSame(props.minDate, "year"));
          } else {
            cell.start = !!(props.minDate && calTime.isSame(props.minDate, "year"));
            cell.end = !!(calEndDate && calTime.isSame(calEndDate, "year"));
          }
          const isToday = now.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index;
          const cellDate = calTime.toDate();
          cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, cellDate)) || false;
          cell.date = cellDate;
          cell.customClass = (_c = props.cellClassName) == null ? void 0 : _c.call(props, cellDate);
          cell.dayjs = calTime;
          cell.timestamp = calTime.valueOf();
          cell.isSelected = isSelectedCell(cell);
          row[j] = cell;
        }
      }
      return rows2;
    });
    const focus = () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const getCellKls = (cell) => {
      const kls = {};
      const today = dayjs().locale(lang.value);
      const year = cell.text;
      kls.disabled = props.disabled || (props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false);
      kls.today = today.year() === year;
      kls.current = castArray(props.parsedValue).some((d) => d.year() === year);
      if (cell.customClass) {
        kls[cell.customClass] = true;
      }
      if (cell.inRange) {
        kls["in-range"] = true;
        if (cell.start) {
          kls["start-date"] = true;
        }
        if (cell.end) {
          kls["end-date"] = true;
        }
      }
      return kls;
    };
    const isSelectedCell = (cell) => {
      const year = cell.text;
      return castArray(props.date).some((date) => date.year() === year);
    };
    const handleYearTableClick = (event) => {
      var _a;
      if (props.disabled)
        return;
      const target = (_a = event.target) == null ? void 0 : _a.closest("td");
      if (!target || !target.textContent || hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const selectedYear = row * 4 + column + startYear.value;
      const newDate = dayjs().year(selectedYear);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (props.minDate && newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else if (props.selectionMode === "years") {
        if (event.type === "keydown") {
          emit("pick", castArray(props.parsedValue), false);
          return;
        }
        const vaildYear = getValidDateOfYear(newDate.startOf("year"), lang.value, props.disabledDate);
        const newValue = hasClass(target, "current") ? castArray(props.parsedValue).filter((d) => (d == null ? void 0 : d.year()) !== selectedYear) : castArray(props.parsedValue).concat([vaildYear]);
        emit("pick", newValue);
      } else {
        emit("pick", selectedYear);
      }
    };
    const handleMouseMove = (event) => {
      var _a;
      if (!props.rangeState.selecting)
        return;
      const target = (_a = event.target) == null ? void 0 : _a.closest("td");
      if (!target)
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: dayjs().year(startYear.value).add(row * 4 + column, "year")
        });
      }
    };
    watch(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t)("el.datepicker.yearTablePrompt"),
        class: normalizeClass(unref(ns).b()),
        onClick: handleYearTableClick,
        onMousemove: handleMouseMove
      }, [
        createBaseVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, rowKey) => {
            return openBlock(), createElementBlock("tr", { key: rowKey }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, cellKey) => {
                return openBlock(), createElementBlock("td", {
                  key: `${rowKey}_${cellKey}`,
                  ref_for: true,
                  ref: (el) => cell.isSelected && (currentCellRef.value = el),
                  class: normalizeClass(["available", getCellKls(cell)]),
                  "aria-selected": cell.isSelected,
                  "aria-label": String(cell.text),
                  tabindex: cell.isSelected ? 0 : -1,
                  onKeydown: [
                    withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["space"]),
                    withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["enter"])
                  ]
                }, [
                  createVNode(unref(ElDatePickerCell), { cell }, null, 8, ["cell"])
                ], 42, ["aria-selected", "aria-label", "tabindex", "onKeydown"]);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 42, ["aria-label"]);
    };
  }
});
var YearTable = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "basic-year-table.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "panel-date-pick",
  props: panelDatePickProps,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(__props, { emit: contextEmit }) {
    const props = __props;
    const timeWithinRange = (_, __, ___) => true;
    const ppNs = useNamespace("picker-panel");
    const dpNs = useNamespace("date-picker");
    const attrs = useAttrs$1();
    const slots = useSlots();
    const { t, lang } = useLocale();
    const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
    const isDefaultFormat = inject(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, void 0);
    const { shortcuts, disabledDate, cellClassName, defaultTime } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const currentViewRef = ref();
    const innerDate = ref(dayjs().locale(lang.value));
    const isChangeToNow = ref(false);
    let isShortcut = false;
    const defaultTimeD = computed(() => {
      return dayjs(defaultTime).locale(lang.value);
    });
    const month = computed(() => {
      return innerDate.value.month();
    });
    const year = computed(() => {
      return innerDate.value.year();
    });
    const selectableRange = ref([]);
    const userInputDate = ref(null);
    const userInputTime = ref(null);
    const checkDateWithinRange = (date) => {
      return selectableRange.value.length > 0 ? timeWithinRange(date, selectableRange.value, props.format || "HH:mm:ss") : true;
    };
    const formatEmit = (emitDayjs) => {
      if (defaultTime && !visibleTime.value && !isChangeToNow.value && !isShortcut) {
        return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      if (showTime.value)
        return emitDayjs.millisecond(0);
      return emitDayjs.startOf("day");
    };
    const emit = (value, ...args) => {
      if (!value) {
        contextEmit("pick", value, ...args);
      } else if (isArray(value)) {
        const dates = value.map(formatEmit);
        contextEmit("pick", dates, ...args);
      } else {
        contextEmit("pick", formatEmit(value), ...args);
      }
      userInputDate.value = null;
      userInputTime.value = null;
      isChangeToNow.value = false;
      isShortcut = false;
    };
    const handleDatePick = async (value, keepOpen) => {
      if (selectionMode.value === "date" && dayjs.isDayjs(value)) {
        const parsedDateValue = extractFirst(props.parsedValue);
        let newDate = parsedDateValue ? parsedDateValue.year(value.year()).month(value.month()).date(value.date()) : value;
        if (!checkDateWithinRange(newDate)) ;
        innerDate.value = newDate;
        emit(newDate, showTime.value || keepOpen);
      } else if (selectionMode.value === "week") {
        emit(value.date);
      } else if (selectionMode.value === "dates") {
        emit(value, true);
      }
    };
    const moveByMonth = (forward) => {
      const action = forward ? "add" : "subtract";
      innerDate.value = innerDate.value[action](1, "month");
      handlePanelChange("month");
    };
    const moveByYear = (forward) => {
      const currentDate = innerDate.value;
      const action = forward ? "add" : "subtract";
      innerDate.value = currentView.value === "year" ? currentDate[action](10, "year") : currentDate[action](1, "year");
      handlePanelChange("year");
    };
    const currentView = ref("date");
    const yearLabel = computed(() => {
      const yearTranslation = t("el.datepicker.year");
      if (currentView.value === "year") {
        const startYear = Math.floor(year.value / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 9}`;
      }
      return `${year.value} ${yearTranslation}`;
    });
    const handleShortcutClick = (shortcut) => {
      const shortcutValue = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
      if (shortcutValue) {
        isShortcut = true;
        emit(dayjs(shortcutValue).locale(lang.value));
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick({
          attrs,
          slots,
          emit: contextEmit
        });
      }
    };
    const selectionMode = computed(() => {
      const { type } = props;
      if (["week", "month", "months", "year", "years", "dates"].includes(type))
        return type;
      return "date";
    });
    const isMultipleType = computed(() => {
      return selectionMode.value === "dates" || selectionMode.value === "months" || selectionMode.value === "years";
    });
    const keyboardMode = computed(() => {
      return selectionMode.value === "date" ? currentView.value : selectionMode.value;
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const handleMonthPick = async (month2, keepOpen) => {
      if (selectionMode.value === "month") {
        innerDate.value = getValidDateOfMonth(innerDate.value, innerDate.value.year(), month2, lang.value, disabledDate);
        emit(innerDate.value, false);
      } else if (selectionMode.value === "months") {
        emit(month2, keepOpen != null ? keepOpen : true);
      } else {
        innerDate.value = getValidDateOfMonth(innerDate.value, innerDate.value.year(), month2, lang.value, disabledDate);
        currentView.value = "date";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("month");
    };
    const handleYearPick = async (year2, keepOpen) => {
      if (selectionMode.value === "year") {
        const data = innerDate.value.startOf("year").year(year2);
        innerDate.value = getValidDateOfYear(data, lang.value, disabledDate);
        emit(innerDate.value, false);
      } else if (selectionMode.value === "years") {
        emit(year2, keepOpen != null ? keepOpen : true);
      } else {
        const data = innerDate.value.year(year2);
        innerDate.value = getValidDateOfYear(data, lang.value, disabledDate);
        currentView.value = "month";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("year");
    };
    const showPicker = async (view) => {
      if (props.disabled)
        return;
      currentView.value = view;
      await nextTick();
      handleFocusPicker();
    };
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const footerVisible = computed(() => {
      const showDateFooter = showTime.value || selectionMode.value === "dates";
      const showYearFooter = selectionMode.value === "years";
      const showMonthFooter = selectionMode.value === "months";
      const isDateView = currentView.value === "date";
      const isYearView = currentView.value === "year";
      const isMonthView = currentView.value === "month";
      return showDateFooter && isDateView || showYearFooter && isYearView || showMonthFooter && isMonthView;
    });
    const footerFilled = computed(() => !isMultipleType.value && props.showNow || props.showConfirm);
    const disabledConfirm = computed(() => {
      if (!disabledDate)
        return false;
      if (!props.parsedValue)
        return true;
      if (isArray(props.parsedValue)) {
        return disabledDate(props.parsedValue[0].toDate());
      }
      return disabledDate(props.parsedValue.toDate());
    });
    const onConfirm = () => {
      if (isMultipleType.value) {
        emit(props.parsedValue);
      } else {
        let result = extractFirst(props.parsedValue);
        if (!result) {
          const defaultTimeD2 = dayjs(defaultTime).locale(lang.value);
          const defaultValueD = getDefaultValue2();
          result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
        }
        innerDate.value = result;
        emit(result);
      }
    };
    const disabledNow = computed(() => {
      if (!disabledDate)
        return false;
      return disabledDate(dayjs().locale(lang.value).toDate());
    });
    const changeToNow = () => {
      const now = dayjs().locale(lang.value);
      const nowDate = now.toDate();
      isChangeToNow.value = true;
      if ((!disabledDate || !disabledDate(nowDate)) && checkDateWithinRange(nowDate)) {
        innerDate.value = dayjs().locale(lang.value);
        emit(innerDate.value);
      }
    };
    const timeFormat = computed(() => {
      return props.timeFormat || extractTimeFormat(props.format) || DEFAULT_FORMATS_TIME;
    });
    const dateFormat = computed(() => {
      return props.dateFormat || extractDateFormat(props.format) || DEFAULT_FORMATS_DATE;
    });
    const visibleTime = computed(() => {
      if (userInputTime.value)
        return userInputTime.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      const dateValue = extractFirst(props.parsedValue) || innerDate.value;
      return dateValue.format(timeFormat.value);
    });
    const visibleDate = computed(() => {
      if (userInputDate.value)
        return userInputDate.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      const dateValue = extractFirst(props.parsedValue) || innerDate.value;
      return dateValue.format(dateFormat.value);
    });
    const timePickerVisible = ref(false);
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true;
    };
    const handleTimePickClose = () => {
      timePickerVisible.value = false;
    };
    const getUnits = (date) => {
      return {
        hour: date.hour(),
        minute: date.minute(),
        second: date.second(),
        year: date.year(),
        month: date.month(),
        date: date.date()
      };
    };
    const handleTimePick = (value, visible, first) => {
      const { hour, minute, second } = getUnits(value);
      const parsedDateValue = extractFirst(props.parsedValue);
      const newDate = parsedDateValue ? parsedDateValue.hour(hour).minute(minute).second(second) : value;
      innerDate.value = newDate;
      emit(innerDate.value, true);
      if (!first) {
        timePickerVisible.value = visible;
      }
    };
    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs(value, timeFormat.value).locale(lang.value);
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        const { year: year2, month: month2, date } = getUnits(innerDate.value);
        innerDate.value = newDate.year(year2).month(month2).date(date);
        userInputTime.value = null;
        timePickerVisible.value = false;
        emit(innerDate.value, true);
      }
    };
    const handleVisibleDateChange = (value) => {
      const newDate = correctlyParseUserInput(value, dateFormat.value, lang.value, isDefaultFormat);
      if (newDate.isValid()) {
        if (disabledDate && disabledDate(newDate.toDate())) {
          return;
        }
        const { hour, minute, second } = getUnits(innerDate.value);
        innerDate.value = newDate.hour(hour).minute(minute).second(second);
        userInputDate.value = null;
        emit(innerDate.value, true);
      }
    };
    const isValidValue = (date) => {
      return dayjs.isDayjs(date) && date.isValid() && (disabledDate ? !disabledDate(date.toDate()) : true);
    };
    const parseUserInput = (value) => {
      return correctlyParseUserInput(value, props.format, lang.value, isDefaultFormat);
    };
    const getDefaultValue2 = () => {
      const parseDate2 = dayjs(defaultValue.value).locale(lang.value);
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value;
        return dayjs().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
      }
      return parseDate2;
    };
    const handleFocusPicker = () => {
      var _a;
      if (["week", "month", "year", "date"].includes(selectionMode.value)) {
        (_a = currentViewRef.value) == null ? void 0 : _a.focus();
      }
    };
    const _handleFocusPicker = () => {
      handleFocusPicker();
      if (selectionMode.value === "week") {
        handleKeyControl(EVENT_CODE.down);
      }
    };
    const handleKeydownTable = (event) => {
      const code = getEventCode(event);
      const validCode = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
        EVENT_CODE.home,
        EVENT_CODE.end,
        EVENT_CODE.pageUp,
        EVENT_CODE.pageDown
      ];
      if (validCode.includes(code)) {
        handleKeyControl(code);
        event.stopPropagation();
        event.preventDefault();
      }
      if ([EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.numpadEnter].includes(code) && userInputDate.value === null && userInputTime.value === null) {
        event.preventDefault();
        emit(innerDate.value, false);
      }
    };
    const handleKeyControl = (code) => {
      var _a;
      const { up, down, left, right, home, end, pageUp, pageDown } = EVENT_CODE;
      const mapping = {
        year: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date, step2) => date.setFullYear(date.getFullYear() + step2)
        },
        month: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date, step2) => date.setMonth(date.getMonth() + step2)
        },
        week: {
          [up]: -1,
          [down]: 1,
          [left]: -1,
          [right]: 1,
          offset: (date, step2) => date.setDate(date.getDate() + step2 * 7)
        },
        date: {
          [up]: -7,
          [down]: 7,
          [left]: -1,
          [right]: 1,
          [home]: (date) => -date.getDay(),
          [end]: (date) => -date.getDay() + 6,
          [pageUp]: (date) => -new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
          [pageDown]: (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
          offset: (date, step2) => date.setDate(date.getDate() + step2)
        }
      };
      const newDate = innerDate.value.toDate();
      while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
        const map = mapping[keyboardMode.value];
        if (!map)
          return;
        map.offset(newDate, isFunction(map[code]) ? map[code](newDate) : (_a = map[code]) != null ? _a : 0);
        if (disabledDate && disabledDate(newDate)) {
          break;
        }
        const result = dayjs(newDate).locale(lang.value);
        innerDate.value = result;
        contextEmit("pick", result, true);
        break;
      }
    };
    const handlePanelChange = (mode) => {
      contextEmit("panel-change", innerDate.value.toDate(), mode, currentView.value);
    };
    watch(() => selectionMode.value, (val) => {
      if (["month", "year"].includes(val)) {
        currentView.value = val;
        return;
      } else if (val === "years") {
        currentView.value = "year";
        return;
      } else if (val === "months") {
        currentView.value = "month";
        return;
      }
      currentView.value = "date";
    }, { immediate: true });
    watch(() => defaultValue.value, (val) => {
      if (val) {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (val) => {
      if (val) {
        if (isMultipleType.value)
          return;
        if (isArray(val))
          return;
        innerDate.value = val;
      } else {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    contextEmit("set-picker-option", ["isValidValue", isValidValue]);
    contextEmit("set-picker-option", ["parseUserInput", parseUserInput]);
    contextEmit("set-picker-option", ["handleFocusPicker", _handleFocusPicker]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(dpNs).b(),
          unref(ppNs).is("border", _ctx.border),
          unref(ppNs).is("disabled", _ctx.disabled),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                disabled: _ctx.disabled,
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => handleShortcutClick(shortcut)
              }, toDisplayString(shortcut.text), 11, ["disabled", "onClick"]);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(dpNs).e("time-header"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t)("el.datepicker.selectDate"),
                  "model-value": unref(visibleDate),
                  size: "small",
                  "validate-event": false,
                  disabled: _ctx.disabled,
                  onInput: (val) => userInputDate.value = val,
                  onChange: handleVisibleDateChange
                }, null, 8, ["placeholder", "model-value", "disabled", "onInput"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t)("el.datepicker.selectTime"),
                  "model-value": unref(visibleTime),
                  size: "small",
                  "validate-event": false,
                  disabled: _ctx.disabled,
                  onFocus: onTimePickerInputFocus,
                  onInput: (val) => userInputTime.value = val,
                  onChange: handleVisibleTimeChange
                }, null, 8, ["placeholder", "model-value", "disabled", "onInput"]),
                createVNode(unref(TimePickPanel), {
                  visible: timePickerVisible.value,
                  format: unref(timeFormat),
                  "parsed-value": innerDate.value,
                  onPick: handleTimePick
                }, null, 8, ["visible", "format", "parsed-value"])
              ], 2)), [
                [unref(ClickOutside), handleTimePickClose]
              ])
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([
                unref(dpNs).e("header"),
                (currentView.value === "year" || currentView.value === "month") && unref(dpNs).em("header", "bordered")
              ])
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("prev-btn"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.prevYear`),
                  class: normalizeClass(["d-arrow-left", unref(ppNs).e("icon-btn")]),
                  disabled: _ctx.disabled,
                  onClick: ($event) => moveByYear(false)
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled", "onClick"]),
                withDirectives(createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.prevMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  disabled: _ctx.disabled,
                  onClick: ($event) => moveByMonth(false)
                }, [
                  renderSlot(_ctx.$slots, "prev-month", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled", "onClick"]), [
                  [vShow, currentView.value === "date"]
                ])
              ], 2),
              createBaseVNode("span", {
                role: "button",
                class: normalizeClass(unref(dpNs).e("header-label")),
                "aria-live": "polite",
                tabindex: "0",
                onKeydown: withKeys(($event) => showPicker("year"), ["enter"]),
                onClick: ($event) => showPicker("year")
              }, toDisplayString(unref(yearLabel)), 43, ["onKeydown", "onClick"]),
              withDirectives(createBaseVNode("span", {
                role: "button",
                "aria-live": "polite",
                tabindex: "0",
                class: normalizeClass([
                  unref(dpNs).e("header-label"),
                  { active: currentView.value === "month" }
                ]),
                onKeydown: withKeys(($event) => showPicker("month"), ["enter"]),
                onClick: ($event) => showPicker("month")
              }, toDisplayString(unref(t)(`el.datepicker.month${unref(month) + 1}`)), 43, ["onKeydown", "onClick"]), [
                [vShow, currentView.value === "date"]
              ]),
              createBaseVNode("span", {
                class: normalizeClass(unref(dpNs).e("next-btn"))
              }, [
                withDirectives(createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.nextMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  disabled: _ctx.disabled,
                  onClick: ($event) => moveByMonth(true)
                }, [
                  renderSlot(_ctx.$slots, "next-month", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled", "onClick"]), [
                  [vShow, currentView.value === "date"]
                ]),
                createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.nextYear`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  disabled: _ctx.disabled,
                  onClick: ($event) => moveByYear(true)
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled", "onClick"])
              ], 2)
            ], 2), [
              [vShow, currentView.value !== "time"]
            ]),
            createBaseVNode("div", {
              class: normalizeClass(unref(ppNs).e("content")),
              onKeydown: handleKeydownTable
            }, [
              currentView.value === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "cell-class-name": unref(cellClassName),
                "show-week-number": _ctx.showWeekNumber,
                onPick: handleDatePick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "disabled", "cell-class-name", "show-week-number"])) : createCommentVNode("v-if", true),
              currentView.value === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "parsed-value": _ctx.parsedValue,
                "cell-class-name": unref(cellClassName),
                onPick: handleYearPick
              }, null, 8, ["selection-mode", "date", "disabled-date", "disabled", "parsed-value", "cell-class-name"])) : createCommentVNode("v-if", true),
              currentView.value === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "cell-class-name": unref(cellClassName),
                onPick: handleMonthPick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "disabled", "cell-class-name"])) : createCommentVNode("v-if", true)
            ], 34)
          ], 2)
        ], 2),
        _ctx.showFooter && unref(footerVisible) && unref(footerFilled) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          withDirectives(createVNode(unref(ElButton), {
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(disabledNow),
            onClick: changeToNow
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.now")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"]), [
            [vShow, !unref(isMultipleType) && _ctx.showNow]
          ]),
          _ctx.showConfirm ? (openBlock(), createBlock(unref(ElButton), {
            key: 0,
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(disabledConfirm),
            onClick: onConfirm
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var DatePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "panel-date-pick.vue"]]);
const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps
});
const useShortcut = (lang) => {
  const { emit } = getCurrentInstance();
  const attrs = useAttrs$1();
  const slots = useSlots();
  const handleShortcutClick = (shortcut) => {
    const shortcutValues = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
    if (shortcutValues) {
      emit("pick", [
        dayjs(shortcutValues[0]).locale(lang.value),
        dayjs(shortcutValues[1]).locale(lang.value)
      ]);
      return;
    }
    if (shortcut.onClick) {
      shortcut.onClick({
        attrs,
        slots,
        emit
      });
    }
  };
  return handleShortcutClick;
};
const useRangePicker = (props, {
  defaultValue,
  defaultTime,
  leftDate,
  rightDate,
  step: step2,
  unit: unit2,
  sortDates
}) => {
  const { emit } = getCurrentInstance();
  const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY);
  const drpNs = useNamespace("date-range-picker");
  const { t, lang } = useLocale();
  const handleShortcutClick = useShortcut(lang);
  const minDate = ref();
  const maxDate = ref();
  const rangeState = ref({
    endDate: null,
    selecting: false
  });
  const handleChangeRange = (val) => {
    rangeState.value = val;
  };
  const handleRangeConfirm = (visible = false) => {
    const _minDate = unref(minDate);
    const _maxDate = unref(maxDate);
    if (isValidRange([_minDate, _maxDate])) {
      emit("pick", [_minDate, _maxDate], visible);
    }
  };
  const onSelect = (selecting) => {
    rangeState.value.selecting = selecting;
    if (!selecting) {
      rangeState.value.endDate = null;
    }
  };
  const parseValue = (parsedValue) => {
    if (isArray(parsedValue) && parsedValue.length === 2) {
      const [start, end] = parsedValue;
      minDate.value = start;
      leftDate.value = start;
      maxDate.value = end;
      sortDates(unref(minDate), unref(maxDate));
    } else {
      restoreDefault();
    }
  };
  const restoreDefault = () => {
    let [start, end] = getDefaultValue(unref(defaultValue), {
      lang: unref(lang),
      step: step2,
      unit: unit2,
      unlinkPanels: props.unlinkPanels
    });
    const getShift = (day) => {
      return day.diff(day.startOf("d"), "ms");
    };
    const maybeTimes = unref(defaultTime);
    if (maybeTimes) {
      let leftShift = 0;
      let rightShift = 0;
      if (isArray(maybeTimes)) {
        const [timeStart, timeEnd] = maybeTimes.map(dayjs);
        leftShift = getShift(timeStart);
        rightShift = getShift(timeEnd);
      } else {
        const shift = getShift(dayjs(maybeTimes));
        leftShift = shift;
        rightShift = shift;
      }
      start = start.startOf("d").add(leftShift, "ms");
      end = end.startOf("d").add(rightShift, "ms");
    }
    minDate.value = void 0;
    maxDate.value = void 0;
    leftDate.value = start;
    rightDate.value = end;
  };
  watch(defaultValue, (val) => {
    if (val) {
      restoreDefault();
    }
  }, { immediate: true });
  watch(() => props.parsedValue, (parsedValue) => {
    if (!(parsedValue == null ? void 0 : parsedValue.length) || !isEqual(parsedValue, [minDate.value, maxDate.value])) {
      parseValue(parsedValue);
    }
  }, {
    immediate: true
  });
  watch(() => props.visible, () => {
    if (props.visible) {
      parseValue(props.parsedValue);
    }
  }, { immediate: true });
  return {
    minDate,
    maxDate,
    rangeState,
    lang,
    ppNs: pickerNs,
    drpNs,
    handleChangeRange,
    handleRangeConfirm,
    handleShortcutClick,
    onSelect,
    parseValue,
    t
  };
};
const usePanelDateRange = (props, emit, leftDate, rightDate) => {
  const leftCurrentView = ref("date");
  const leftCurrentViewRef = ref();
  const rightCurrentView = ref("date");
  const rightCurrentViewRef = ref();
  const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
  const { disabledDate } = pickerBase.props;
  const { t, lang } = useLocale();
  const leftYear = computed(() => {
    return leftDate.value.year();
  });
  const leftMonth = computed(() => {
    return leftDate.value.month();
  });
  const rightYear = computed(() => {
    return rightDate.value.year();
  });
  const rightMonth = computed(() => {
    return rightDate.value.month();
  });
  function computedYearLabel(currentView, yearValue) {
    const yearTranslation = t("el.datepicker.year");
    if (currentView.value === "year") {
      const startYear = Math.floor(yearValue.value / 10) * 10;
      return yearTranslation ? `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}` : `${startYear} - ${startYear + 9}`;
    }
    return `${yearValue.value} ${yearTranslation}`;
  }
  function focusPicker(currentViewRef) {
    currentViewRef == null ? void 0 : currentViewRef.focus();
  }
  async function showPicker(pickerType, view) {
    if (props.disabled)
      return;
    const currentView = pickerType === "left" ? leftCurrentView : rightCurrentView;
    const currentViewRef = pickerType === "left" ? leftCurrentViewRef : rightCurrentViewRef;
    currentView.value = view;
    await nextTick();
    focusPicker(currentViewRef.value);
  }
  async function handlePick(mode, pickerType, value) {
    if (props.disabled)
      return;
    const isLeftPicker = pickerType === "left";
    const startDate = isLeftPicker ? leftDate : rightDate;
    const endDate = isLeftPicker ? rightDate : leftDate;
    const currentView = isLeftPicker ? leftCurrentView : rightCurrentView;
    const currentViewRef = isLeftPicker ? leftCurrentViewRef : rightCurrentViewRef;
    if (mode === "year") {
      const data = startDate.value.year(value);
      startDate.value = getValidDateOfYear(data, lang.value, disabledDate);
    }
    if (mode === "month") {
      startDate.value = getValidDateOfMonth(startDate.value, startDate.value.year(), value, lang.value, disabledDate);
    }
    if (!props.unlinkPanels) {
      endDate.value = pickerType === "left" ? startDate.value.add(1, "month") : startDate.value.subtract(1, "month");
    }
    currentView.value = mode === "year" ? "month" : "date";
    await nextTick();
    focusPicker(currentViewRef.value);
    handlePanelChange(mode);
  }
  function handlePanelChange(mode) {
    emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
  }
  function adjustDateByView(currentView, date, forward) {
    const action = forward ? "add" : "subtract";
    return currentView === "year" ? date[action](10, "year") : date[action](1, "year");
  }
  return {
    leftCurrentView,
    rightCurrentView,
    leftCurrentViewRef,
    rightCurrentViewRef,
    leftYear,
    rightYear,
    leftMonth,
    rightMonth,
    leftYearLabel: computed(() => computedYearLabel(leftCurrentView, leftYear)),
    rightYearLabel: computed(() => computedYearLabel(rightCurrentView, rightYear)),
    showLeftPicker: (view) => showPicker("left", view),
    showRightPicker: (view) => showPicker("right", view),
    handleLeftYearPick: (year) => handlePick("year", "left", year),
    handleRightYearPick: (year) => handlePick("year", "right", year),
    handleLeftMonthPick: (month) => handlePick("month", "left", month),
    handleRightMonthPick: (month) => handlePick("month", "right", month),
    handlePanelChange,
    adjustDateByView
  };
};
const unit$2 = "month";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "panel-date-range",
  props: panelDateRangeProps,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
    const isDefaultFormat = inject(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, void 0);
    const { disabledDate, cellClassName, defaultTime, clearable } = pickerBase.props;
    const format = toRef(pickerBase.props, "format");
    const shortcuts = toRef(pickerBase.props, "shortcuts");
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const { lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit$2));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      parseValue,
      t
    } = useRangePicker(props, {
      defaultValue,
      defaultTime,
      leftDate,
      rightDate,
      unit: unit$2,
      sortDates
    });
    watch(() => props.visible, (visible) => {
      if (!visible && rangeState.value.selecting) {
        parseValue(props.parsedValue);
        onSelect(false);
      }
    });
    const dateUserInput = ref({
      min: null,
      max: null
    });
    const timeUserInput = ref({
      min: null,
      max: null
    });
    const {
      leftCurrentView,
      rightCurrentView,
      leftCurrentViewRef,
      rightCurrentViewRef,
      leftYear,
      rightYear,
      leftMonth,
      rightMonth,
      leftYearLabel,
      rightYearLabel,
      showLeftPicker,
      showRightPicker,
      handleLeftYearPick,
      handleRightYearPick,
      handleLeftMonthPick,
      handleRightMonthPick,
      handlePanelChange,
      adjustDateByView
    } = usePanelDateRange(props, emit, leftDate, rightDate);
    const hasShortcuts = computed(() => !!shortcuts.value.length);
    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null)
        return dateUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(dateFormat.value);
      return "";
    });
    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null)
        return dateUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value);
      return "";
    });
    const minVisibleTime = computed(() => {
      if (timeUserInput.value.min !== null)
        return timeUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(timeFormat.value);
      return "";
    });
    const maxVisibleTime = computed(() => {
      if (timeUserInput.value.max !== null)
        return timeUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(timeFormat.value);
      return "";
    });
    const timeFormat = computed(() => {
      return props.timeFormat || extractTimeFormat(format.value || "") || DEFAULT_FORMATS_TIME;
    });
    const dateFormat = computed(() => {
      return props.dateFormat || extractDateFormat(format.value || "") || DEFAULT_FORMATS_DATE;
    });
    const isValidValue = (date) => {
      return isValidRange(date) && (disabledDate ? !disabledDate(date[0].toDate()) && !disabledDate(date[1].toDate()) : true);
    };
    const leftPrevYear = () => {
      leftDate.value = adjustDateByView(leftCurrentView.value, leftDate.value, false);
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("year");
    };
    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, "month");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = adjustDateByView(rightCurrentView.value, leftDate.value, true);
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = adjustDateByView(rightCurrentView.value, rightDate.value, true);
      }
      handlePanelChange("year");
    };
    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "month");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const leftNextYear = () => {
      leftDate.value = adjustDateByView(leftCurrentView.value, leftDate.value, true);
      handlePanelChange("year");
    };
    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const rightPrevYear = () => {
      rightDate.value = adjustDateByView(rightCurrentView.value, rightDate.value, false);
      handlePanelChange("year");
    };
    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12;
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
    });
    const btnDisabled = computed(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidRange([minDate.value, maxDate.value]));
    });
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const formatEmit = (emitDayjs, index) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime).locale(lang.value);
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      return emitDayjs;
    };
    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate;
      const max_ = val.maxDate;
      const minDate_ = formatEmit(min_, 0);
      const maxDate_ = formatEmit(max_, 1);
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!showTime.value && close) {
        close = !minDate_ || !maxDate_;
      }
      handleRangeConfirm(close);
    };
    const minTimePickerVisible = ref(false);
    const maxTimePickerVisible = ref(false);
    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false;
    };
    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false;
    };
    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value;
      const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (disabledDate && disabledDate(parsedValueD.toDate())) {
          return;
        }
        if (type === "min") {
          leftDate.value = parsedValueD;
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels && (!maxDate.value || maxDate.value.isBefore(minDate.value))) {
            rightDate.value = parsedValueD.add(1, "month");
            maxDate.value = minDate.value.add(1, "month");
          }
        } else {
          rightDate.value = parsedValueD;
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels && (!minDate.value || minDate.value.isAfter(maxDate.value))) {
            leftDate.value = parsedValueD.subtract(1, "month");
            minDate.value = maxDate.value.subtract(1, "month");
          }
        }
        sortDates(minDate.value, maxDate.value);
        handleRangeConfirm(true);
      }
    };
    const handleDateChange = (_, type) => {
      dateUserInput.value[type] = null;
    };
    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value;
      const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (type === "min") {
          minTimePickerVisible.value = true;
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          leftDate.value = minDate.value;
        } else {
          maxTimePickerVisible.value = true;
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          rightDate.value = maxDate.value;
        }
      }
    };
    const handleTimeChange = (_value, type) => {
      timeUserInput.value[type] = null;
      if (type === "min") {
        leftDate.value = minDate.value;
        minTimePickerVisible.value = false;
        if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
          maxDate.value = minDate.value;
        }
      } else {
        rightDate.value = maxDate.value;
        maxTimePickerVisible.value = false;
        if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
          minDate.value = maxDate.value;
        }
      }
      handleRangeConfirm(true);
    };
    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min)
        return;
      if (value) {
        leftDate.value = value;
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        minTimePickerVisible.value = visible;
      }
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value;
        rightDate.value = value;
        nextTick(() => {
          parseValue(props.parsedValue);
        });
      }
      handleRangeConfirm(true);
    };
    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max)
        return;
      if (value) {
        rightDate.value = value;
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        maxTimePickerVisible.value = visible;
      }
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value;
      }
      handleRangeConfirm(true);
    };
    const handleClear = () => {
      let valueOnClear = null;
      if (pickerBase == null ? void 0 : pickerBase.emptyValues) {
        valueOnClear = pickerBase.emptyValues.valueOnClear.value;
      }
      leftDate.value = getDefaultValue(unref(defaultValue), {
        lang: unref(lang),
        unit: "month",
        unlinkPanels: props.unlinkPanels
      })[0];
      rightDate.value = leftDate.value.add(1, "month");
      maxDate.value = void 0;
      minDate.value = void 0;
      handleRangeConfirm(true);
      emit("pick", valueOnClear);
    };
    const parseUserInput = (value) => {
      return correctlyParseUserInput(value, format.value || "", lang.value, isDefaultFormat);
    };
    function sortDates(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const minDateMonth = (minDate2 == null ? void 0 : minDate2.month()) || 0;
        const maxDateYear = maxDate2.year();
        const maxDateMonth = maxDate2.month();
        rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate2.add(1, unit$2) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit$2);
        if (maxDate2) {
          rightDate.value = rightDate.value.hour(maxDate2.hour()).minute(maxDate2.minute()).second(maxDate2.second());
        }
      }
    }
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          unref(ppNs).is("border", _ctx.border),
          unref(ppNs).is("disabled", _ctx.disabled),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                disabled: _ctx.disabled,
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, ["disabled", "onClick"]);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(drpNs).e("time-header"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(drpNs).e("editors-wrap"))
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    disabled: unref(rangeState).selecting || _ctx.disabled,
                    placeholder: unref(t)("el.datepicker.startDate"),
                    class: normalizeClass(unref(drpNs).e("editor")),
                    "model-value": unref(minVisibleDate),
                    "validate-event": false,
                    onInput: (val) => handleDateInput(val, "min"),
                    onChange: (val) => handleDateChange(val, "min")
                  }, null, 8, ["disabled", "placeholder", "class", "model-value", "onInput", "onChange"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting || _ctx.disabled,
                    placeholder: unref(t)("el.datepicker.startTime"),
                    "model-value": unref(minVisibleTime),
                    "validate-event": false,
                    onFocus: ($event) => minTimePickerVisible.value = true,
                    onInput: (val) => handleTimeInput(val, "min"),
                    onChange: (val) => handleTimeChange(val, "min")
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "onFocus", "onInput", "onChange"]),
                  createVNode(unref(TimePickPanel), {
                    visible: minTimePickerVisible.value,
                    format: unref(timeFormat),
                    "datetime-role": "start",
                    "parsed-value": leftDate.value,
                    onPick: handleMinTimePick
                  }, null, 8, ["visible", "format", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMinTimeClose]
                ])
              ], 2),
              createBaseVNode("span", null, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("span", {
                class: normalizeClass([unref(drpNs).e("editors-wrap"), "is-right"])
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting || _ctx.disabled,
                    placeholder: unref(t)("el.datepicker.endDate"),
                    "model-value": unref(maxVisibleDate),
                    readonly: !unref(minDate),
                    "validate-event": false,
                    onInput: (val) => handleDateInput(val, "max"),
                    onChange: (val) => handleDateChange(val, "max")
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly", "onInput", "onChange"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting || _ctx.disabled,
                    placeholder: unref(t)("el.datepicker.endTime"),
                    "model-value": unref(maxVisibleTime),
                    readonly: !unref(minDate),
                    "validate-event": false,
                    onFocus: ($event) => unref(minDate) && (maxTimePickerVisible.value = true),
                    onInput: (val) => handleTimeInput(val, "max"),
                    onChange: (val) => handleTimeChange(val, "max")
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly", "onFocus", "onInput", "onChange"]),
                  createVNode(unref(TimePickPanel), {
                    "datetime-role": "end",
                    visible: maxTimePickerVisible.value,
                    format: unref(timeFormat),
                    "parsed-value": rightDate.value,
                    onPick: handleMaxTimePick
                  }, null, 8, ["visible", "format", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMaxTimeClose]
                ])
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  "aria-label": unref(t)(`el.datepicker.prevYear`),
                  disabled: _ctx.disabled,
                  onClick: leftPrevYear
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled"]),
                withDirectives(createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  "aria-label": unref(t)(`el.datepicker.prevMonth`),
                  disabled: _ctx.disabled,
                  onClick: leftPrevMonth
                }, [
                  renderSlot(_ctx.$slots, "prev-month", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled"]), [
                  [vShow, unref(leftCurrentView) === "date"]
                ]),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow) || _ctx.disabled,
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    unref(ppNs).is("disabled", !unref(enableYearArrow) || _ctx.disabled)
                  ], "d-arrow-right"]),
                  "aria-label": unref(t)(`el.datepicker.nextYear`),
                  onClick: leftNextYear
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "aria-label"])) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels && unref(leftCurrentView) === "date" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow) || _ctx.disabled,
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    unref(ppNs).is("disabled", !unref(enableMonthArrow) || _ctx.disabled)
                  ], "arrow-right"]),
                  "aria-label": unref(t)(`el.datepicker.nextMonth`),
                  onClick: leftNextMonth
                }, [
                  renderSlot(_ctx.$slots, "next-month", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "aria-label"])) : createCommentVNode("v-if", true),
                createBaseVNode("div", null, [
                  createBaseVNode("span", {
                    role: "button",
                    class: normalizeClass(unref(drpNs).e("header-label")),
                    "aria-live": "polite",
                    tabindex: "0",
                    onKeydown: withKeys(($event) => unref(showLeftPicker)("year"), ["enter"]),
                    onClick: ($event) => unref(showLeftPicker)("year")
                  }, toDisplayString(unref(leftYearLabel)), 43, ["onKeydown", "onClick"]),
                  withDirectives(createBaseVNode("span", {
                    role: "button",
                    "aria-live": "polite",
                    tabindex: "0",
                    class: normalizeClass([
                      unref(drpNs).e("header-label"),
                      { active: unref(leftCurrentView) === "month" }
                    ]),
                    onKeydown: withKeys(($event) => unref(showLeftPicker)("month"), ["enter"]),
                    onClick: ($event) => unref(showLeftPicker)("month")
                  }, toDisplayString(unref(t)(`el.datepicker.month${leftDate.value.month() + 1}`)), 43, ["onKeydown", "onClick"]), [
                    [vShow, unref(leftCurrentView) === "date"]
                  ])
                ])
              ], 2),
              unref(leftCurrentView) === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "leftCurrentViewRef",
                ref: leftCurrentViewRef,
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate),
                "cell-class-name": unref(cellClassName),
                "show-week-number": _ctx.showWeekNumber,
                disabled: _ctx.disabled,
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "show-week-number", "disabled", "onChangerange", "onSelect"])) : createCommentVNode("v-if", true),
              unref(leftCurrentView) === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "leftCurrentViewRef",
                ref: leftCurrentViewRef,
                "selection-mode": "year",
                date: leftDate.value,
                "disabled-date": unref(disabledDate),
                "parsed-value": _ctx.parsedValue,
                disabled: _ctx.disabled,
                onPick: unref(handleLeftYearPick)
              }, null, 8, ["date", "disabled-date", "parsed-value", "disabled", "onPick"])) : createCommentVNode("v-if", true),
              unref(leftCurrentView) === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "leftCurrentViewRef",
                ref: leftCurrentViewRef,
                "selection-mode": "month",
                date: leftDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                onPick: unref(handleLeftMonthPick)
              }, null, 8, ["date", "parsed-value", "disabled-date", "disabled", "onPick"])) : createCommentVNode("v-if", true)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass([
                  unref(drpNs).e("header"),
                  unref(ppNs).is("disabled", !unref(enableYearArrow) || _ctx.disabled)
                ])
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow) || _ctx.disabled,
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  "aria-label": unref(t)(`el.datepicker.prevYear`),
                  onClick: rightPrevYear
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "aria-label"])) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels && unref(rightCurrentView) === "date" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow) || _ctx.disabled,
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  "aria-label": unref(t)(`el.datepicker.prevMonth`),
                  onClick: rightPrevMonth
                }, [
                  renderSlot(_ctx.$slots, "prev-month", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "aria-label"])) : createCommentVNode("v-if", true),
                createBaseVNode("button", {
                  type: "button",
                  "aria-label": unref(t)(`el.datepicker.nextYear`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  disabled: _ctx.disabled,
                  onClick: rightNextYear
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["aria-label", "disabled"]),
                withDirectives(createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  disabled: _ctx.disabled,
                  "aria-label": unref(t)(`el.datepicker.nextMonth`),
                  onClick: rightNextMonth
                }, [
                  renderSlot(_ctx.$slots, "next-month", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "aria-label"]), [
                  [vShow, unref(rightCurrentView) === "date"]
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("span", {
                    role: "button",
                    class: normalizeClass(unref(drpNs).e("header-label")),
                    "aria-live": "polite",
                    tabindex: "0",
                    onKeydown: withKeys(($event) => unref(showRightPicker)("year"), ["enter"]),
                    onClick: ($event) => unref(showRightPicker)("year")
                  }, toDisplayString(unref(rightYearLabel)), 43, ["onKeydown", "onClick"]),
                  withDirectives(createBaseVNode("span", {
                    role: "button",
                    "aria-live": "polite",
                    tabindex: "0",
                    class: normalizeClass([
                      unref(drpNs).e("header-label"),
                      { active: unref(rightCurrentView) === "month" }
                    ]),
                    onKeydown: withKeys(($event) => unref(showRightPicker)("month"), ["enter"]),
                    onClick: ($event) => unref(showRightPicker)("month")
                  }, toDisplayString(unref(t)(`el.datepicker.month${rightDate.value.month() + 1}`)), 43, ["onKeydown", "onClick"]), [
                    [vShow, unref(rightCurrentView) === "date"]
                  ])
                ])
              ], 2),
              unref(rightCurrentView) === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "rightCurrentViewRef",
                ref: rightCurrentViewRef,
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate),
                "cell-class-name": unref(cellClassName),
                "show-week-number": _ctx.showWeekNumber,
                disabled: _ctx.disabled,
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "show-week-number", "disabled", "onChangerange", "onSelect"])) : createCommentVNode("v-if", true),
              unref(rightCurrentView) === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "rightCurrentViewRef",
                ref: rightCurrentViewRef,
                "selection-mode": "year",
                date: rightDate.value,
                "disabled-date": unref(disabledDate),
                "parsed-value": _ctx.parsedValue,
                disabled: _ctx.disabled,
                onPick: unref(handleRightYearPick)
              }, null, 8, ["date", "disabled-date", "parsed-value", "disabled", "onPick"])) : createCommentVNode("v-if", true),
              unref(rightCurrentView) === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "rightCurrentViewRef",
                ref: rightCurrentViewRef,
                "selection-mode": "month",
                date: rightDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                onPick: unref(handleRightMonthPick)
              }, null, 8, ["date", "parsed-value", "disabled-date", "disabled", "onPick"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)
        ], 2),
        _ctx.showFooter && unref(showTime) && (_ctx.showConfirm || unref(clearable)) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          unref(clearable) ? (openBlock(), createBlock(unref(ElButton), {
            key: 0,
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: handleClear
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          _ctx.showConfirm ? (openBlock(), createBlock(unref(ElButton), {
            key: 1,
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(btnDisabled),
            onClick: ($event) => unref(handleRangeConfirm)(false)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled", "onClick"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var DateRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "panel-date-range.vue"]]);
const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps
});
const panelMonthRangeEmits = [
  "pick",
  "set-picker-option",
  "calendar-change"
];
const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate
}) => {
  const { t } = useLocale();
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, "year");
    if (!unlinkPanels.value) {
      rightDate.value = rightDate.value.subtract(1, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels.value) {
      leftDate.value = leftDate.value.add(1, "year");
    }
    rightDate.value = rightDate.value.add(1, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, "year");
  };
  const leftLabel = computed(() => {
    return `${leftDate.value.year()} ${t("el.datepicker.year")}`;
  });
  const rightLabel = computed(() => {
    return `${rightDate.value.year()} ${t("el.datepicker.year")}`;
  });
  const leftYear = computed(() => {
    return leftDate.value.year();
  });
  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};
const unit$1 = "year";
const __default__$1 = defineComponent({
  name: "DatePickerMonthRange"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: panelMonthRangeProps,
  emits: panelMonthRangeEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { lang } = useLocale();
    const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
    const isDefaultFormat = inject(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, void 0);
    const { shortcuts, disabledDate, cellClassName } = pickerBase.props;
    const format = toRef(pickerBase.props, "format");
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit$1));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      parseValue
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit: unit$1,
      sortDates
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const {
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
      leftLabel,
      rightLabel,
      leftYear,
      rightYear
    } = useMonthRangeHeader({
      unlinkPanels: toRef(props, "unlinkPanels"),
      leftDate,
      rightDate
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [minDate_.toDate(), maxDate_ && maxDate_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleRangeConfirm();
    };
    const handleClear = () => {
      let valueOnClear = null;
      if (pickerBase == null ? void 0 : pickerBase.emptyValues) {
        valueOnClear = pickerBase.emptyValues.valueOnClear.value;
      }
      leftDate.value = getDefaultValue(unref(defaultValue), {
        lang: unref(lang),
        unit: "year",
        unlinkPanels: props.unlinkPanels
      })[0];
      rightDate.value = leftDate.value.add(1, "year");
      emit("pick", valueOnClear);
    };
    const parseUserInput = (value) => {
      return correctlyParseUserInput(value, format.value, lang.value, isDefaultFormat);
    };
    function sortDates(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const maxDateYear = maxDate2.year();
        rightDate.value = minDateYear === maxDateYear ? maxDate2.add(1, unit$1) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit$1);
      }
    }
    watch(() => props.visible, (visible) => {
      if (!visible && rangeState.value.selecting) {
        parseValue(props.parsedValue);
        onSelect(false);
      }
    });
    emit("set-picker-option", ["isValidValue", isValidRange]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          unref(ppNs).is("border", _ctx.border),
          unref(ppNs).is("disabled", _ctx.disabled),
          {
            "has-sidebar": Boolean(_ctx.$slots.sidebar) || unref(hasShortcuts)
          }
        ])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                disabled: _ctx.disabled,
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, ["disabled", "onClick"]);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  disabled: _ctx.disabled,
                  onClick: unref(leftPrevYear)
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"]),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow) || _ctx.disabled,
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    unref(ppNs).is("disabled", !unref(enableYearArrow))
                  ], "d-arrow-right"]),
                  onClick: unref(leftNextYear)
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"])) : createCommentVNode("v-if", true),
                createBaseVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "disabled", "cell-class-name", "onChangerange", "onSelect"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow) || _ctx.disabled,
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    unref(ppNs).is("disabled", !unref(enableYearArrow))
                  ], "d-arrow-left"]),
                  onClick: unref(rightPrevYear)
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"])) : createCommentVNode("v-if", true),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  disabled: _ctx.disabled,
                  onClick: unref(rightNextYear)
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"]),
                createBaseVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "disabled", "cell-class-name", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "panel-month-range.vue"]]);
const panelYearRangeProps = buildProps({
  ...panelRangeSharedProps
});
const panelYearRangeEmits = [
  "pick",
  "set-picker-option",
  "calendar-change"
];
const useYearRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate
}) => {
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(10, "year");
    if (!unlinkPanels.value) {
      rightDate.value = rightDate.value.subtract(10, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels.value) {
      leftDate.value = leftDate.value.add(10, "year");
    }
    rightDate.value = rightDate.value.add(10, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(10, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(10, "year");
  };
  const leftLabel = computed(() => {
    const leftStartDate = Math.floor(leftDate.value.year() / 10) * 10;
    return `${leftStartDate}-${leftStartDate + 9}`;
  });
  const rightLabel = computed(() => {
    const rightStartDate = Math.floor(rightDate.value.year() / 10) * 10;
    return `${rightStartDate}-${rightStartDate + 9}`;
  });
  const leftYear = computed(() => {
    const leftEndDate = Math.floor(leftDate.value.year() / 10) * 10 + 9;
    return leftEndDate;
  });
  const rightYear = computed(() => {
    const rightStartDate = Math.floor(rightDate.value.year() / 10) * 10;
    return rightStartDate;
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};
const step = 10;
const unit = "year";
const __default__ = defineComponent({
  name: "DatePickerYearRange"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: panelYearRangeProps,
  emits: panelYearRangeEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(step, unit));
    const isDefaultFormat = inject(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, void 0);
    const pickerBase = inject(PICKER_BASE_INJECTION_KEY);
    const { shortcuts, disabledDate, cellClassName } = pickerBase.props;
    const format = toRef(pickerBase.props, "format");
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      parseValue
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      step,
      unit,
      sortDates
    });
    const {
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
      leftLabel,
      rightLabel,
      leftYear,
      rightYear
    } = useYearRangeHeader({
      unlinkPanels: toRef(props, "unlinkPanels"),
      leftDate,
      rightDate
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const panelKls = computed(() => [
      ppNs.b(),
      drpNs.b(),
      ppNs.is("border", props.border),
      ppNs.is("disabled", props.disabled),
      {
        "has-sidebar": Boolean(useSlots().sidebar) || hasShortcuts.value
      }
    ]);
    const leftPanelKls = computed(() => {
      return {
        content: [ppNs.e("content"), drpNs.e("content"), "is-left"],
        arrowLeftBtn: [ppNs.e("icon-btn"), "d-arrow-left"],
        arrowRightBtn: [
          ppNs.e("icon-btn"),
          ppNs.is("disabled", !enableYearArrow.value),
          "d-arrow-right"
        ]
      };
    });
    const rightPanelKls = computed(() => {
      return {
        content: [ppNs.e("content"), drpNs.e("content"), "is-right"],
        arrowLeftBtn: [
          ppNs.e("icon-btn"),
          ppNs.is("disabled", !enableYearArrow.value),
          "d-arrow-left"
        ],
        arrowRightBtn: [ppNs.e("icon-btn"), "d-arrow-right"]
      };
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [minDate_.toDate(), maxDate_ && maxDate_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleRangeConfirm();
    };
    const parseUserInput = (value) => {
      return correctlyParseUserInput(value, format.value, lang.value, isDefaultFormat);
    };
    const isValidValue = (date) => {
      return isValidRange(date) && (disabledDate ? !disabledDate(date[0].toDate()) && !disabledDate(date[1].toDate()) : true);
    };
    const handleClear = () => {
      let valueOnClear = null;
      if (pickerBase == null ? void 0 : pickerBase.emptyValues) {
        valueOnClear = pickerBase.emptyValues.valueOnClear.value;
      }
      const defaultArr = getDefaultValue(unref(defaultValue), {
        lang: unref(lang),
        step,
        unit,
        unlinkPanels: props.unlinkPanels
      });
      leftDate.value = defaultArr[0];
      rightDate.value = defaultArr[1];
      emit("pick", valueOnClear);
    };
    function sortDates(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const maxDateYear = maxDate2.year();
        rightDate.value = minDateYear + step > maxDateYear ? maxDate2.add(step, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(step, unit);
      }
    }
    watch(() => props.visible, (visible) => {
      if (!visible && rangeState.value.selecting) {
        parseValue(props.parsedValue);
        onSelect(false);
      }
    });
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(panelKls))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                disabled: _ctx.disabled,
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, ["disabled", "onClick"]);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(leftPanelKls).content)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass(unref(leftPanelKls).arrowLeftBtn),
                  disabled: _ctx.disabled,
                  onClick: unref(leftPrevYear)
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"]),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow) || _ctx.disabled,
                  class: normalizeClass(unref(leftPanelKls).arrowRightBtn),
                  onClick: unref(leftNextYear)
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"])) : createCommentVNode("v-if", true),
                createBaseVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(YearTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "disabled", "cell-class-name", "onChangerange", "onSelect"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(unref(rightPanelKls).content)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow) || _ctx.disabled,
                  class: normalizeClass(unref(rightPanelKls).arrowLeftBtn),
                  onClick: unref(rightPrevYear)
                }, [
                  renderSlot(_ctx.$slots, "prev-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_left_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"])) : createCommentVNode("v-if", true),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass(unref(rightPanelKls).arrowRightBtn),
                  disabled: _ctx.disabled,
                  onClick: unref(rightNextYear)
                }, [
                  renderSlot(_ctx.$slots, "next-year", {}, () => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(d_arrow_right_default))
                      ]),
                      _: 1
                    })
                  ])
                ], 10, ["disabled", "onClick"]),
                createBaseVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(YearTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate),
                disabled: _ctx.disabled,
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "disabled", "cell-class-name", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var YearRangePickPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "panel-year-range.vue"]]);
const getPanel = function(type) {
  switch (type) {
    case "daterange":
    case "datetimerange": {
      return DateRangePickPanel;
    }
    case "monthrange": {
      return MonthRangePickPanel;
    }
    case "yearrange": {
      return YearRangePickPanel;
    }
    default: {
      return DatePickPanel;
    }
  }
};
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
var DatePickerPanel = defineComponent({
  name: "ElDatePickerPanel",
  install: null,
  props: datePickerPanelProps,
  emits: [UPDATE_MODEL_EVENT, "calendar-change", "panel-change", "visible-change", "pick"],
  setup(props, {
    slots,
    emit
  }) {
    const ns = useNamespace("picker-panel");
    const pickerInjection = inject(PICKER_BASE_INJECTION_KEY, void 0);
    if (isUndefined(pickerInjection)) {
      const _props = reactive({
        ...toRefs(props)
      });
      provide(PICKER_BASE_INJECTION_KEY, {
        props: _props
      });
    }
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns
    });
    const {
      parsedValue,
      onCalendarChange,
      onPanelChange,
      onSetPickerOption,
      onPick
    } = inject(ROOT_COMMON_PICKER_INJECTION_KEY, () => useCommonPicker(props, emit), true);
    return () => {
      const Component = getPanel(props.type);
      return createVNode(Component, mergeProps(props, {
        "parsedValue": parsedValue.value,
        "onSet-picker-option": onSetPickerOption,
        "onCalendar-change": onCalendarChange,
        "onPanel-change": onPanelChange,
        "onPick": onPick
      }), _isSlot$1(slots) ? slots : {
        default: () => [slots]
      });
    };
  }
});
const ElDatePickerPanel = withInstall(DatePickerPanel);
const datePickerProps = buildProps({
  ...timePickerDefaultProps,
  type: {
    type: definePropType(String),
    default: "date"
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: datePickerProps,
  emits: [UPDATE_MODEL_EVENT],
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const isDefaultFormat = computed(() => {
      return !props.format;
    });
    provide(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, isDefaultFormat);
    provide(PICKER_POPPER_OPTIONS_INJECTION_KEY, reactive(toRef(props, "popperOptions")));
    const commonPicker = ref();
    const refProps = {
      focus: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.blur();
      },
      handleOpen: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleOpen();
      },
      handleClose: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleClose();
      }
    };
    expose(refProps);
    const onModelValueUpdated = (val) => {
      emit(UPDATE_MODEL_EVENT, val);
    };
    return () => {
      var _a;
      const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      return createVNode(CommonPicker, mergeProps(props, {
        "format": format,
        "type": props.type,
        "ref": commonPicker,
        "onUpdate:modelValue": onModelValueUpdated
      }), {
        default: (scopedProps) => createVNode(ElDatePickerPanel, mergeProps({
          "border": false
        }, scopedProps), _isSlot(slots) ? slots : {
          default: () => [slots]
        }),
        "range-separator": slots["range-separator"]
      });
    };
  }
});
const ElDatePicker = withInstall(DatePicker);
export {
  CommonPicker as C,
  DEFAULT_FORMATS_TIME as D,
  ElDatePicker as E,
  PICKER_BASE_INJECTION_KEY as P,
  TimeSpinner as T,
  useTimePanel as a,
  buildAvailableTimeSlotGetter as b,
  timePickerDefaultProps as c,
  TimePickPanel as d,
  PICKER_POPPER_OPTIONS_INJECTION_KEY as e,
  customParseFormat as f,
  timePanelSharedProps as t,
  useOldValue as u
};
