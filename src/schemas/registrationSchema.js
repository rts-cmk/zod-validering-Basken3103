import z from "zod";

const RegistrationSchema = z.object({
    firstName: z.string().nonempty('Fornavn skal udfyldes'),
    lastName: z.string().nonempty('Efternavn skal udfyldes'),
    email: z.email('Din email addresse skal være gyldig'),
    password: z.string().min(8, 'Din adgangskode skal være på mindst 8 tegn'),
    confirmPassWord: z.string().nonempty(),
    phone: z.coerce.number('Dit telefonnummer må kun indeholde tal'),
    birthdate: z.coerce.number('Du skal indtaste din fødselsdato'),
}); 

export default RegistrationSchema;