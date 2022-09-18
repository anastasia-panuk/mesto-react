import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfoFromServer()
      .then((data) => {
        setUserName(data);
        setUserDescription(data);
        setUserAvatar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCardsFromServer()
      .then((arr) => {
        const cardsArray = arr.map((card) => ({
          id: card._id,
          link: card.link,
          name: card.name,
          likeCounter: card.likes.length,
        }));
        setCards(cardsArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="user">
        <div className="user__avatar">
          <img
            className="user__image"
            alt="Фото пользователя"
            src={`${userAvatar.avatar}`}
          />
          <button
            className="user__avatar-edit-button"
            type="button"
            aria-label="Редактировать фото пользователя"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="user__container">
          <div className="user__name-container">
            <h1 className="user__name">{`${userName.name}`}</h1>
            <button
              className="user__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="user__profile">{`${userDescription.about}`}</p>
        </div>
        <button
          className="user__add-button"
          type="button"
          aria-label="Добавить фото"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            link={card.link}
            name={card.name}
            likeCounter={card.likeCounter}
            onCardClick={props.onCardClick}
            card={card}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
