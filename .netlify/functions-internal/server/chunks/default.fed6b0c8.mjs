import { e as _export_sfc, d as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import './aws-lambda.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "menu",
  __ssrInlineRender: true,
  setup(__props) {
    const pages = [
      { title: "Inicio", to: "/" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap place-items-center sticky top-0 z-50 shadow-lg bg-gray-700 bg-opacity-40 border-b border-opacity-75 border-b-gray-800 backdrop-blur-lg" }, _attrs))} data-v-205d3eb2><section class="relative mx-auto" data-v-205d3eb2><nav class="flex justify-between w-screen" data-v-205d3eb2><div class="px-5 xl:px-12 py-6 flex w-full items-center" data-v-205d3eb2>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-3xl font-bold font-heading",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` CLUTCHER `);
          } else {
            return [
              createTextVNode(" CLUTCHER ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12" data-v-205d3eb2><!--[-->`);
      ssrRenderList(pages, (page) => {
        _push(`<li data-v-205d3eb2>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: page.to,
          class: "transition duration-700 ease-in-out capitalize text-gray-400 hover:text-white",
          "active-class": "text-white active-border"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="hidden xl:flex space-x-5 items-center" data-v-205d3eb2><button class="bg-blue-500 px-6 py-2 rounded hover:bg-blue-700" data-v-205d3eb2>Sign-in</button></div></div><button class="navbar-burger self-center mr-12 xl:hidden" data-v-205d3eb2><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-205d3eb2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-205d3eb2></path></svg></button></nav></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-205d3eb2"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Menu = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition-width duration-700 ease-in-out bg-gradient-to-tr from-richblack to-navyblue bg-cover bg-no-repeat min-h-screen text-white" }, _attrs))}><header>`);
  _push(ssrRenderComponent(_component_Menu, null, null, _parent));
  _push(`</header><body><div class="mt-2">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></body></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.fed6b0c8.mjs.map
