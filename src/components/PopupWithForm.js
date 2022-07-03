const PopupWithForm = ({title, name, children, textSubmitBtn, isOpen, onClose, onSubmit}) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} >
      <div className="popup__container popup__container_type_all">
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <form className="popup__form popup__form-place" name={name} action="#" method="get" noValidate onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          <div>{children}</div>
          <button className="popup__save-button" type="submit">{textSubmitBtn}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

