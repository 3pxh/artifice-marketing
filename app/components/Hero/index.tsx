import { Heading } from "../Heading";

type HeroProps = {
  heading: string;
  description?: string;
};

export const Hero = (props: HeroProps) => {
  const { heading, description } = props;

  return (
    <section className="Hero">
      <div className="_container">
        <Heading size={1}>
          {heading}
        </Heading>

        <p className="Hero-description">
          {description}
        </p>
      </div>
    </section>
  );
};
