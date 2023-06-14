

function PopupWithForm({title, name, isOpen, onClose, buttonText, children}) {
    return (
        <div className={isOpen ? `popup popup_opened` : `popup`}>
            <div className="popup__container">
              <form className="edit-form" name={name} noValidate>
                <fieldset className="edit-form__fieldset">
                  <h2 className="edit-form__title">{title}</h2>
                  {children}
                  <button type="submit" className="edit-form__submit-button edit-form__submit-button_disabled" disabled="disabled">{buttonText}</button>
                </fieldset>
              </form>
              <button type="button" className="popup__close-button" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;