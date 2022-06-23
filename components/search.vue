<template>
  <div class="flex justify-center items-center space-x-2">
    <input type="search"
      class="bg-black bg-opacity-50 placeholder:font-semibold shadow-lg w-3/6 py-4 rounded caret-blue-800 border-b-2 border-blue-800 px-4 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
      placeholder="Search by name. example: fallen" v-model="name" />
    <button type="button" v-on:click="onSearch(name)"
      class="transition ease-in-out delay-300 py-4 px-8 rounded bg-gradient-to-br from-blue-500 to-blue-800 font-semibold text-lg hover:-translate-y-1">Buscar</button>
  </div>
</template>

<script setup lang="ts">
const name = '';
defineProps({
  onSearch: Function
})
</script>