import { ComponentMeta } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Header } from './Header';

export default {
  title: 'UI/Molecules/Header',
  decorators: [(Story) => (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )],
} as ComponentMeta<typeof Header>;


export const _Header = () => (
  <Header />
)
