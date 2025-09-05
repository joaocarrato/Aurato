import { stringUtils } from '@utils';
import z from 'zod';

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(3, 'Nome inválido')
      .transform(stringUtils.capitalizeFirstLetter),
    email: z.email('Email inválido'),
    password: z.string().min(8, 'Senha deve conter pelo menos 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'Senha deve conter pelo menos 8 caracteres'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
