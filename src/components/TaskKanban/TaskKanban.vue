<template>
  <v-card max-width="344" class="mx-auto mt-2 px-5 py-2" elevation="5" @click="edit" :style="'background-color:' + task.status.backgroundColor">
    <div class="h3">{{ task.titre }}</div>
    <span>{{ task.description.length > 150 ? task.description.substring(150) + '...' : task.description }}</span>
    <div class="d-flex float-right">
      <span v-if="task.startDate - task.endDate === 0">Le {{ task.startDate.toLocaleDateString() }}</span>
      <span v-else>Du {{ task.startDate.toLocaleDateString() }} au {{ task.endDate.toLocaleDateString() }}</span>
    </div>
  </v-card>
</template>
<script lang="ts" src="./taskKanban.ts"></script>
