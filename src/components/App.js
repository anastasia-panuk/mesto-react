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

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleClosePopupsClick(e) {
    if (
      e.target.classList.contains("popup") ||
      e.target.classList.contains("popup__close-button")
    ) {
      closeAllPopups();
    }
  }


  React.useEffect(() => {
    if(isEditProfilePopupOpen || isEditAvatarPopupOpen || isAddPlacePopupOpen || selectedCard.link) {
    function handleEscKeyPress(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }}, [isEditProfilePopupOpen, isEditAvatarPopupOpen, isAddPlacePopupOpen, selectedCard]);
    


  return (
    <div className="page">
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
        isOpen={isEditProfilePopupOpen}
        onClose={handleClosePopupsClick}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            name="user"
            id="user"
            type="text"
            placeholder="Как вас зовут?"
            minLength="2"
            maxLength="40"
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
            placeholder="Расскажите о себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-span error-profile"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="card-add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={handleClosePopupsClick}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            name="name"
            id="name"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
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
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-span error-link"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="user-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClosePopupsClick}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            name="avatar"
            id="avatar"
            type="url"
            placeholder="Ссылка на Ваш новый аватар"
            required
          />
          <span className="popup__input-span error-avatar"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="detite-card" title="Вы уверены?" />

      <ImagePopup card={selectedCard} onClose={handleClosePopupsClick} />
    </div>
  );
}

export default App;
