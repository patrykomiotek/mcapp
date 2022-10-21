import { forwardRef, InputHTMLAttributes } from 'react';
import type { Ref } from 'react';

type Props = {
  readonly id: string;
  readonly label: string;
  readonly type?: "text" | "email" | "password" | "number";
  readonly value?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef((
  {
    id,
    label,
    type = 'text',
    value = '',
    ...rest
  } : Props,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        id={id}
        ref={ref}
        type={type}
        defaultValue={value}
      />
    </div>
  );
});

export { Input };
