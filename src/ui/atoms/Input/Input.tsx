import { forwardRef } from 'react';
import type { Ref, ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'input'> {
  label: string;
}

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
