import { forwardRef } from 'react';
import type { Ref, ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'button'> {
}

const Button = forwardRef((
  { ...rest } : Props,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      {...rest}
      ref={ref}
    />
  );
});

export { Button };
