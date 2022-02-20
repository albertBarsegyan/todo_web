import { FieldValues, useForm } from "react-hook-form";
import { LoginFormFieldNames } from "../../constants/form.constants";
import { ForwardInput } from "../inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../yupSchemas/login.schema";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../constants/route.constants";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema), mode: "onChange" });

  const onSubmit = (data: FieldValues) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 shadow-md p-5">
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
      <div className="w-full flex flex-row justify-between items-center">
        <Button type="submit">Login</Button>

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
