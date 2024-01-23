import * as Yup from 'yup'

export const FormSchema=Yup.object({
    name:Yup.string().min(3).max(20).required(),
    email:Yup.string().email().required(),
    age:Yup.number().min(18).max(50).required()
})