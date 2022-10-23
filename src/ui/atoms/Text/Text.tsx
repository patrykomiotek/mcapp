import { memo } from 'react';

type Props = {
  // readonly 'data-testid'?: string;
  readonly dataTestid?: string;
  readonly children: React.ReactNode;
}

const Text = memo(({ children, dataTestid }: Props) => {
// const Text = (props: Props) => {
  // const { children } = props;

  console.log('render: Text component');

  return (
    <p data-testid={dataTestid}>{children}</p>
  );
});

export { Text };

// import Text from './'
// import Kaczka from './'