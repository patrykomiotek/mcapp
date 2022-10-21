import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'UI/Atoms/Button',
} as ComponentMeta<typeof Button>;


export const _Button = () => (
  <Button>Click me!</Button>
)
