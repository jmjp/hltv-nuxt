<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> Some header template content. </template>

      The rest of the page
      <div v-for="match of matches">
        <p>{{ match.event?.name }}</p>
        <p>{{ match.team1?.name }}</p>
        <p>{{ match.team2?.name }}</p>
        <p v-if="match.date">{{ new Date(match.date) }}</p>
      </div>
    </NuxtLayout>
  </div>
</template>

<script  setup lang="ts">
import { MatchPreview } from 'hltv';

const { data: matches, pending, error, refresh } = await useAsyncData<MatchPreview[]>(
  'matches',
  () => $fetch('/api/test')
)
definePageMeta({
  layout: false,
});
</script>