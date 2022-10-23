import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Generator } from './Generator';
import { ThemeProvider } from '@components/Theme';

describe('<Generator /> component', () => {
  // it.todo('should display uuid on start');
  it('should display new value after click', () => {
    const { container } = render(<ThemeProvider><Generator /></ThemeProvider>);

    const uidElem = screen.getByText(/[a-z0-9-]{36}/i).textContent;
    // console.log(uidElem.textContent);

    // const uidElem2 = container.querySelector('p');
    // console.log(uidElem2?.textContent);

    // const uidElem3 = screen.getByTestId('uid-text');
    // console.log(uidElem3?.textContent);

    // const uidElem2 = {...uidElem };

    userEvent.click(screen.getByText(/generate/i));

    const uidElem2 = screen.getByText(/[a-z0-9-]{36}/i).textContent;

    // const uidElem2 = screen.getByText(/[a-z0-9-]{36}/i);
    // console.log(uidElem.textContent);

    expect(uidElem2).not.toBe(uidElem);
    // expect().toBe()
    // expect().toEqual()
    // expect().toStrictEqual()

  });
});