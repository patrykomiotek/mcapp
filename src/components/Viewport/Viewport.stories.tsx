import { ComponentMeta } from '@storybook/react';

import { Viewport } from './Viewport';

export default {
  title: 'App/Viewport',
} as ComponentMeta<typeof Viewport>;


export const _Viewport = () => (
  <Viewport />
);
