import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms'],
      method: 'numeric'
    },
  },
}

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
