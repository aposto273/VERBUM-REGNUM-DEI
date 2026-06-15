interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-2xl font-bold mb-6 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};