<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        <Menu />
      </template>
      <div class="h-screen flex flex-col flex-shrink items-center justify-center">
        <Search class="grow w-screen" :onSearch="search" />
        <Player v-if="player" :player="player" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { FullPlayer } from 'hltv';

const player = useState<FullPlayer>('')


async function search(name) {
  const { data, pending, error } = await useFetch<FullPlayer>(
    `/api/players/${name}`
  )
  player.value = data.value;
}


definePageMeta({
  layout: false,
});
</script>