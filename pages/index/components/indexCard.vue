<template>
    <div class="h-48 w-48 flex flex-col justify-center items-center" @click="goToRoute(path)">
        <div class="transition duration-700 bg-gray-700 bg-opacity-40 backdrop-blur-lg h-44 w-44 rounded-md p-3 pb-0 hover:bg-navyblue">
            <slot/>
        </div>
        <div class="uppercase">{{ title }}</div>
    </div>
</template>


<script setup lang="ts">
defineProps({
    title: String,
    path: String
})

function goToRoute(link: string){
    return navigateTo({
        path: link
    })
}
</script>