import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TextField } from '../../../components/TextField';
import { SignUpFormValues, signUpSchema } from './signUpSchema';
import { Button } from '../../../components/Button';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex-grow mx-auto max-w-screen-sm'
    >
      <TextField
        id='userName'
        label='User name'
        errorMessage={errors.userName?.message}
        {...register('userName')}
      />
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
      <TextField
        id='confirmPassword'
        label='Confirm password'
        errorMessage={errors.confirmPassword?.message}
        type='password'
        {...register('confirmPassword')}
      />
      <Button
        text='SIGN UP '
        type='submit'
        className='mt-10'
      />
    </form>
  );
};

export default SignUpForm;
