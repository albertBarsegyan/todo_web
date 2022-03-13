import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { LoginFormFieldNames } from '../../constants/form.constants';
import { RoutePaths } from '../../constants/route.constants';
import { useAuth } from '../../hooks/useAuth';
import { loginFormSchema } from '../../yupSchemas/login.schema';
import Button from '../buttons/button';
import { ForwardInput } from '../inputs/input';

export default function LoginForm() {
  const { login, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema), mode: 'onChange' });

  const onSubmit = async (data: FieldValues) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 p-5 shadow-md">
      <ForwardInput
        placeholder="Provide email"
        errorMessage={errors?.[LoginFormFieldNames.email]?.message}
        {...register(LoginFormFieldNames.email)}
      />

      <ForwardInput
        placeholder="Provide password"
        type="password"
        errorMessage={errors?.[LoginFormFieldNames?.password]?.message}
        {...register(LoginFormFieldNames.password)}
      />
      <div className="flex flex-row items-center justify-between w-full">
        <Button type="submit">{loading ? 'Loading...' : 'Login'}</Button>

        <div>
          <span className="mr-2 text-purple-400">Do you want to</span>
          <Link
            to={RoutePaths.REGISTER}
            className="text-purple-600 underline decoration-1"
          >
            Register?
          </Link>
        </div>
      </div>
    </form>
  );
}
