import { Heading } from "../Heading";

export type StackProps = {
  heading?: string;
  headingSize?: number;
  description?: string;
  link?: string;
  linkText?: string;
};

export const Stack = (props: StackProps) => {
  const { 
    heading, 
    headingSize = 3, 
    description, 
    link, 
    linkText 
  } = props;

  if (heading || description || link || linkText) {
    return (
      <div className="Stack">
        {heading && (
          <Heading size={headingSize} className="Stack-heading">
            {heading}
          </Heading>
        )}

        {description && (
          <p className="Stack-description">
            {description}
          </p>
        )}

        {link && linkText && (
          <a className="Button" href={link}>
            {linkText}
          </a>
        )}
      </div>
    );
  } else {
    return null;
  }
};
