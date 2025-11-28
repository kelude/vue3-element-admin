import { u as useTooltipContentProps, r as roleTypes, d as useTooltipTriggerProps } from "./popper.D_c7zDnS.js";
import { t as buildProps, z as definePropType, v as iconPropType, L as EVENT_CODE } from "./index.CmLBO_Rw.js";
const dropdownProps = buildProps({
  trigger: {
    ...useTooltipTriggerProps.trigger,
    type: definePropType([
      String,
      Array
    ])
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [
      EVENT_CODE.enter,
      EVENT_CODE.numpadEnter,
      EVENT_CODE.space,
      EVENT_CODE.down
    ]
  },
  virtualTriggering: useTooltipTriggerProps.virtualTriggering,
  virtualRef: useTooltipTriggerProps.virtualRef,
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: useTooltipContentProps.popperClass,
  popperStyle: useTooltipContentProps.popperStyle,
  disabled: Boolean,
  role: {
    type: String,
    values: roleTypes,
    default: "menu"
  },
  buttonProps: {
    type: definePropType(Object)
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  }
});
const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType(Function) }
});
export {
  dropdownItemProps as a,
  dropdownMenuProps as b,
  dropdownProps as d
};
