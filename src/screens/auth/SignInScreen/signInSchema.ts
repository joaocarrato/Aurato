import z from 'zod';

export const signInSchema = z.object({
  email: z.email('Email inválido'),
  password: z.string().min(8, 'Senha inválida'),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
