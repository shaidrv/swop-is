Средствами Nuxt v3 реализуйте следующее приложение для обмена.

Приложение состоит из 1 страницы.

На странице должны отображаться направления обмена, калькулятор и форма с реквизитами.

Требование к функционалу:
- При выборе направления отдаете, загружается новый список получаете и структура формы
- При выбора направления получаете загружается структура формы
- Значения в калькуляторе зависят от курса
- Структура формы зависит от выбранных направлений

Технические требования:
- В качестве языка разработки использовать Typescript
- Верстка должна быть выполнена без использования UI библиотек

- Тестовое задание должно быть представлено в виде ссылки на репозиторий (GitHub, GItLab) с исходным кодом.


- Ссылка на figma: https://www.figma.com/file/esStRoNEIfDcYfo7scycWF/Untitled?type=design&node-id=0-1&t=CFf7oGYMZ8FmP1BN-0
API: 
- Список всех направлений: https://dev7d8d3h4.sova.gg/api/v1/calculator/
- Направления в отдаете: https://dev7d8d3h4.sova.gg/api/v1/calculator/from/
- Направления в получаете: https://dev7d8d3h4.sova.gg/api/v1/calculator/from/{from_id}/
- Структура формы и курс: https://dev7d8d3h4.sova.gg/api/v1/calculator/pair/2/4/