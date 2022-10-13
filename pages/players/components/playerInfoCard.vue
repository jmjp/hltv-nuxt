<template>
    <div v-for="social in socials">
        <a target="_blank" v-if="player[social] != null" class="capitalize" :href="player[social]">{{social}}</a>
    </div>
</template>

<script setup lang="ts">
import { FullPlayer } from 'hltv';
const props = defineProps({
    player: Object
})
const player = props.player as FullPlayer;
const socials = ["instagram", "facebook", "twitter", "twitch"]
</script>