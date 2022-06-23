import { HLTV } from 'hltv';
export default defineEventHandler(async event => {
    try{
        const matches = await HLTV.getMatches();
        return matches;
    }catch(error){
      console.log(error.message);
       return error.message;
    }
  })