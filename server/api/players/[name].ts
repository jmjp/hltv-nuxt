import { HLTV } from "hltv"


export default defineEventHandler(async(event) => {
    const hltv = await HLTV.getPlayerByName({name: event.context.params.name });
    return {
      player: hltv
    }
  })