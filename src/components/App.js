import { useState } from 'react';

import '../App.css';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Main from './Main';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null); 
  }

  return (
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
        />
        <PopupWithForm title={'Редактировать профиль'}
                        name={'editProfile'}
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        buttonText={'Сохранить'}
        >
          <div className="edit-form__field">
            <input name="name" className="edit-form__input" type="text" placeholder="Имя" required minLength="2" maxLength="40"/>
            <span id="name__error" className="edit-form__input-error"></span>
          </div>
          <div className="edit-form__field">
            <input name="job" className="edit-form__input" type="text" placeholder="Деятельность" required minLength="2" maxLength="200"/>
            <span id="job__error" className="edit-form__input-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm title={'Новое место'}
                        name={'newPlace'}
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        buttonText={'Создать'}
        >
          <div className="edit-form__field">
            <input name="place_name" className="edit-form__input" type="text" placeholder="Название" required minLength="2" maxLength="30"/>
            <span id="place_name__error" className="edit-form__input-error"></span>
          </div>
          <div className="edit-form__field">
            <input name="place_link" className="edit-form__input" type="url" placeholder="Ссылка на картинку" required/>
            <span id="place_link__error" className="edit-form__input-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm title={'Вы уверены?'}
                        name={'areYouSure'}
                      //  isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        buttonText={'Да'}
        >
        </PopupWithForm>
        <PopupWithForm title={'Обновить аватар'}
                        name={'editAvatar'}
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        buttonText={'Сохранить'}
        >
          <div className="edit-form__field">
            <input name="avatar" className="edit-form__input" type="url" placeholder="Ссылка на новую аватарку" required/>
            <span id="avatar__error" className="edit-form__input-error"></span>
          </div>
        </PopupWithForm>
        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}/>
        <Footer />
      </div>
  );
}

export default App;
