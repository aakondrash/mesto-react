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
      <body className="body">
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
          >
            <div className="edit-form__field">
              <input name="name" className="edit-form__input" type="text" placeholder="Имя" required minlength="2" maxlength="40"/>
              <span id="name__error" className="edit-form__input-error"></span>
            </div>
            <div className="edit-form__field">
              <input name="job" className="edit-form__input" type="text" placeholder="Деятельность" required minlength="2" maxlength="200"/>
              <span id="job__error" className="edit-form__input-error"></span>
            </div>
            <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Сохранить</button>
          </PopupWithForm>
          <PopupWithForm title={'Новое место'}
                         name={'newPlace'}
                         isOpen={isAddPlacePopupOpen}
                         onClose={closeAllPopups}
          >
            <div className="edit-form__field">
              <input name="place_name" className="edit-form__input" type="text" placeholder="Название" required minlength="2" maxlength="30"/>
              <span id="place_name__error" className="edit-form__input-error"></span>
            </div>
            <div className="edit-form__field">
              <input name="place_link" className="edit-form__input" type="url" placeholder="Ссылка на картинку" required/>
              <span id="place_link__error" className="edit-form__input-error"></span>
            </div>
            <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Создать</button>
          </PopupWithForm>
          <PopupWithForm title={'Вы уверены?'}
                         name={'areYouSure'}
                        //  isOpen={isAddPlacePopupOpen}
                         onClose={closeAllPopups}
          >
            <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Да</button>
          </PopupWithForm>
          <PopupWithForm title={'Обновить аватар'}
                         name={'editAvatar'}
                         isOpen={isEditAvatarPopupOpen}
                         onClose={closeAllPopups}
          >
            <div className="edit-form__field">
              <input name="avatar" className="edit-form__input" type="url" placeholder="Ссылка на новую аватарку" required/>
              <span id="avatar__error" className="edit-form__input-error"></span>
            </div>
            <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Сохранить</button>
          </PopupWithForm>
          <ImagePopup card={selectedCard}
                      onClose={closeAllPopups}/>
          <Footer />
        </div>
      </body>
  );
}

export default App;
