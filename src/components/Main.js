import { useState, useEffect } from 'react';

import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = useState(" ");
    const [userDescription, setUserDescription] = useState(" ");
    const [userAvatar, setUserAvatar] = useState(" ");
    const [cards, setCards] = useState([]);


    useEffect(() => {
        api.getProfileInfo().then((userData) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch((err) => console.log(err));
        api.getInitialCards().then((cardsData) => {
            setCards(
                cardsData.map((card) => ({
                    name: card.name,
                    link: card.link,
                    cardId: card._id
                }))
            );
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" onClick={onEditAvatar}>
                    <img className="profile__avatar-image" src={userAvatar} alt="Аватарка"/>
                    <button aria-label="Кнопка изменения аватарки" type="button" className="profile__avatar-edit-button"></button>
                </div>
                <div className="profile__profile-info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
                    <button aria-label="Кнопка редактирования профиля" type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {
                        cards.map((card) =>
                            <Card key={card._id} card={card} onCardClick={onCardClick}/>
                        )
                    }
                </ul>
            </section>
        </main>
    );
}

export default Main;