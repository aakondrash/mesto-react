

function PopupWithForm({title, name, isOpen, onClose, children}) {
    return (
        <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
            <div className="popup__container">
              <form className="edit-form" name={name} novalidate>
                <fieldset className="edit-form__fieldset">
                  <h2 className="edit-form__title">{title}</h2>
                  {children}
                </fieldset>
              </form>
              <button type="button" className="popup__close-button" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;