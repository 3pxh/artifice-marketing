import { Heading } from "../Heading";

type StackProps = {
  heading: string;
  headingSize?: number;
  description: string;
  link?: string;
  linkText?: string;
};

export const Stack = (props: StackProps) => {
  const { heading, headingSize = 3, description, link, linkText } = props;

  return (
    <div className="Stack">
      <Heading size={headingSize} className="Stack-heading">
        {heading}
      </Heading>

      <p className="Stack-description">
        {description}
      </p>

      {link && linkText && (
        <a className="Button" href={link}>
          {linkText}
        </a>
      )}
    </div>
  );
};
