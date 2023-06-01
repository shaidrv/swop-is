<template>
  <div class="list">
    <div class="list__container">
      <div class="form">
        <div class="form__row">
          <h3 class="form__title">Отдаете</h3>
          <div class="form__field field">
            <div class="field__item">
              <img class="field__icon" src="" alt="" />
              <div class="field__name"></div>
            </div>
            <div class="field__price"></div>
          </div>
          <div class="form__limits">
            <div class="form__limit">Мин.:</div>
            <div class="form__limit">Макс.:</div>
          </div>
        </div>
        <div class="form__row">
          <h3 class="form__title">Получаете</h3>
          <div class="form__field field">
            <div class="field__item">
              <img class="field__icon" src="" alt="" />
              <div class="field__name"></div>
            </div>
            <div class="field__price"></div>
          </div>
          <div class="form__limits">
            <div class="form__limit">Мин.:</div>
            <div class="form__limit">Макс.:</div>
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
          <div class="agreement__text">
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

<style lang="scss"></style>
