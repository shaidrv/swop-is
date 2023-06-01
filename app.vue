<template>
  <div class="app__container">
    <AppGive
      v-if="!selectedFromDir"
      :from-list="fromList"
      @selectDir="selectDirection"
    />
    <AppGet v-else-if="selectedFromDir" />
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
      selectedFromDir: null,
    }
  },

  async mounted() {
    const api = await DirectionsApi.getInstance()
    this.fromList = await api.getFrom()
    this.toList = await api.getTo(7)
    // console.log(this.fromList)
    // console.log(this.fromList)
  },

  methods: {
    selectDirection(dir) {
      console.log(dir)
      this.selectedFromDir = dir
      console.log(this.selectedFromDir)
    },
  },
})
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
