import { useForm } from "react-hook-form";
import { RegisterFormFieldNames } from "../../constants/form.constants";
import { ForwardInput } from "../inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../buttons/button";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../constants/route.constants";
import { ImageInput } from "../inputs/imageInput";
import { registerFormSchema } from "../../yupSchemas/register.schema";
import { loginFormSchema } from "../../yupSchemas/login.schema";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema), mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 shadow-md p-5">
      <ForwardInput
        placeholder="First Name"
        errorMessage={errors?.[RegisterFormFieldNames.firstName]?.message}
        {...register(RegisterFormFieldNames.firstName)}
      />

      <ForwardInput
        placeholder="Last name"
        errorMessage={errors?.[RegisterFormFieldNames?.lastName]?.message}
        {...register(RegisterFormFieldNames.lastName)}
      />

      <ForwardInput
        placeholder="Email"
        errorMessage={errors?.[RegisterFormFieldNames?.email]?.message}
        {...register(RegisterFormFieldNames.email)}
      />
      <ForwardInput
        placeholder="Password"
        errorMessage={errors?.[RegisterFormFieldNames?.password]?.message}
        {...register(RegisterFormFieldNames.password)}
      />

      <ForwardInput
        placeholder="Repeat Password"
        errorMessage={
          errors?.[RegisterFormFieldNames?.confirmPassword]?.message
        }
        {...register(RegisterFormFieldNames.confirmPassword)}
      />

      <ImageInput
        placeholder="Upload profile picture"
        {...register(RegisterFormFieldNames.profilePicture)}
        errorMessage={errors?.[RegisterFormFieldNames?.profilePicture]?.message}
      />

      <div className="w-full flex flex-row justify-around items-center">
        <Button type="submit">Register</Button>
        <div>
          <span className="text-purple-400 mr-2">Do you have account?</span>
          <Link
            to={RoutePaths.LOGIN}
            className="text-purple-500 underline decoration-1"
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
