import { v4 as uuidv4 } from 'uuid';
import { MouseEventHandler, useState } from 'react';

import './Generator.css';

import { Text } from '@atoms/Text';
import { ThemeSwitcher, useThemeContext } from '@components/Theme';

const Generator = () => {
  const [id, setId] = useState(uuidv4());
  const context = useThemeContext();

  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  // const handleClick: MouseEventHandler<HTMLButtonElement | HTMLHeadElement> = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    // id = uuidv4();
    setId(uuidv4());
  }

  return (
    <div className={context.theme}>
      <Text>{id}</Text>
      {/* <h2 onClick={handleClick}>Generate new id</h2> */}
      <button onClick={handleClick}>Generate</button>
      <ThemeSwitcher />
    </div>
  );
}

export { Generator };
