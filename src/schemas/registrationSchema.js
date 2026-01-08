import z from "zod";

const RegistrationSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.email(),
    password: z.string().min(8),
    confirmPassWord: z.string().nonempty(),
    phone: z.number(),
    birthdate: birthdateSchema
}); 

export default RegistrationSchema