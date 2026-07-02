// DiSalvo Law Office — Domestic Violence Defense Page
import PracticeAreaTemplate from "@/components/PracticeAreaTemplate";

const faqs = [
  { q: "What happens after a domestic violence arrest in California?", a: "After a domestic violence arrest, you will typically be held for at least 72 hours before bail is set. A protective order will likely be issued preventing contact with the alleged victim. The prosecutor — not the victim — decides whether to pursue charges, so the case can proceed even if the alleged victim does not want to press charges." },
  { q: "Can domestic violence charges be dropped if the victim doesn't want to press charges?", a: "The decision to prosecute rests with the district attorney, not the alleged victim. Even if the victim recants or refuses to cooperate, the prosecution may proceed using other evidence. However, a victim's lack of cooperation can significantly affect the strength of the case." },
  { q: "What is a protective order and how does it affect me?", a: "A protective order (restraining order) prohibits you from contacting or coming near the alleged victim. Violating a protective order is a separate criminal offense. Attorney DiSalvo can work to modify or lift protective orders when appropriate." },
  { q: "Will a domestic violence conviction affect my custody rights?", a: "Yes. A domestic violence conviction can have serious consequences for child custody and visitation rights. Courts take domestic violence allegations very seriously in family law proceedings. This is another reason why aggressive defense from the start is so important." },
  { q: "What are the penalties for domestic violence in California?", a: "Domestic violence can be charged as a misdemeanor or felony depending on the severity of the alleged offense and prior history. Penalties can include jail or prison time, fines, mandatory counseling, probation, and a permanent criminal record." },
  { q: "Can false domestic violence allegations be defended against?", a: "Absolutely. False or exaggerated domestic violence allegations are not uncommon, particularly in contentious divorce or custody situations. Attorney DiSalvo thoroughly investigates the circumstances, gathers evidence, and challenges the credibility of false accusations." },
];

export default function DomesticViolencePage() {
  return (
    <PracticeAreaTemplate
      slug="domestic-violence-defense-fresno"
      h1="Domestic Violence Defense Attorney Fresno, CA"
      accentWord="Domestic Violence Defense"
      intro="Domestic violence charges in Fresno can destroy families, careers, and futures — even when the allegations are false or exaggerated. California takes domestic violence extremely seriously, and prosecutors pursue these cases aggressively. Attorney Mario DiSalvo provides a thorough, compassionate, and aggressive defense for people accused of domestic violence throughout Fresno County and the Central Valley. He understands the complexity of these cases and fights to protect your rights, your family, and your future."
      whatWeHandle={[
        "Spousal abuse / corporal injury",
        "Domestic battery",
        "Child abuse charges",
        "Elder abuse",
        "Stalking",
        "Criminal threats",
        "Violation of protective orders",
        "False imprisonment",
        "Assault and battery",
        "Harassment charges",
        "Protective order modifications",
        "False accusation defense",
      ]}
      processSteps={[
        { step: "01", title: "Immediate Response", body: "Contact us immediately after arrest. Attorney DiSalvo advises you on your rights and the protective order restrictions to avoid additional charges." },
        { step: "02", title: "Evidence Gathering", body: "We collect text messages, emails, photos, witness statements, and other evidence that supports your defense and challenges the prosecution's narrative." },
        { step: "03", title: "Protective Order Hearing", body: "We appear at protective order hearings to challenge or modify restrictions that may be affecting your access to your home, children, or workplace." },
        { step: "04", title: "Defense Strategy", body: "We build a comprehensive defense — whether challenging the credibility of allegations, presenting evidence of self-defense, or negotiating for reduced charges." },
      ]}
      whyPrivate="Domestic violence cases are emotionally charged and legally complex. They often involve competing narratives, family law implications, and the risk of a permanent criminal record. A private attorney can devote the time and resources necessary to thoroughly investigate the allegations, challenge the prosecution's evidence, and protect your rights at every stage of the proceedings."
      faqs={faqs}
      relatedAreas={["criminal-defense-fresno", "felony-defense-fresno"]}
      relatedCities={["fresno-criminal-defense-lawyer", "clovis-criminal-defense-lawyer", "visalia-criminal-defense-lawyer"]}
    />
  );
}
