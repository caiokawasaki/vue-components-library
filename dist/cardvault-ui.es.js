import { defineComponent as C, computed as r, createBlock as z, openBlock as s, resolveDynamicComponent as j, mergeProps as S, withCtx as $, createElementBlock as u, createCommentVNode as c, createElementVNode as _, renderSlot as n } from "vue";
import { RouterLink as D } from "vue-router";
const E = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center"
}, M = { class: "whitespace-nowrap" }, N = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center"
}, P = /* @__PURE__ */ C({
  __name: "Button",
  props: {
    href: { default: null },
    to: { default: null },
    color: { default: "black" },
    size: { default: "regular" },
    variant: { default: "solid" },
    radius: { default: "full" },
    circular: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  setup(l) {
    const e = l, a = r(() => !!e.to), i = r(() => !!e.href && !e.to), o = r(() => !e.href && !e.to), d = r(() => e.disabled || e.loading), g = r(() => a.value ? D : i.value ? "a" : "button"), b = r(() => {
      const t = {
        role: o.value ? void 0 : "button",
        "aria-busy": e.loading ? "true" : void 0
      };
      return o.value ? t.type = e.type : delete t.type, t;
    }), f = {
      yellow: "bg-yellow-500 text-gray-900 hover:bg-yellow-300 focus:bg-yellow-300 disabled:bg-gray-200 disabled:text-gray-400",
      black: "bg-gray-900 text-white hover:bg-gray-800 focus:bg-gray-800 disabled:bg-gray-300 disabled:text-white",
      gray: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-400"
    }, y = {
      yellow: "",
      black: "text-gray-900 hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400",
      gray: ""
    }, p = {
      yellow: "",
      black: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-200 hover:border-gray-400 disabled:bg-white disabled:border-gray-400 disabled:text-gray-300",
      gray: ""
    }, v = {
      regular: "px-4 h-11 text-sm font-semibold gap-2",
      large: "px-5 h-13 text-md font-semibold gap-2.5"
    }, h = {
      regular: "w-11 h-11",
      large: "w-13 h-13"
    }, m = r(() => e.variant === "link" ? y[e.color] : e.variant === "outline" ? p[e.color] : f[e.color]), w = r(() => e.circular ? h[e.size] : v[e.size]), k = r(() => e.radius === "regular" && !e.circular ? "rounded-xl" : "rounded-full"), x = r(() => [
      "flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed",
      k.value,
      w.value,
      m.value,
      e.loading ? "pointer-events-none" : ""
    ].join(" ").replace(/\s+/g, " ").trim()), B = (t) => {
      e.disabled && (t.preventDefault(), t.stopPropagation());
    };
    return (t, A) => (s(), z(j(g.value), S(b.value, {
      to: a.value ? t.to : void 0,
      href: i.value ? t.href : void 0,
      disabled: o.value ? d.value : void 0,
      "aria-disabled": d.value ? "true" : void 0,
      class: x.value,
      onClick: B
    }), {
      default: $(() => [
        t.$slots.left && !t.loading ? (s(), u("span", E, [
          n(t.$slots, "left")
        ])) : c("", !0),
        _("span", M, [
          n(t.$slots, "default")
        ]),
        t.$slots.right && !t.loading ? (s(), u("span", N, [
          n(t.$slots, "right")
        ])) : c("", !0)
      ]),
      _: 3
    }, 16, ["to", "href", "disabled", "aria-disabled", "class"]));
  }
}), R = {
  Button: P
}, V = (l) => {
  Object.entries(R).forEach(([e, a]) => {
    l.component(e, a);
  });
}, q = { install: V };
export {
  P as Button,
  q as default
};
