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

<style lang="scss">
.form {
  padding: 30px;
  &__row {
    &:not(:last-child) {
      margin: 0 0 20px 0;
    }
    &:last-child {
      margin: 0 0 25px 0;
    }
  }

  &__title {
    color: #ffffff;
    // font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 10px 0;
    font-family: 'Gilroy-Bold';
  }

  &__field {
    // width: 470px;
    height: 52px;
    background: #1d1e25;
    // border-radius: 7px;
    margin: 0 0 10px 0;
    padding: 0 10px 0 20px;
  }

  &__limits {
    color: #757981;
    // font-weight: 400;
    font-family: 'Gilroy-Regular';
    font-size: 15px;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
  }

  &__limit {
  }
}

.field {
  &__item {
    color: #ffffff;
    // font-weight: 600;

    &__icon {
      margin: 0 10px 0 0;
    }

    &__name {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__price {
    font-size: 20px;
    line-height: 24px;
  }
}

// ====

.contacts {
  &__title {
    font-weight: 700;
    font-family: 'Gilroy-Bold';
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin: 0 0 30px 0;
  }

  &__field {
    background: #1d1e25;
    height: 64px;
    margin: 0 0 20px 0;
    padding: 20px 25px;
  }

  &__icon {
    margin: 0 15px 0 0;

    &_fullname {
    }

    &_email {
    }
  }

  &__input {
    border: none;
    color: #757981;
    background: #1d1e25;
    width: 100%;
    // font-weight: 400;
    font-family: 'Gilroy-Regular';
    font-size: 16px;
    line-height: 19px;
  }
}
.field {
  max-width: 470px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 7px;
}

// ===

.agreement {
  &__text {
    position: relative;
    color: #8f939b;
    // font-weight: 400;
    font-family: 'Gilroy-Regular';
    font-size: 15px;
    line-height: 17px;
    margin: 0 0 25px 44px;

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      border: 2px solid #0060f7;
      border-radius: 5px;
      background: #1d1e25;
      margin: 0 20px 0 0;
      display: inline-block;
      position: absolute;
      left: -43px;
      top: 9%;
      cursor: pointer;
    }
  }

  &__link {
    text-decoration: none;
    color: #0060f7;
  }
}

.btn {
  background-color: #0060f7;
  border-radius: 10px;
  // font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  padding: 18.5px 28px 18.5px 58px;
  border: none;
  color: #ffffff;
  background-image: url('../static/img/btn_bg.svg');
  background-repeat: no-repeat;
  background-position: 13% center;
  margin: 0 auto;
}
</style>
