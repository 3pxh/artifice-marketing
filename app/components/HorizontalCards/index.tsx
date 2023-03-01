import { Stack } from "../Stack";

type HorizontalCardsProps = {
  items: any;
};

export const HorizontalCards = (props: HorizontalCardsProps) => {
  const { items } = props;

  return (
    <section className="HorizontalCards">
      {items?.map((item: { 
        heading: string; 
        headingSize?: number;
        description: string; 
        link: string; 
        linkText: string;
        image: string 
      }) => {
        const { 
          heading, 
          headingSize = 3, 
          description, 
          link, 
          linkText, 
          image 
        } = item;

        return (
          <article className="HorizontalCards-card" key={item.heading}>
            <img className="HorizontalCards-image" src={image} alt={item.heading} />

            <Stack
              heading={heading}
              headingSize={headingSize}
              description={description}
              link={link}
              linkText={linkText}
            />
          </article>
        );
      })}
    </section>
  );
};
