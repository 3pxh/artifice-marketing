import { Form as RemixForm } from "@remix-run/react";

type FormProps = {
  children?: JSX.Element;
};

export const Form = (props: FormProps) => {
  return (
    <section className="Form">
      <RemixForm className="Form-form">
        <input type="email" placeholder="Email address" />

        <button className="Button" type="submit">
          Subscribe
        </button>
      </RemixForm>
    </section>
  );
};
