function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} popup${props.isOpen}`}
      onClick={props.onClose}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form edit-popup-form"
          name={`${props.name}`}
          noValidate
        >
          <h2 className={`popup__${props.title}`}>{props.title}</h2>
          {props.children}
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="Сохранить"
          >
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
