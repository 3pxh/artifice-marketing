type HeadingProps = {
  size: number;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  const Element = `h${props.size}` as keyof JSX.IntrinsicElements;
  return <Element className={props.className}>{props.children}</Element>;
};
