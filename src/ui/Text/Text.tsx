type Props = {
  readonly children: string;
}

const Text = ({ children }: Props) => {
// const Text = (props: Props) => {
  // const { children } = props;
  return (
    <p>{children}</p>
  );
}

export { Text };

// import Text from './'
// import Kaczka from './'