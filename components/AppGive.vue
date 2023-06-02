<template>
  <div class="list">
    <div class="list__container">
      <div class="list__header">
        <h2 class="list__title">Отдаете</h2>
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
            v-model="search"
          />
        </div>
      </div>
      <ul class="list__body">
        <li
          class="list__item item"
          v-for="direction in listToRender"
          :key="direction.name"
          @click="handleClick(direction)"
        >
          <img
            class="item__img"
            alt="currency icon"
            :src="direction.logo.simple"
          />
          <div class="item__name">
            <div class="item__title">
              {{ direction.currency.toString().toUpperCase() }}
            </div>
            <div class="item__subtitle">{{ direction.name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { list } from 'postcss'
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['fromList'],
  emits: ['selectFromDirection'],
  data() {
    return {
      search: '',
    }
  },
  methods: {
    handleClick(direction) {
      this.$emit('selectFromDirection', direction)
    },
  },
  computed: {
    listToRender() {
      if (this.search) {
        return this.fromList.filter((i) => i.name.includes(this.search))
      }
      return this.fromList
    },
  },
})
</script>

<style lang="scss"></style>
