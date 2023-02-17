import { Cards } from "~/components/Cards";
import { Hero } from "~/components/Hero";
import games from "~/data/games";
import styles from "~/styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <>
      <Hero heading="Welcome to Artifice" description="This is a style guide for the Artifice Games website. It is a work in progress, and will be updated as the site is developed." />

      <div className="Homepage _container">
        <Cards items={games} />
      </div>
    </>
  );
}
