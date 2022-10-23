import { renderHook, act } from '@testing-library/react';

import { useTheme } from './ThemeProvider';

describe('useTheme hook', () => {
  it('should return toggle values', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggle();
    });

    expect(result.current.theme).toBe('dark');
  })
});
