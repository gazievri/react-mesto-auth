import logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import PageNotFound from './PageNotFound';
import ProtectedRoute from './ProtectedRoute';
import * as authApi from "../utils/authApi.js";

function App() {

  const [currentUser, getUserInfo] = React.useState({});
  const [isEditAvatarPopupOpen, setStateIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setStateIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setStateIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setStateIsConfirmDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setDataCards] = React.useState([]);
  const [selectedCardForDelete, setSelectedCardForDelete] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);



  React.useEffect(() => {
    api.getInfo()
    .then(res => {
      getUserInfo(res);
    })
    .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getCards()
    .then(resolve => setDataCards(resolve))
    .catch(err => console.log(err));
  }, []);


  function handleRegister(email, password) {
    console.log(email, password);
    authApi.register(email, password)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }




  function handleClickDeleteCard() {
    setStateIsConfirmDeletePopupOpen(true);
  }

  function handleClickEditAvatar() {
    setStateIsEditAvatarPopupOpen(true);
  }

  function handleClickEditProfile() {
    setStateIsEditProfilePopupOpen(true);
  }

  function handleClickAddPlace() {
    setStateIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setStateIsEditAvatarPopupOpen(false);
    setStateIsEditProfilePopupOpen(false);
    setStateIsAddPlacePopupOpen(false);
    setStateIsConfirmDeletePopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api.sendNewProfileData(data)
    .then(res => getUserInfo(res))
    .catch(err => console.log(err));
    closeAllPopups();
  }

  function handleUpdateAvatar(data) {
    api.changeAvatar(data)
    .then(res => getUserInfo(res))
    .catch(err => console.log(err));
    closeAllPopups();
  }

  // React.useEffect(() => {
  //   api.getCards()
  //   .then(resolve => setDataCards(resolve))
  //   .catch(err => console.log(err));
  // }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setDataCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
    .then(() => {
      setDataCards((state) => state.filter(x => !(x === card)))
    })
    .catch(err => console.log(err));
    closeAllPopups();
  }

  function handleAddPlaceSubmit(data) {
    api.sendNewCardData(data)
    .then(newCard => setDataCards([newCard, ...cards]))
    .catch(err => console.log(err));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
          <div className="root">
            <Header src={logo} />
            <Switch>
              <ProtectedRoute
                exact path="/"
                loggedIn={loggedIn}
                component={Main}

                onEditAvatar={handleClickEditAvatar}
                onAddPlace={handleClickAddPlace}
                onEditProfile={handleClickEditProfile}
                onCardClick={setSelectedCard}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleClickDeleteCard}
                cardForDelete={setSelectedCardForDelete}
              />
              <Route path="/sign-in">
                <Login />
              </Route>
              <Route path="/sign-up">
                <Register handleRegister={handleRegister} />
              </Route>
              <Route path="*">
                {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
              </Route>
            </Switch>
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <ConfirmDeletePopup isOpen={isConfirmDeletePopupOpen} onClose={closeAllPopups} onSubmit={handleCardDelete} selectedCardForDelete={selectedCardForDelete} />
            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
            />
            <InfoTooltip isSuccess={true} />
          </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
