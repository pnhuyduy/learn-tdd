<template>
  <div>
    <h1>Todo App</h1>

    <ul>
      <li
        :class="{
          completed: item.completed,
        }"
        v-for="item in todos"
        :key="item.id"
        :data-id="item.id"
      >
        {{ item.text }}
        {{ item.completed }}
        <input type="checkbox" v-model="item.completed" :data-id="item.id" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

const todos = ref<TodoItem[]>([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
  {
    id: 2,
    text: 'Learn TDD',
    completed: false,
  },
])
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
