type Props = {
  // readonly 'data-testid'?: string;
  readonly dataTestid?: string;
  readonly children: string;
}

const Text = ({ children, dataTestid }: Props) => {
// const Text = (props: Props) => {
  // const { children } = props;
  return (
    <p data-testid={dataTestid}>{children}</p>
  );
}

export { Text };

// import Text from './'
// import Kaczka from './'