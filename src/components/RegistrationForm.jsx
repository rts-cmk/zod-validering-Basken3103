import './RegistrationForm.sass';

export default function RegistrationForm() {

    // const der sikre at projektet ikke hele tiden reloader, imens man loader
    const submitHandler = event => {
        event.preventDefault();

        
    }



    return (
       <form onSubmit={submitHandler} className="registration-form">
        <fieldset className="registration-form__fieldset">
            <legend className="registration-form__legend">Personlige oplysninger</legend>
            <label className="registration-form__label">
                <span className="registration-form__text">Fornavn</span>
                <input type="text" name="firstName" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Efternavn</span>
                <input type="text" name="lastName" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Email</span>
                <input type="email" name="email" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Password</span>
                <input type="password" name="password" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Gentag password</span>
                <input type="password" name="confirm password" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Fødselsdato</span>
                <input type="text" name="birthdate" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Telefonnummer</span>
                <input type="tel" name="phone" className="registration-form__input" />
                <ul className="registration-form__error-list"></ul>
            </label>
        </fieldset>

        <button className="sign-up-form__button">Registrer</button>
       </form>


       



    )


}