<template>
  <div class="app__container">
    <AppGive
      v-if="!selectedFromDir"
      :from-list="fromList"
      @selectFromDir="selectFromDirection"
    />
    <AppGet
      v-else-if="selectedFromDir"
      :to-list="toList"
      @selectToDir="selectToDirection"
    />
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
      selectedToDir: null,
      api: null,
    }
  },

  async mounted() {
    this.api = await DirectionsApi.getInstance()
    this.fromList = await this.api.getFrom()
  },

  methods: {
    async selectFromDirection(dir) {
      this.selectedFromDir = dir
      this.toList = await this.api.getTo(this.selectedFromDir)
    },

    selectToDirection(dir) {
      this.selectedToDir = dir
      // console.log(this.selectedToDir)
    },
  },
})
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
