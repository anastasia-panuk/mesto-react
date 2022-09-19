function Card({id, link, name, card, likeCounter, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card" id={id}>
      <button
        className="card__trash-button"
        name="card__trash-button"
        type="button"
        aria-label="Корзина"
      ></button>
      <img
        className="card__image"
        src={`${link}`}
        alt={`${name}`}
        onClick={handleClick}
      />
      <div className="card__container">
        <h2 className="card__name">{`${name}`}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            name="card__like-button"
            type="button"
            aria-label="Лайк"
          ></button>
          <span className="card__like-counter">{`${likeCounter}`}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
