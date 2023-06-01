<template>
  <div class="list">
    <div class="list__container">
      <div class="list__header">
        <h2 class="list__title">Отдаете</h2>
        <div class="list__field field">
          <img class="field__img" src="../static/img/search.svg" alt="" />
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
          v-for="dir in fromList"
          :key="dir.currency"
          @click="handleClick(dir)"
        >
          <img class="item__img" alt="currency icon" :src="dir.logo.simple" />
          <div class="item__name">
            <div class="item__title">
              {{ dir.currency.toString().toUpperCase() }}
            </div>
            <div class="item__subtitle">{{ dir.name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['fromList'],
  emits: ['selectDir'],
  methods: {
    handleClick(dir) {
      this.$emit('selectDir', dir)
      // console.log(dir)
    },
  },
})
</script>

<style lang="scss"></style>
