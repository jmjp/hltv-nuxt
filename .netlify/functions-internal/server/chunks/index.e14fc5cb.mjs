import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$3, a as _sfc_main$4 } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const players = [
      { name: "fallen", img: "https://img-cdn.hltv.org/playerbodyshot/Dygd2WfFl-F6yR_47baJcT.png?ixlib=java-2.1.0&w=400&s=f5bb2e1d71042e5ce043f129a5941264" },
      { name: "coldzera", img: "https://img-cdn.hltv.org/playerbodyshot/7gJL_LHILUk9b93DFpa7Ki.png?ixlib=java-2.1.0&w=400&s=730734713a117a1b931a2b9f6c91247d" },
      { name: "taco", img: "https://img-cdn.hltv.org/playerbodyshot/oVlLgpSsMu8ZBc-iAWuzZ3.png?ixlib=java-2.1.0&w=400&s=659b623b8c8db35d0da44880ef08dd7f" },
      { name: "fer", img: "https://img-cdn.hltv.org/playerbodyshot/0wByIKmMndjpZZS9V6_485.png?ixlib=java-2.1.0&w=400&s=c405eb54d75015b10b2dca87231b04b6" },
      { name: "boltz", img: "https://img-cdn.hltv.org/playerbodyshot/QIaoeHHlrC7MXCuRPxPMN7.png?ixlib=java-2.1.0&w=400&s=6d80fed5f7da6b99978bbe62529db730" },
      { name: "s1mple", img: "https://img-cdn.hltv.org/playerbodyshot/Q2u6AgnDNYQ3dyObwN4JBX.png?ixlib=java-2.1.0&w=400&s=5e19fa63867872bd78409f6e757ff6c3" },
      { name: "zywoo", img: "https://img-cdn.hltv.org/playerbodyshot/R3MF_lTsMVSw1w6K744i91.png?ixlib=java-2.1.0&w=400&s=00f5abe7c10a1cb7ba784147d0ac00cf" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto mt-52 w-3/4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="flex flex-wrap mt-4 items-center justify-center"><!--[-->`);
      ssrRenderList(players, (player) => {
        _push(ssrRenderComponent(_sfc_main$4, {
          title: player.name,
          path: `/players/${player.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="transition duration-500 hover:scale-105 hover:-translate-y-1"${ssrRenderAttr("src", player.img)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "transition duration-500 hover:scale-105 hover:-translate-y-1",
                  src: player.img
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.e14fc5cb.mjs.map
