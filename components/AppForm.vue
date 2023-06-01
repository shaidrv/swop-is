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
                :src="selectedFromDir.logo.simple"
                alt="currency icon"
              />
              <div class="form__name">{{ dirFromName }}</div>
            </div>
            <div class="form__price">
              <input type="number" class="form__input" v-model="fromValue" />
            </div>
          </div>
          <div class="form__limits">
            <div class="form__limit">
              Мин.: {{ dirFromMin }} {{ dirFromCurrency }}
            </div>
            <div class="form__limit">
              Макс.: {{ dirFromMax }} {{ dirFromCurrency }}
            </div>
          </div>
        </div>
        <div class="form__row">
          <h3 class="form__title">Получаете</h3>
          <div class="form__field field">
            <div class="form__item">
              <img
                class="form__icon"
                :src="selectedToDir.logo.simple"
                alt="currency icon"
              />
              <div class="form__name">{{ dirToName }}</div>
            </div>
            <div class="form__price">
              <input :value="toValue" type="number" class="form__input" />
            </div>
          </div>
          <div class="form__limits">
            <div class="form__limit">
              Мин.: {{ dirToMin }} {{ dirToCurrency }}
            </div>
            <div class="form__limit">
              Макс.: {{ dirToMax }} {{ dirToCurrency }}
            </div>
          </div>
        </div>

        <div class="contacts">
          <h2 class="contacts__title">Ваши реквизиты</h2>
          <div class="contacts__field field">
            <img
              class="contacts__icon contacts__icon_fullname"
              src="../static/img/avatar.svg"
              alt=""
            />
            <input
              class="contacts__input"
              type="text"
              placeholder="ФИО получателя"
            />
          </div>
          <div class="contacts__field field">
            <img
              class="contacts__icon contacts__icon_email"
              src="../static/img/mail.svg"
              alt=""
            />
            <input
              class="contacts__input"
              type="text"
              placeholder="Почта получателя"
            />
          </div>
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
  props: ['selectedFromDir', 'selectedToDir', 'form'],
  data() {
    return {
      fromValue: '',
      isChecked: false,
    }
  },
  computed: {
    // isChecked() {
    //   return !this.checked
    // },
    toValue() {
      return (this.fromValue * this.form.course).toFixed(this.form.to.round)
    },
    dirToCurrency() {
      return this.selectedToDir.currency.toString().toUpperCase()
    },
    dirFromName() {
      return this.selectedFromDir.name.toString()
    },
    dirFromCurrency() {
      return this.selectedFromDir.currency.toString().toUpperCase()
    },
    dirToName() {
      return this.selectedToDir.name.toString()
    },
    dirFromMin() {
      return this.form.from.min
    },
    dirFromMax() {
      return this.form.from.max
    },
    dirToMin() {
      return this.form.to.min
    },
    dirToMax() {
      return this.form.to.max
    },
  },
})
</script>

<style lang="scss"></style>
