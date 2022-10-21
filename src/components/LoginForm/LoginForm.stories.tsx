import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'App/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmit: { action: 'submit' },
  },
  args: {

  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

export const WithData = Template.bind({});
WithData.args = {
  data: {
    email: 'patryk.omiotek@gmail.com',
    password: '123',
    language: 'pl',
  }
};
