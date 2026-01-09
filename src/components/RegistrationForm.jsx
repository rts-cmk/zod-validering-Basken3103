import z from 'zod';
import RegistrationSchema from '../schemas/registrationSchema';
import './RegistrationForm.sass';
import { useState } from 'react';

export default function RegistrationForm() {

    // State der tjekker efter fejl
    const [errors, setErrors] = useState({});


    
    const submitHandler = event => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        const result = RegistrationSchema.safeParse(formDataObject);

        if(result.success) {
            setErrors({});
            alert('Du er nu registreret som bruger!');
        } else {
            const readableErrors = z.treeifyError(result.error)
            console.log(readableErrors.properties);

            setErrors(readableErrors.properties);
            
        }


        
    }



    return (
       <form onSubmit={submitHandler} className="registration-form">
        <fieldset className="registration-form__fieldset">
            <legend className="registration-form__legend">Personlige oplysninger</legend>
            <label className="registration-form__label">
                <span className="registration-form__text">Fornavn</span>
                <input type="text" name="firstName" className="registration-form__input" autoComplete="given-name" />
                <ul className="registration-form__error-list">
                    {errors.firstName?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Efternavn</span>
                <input type="text" name="lastName" className="registration-form__input" autoComplete="family-name" />
                <ul className="registration-form__error-list">
                     {errors.lastName?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Email</span>
                <input type="email" name="email" className="registration-form__input" autoComplete="email"/>
                <ul className="registration-form__error-list">
                     {errors.email?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Password</span>
                <input type="password" name="password" className="registration-form__input" autoComplete="new-password" />
                <ul className="registration-form__error-list">
                     {errors.password?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Gentag password</span>
                <input type="password" name="confirm password" className="registration-form__input" autoComplete="new-password" />
                <ul className="registration-form__error-list">
                     {errors.password?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Fødselsdato</span>
                <input type="text" name="birthdate" className="registration-form__input" autoComplete="birthdate"/>
                <ul className="registration-form__error-list">
                     {errors.birthdate?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
            <label className="registration-form__label">
                <span className="registration-form__text">Telefonnummer</span>
                <input type="tel" name="phone" className="registration-form__input" autoComplete="tel" />
                <ul className="registration-form__error-list">
                     {errors.phone?.errors.map(
                        (message, index) => <li key={index}>{message}</li>
                    )}
                </ul>
            </label>
        </fieldset>

        <button className="sign-up-form__button">Registrer</button>
       </form>


       



    )


}