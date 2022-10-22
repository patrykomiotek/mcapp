import { ComponentMeta } from '@storybook/react';

import { Generator } from './Generator';
import { ThemeProvider } from '@components/Theme';

export default {
  title: 'App/Generator',
} as ComponentMeta<typeof Generator>;


export const _Generator = () => (
  <ThemeProvider><Generator /></ThemeProvider>
);

