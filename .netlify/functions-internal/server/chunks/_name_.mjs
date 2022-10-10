import { defineEventHandler } from 'h3';
import { HLTV } from 'hltv';

const _name_ = defineEventHandler(async (event) => {
  const hltv = await HLTV.getPlayerByName({ name: event.context.params.name });
  return {
    player: hltv
  };
});

export { _name_ as default };
//# sourceMappingURL=_name_.mjs.map
