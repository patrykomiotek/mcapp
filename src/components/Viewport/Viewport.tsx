import { useViewport } from '@hooks/useViewport';

const Viewport = () => {
  const size = useViewport();

  return (
    <div>
      x: {size.x} y: {size.y}
    </div>
  );
}

export { Viewport };