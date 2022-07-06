## ![vectorpaint](https://user-images.githubusercontent.com/96244317/174490015-482712ff-3854-4d18-9e34-401266198322.svg) - портал для обмена фотографиями

Проект [**Mesto**](https://gazievri.github.io/mesto-react/) представляет собой интерактивную интернет страницу, с помощью который пользователи могут обмениваться фотографиями своих люимых мест для путешествий (и не только), оценивать загруженные фотографии.
Пользователю доступен следующий функционал:
- регистрация профиля пользователя;
- автоизация пользователя на сайте;
- загрузка на сайт изображений;
- удаление с сайта своих ранее загруженых изображений;
- редактирование своего профиля (имя, профессия, аватар);
- оценка своих и чужих изображений на сайте с помощью клавиши Like.

Полный функционал сайта доступен только зарегистрированным пользователям. 

Проект **Mesto** доступен по [ссылке](https://github.com/gazievri/react-mesto-auth/).

Наглядно c функционалом проекта **Mesto** можно познакомиться в видео:

https://user-images.githubusercontent.com/96244317/174491041-6220bfc0-606c-4b6b-a266-5b92ab140cd8.mp4


## Технологический стек
При создании проекта использовался следующий стек технологий: HTML, CSS, JS, React.js.
Для сборки проекта использовался Webpack. Соблюдались принципы объектно-ориентированного программирования. При верстке использовался БЭМ.
В проекте реализованы следующие возможности:
- валидация данных в форме с помощью JS;
- загрузка и выгрузка данных на сервер.

*Основное отличие данного проекта от более раннего заключается в том, что в этом проекте реализована функции регистрации пользователя, авторизации пользователя и работа с LocalStorage.*

## Работа с проектом
Познакомиться с опубликованным проектом можно с помощью [ссылки](https://github.com/gazievri/react-mesto-auth/).
Для того, чтобы клонировать исходный код к себе на компьютер и запустить проект локально, вам понадобится установить на ваш компьютер [**Node.js**](https://nodejs.org/en/download/).

Для запуска проекта, пожалуйста, выполните следующие действия:

1. Склонировать проект на ваш компьютер с [Github](https://github.com/gazievri/react-mesto-auth.git) с помощью команды:
```
git clone https://github.com/gazievri/react-mesto-auth.git
```
2. Установить Create React App:
```
npm install -g create-react-app
```
3. Запустить проект:
```
npm start
```
4. Для сборки проекта в продакшн используйте команду:
```
npm run build
```
5. Для деплоя проекта на GitPages используйте команду:
```
npm run deploy
```

## Планы по развитию проекта
1. Добавить валидацию форм декларативным методом.
2. Добавить возможность выбора темы оформления (ночная/дневная).
