import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'UI/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
}

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Label',
  value: 'Hello!'
}

export const WithStyle = Template.bind({});
WithStyle.args = {
  label: 'Label',
  style: {
    border: '1px solid red'
  }
}