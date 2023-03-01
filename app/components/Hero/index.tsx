import type { StackProps } from "../Stack";
import { Stack } from "../Stack";

export const Hero = (props: StackProps) => {
  const { heading, headingSize, description } = props;

  return (
    <section className="Hero">
      <div className="_container">
        <Stack
          heading={heading}
          headingSize={headingSize}
          description={description}
        />
      </div>
    </section>
  );
};
