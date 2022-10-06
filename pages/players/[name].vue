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
    <div v-if="error" class="mx-auto flex flex-col justify-center items-center">
        <label class="text-3xl font-semibold">Jogador não encontrado ou houve uma falha na busca</label>
        <button @click="back" class="bg-navyblue px-4 py-2 rounded hover:bg-opacity-50">Voltar ao inicio</button>
    </div>
</template>

<script setup lang="ts">
import PlayerStatisticsCard from './components/playerStatisticsCard.vue';
const route = useRoute()
onBeforeMount(() => {
    refresh()
})
const { data, error, refresh, pending } = await useFetch(`/api/players/${route.params.name}`);
const back = () => {
    const router = useRouter()
    router.back()
}
</script>