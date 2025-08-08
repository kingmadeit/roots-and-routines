import { siteData } from "@/data";

const { company: {foundedWith, whyItMatters} } = siteData;
const CompanySummary = () => {
  return (
    <section className="company-summary p-8 bg-secondary-light rounded-[3rem]">
      <h4 className="text-sub-heading text-accent">ABOUT US</h4>
      <h2 className="text-heading text-primary leading-1">{whyItMatters}</h2>
      <p className="text-body text-accent">{foundedWith}</p>
    </section>
  )
}

export default CompanySummary