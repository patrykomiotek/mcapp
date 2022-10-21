import { forwardRef } from 'react';
import type { MouseEventHandler, Ref } from "react";

type Props = {
  children: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>
}

// forwardRef((props, ref) => Component)
// const MagicButton = forwardRef<HTMLButtonElement, Props>((
const MagicButton = forwardRef((
  { onMouseEnter, children }: Props,
  ref: Ref<HTMLButtonElement>,
) => {

  return (
    <button
      ref={ref}
      style={{ backgroundColor: 'blue' }}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </button>
  );

});

// ({onMouseEnter, children }: Props) => {

//   return (
//     <button
//       ref={buttonRef}
//       style={{ backgroundColor: 'blue' }}
//       onMouseEnter={onMouseEnter}
//     >
//         {children}
//     </button>
//   );
// }

export { MagicButton };
