import React from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = ({
  isOpen,
  onClose,
  onSubmit,
  selectedCardForDelete,
}) => {
  function handlerSubmit(e) {
    e.preventDefault();
    onSubmit(selectedCardForDelete);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete-confirm"
      textSubmitBtn="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handlerSubmit}
    />
  );
};

export default ConfirmDeletePopup;
