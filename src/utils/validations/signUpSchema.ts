import * as z from 'zod';

export const signUpSchema = z
  .object({
    firstName: z
      .string({ message: 'Обязательное поле' })
      .min(2, 'Строка должна содержать не менее 2 символов.'),

    lastName: z
      .string({ message: 'Обязательное поле' })
      .min(2, 'Строка должна содержать не менее 2 символов.'),

    phoneNumber: z
      .string()
      .min(13, 'Строка должна содержать не менее 13 символов.'),

    email: z
      .string()
      .min(1, 'Обязательное поле')
      .email({ message: 'Неверный адрес электронной почты' }),

    password: z
      .string({ message: 'Обязательное поле' })
      .min(8, 'Строка должна содержать не менее 8 символов')
      .regex(
        /^.*(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Пароль должен содержать одну заглавную букву и одну цифру.'
      ),

    confirmPassword: z
      .string()
      .regex(
        /^.*(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Пароль должен содержать одну заглавную букву и одну цифру.'
      ),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают!',
    path: ['confirmPassword'],
  });

export type SignUpFormSchema = (typeof signUpSchema)['_output'];
