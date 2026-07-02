// DiSalvo Law Office — Felony Defense Page (/pg/felony-defense-fresno)
import PracticeAreaTemplate from "@/components/PracticeAreaTemplate";

const faqs = [
  { q: "What is a felony in California?", a: "A felony is a serious crime punishable by more than one year in state prison. Felonies include crimes like murder, robbery, rape, burglary, and serious drug offenses. A felony conviction can result in loss of voting rights, firearm rights, and professional licenses." },
  { q: "What is a 'wobbler' offense in California?", a: "A wobbler is an offense that can be charged as either a misdemeanor or a felony depending on the circumstances and the prosecutor's discretion. Attorney DiSalvo works to have wobbler offenses charged or reduced to misdemeanors whenever possible." },
  { q: "Can a felony charge be reduced to a misdemeanor?", a: "Yes, in many cases. Through skilled negotiation, Attorney DiSalvo may be able to have felony charges reduced to misdemeanors, which carry significantly less severe penalties and consequences." },
  { q: "What are California's Three Strikes laws?", a: "California's Three Strikes law mandates a minimum 25-years-to-life sentence for defendants convicted of a third serious or violent felony. If you have prior strike convictions, it is absolutely critical to have experienced legal representation." },
  { q: "How does bail work for felony charges in Fresno?", a: "Bail for felony charges is typically higher than for misdemeanors and may be denied for the most serious offenses. Attorney DiSalvo can argue for reasonable bail at your arraignment and work to secure your release while your case is pending." },
  { q: "What happens if I am convicted of a felony in California?", a: "A felony conviction can result in state prison time, heavy fines, probation, loss of voting rights while incarcerated, loss of the right to own firearms, difficulty finding employment, and immigration consequences for non-citizens. Fighting the charges aggressively from the start is essential." },
];

export default function FelonyDefensePage() {
  return (
    <PracticeAreaTemplate
      slug="felony-defense-fresno"
      h1="Felony Defense Attorney Fresno, CA"
      accentWord="Felony Defense"
      intro="Felony charges in California carry life-altering consequences — state prison time, loss of civil rights, and a permanent criminal record that follows you for life. When the stakes are this high, you need an attorney who will fight with everything they have. Attorney Mario DiSalvo has defended hundreds of felony cases in Fresno County and throughout the Central Valley, from assault and robbery to serious drug offenses and violent crimes. He understands what is at stake and will build the strongest possible defense for your case."
      whatWeHandle={[
        "Assault and battery",
        "Robbery and armed robbery",
        "Burglary (residential and commercial)",
        "Weapons charges",
        "Drug trafficking and manufacturing",
        "Sex crimes",
        "Homicide and manslaughter",
        "Kidnapping",
        "Carjacking",
        "Grand theft",
        "Three Strikes cases",
        "Federal felony charges",
      ]}
      processSteps={[
        { step: "01", title: "Immediate Intervention", body: "Early involvement is critical in felony cases. Attorney DiSalvo begins investigating before charges are even filed, preserving evidence and protecting your rights." },
        { step: "02", title: "Preliminary Hearing", body: "We challenge the prosecution's evidence at the preliminary hearing to test whether there is sufficient cause to proceed to trial." },
        { step: "03", title: "Discovery & Investigation", body: "We obtain all evidence, interview witnesses, consult experts, and identify every weakness in the prosecution's case." },
        { step: "04", title: "Trial or Negotiation", body: "We negotiate aggressively for dismissal or reduction. If trial is necessary, we are fully prepared to present a powerful defense before a jury." },
      ]}
      whyPrivate="Felony cases are among the most complex and consequential matters in the criminal justice system. The prosecution has significant resources and experience. You need an attorney who has the time, skill, and dedication to match them. A private attorney can conduct a thorough independent investigation, hire expert witnesses, and devote the attention your case deserves — something a public defender with hundreds of cases simply cannot do."
      faqs={faqs}
      relatedAreas={["criminal-defense-fresno", "domestic-violence-defense-fresno", "drug-crimes-fresno"]}
      relatedCities={["fresno-criminal-defense-lawyer", "clovis-criminal-defense-lawyer", "madera-criminal-defense-lawyer"]}
    />
  );
}
