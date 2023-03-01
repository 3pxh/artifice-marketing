import { Heading } from "../Heading";

type StackProps = {
  heading: string;
  headingSize: number;
  description: string;
  link: string;
  linkText: string;
};

export const Stack = (props: StackProps) => {
  const { heading, headingSize, description, link, linkText } = props;

  return (
    <div className="Stack">
      <Heading size={headingSize} className="Stack-heading">
        {heading}
      </Heading>

      <p className="Stack-description">
        {description}
      </p>

      <a className="Button" href={link}>
        {linkText}
      </a>
    </div>
  );
};
