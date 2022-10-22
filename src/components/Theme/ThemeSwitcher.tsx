import { useThemeContext } from './ThemeProvider';

const ThemeSwitcher = () => {
  const context = useThemeContext();

  return (
    <button onClick={() => context.toggle()}>Toggle</button>
  );
}

export { ThemeSwitcher };
