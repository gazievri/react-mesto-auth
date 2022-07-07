const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup_type_view-image ${card && "popup_opened"}`}>
      <figure className="popup__container popup__container_type_img">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__img" src={card?.link} alt={card?.name} />
        <figcaption className="popup__img-title">{card?.name}</figcaption>
      </figure>
    </div>
  );
};

export default ImagePopup;
