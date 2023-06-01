<template>
  <div class="app__container">
    <AppGive :from-list="fromList" />
    <!-- <AppGet /> -->
    <!-- <AppForm /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { DirectionsApi } from '@/api/api'

export default defineComponent({
  data() {
    return {
      fromList: [],
      toList: [],
    }
  },

  async mounted() {
    const api = await DirectionsApi.getInstance()
    this.fromList = await api.getFrom()
    this.toList = await api.getTo(7)
    // console.log(this.fromList)
    // console.log(this.fromList)
  },

  methods: {},
})
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
