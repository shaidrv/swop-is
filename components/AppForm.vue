<template>
  <div class="list">
    <div class="list__container">
      <div class="form">
        <div class="form__row">
          <h3 class="form__title">Отдаете</h3>
          <div class="form__field field">
            <div class="form__item">
              <img
                class="form__icon"
                :src="selectedFromDirection.logo.simple"
                alt="currency icon"
              />
              <div class="form__name">{{ directionFromName }}</div>
            </div>
            <div class="form__price">
              <input type="number" class="form__input" v-model="fromValue" />
            </div>
          </div>
          <div class="form__limits">
            <div class="form__limit">
              Мин.: {{ directionFromMin }} {{ directionFromCurrency }}
            </div>
            <div class="form__limit">
              Макс.: {{ directionFromMax }} {{ directionFromCurrency }}
            </div>
          </div>
        </div>
        <div class="form__row">
          <h3 class="form__title">Получаете</h3>
          <div class="form__field field">
            <div class="form__item">
              <img
                class="form__icon"
                :src="selectedToDirection.logo.simple"
                alt="currency icon"
              />
              <div class="form__name">{{ directionToName }}</div>
            </div>
            <div class="form__price">
              <input :value="toValue" type="number" class="form__input" />
            </div>
          </div>
          <div class="form__limits">
            <div class="form__limit">
              Мин.: {{ directionToMin }} {{ directionToCurrency }}
            </div>
            <div class="form__limit">
              Макс.: {{ directionToMax }} {{ directionToCurrency }}
            </div>
          </div>
        </div>
        <div class="contacts">
          <h2 class="contacts__title">Ваши реквизиты</h2>
          <template v-for="input in inputs" :key="input.name">
            <div class="contacts__field field">
              <img
                class="contacts__icon"
                src="../static/img/avatar.svg"
                alt=""
              />
              <input
                :name="input.name"
                class="contacts__input"
                :type="input.type"
                :placeholder="input.receive.placeholder"
              />
            </div>
          </template>
        </div>
        <div class="agreement">
          <div
            :class="['agreement__text', { checked: isChecked }]"
            @click="isChecked = !isChecked"
          >
            Я согласен с
            <a class="agreement__link" href="#"
              >обработкой персональных данных <br />
            </a>
            и принимаю <a class="agreement__link" href="#">правила обмена </a>
          </div>
        </div>
        <button class="btn">Перейти к оплате</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['selectedFromDirection', 'selectedToDirection', 'form'],
  data() {
    return {
      fromValue: '',
      isChecked: false,
    }
  },
  computed: {
    inputs() {
      return this.form.structure.from.input.concat(this.form.structure.to.input)
    },
    toValue() {
      return (this.fromValue * this.form.course).toFixed(this.form.to.round)
    },
    directionToCurrency() {
      return this.selectedToDirection.currency.toString().toUpperCase()
    },
    directionFromName() {
      return this.selectedFromDirection.name.toString()
    },
    directionFromCurrency() {
      return this.selectedFromDirection.currency.toString().toUpperCase()
    },
    directionToName() {
      return this.selectedToDirection.name.toString()
    },
    directionFromMin() {
      return this.form.from.min
    },
    directionFromMax() {
      return this.form.from.max
    },
    directionToMin() {
      return this.form.to.min
    },
    directionToMax() {
      return this.form.to.max
    },
  },
})
</script>

<style lang="scss"></style>
