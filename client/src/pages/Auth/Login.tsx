import { Button } from '../../components/Global/Button/Button';
import { Container, Title } from './Auth.styled';
import { Form } from '../../components/Global/Form/Form';
import { paths } from '../../routes/paths';
import { setUser } from '../../redux/slices/user';
import { TextInput } from '../../components/Global/inputs/TextInput/TextInput';
import { toastNotify } from '../../utils/toast/toastNotify';
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../redux/apiSlices/user';
import { Navigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Login = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector();

  const [signIn, { isLoading }] = useLoginMutation();

  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    reset,
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(loginValidation),
    defaultValues: {
      email: 'your.email@gmail.com',
      password: 'StrongPassword1!',
    },
  });

  const onSubmit = handleSubmit((data) => {
    signIn(data)
      .unwrap()
      .then((payload) => payload && dispatch(setUser(payload)))
      .catch((error) => toastNotify(error));
  });

  if (user._id) return <Navigate to={paths.profile} />;

  return (
    <Container>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title>Login</Title>
        <TextInput
          {...register('email')}
          error={errors?.email?.message}
          label={'Email'}
          placeholder={'your.email@gmail.com'}
          type={'email'}
        />
        <TextInput
          {...register('password')}
          error={errors?.password?.message}
          label={'Password'}
          placeholder={'StrongPassword1!'}
          type={'password'}
        />
        <Form.ButtonsWrapper>
          <Button isLoading={isLoading} type={'reset'}>
            Reset
          </Button>
          <Button
            disabled={!isValid && !isDirty}
            isLoading={isLoading}
            type={'submit'}
          >
            Login
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </Container>
  );
};

export const loginValidation = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .lowercase('Only lowercase letters')
    .max(128, 'Email cannot exceed 128 characters')
    .email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .trim('Password cannot contain leading and trailing spaces')
    .strict(true)
    .min(6, 'Password must be at least 6 characters long')
    .max(72, 'Password cannot exceed 72 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[#$!.%& *?])[A-Za-z\d#$!.%& *?]{6,72}$/,
      'Password must contain, one uppercase, one number and one special case character: # $ ! . % & * ? ',
    ),
});

export type LoginSchema = yup.InferType<typeof loginValidation>;
