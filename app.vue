<template>
  <div class="app__container">
    <AppGive
      v-if="!selectedFromDir && !selectedToDir"
      :from-list="fromList"
      @selectFromDir="selectFromDirection"
    />
    <AppGet
      v-if="selectedFromDir && !selectedToDir"
      :to-list="toList"
      @selectToDir="selectToDirection"
    />
    <AppForm
      v-if="selectedFromDir && selectedToDir && form"
      :selected-from-dir="selectedFromDir"
      :selected-to-dir="selectedToDir"
      :form="form"
    />
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
      form: null,
    }
  },

  async mounted() {
    this.api = await DirectionsApi.getInstance()
    this.fromList = await this.api.getFrom()
  },

  methods: {
    async selectFromDirection(dir) {
      this.selectedFromDir = dir
      this.toList = await this.api.getTo(this.selectedFromDir.ids[0])
    },

    async selectToDirection(dir) {
      this.selectedToDir = dir
      this.form = await this.api.getForm(
        this.selectedFromDir.ids[0],
        this.selectedToDir.ids[0]
      )
      console.log(this.form)
      console.log(this.form.from.min)
      console.log(this.form.from.max)
    },
  },
})
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
