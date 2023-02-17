import styles from "~/styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Styles() {
  return (
    <>
      <section className="Hero">
        <div className="_container">
          <h1 className="Hero-title">
            Style Guide
          </h1>

          <p className="Hero-description _type-h5">
            This is a style guide for the Artifice Games website. It is a work in progress, and will be updated as the site is developed.
          </p>
        </div>
      </section>

      <section className="StyleGuide _container">
        <p className="StyleGuide-heading _type-h5">
          Typography
        </p>

        <h1 className="_type-xl">XL Heading</h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>

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

        <p className="StyleGuide-heading _type-h5">
          Cards
        </p>

        <div className="Cards">
          <div className="Card">
            <img className="Card-image" src="https://images.unsplash.com/photo-1585881728919-5c0ce925ad10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />

            <h3 className="Card-title _type-h4">Gisticle</h3>

            <p className="Card-description">
              Lorem ipsum is a placeholder text commonly used in publishing, graphic design, and web development.
            </p>

            <a className="Card-button Button" href="/">
              Play Now →
            </a>
          </div>

          <div className="Card">
            <img className="Card-image" src="https://images.unsplash.com/photo-1585881728919-5c0ce925ad10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />

            <h3 className="Card-title _type-h4">Farsketched</h3>

            <p className="Card-description">
              Lorem ipsum is a placeholder text commonly used in publishing, graphic design, and web development.
            </p>

            <a className="Card-button Button" href="/">
              Play Now →
            </a>
          </div>

          <div className="Card">
            <img className="Card-image" src="https://images.unsplash.com/photo-1585881728919-5c0ce925ad10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />

            <h3 className="Card-title _type-h4">Tresmojis</h3>

            <p className="Card-description">
              Lorem ipsum is a placeholder text commonly used in publishing, graphic design, and web development.
            </p>

            <a className="Card-button Button" href="/">
              Play Now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}