import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = React.useRef(null);

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar-edit"
      textSubmitBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_link"
        placeholder="Ссылка на картинку"
        type="url"
        name="avatar"
        id="avatarlink-input"
        required
        ref={avatarRef}
      />
      <span className="popup__error-text avatarlink-input-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
