function ImagePopup(props) {
  return (
    <section
      className={`popup popup_type_card-add popup${
        props.card.link ? "_opened" : ""
      }`}
      onClick={props.onClose}
    >
      <div className="popup__container popup__container_image">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={`${props.card.link}`}
            alt={`${props.card.name}`}
          />
          <figcaption className="popup__figcaption">{`${props.card.name}`}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
