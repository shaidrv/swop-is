<template>
  <div class="list">
    <div class="list__container">
      <div class="list__header">
        <h2 class="list__title">Получаете</h2>
        <div class="list__field field">
          <img
            class="field__img"
            src="../static/img/search.svg"
            alt="search icon"
          />
          <input
            class="field__input input"
            type="text"
            placeholder="Поиск валюты"
          />
        </div>
      </div>
      <ul class="list__body">
        <li
          class="list__item item"
          v-for="direction in toList"
          :key="direction.name"
          @click="handleClick(direction)"
        >
          <img
            class="item__img"
            :src="direction.logo.simple"
            alt="currency icon"
          />
          <div class="item__name">{{ direction.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['toList'],
  emits: ['selectToDir'],
  methods: {
    handleClick(direction) {
      this.$emit('selectToDir', direction)
    },
  },
})
</script>

<style></style>
