import { Form } from "@remix-run/react";
import { CenteredContent } from "~/components/CenteredContent";
import { Hero } from "~/components/Hero";
import styles from "~/styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <>
      <Hero heading="Get in touch" headingSize={1}  />

      <CenteredContent 
        contentWidth="narrow"
        paddingY={3}
        children={
          <Form className="Form">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name" />

            <label htmlFor="email">Email address</label>
            <input name="email" type="email" placeholder="Email address" />

            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder="Message" />

            <button className="Button" type="submit">
              Get in touch
            </button>
          </Form>
        }
      />
    </>
  );
}
