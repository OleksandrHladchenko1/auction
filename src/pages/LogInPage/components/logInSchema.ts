import { z } from 'zod';

export const logInSchema = z.object({
  email: z.string().email('Invalid email!'),
  password: z.string().min(5, 'Password should be longer than 5 symbols!'),
});

export type LogInFormValues = z.infer<typeof logInSchema>;
