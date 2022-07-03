import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {

  const nameRef = React.useRef(null);
  const linkRef = React.useRef(null);

  React.useEffect(()=>{
    nameRef.current.value = '';
    linkRef.current.value = '';
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }

  return(
    <PopupWithForm
    title='Новое место'
    name='new-card'
    textSubmitBtn='Сохранить'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit} >
        <input className="popup__input popup__input_field_place" placeholder="Название" type="text" name="name" id="place-input" required minLength={2} maxLength={30} ref={nameRef} />
        <span className="popup__error-text place-input-error" />
        <input className="popup__input popup__input_field_link" placeholder="Ссылка на картинку" type="url" name="link" id="link-input" required ref={linkRef} />
        <span className="popup__error-text link-input-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;



