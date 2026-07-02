// DiSalvo Law Office — DUI Defense Page (/pg/dui-defense-fresno)
import PracticeAreaTemplate from "@/components/PracticeAreaTemplate";

const faqs = [
  { q: "What happens after a DUI arrest in California?", a: "After a DUI arrest, you have 10 days to request a DMV hearing to contest your license suspension. You will also face criminal charges in court. Attorney DiSalvo handles both the DMV hearing and the criminal case to protect your driving privileges and your freedom." },
  { q: "Can a DUI charge be reduced or dismissed in Fresno?", a: "Yes. Many DUI cases can be reduced to a lesser charge or dismissed entirely. Attorney DiSalvo challenges breathalyzer calibration, field sobriety test procedures, the legality of the traffic stop, and other factors that can undermine the prosecution's case." },
  { q: "Will I lose my driver's license after a DUI?", a: "Not necessarily. You have the right to contest your license suspension at a DMV hearing. If you win the hearing, your license may be preserved. Even if suspended, you may be eligible for a restricted license. Act quickly — you have only 10 days after arrest to request a hearing." },
  { q: "What are the penalties for a first DUI in California?", a: "A first DUI in California can result in fines up to $1,000 plus assessments, license suspension, DUI school, probation, and potentially jail time. The consequences increase significantly for repeat offenses or if there was an accident or injury involved." },
  { q: "Can I refuse a breathalyzer test in California?", a: "California's implied consent law means that refusing a chemical test after a lawful DUI arrest results in an automatic license suspension and can be used against you in court. However, you are not required to submit to pre-arrest field sobriety tests or a preliminary alcohol screening device." },
  { q: "How long does a DUI stay on my record in California?", a: "A DUI conviction stays on your California driving record for 10 years and can affect your criminal record permanently unless expunged. Attorney DiSalvo can advise you on expungement eligibility after your case is resolved." },
];

export default function DUIDefensePage() {
  return (
    <PracticeAreaTemplate
      slug="dui-defense-fresno"
      h1="DUI Defense Attorney Fresno, CA"
      accentWord="DUI Defense"
      intro="A DUI charge in Fresno can have life-altering consequences — from license suspension and heavy fines to jail time and a permanent criminal record. Attorney Mario DiSalvo has extensive experience defending DUI cases throughout Fresno County and the Central Valley. He challenges every aspect of the prosecution's case, from the legality of the traffic stop to the accuracy of breathalyzer and blood test results, to give you the best possible chance of a favorable outcome."
      whatWeHandle={[
        "First-time DUI",
        "Repeat DUI offenses",
        "DUI with injury",
        "Felony DUI",
        "Underage DUI",
        "Drug DUI (DUID)",
        "DUI with high BAC (.15% or above)",
        "Commercial driver DUI",
        "DMV license suspension hearings",
        "DUI checkpoints",
        "Breathalyzer challenges",
        "Blood test challenges",
      ]}
      processSteps={[
        { step: "01", title: "Emergency Response", body: "Call immediately after arrest. Attorney DiSalvo advises you on your rights and begins building your defense from day one." },
        { step: "02", title: "DMV Hearing", body: "We file for a DMV hearing within the 10-day window to contest your license suspension and protect your driving privileges." },
        { step: "03", title: "Case Investigation", body: "We obtain all evidence — police reports, dashcam footage, breathalyzer records, and witness statements — and identify every weakness in the prosecution's case." },
        { step: "04", title: "Defense & Resolution", body: "We negotiate aggressively for dismissal or reduction, and if necessary, take your case to trial with a fully prepared defense strategy." },
      ]}
      whyPrivate="DUI cases involve complex scientific evidence, strict procedural requirements, and two separate proceedings — criminal court and the DMV. A private attorney with DUI defense experience can challenge breathalyzer calibration records, cross-examine the arresting officer, and identify constitutional violations that a public defender with a heavy caseload may not have time to pursue. The investment in quality legal representation can mean the difference between a conviction and a dismissed case."
      faqs={faqs}
      relatedAreas={["criminal-defense-fresno", "drug-crimes-fresno"]}
      relatedCities={["fresno-criminal-defense-lawyer", "clovis-criminal-defense-lawyer", "visalia-criminal-defense-lawyer"]}
    />
  );
}
