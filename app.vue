<template>
  <div class="app__container">
    <AppLoader v-if="loading" />
    <template v-else>
      <AppGive
        v-if="!selectedFromDir && !selectedToDir"
        :from-list="fromList"
        @selectFromDirection="selectFromDirection"
      />
      <AppGet
        v-if="selectedFromDir && !selectedToDir"
        :to-list="toList"
        @selectToDir="selectToDirection"
      />
      <AppForm
        v-if="selectedFromDir && selectedToDir && form"
        :selected-from-direction="selectedFromDir"
        :selected-to-direction="selectedToDir"
        :form="form"
      />
    </template>
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
      loading: true,
    }
  },

  async mounted() {
    this.api = await DirectionsApi.getInstance()
    this.fromList = await this.api.getFrom()
    this.loading = false
  },

  methods: {
    async selectFromDirection(direction) {
      this.loading = true
      this.selectedFromDir = direction
      this.toList = await this.api.getTo(this.selectedFromDir.ids[0])
      this.loading = false
    },

    async selectToDirection(direction) {
      this.loading = true
      this.selectedToDir = direction
      this.form = await this.api.getForm(
        this.selectedFromDir.ids[0],
        this.selectedToDir.ids[0]
      )
      this.loading = false
    },
  },
})
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
