import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
      <body className="body">
        <div className="page">
          <header className="header">
            <img className="header__logo" alt="Лого" src={logo}/>
          </header>
          <main className="content">
            <section className="profile">
              <div className="profile__avatar">
                <img className="profile__avatar-image" src="<%=require('./images/ava.jpg')%>" alt="Аватарка"/>
                <button aria-label="Кнопка изменения аватарки" type="button" className="profile__avatar-edit-button"></button>
              </div>
              <div className="profile__profile-info">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <p className="profile__description">Исследователь океана</p>
                <button aria-label="Кнопка редактирования профиля" type="button" className="profile__edit-button"></button>
              </div>
              <button type="button" className="profile__add-button"></button>
            </section>
            <section className="elements">
              <ul className="elements__list">
              </ul>
            </section>
          </main>
          <footer className="footer">
            <p className="footer__info">&copy; 2023 Mesto Russia</p>
          </footer>
          {/* <!-- Edit Form Pop Up --> */}
          <div className="popup" name="editProfile" id="editProfile">
            <div className="popup__container">
              <form className="edit-form" name="Редактировать профиль" novalidate>
                <fieldset className="edit-form__fieldset">
                  <h2 className="edit-form__title">Редактировать профиль</h2>
                  <div className="edit-form__field">
                    <input name="name" className="edit-form__input" type="text" placeholder="Имя" required minlength="2" maxlength="40"/>
                    <span id="name__error" className="edit-form__input-error"></span>
                  </div>
                  <div className="edit-form__field">
                    <input name="job" className="edit-form__input" type="text" placeholder="Деятельность" required minlength="2" maxlength="200"/>
                    <span id="job__error" className="edit-form__input-error"></span>
                  </div>
                  <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Сохранить</button>
                </fieldset>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </div>
          {/* <!-- Add Card Form Pop Up --> */}
          <div className="popup" name="addNewCard" id="addNewCard">
            <div className="popup__container">
              <form className="edit-form" name="Добавить фото" novalidate>
                <fieldset className="edit-form__fieldset">
                  <h2 className="edit-form__title">Новое место</h2>
                  <div className="edit-form__field">
                    <input name="place_name" className="edit-form__input" type="text" placeholder="Название" required minlength="2" maxlength="30"/>
                    <span id="place_name__error" className="edit-form__input-error"></span>
                  </div>
                  <div className="edit-form__field">
                    <input name="place_link" className="edit-form__input" type="url" placeholder="Ссылка на картинку" required/>
                    <span id="place_link__error" className="edit-form__input-error"></span>
                  </div>
                  <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Создать</button>
                </fieldset>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </div>
          {/* <!-- Card element template --> */}
          <template id="element">
            <li className="element">
              <button type="button" title="Удалить место" className="element__delete-button"></button>
              <img src="#" className="element__picture" alt="Фото"/>
              <div className="element__group">
                <h2 className="element__text"></h2>
                <div className="element__like">
                  <button type="button" className="element__like-button"></button>
                  <span className="element__like-number">0</span>
                </div>
              </div>
            </li>
          </template>
          {/* <!-- Fullscreen image --> */}
          <div id="openFullScreen" className="popup popup_dark">
            <div className="popup__container popup__container_fullscreen">
              <div className="image">
                <img className="image__photo" src="#" alt="Фото на весь экран"/>
                <p className="image__description"></p>
                <button type="button" className="popup__close-button"></button>
              </div>
            </div>
          </div>
          {/* <!-- Confirmation popup--> */}
          <div id="confirmation" className="popup">
            <div className="popup__container">
              <form className="edit-form" name="Удалить фото" novalidate>
                <fieldset className="edit-form__fieldset">
                  <h2 className="edit-form__title edit-form__title_confirmation">Вы уверены?</h2>
                  <button type="submit" className="edit-form__submit-button edit-form__submit-button_confirmation">Да</button>
                </fieldset>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </div>
          {/* <!-- Avatar edit popup--> */}
          <div id="editAvatar" className="popup">
            <div className="popup__container">
              <form className="edit-form" name="Изменить аватар" novalidate>
                <fieldset className="edit-form__fieldset">
                  <h2 className="edit-form__title">Обновить аватар</h2>
                  <div className="edit-form__field">
                    <input name="avatar" className="edit-form__input" type="url" placeholder="Ссылка на новую аватарку" required/>
                    <span id="avatar__error" className="edit-form__input-error"></span>
                  </div>
                  <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">Сохранить</button>
                </fieldset>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </div>
        </div>
      </body>
  );
}

export default App;
