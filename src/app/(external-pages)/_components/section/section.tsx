interface SectionProps {
  sectionHead: JSX.Element;
  body: JSX.Element;
  classes: string;
}

export function Section({ sectionHead, body, classes }: SectionProps) {
  return (
    <section className={`${classes} flex flex-col items-center px-4 sm:px-10`}>
      {sectionHead}
      {body}
    </section>
  );
}