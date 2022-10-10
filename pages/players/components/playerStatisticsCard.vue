<template>
    <div>
        <label class="text-3xl">Estatisticas</label>
        <div class="flex gap-6 flex-wrap">
            <div v-for="name in keyNames">
                <div class="w-32 h-28">
                    <div class="capitalize font-bold">{{ replaceByUppercase(name) }}</div>
                    <div
                        class="mx-auto p-2 bg-gradient-to-br from-purple-600 to-navyblue w-32 h-28 rounded-lg flex flex-col justify-center items-center">
                        <div class="text-2xl font-semibold">{{ givePercent(name) }}</div>
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

function replaceByUppercase(str: string) {
    var words = str.split(/(?=[A-Z])/)
    return words.join(" ")
}

function givePercent(value: string) {
    switch (value) {
        case "headshots":
            return `${statistics[value]}%`
        case "roundsContributed":
            return `${statistics[value]}%`
        default:
            return statistics[value];
    }
}


</script>