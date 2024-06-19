import { CompaniesContainer } from './companies-container';

export function CompanySection() {
  return (
    <section className="w-screen py-6">
      <div className="flex flex-col items-center px-4 pb-6 gap-8">
        <h6 className="pt-2 pb-8 md:pb-12 text-muted-foreground font-semibold text-2xl">
          Trusted by 150+ companies
        </h6>
        <CompaniesContainer />
      </div>
    </section>
  );
}
