export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }
  //метод загружает данные пользователя с сервера и возвращает их как объект
  getInfo() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }
  //метод запрашивает данные с карточками с сервера
  getCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }
  //Метод отправляет данные пользователя на сервер
  sendNewProfileData(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }

  //Метод отправляет данные новой карточки на сервер
  sendNewCardData(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }

  deleteCard(data) {
    return fetch(`${this._url}cards/${data._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  changeAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, like) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`)
  }
}

export const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: '6f7d4ee2-1133-493f-8dc5-cde7a586dd12',
    'Content-Type': 'application/json'
  }
});
