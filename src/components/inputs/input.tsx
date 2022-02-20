import { forwardRef, HTMLInputTypeAttribute } from "react";
import { InputVariants } from "../../constants/input.constants";

const inputStyles =
  "border border-purple-400 placeholder:text-purple-300 text-purple-400 focus:border-green-500  outline-none block w-full px-2 py-1 sm:text-md rounded-sm focus:text-green-500 duration-75";

function RegularInput({ ...props }) {
  return <input {...props} className={inputStyles} />;
}

export const ForwardInput = forwardRef<React.LegacyRef<HTMLInputElement>, any>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col justify-start items-start max-w-4xl">
        <input {...props} className={inputStyles} ref={ref} />
        <div>
          <span className="text-red-400 text-xs mt-1 ml-1 break-words">
            {errorMessage}
          </span>
        </div>
      </div>
    );
  }
);

export default function Input({
  variant = InputVariants.REGULAR,
  errorMessage,
  ...props
}: {
  variant?: InputVariants;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
}) {
  const renderInputVariants = (variant: InputVariants) => {
    switch (variant) {
      case InputVariants.FIELD:
        return (
          <div className="flex flex-col justify-start items-center my-2">
            <RegularInput {...props} />
            <div>
              <span className="text-sm text-red-600">{errorMessage}</span>
            </div>
          </div>
        );

      case InputVariants.REGULAR:
        return <RegularInput {...props} />;

      default:
        throw new Error("Choose input variant");
    }
  };

  return <>{renderInputVariants(variant)}</>;
}
