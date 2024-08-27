import * as z from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Введите почту!')
    .email({ message: 'Неверный адрес электронной почты' }),

  password: z
    .string({ message: 'Обязательное поле' })
    .min(1, 'Введите пароль!'),
});

export type SigninFormSchema = (typeof signInSchema)['_output'];
