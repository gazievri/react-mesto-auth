import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from './Card';

const Main = ({ onEditAvatar, onAddPlace, onEditProfile, onCardClick, cards, onCardLike, onCardDelete, cardForDelete }) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main>
        <section className="profile">
          <div className="profile__avatar-block">
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} />
            <button className="profile__avatar-edit" type="button" onClick={onEditAvatar} />
          </div>
          <div className="profile__profile-info">
            <div className="profile__title-and-button">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile} />
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace} />
        </section>
        <section className="elements">
          {cards.map(item => {
            return(
              <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} cardForDelete={cardForDelete} />
            )
          })}
        </section>
      </main>
  );
}

export default Main;

