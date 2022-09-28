import React from "react";
import PopupWithForm from "./PopupWithForm";

function AppPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          name="name"
          id="name"
          value={name}
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleName}
          required
        />
        <span className="popup__input-span error-name"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          name="link"
          id="link"
          value={link}
          type="url"
          placeholder="Ссылка на картинку"
          onChange={handleLink}
          required
        />
        <span className="popup__input-span error-link"></span>
      </label>
    </PopupWithForm>
  );
}

export default AppPlacePopup;
