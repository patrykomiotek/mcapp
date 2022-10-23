import { renderHook } from '@testing-library/react';

import { useViewport } from './useViewport';

describe('useViewport hook', () => {
  it('should return viewport values', () => {
    const { result } = renderHook(() => useViewport());

    expect(result.current).toStrictEqual({ x: 0, y: 0 }); // 1024 x 768...
  })
});
