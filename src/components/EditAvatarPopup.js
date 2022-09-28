import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="user-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          name="avatar"
          id="avatar"
          type="url"
          placeholder="Ссылка на Ваш новый аватар"
          required
          ref={avatarRef}
        />
        <span className="popup__input-span error-avatar"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
