import { Stack } from "../Stack";

type NarrowCenteredContentProps = {
  heading: string;
  headingSize?: number;
  description: string;
  children?: JSX.Element;
};

export const NarrowCenteredContent = (props: NarrowCenteredContentProps) => {
  const { heading, headingSize, description, children } = props;

  return (
    <section className="NarrowCenteredContent">
      <div className="_container">
        <Stack
          heading={heading}
          headingSize={headingSize}
          description={description}
        />

        {children}
      </div>
    </section>
  );
};
