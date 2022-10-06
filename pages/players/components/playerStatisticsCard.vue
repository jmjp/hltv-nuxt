<template>
    <div>
        <label class="text-3xl">Estatisticas</label>
        <div class="flex gap-6 flex-wrap">
            <div v-for="name in keyNames">
                <div class="w-32 h-28">
                    <div class="capitalize font-bold">{{ name }}</div>
                    <div
                        class="mx-auto p-2 bg-gradient-to-br from-purple-600 to-navyblue w-32 h-28 rounded-lg flex flex-col justify-center items-center">
                        <div class="text-2xl font-semibold">{{ statistics[name] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FullPlayer } from 'hltv';

const props = defineProps({
    statistics: Object
})
const statistics = props.statistics as FullPlayer["statistics"]
var keyNames = Object.keys(statistics);
</script>