<template>
    <div class="w-96 flex flex-col items-center justify-center rounded-lg">
        <div class="flex-col">
            <label>{{ player.name }} as </label>
            <label class="capitalize font-semibold text-lg">{{ player.ign }} </label>
        </div>
        <img :src="player.image" />
    </div>
</template>

<script setup lang="ts">
import { FullPlayer } from 'hltv';

defineProps({
    player: {
        type: Object as () => FullPlayer,
    }
})


</script>

