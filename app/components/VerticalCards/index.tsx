import { Stack } from "../Stack";

type VerticalCardsProps = {
  items: any;
};

export const VerticalCards = (props: VerticalCardsProps) => {
  const { items } = props;

  return (
    <section className="VerticalCards">
      {items?.map((item: { 
        heading: string; 
        description: string; 
        link: string; 
        image: string 
      }) => {
        const { heading, description, link, image } = item;

        return (
          <article className="VerticalCards-item" key={item.heading}>
            <img className="VerticalCards-image" src={image} alt={item.heading} />

            <div className="VerticalCards-content">
              <Stack
                heading={heading}
                headingSize={4}
                description={description}
                link={link}
                linkText="Play Now →"
              />
            </div>
          </article>
        );
      })}
    </section>
  );
};
