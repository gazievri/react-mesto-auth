import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

const Card = ({ card, onCardClick, onCardLike, onCardDelete, cardForDelete }) => {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__bin ${!isOwn && 'element__bin_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__title-like ${isLiked && 'element__title-like_active'}`
  ) ;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    cardForDelete(card);
    onCardDelete();
  }

  return(
    <article className="element">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleCardDelete}/>
      <div className="element__pic" key={card._id} style={{ backgroundImage: `url(${card.link})` }} onClick={handleCardClick}/>
      <div className="element__title">
        <h2 className="element__title-text">{card.name}</h2>
        <div className="element__like-box">
          <button className={cardLikeButtonClassName} type="button" onClick={handleCardLike}/>
          <p className="element__title-like-num">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
