import { Form } from "~/components/Form";
import { Heading } from "~/components/Heading";
import { Hero } from "~/components/Hero";
import { HorizontalCards } from "~/components/HorizontalCards";
import { CenteredContent } from "~/components/CenteredContent";
import { VerticalCards } from "~/components/VerticalCards";
import games from "~/data/games";
import styles from "~/styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Styles() {
  return (
    <>
      <Hero heading="Style Guide" description="This is a style guide for the Artifice Games website. It is a work in progress, and will be updated as the site is developed." />

      <div className="StyleGuide _container">
        <p className="StyleGuide-heading">
          Typography
        </p>

        <Heading size={1} className="_type-xl">XL Heading</Heading>
        <Heading size={1}>Heading 1</Heading>
        <Heading size={2}>Heading 2</Heading>
        <Heading size={3}>Heading 3</Heading>
        <Heading size={4}>Heading 4</Heading>
        <Heading size={5}>Heading 5</Heading>

        <p>
          Lorem ipsum is a placeholder text commonly used in <strong>publishing, graphic design, and web development</strong>. It consists of nonsensical Latin words and phrases, which are designed to simulate the <em>appearance of real text</em> without conveying any actual meaning.
        </p>

        <p>
          The Lorem ipsum text has been used in the printing and typesetting industry since the 1500s and is believed to have originated from a scrambled version of a Latin text by Cicero. The purpose of using Lorem ipsum is to demonstrate the visual layout of a document without getting distracted by the content itself. While the text does not make any sense, it has a relatively standard distribution of letters and words, which makes it a suitable placeholder for testing formatting, layout, and design.
        </p>

        <small>Small text</small>

        <ul>
          <li>Unordered list item</li>
          <li>Unordered list item</li>
          <li>Unordered list item</li>
        </ul>

        <ol>
          <li>Ordered list item</li>
          <li>Ordered list item</li>
          <li>Ordered list item</li>
        </ol>

        <p className="StyleGuide-heading">
          Horizontal Cards
        </p>

        <HorizontalCards items={games} />

        <p className="StyleGuide-heading">
          Vertical Cards
        </p>

        <VerticalCards items={games} />

        <p className="StyleGuide-heading">
          Centered Content
        </p>

        <p className="StyleGuide-subheading">
          Generic content
        </p>

        <CenteredContent 
          contentWidth="narrow"
          paddingY={3}
          heading="Learn more about Artifice" 
          description="The Lorem ipsum text has been used in the printing and typesetting industry since the 1500s and is believed to have originated from a scrambled version of a Latin text by Cicero. The purpose of using Lorem ipsum is to demonstrate the visual layout of a document without getting distracted by the content itself. While the text does not make any sense, it has a relatively standard distribution of letters and words, which makes it a suitable placeholder for testing formatting, layout, and design." 
          children={
            <Form />
          }
        />

        <p className="StyleGuide-subheading">
          Newsletter form
        </p>

        <CenteredContent 
          background="purple-1"
          color="white"
          contentWidth="narrow"
          paddingY={5}
          heading="Subscribe for updates" 
          description="Get the latest updates on news and games from Artifice delivered straight to your inbox." 
          textAlignment="center"
          children={
            <Form />
          }
        />
      </div>
    </>
  );
}