import { HLTV } from 'hltv';
export default defineEventHandler(async event => {
    try {
        const name = event.context.params.name;
        const player = await HLTV.getPlayerByName({name: name});
        return player;
    } catch (error) {
        console.log(error.message);
        return error;
    }
})