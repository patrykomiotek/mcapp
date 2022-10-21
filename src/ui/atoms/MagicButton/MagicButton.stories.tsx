import { useRef, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { ComponentMeta } from '@storybook/react';

import { MagicButton } from './MagicButton';

export default {
  title: 'UI/Atoms/MagicButton',
} as ComponentMeta<typeof MagicButton>;


export const _MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current
    if (button) {
      button.style.backgroundColor = 'red';
      button.style.color = 'white';
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    const button = buttonRef.current
    if (button) {
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
    }
  }

  return (
    <MagicButton ref={buttonRef} onMouseEnter={handleMouseEnter}>
      Click me
    </MagicButton>
  );
};
