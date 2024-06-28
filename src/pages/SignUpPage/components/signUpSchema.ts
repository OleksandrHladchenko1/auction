import { z } from 'zod';

export const signUpSchema = z.object({
  userName: z.string().min(1, 'User name should be longer than 1 symbol!'),
  email: z.string().email('Invalid email!'),
  password: z.string().min(5, 'Password should be longer than 5 symbols!'),
  confirmPassword: z.string().min(5, 'Password should be longer than 5 symbols!'),
}).refine(data => data.confirmPassword === data.password, {
  path: ['confirmPassword'],
  message: 'Passwords are not equal!',
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
