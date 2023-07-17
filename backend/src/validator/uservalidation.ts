import z from 'zod'
export const userSchema = z.object({
    firstname: z.string({
        required_error: "First name cannot be empty"
    }),
    lastname: z.string({
        required_error: "Last name cannot be empty"
    }),
    username: z.string({
        required_error: "First name cannot be empty"
    }),
    email: z.string({
        required_error: "email cannot be empty"
    }),
    phone_number: z.string({
        required_error: "Phone Number cannot be empty"
    }),
    password: z.string({
        required_error: "Password cannot be empty"
    })
})