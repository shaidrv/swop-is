<template>
  <div class="app__container">
    <AppGive />
  </div>
</template>

<script></script>

<style lang="scss">
@font-face {
  font-family: 'Gilroy-Semibold';
  src: url('static/fonts/Gilroy-Semibold.woff');
  font-weight: 600;
}

@font-face {
  font-family: 'Gilroy-Regular';
  src: url('static/fonts/Gilroy-Regular.woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Gilroy-Medium';
  src: url('static/fonts/Gilroy-Medium.woff');
  font-weight: 500;
}

@font-face {
  font-family: 'Gilroy-Bold';
  src: url('static/fonts/Gilroy-Bold.woff');
  font-weight: 700;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  bottom: 0;
  font-family: 'Gilroy-Semibold';
}

:focus,
:active {
  outline: none;
}
ul li {
  list-style: none;
}

input,
button,
textarea {
  font-family: inherit;
}

button {
  cursor: pointer;
}

a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
// ======

.app__container {
  background-color: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  min-height: 100vh;
  overflow: hidden;
}

.list {
  &__container {
    width: 529px;
    width: 100%;
    border-radius: 10px;
    height: 930px;
    background-color: #16171c;
  }

  &__header {
    background-color: #1d1e25;
    padding: 30px;
    border-radius: 10px 10px 0 0;
  }

  &__title {
    color: #ffffff;
    font-family: 'Gilroy-Bold';
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 25px 0;
  }

  &__field {
    background: #16171c;
    padding: 17px 20px;
    height: 54px;
  }

  &__body {
    background: #16171c;
    height: 762px;
    padding: 30px 30px 17px 30px;
    border-radius: 0 0 10px 10px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color: rgba(0, 96, 247, 0.2) transparent;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 3px;
      background: transparent;

      &-thumb {
        background-color: rgba(0, 96, 247, 0.2);
        border-radius: 55px;
      }
    }
  }

  &__item:not(:last-child) {
    margin: 0 0 15px 0;
  }
}

.field {
  width: 470px;
  display: flex;
  align-items: center;
  border-radius: 7px;

  &__img {
    padding: 0 15px 0 0;
  }

  &__input {
    border: none;
    color: #757981;
    background: #16171c;
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Gilroy-Medium';
  }
}

.item {
  display: flex;
  justify-content: flex-start;

  &__name {
  }

  &__title {
    margin: 0 0 2px 0;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }

  &__subtitle {
    color: #757981;
    font-family: 'Gilroy-Regular';
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
