import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { LogInFormValues, logInSchema } from '.';
import { TextField } from '../../../components/TextField';

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<LogInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = (data: LogInFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex-grow mx-auto max-w-screen-sm'
    >
      <TextField
        id='email'
        label='Email'
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <TextField
        id='password'
        label='Password'
        errorMessage={errors.password?.message}
        type='password'
        {...register('password')}
      />
      <Button
        text='LOG IN'
        type='submit'
        className='mt-10'
      />
    </form>
  );
};

export default LogInForm;