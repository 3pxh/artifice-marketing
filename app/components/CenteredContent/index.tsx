import type { StackProps } from "../Stack";
import { Stack } from "../Stack";

type CenteredContentProps = StackProps & {
  background?: string;
  color?: string;
  contentWidth?: 'narrow' | 'wide';
  paddingY?: number;
  textAlignment?: 'left' | 'center' | 'right';
  children?: JSX.Element;
};

export const CenteredContent = (props: CenteredContentProps) => {
  const { 
    heading,
    headingSize,
    description,
    background,
    color,
    contentWidth,
    paddingY,
    textAlignment,
    children 
  } = props;

  return (
    <section className={`
      CenteredContent 
      ${background ? `_bg-${background}` : ''} 
      ${color ? `_text-${color}` : ''} 
      ${paddingY ? `_pY-${paddingY}` : ''}
      ${textAlignment ? `_text-${textAlignment}` : ''}
    `}>
      <div className={`CenteredContent-content _container ${contentWidth && `-width-${contentWidth}`}`}>
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
