import { Heading } from "../Heading";

type CardsProps = {
  items: any;
};

export const Cards = (props: CardsProps) => {
  const { items } = props;

  return (
    <section className="Cards">
      {items?.map((item: { 
        heading: string; 
        description: string; 
        link: string; 
        image: string 
      }) => {
        const { heading, description, link, image } = item;

        return (
          <article className="Cards-card" key={item.heading}>
            <img className="Cards-image" src={image} alt={item.heading} />

            <Heading size={3} className="Cards-heading">
              {heading}
            </Heading>

            <p className="Cards-description">
              {description}
            </p>

            <a className="Button" href={link}>
              Play Now →
            </a>
          </article>
        );
      })}
    </section>
  );
};
