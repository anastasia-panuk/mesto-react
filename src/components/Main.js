import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const initialData = [api.getUserInfoFromServer(), api.getCardsFromServer()];

    Promise.all(initialData)
      .then(([{ name, about, avatar }, cards]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        const cardsArray = Array.from(cards);
        setCards(cardsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="user">
        <div className="user__avatar">
          <img
            className="user__image"
            alt="Фото пользователя"
            src={`${userAvatar}`}
          />
          <button
            className="user__avatar-edit-button"
            type="button"
            aria-label="Редактировать фото пользователя"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="user__container">
          <div className="user__name-container">
            <h1 className="user__name">{`${userName}`}</h1>
            <button
              className="user__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="user__profile">{`${userDescription}`}</p>
        </div>
        <button
          className="user__add-button"
          type="button"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            link={card.link}
            name={card.name}
            likeCounter={card.likes.length}
            onCardClick={onCardClick}
            card={card}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
