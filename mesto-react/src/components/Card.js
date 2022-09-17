function Card(props) {
  return (
    <li className="card" id={`${props.key}`}>
      <button
        className="card__trash-button"
        name="card__trash-button"
        type="button"
        aria-label="Корзина"
      ></button>
      <img
        className="card__image"
        src={`${props.link}`}
        alt={`${props.name}`}
        onClick={function handleClick() {
          props.onCardClick(props.card);
        }}
      />
      <div className="card__container">
        <h2 className="card__name">{`${props.name}`}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            name="card__like-button"
            type="button"
            aria-label="Лайк"
          ></button>
          <span className="card__like-counter">{`${props.likeCounter}`}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
