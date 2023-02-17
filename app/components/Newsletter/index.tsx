import { Heading } from "../Heading";
import { Form } from "@remix-run/react";

type NewsletterProps = {
  heading: string;
  description?: string;
};

export const Newsletter = (props: NewsletterProps) => {
  const { heading, description } = props;

  return (
    <section className="Newsletter">
      <div className="_container">
        <Heading size={2} className="Newsletter-heading">
          {heading}
        </Heading>

        <p className="Newsletter-description">
          {description}
        </p>

        <Form className="Newsletter-form">
          <input type="email" placeholder="Email address" />

          <button className="Button" type="submit">
            Subscribe
          </button>
        </Form>
      </div>
    </section>
  );
};
