<template>
    <div v-if="!pending"
        class="md:mx-2 mx-auto px-4 pt-4 rounded mt-4 shadow-lg bg-gray-700 bg-opacity-40 backdrop-blur-lg">
        <label class="text-4xl font-bold font-heading capitalize">
            {{ data.player.name }}
        </label>
        <div class="grid grid-cols-2 gap-2">
            <img :src="data.player.image" />
            <div>
                <PlayerStatisticsCard :statistics="data.player.statistics" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PlayerStatisticsCard from './components/playerStatisticsCard.vue';
const route = useRoute()
onBeforeMount(() => {
    refresh()
})
const { data, error, refresh, pending } = await useFetch(`/api/players/${route.params.name}`);
</script>