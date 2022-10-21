import { v4 as uuidv4 } from 'uuid';
import { MouseEventHandler, useState } from 'react';

import { Text } from '../../ui';

const Generator = () => {
  const [id, setId] = useState(uuidv4());

  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  // const handleClick: MouseEventHandler<HTMLButtonElement | HTMLHeadElement> = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    // id = uuidv4();
    setId(uuidv4());
  }

  return (
    <>
      <Text>{id}</Text>
      {/* <h2 onClick={handleClick}>Generate new id</h2> */}
      <button onClick={handleClick}>Generate</button>
    </>
  );
}

export { Generator };
