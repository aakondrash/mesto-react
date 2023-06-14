import React from 'react';


function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }  

    return (
        <li className="element">
            <button type="button" title="Удалить место" className="element__delete-button"></button>
            <img src={card.link} className="element__picture" alt="Фото" onClick={handleClick}/>
            <div className="element__group">
            <h2 className="element__text">{card.name}</h2>
            <div className="element__like">
                <button type="button" className="element__like-button"></button>
                <span className="element__like-number">0</span>
            </div>
            </div>
        </li>
    );
}

export default Card;