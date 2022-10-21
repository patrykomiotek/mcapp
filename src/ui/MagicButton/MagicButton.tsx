import { MouseEventHandler, useEffect, useRef } from "react";

type Props = {
  children: string;
}

const MagicButton = ({ children }: Props) => {
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
    <button
      ref={buttonRef}
      style={{ backgroundColor: 'blue' }}
      onMouseEnter={handleMouseEnter}
    >
        {children}
    </button>
  );
}

export { MagicButton };
