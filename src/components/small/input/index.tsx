
type Props = {
  className?: string;
  type?: string;
  value?: string|number
}

export const InputHelper: React.FC<Props> = (props) => {
  return (
    <input {...props} />
  );
}