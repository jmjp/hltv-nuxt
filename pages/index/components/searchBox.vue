<template>
    <form @submit="goToRoute">
        <label for="default-search" class="mb-2 text-sm font-medium sr-only">Buscar</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <input type="search" id="default-search"
                class="block p-4 pl-10 w-full text-sm rounded-lg border border-transparent focus:ring-blue-500 focus:border-blue-500  bg-gray-700 bg-opacity-40 backdrop-blur-lg"
                placeholder="Busque pelo nome em jogo. example: fallen" required="true" v-model="playerName">
            <button type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded text-sm px-4 py-2">Buscar</button>
        </div>
    </form>
</template>


<script setup lang="ts">
const playerName = ref("")
function goToRoute(e: any) {
    e.preventDefault()
    return navigateTo({
        path: `/players/${playerName.value}`
    })
}
</script>