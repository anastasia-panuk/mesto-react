import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const editProfilePopupState = `${!isEditProfilePopupOpen ? "" : "_opened"}`;
  const editAvatarPopupState = `${!isEditAvatarPopupOpen ? "" : "_opened"}`;
  const addPlacePopupState = `${!isAddPlacePopupOpen ? "" : "_opened"}`;

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleClosePopupsClick() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function closeAllPopups(e) {
    if (
      e.target.classList.contains("popup") ||
      e.target.classList.contains("popup__close-button")
    ) {
      handleClosePopupsClick();
    }
  }

  React.useEffect(() => {
    function useEsc(e) {
      if (e.key === "Escape") {
        handleClosePopupsClick();
      }
    }

    document.addEventListener("keydown", useEsc);

    return () => {
      document.removeEventListener("keydown", useEsc);
    };
  }, []);

  return (
    <body className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={editProfilePopupState}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            name="user"
            id="user"
            type="text"
            value=""
            placeholder="Как вас зовут?"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__input-span error-user"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            name="profile"
            id="profile"
            type="text"
            value=""
            placeholder="Расскажите о себе"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__input-span error-profile"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="card-add"
        title="Новое место"
        isOpen={addPlacePopupState}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            name="name"
            id="name"
            type="text"
            value=""
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="popup__input-span error-name"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            name="link"
            id="link"
            type="url"
            value=""
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-span error-link"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="user-avatar"
        title="Обновить аватар"
        isOpen={editAvatarPopupState}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            name="avatar"
            id="avatar"
            type="url"
            value=""
            placeholder="Ссылка на Ваш новый аватар"
            required
          />
          <span className="popup__input-span error-avatar"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="detite-card" title="Вы уверены?" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </body>
  );
}

export default App;
