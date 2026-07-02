// DiSalvo Law Office — Drug Crimes Page (/pg/drug-crimes-fresno)
import PracticeAreaTemplate from "@/components/PracticeAreaTemplate";

const faqs = [
  { q: "What are the most common drug charges in Fresno?", a: "The most common drug charges in Fresno include possession of a controlled substance, possession for sale, drug transportation, manufacturing, and being under the influence. Charges range from misdemeanors to serious felonies depending on the drug type, quantity, and circumstances." },
  { q: "Can a drug possession charge be dismissed in California?", a: "Yes. Drug possession charges can be dismissed for many reasons, including illegal searches and seizures, lack of evidence, chain of custody issues, or successful completion of a drug diversion program. Attorney DiSalvo explores every avenue for dismissal." },
  { q: "What is drug diversion in California?", a: "California's drug diversion programs (Penal Code 1000 and Proposition 36) allow eligible defendants to complete drug treatment instead of serving jail time. Successful completion can result in the charges being dismissed. Attorney DiSalvo can advise you on your eligibility." },
  { q: "What is the difference between possession and possession for sale?", a: "Simple possession means having drugs for personal use. Possession for sale is a more serious charge based on factors like the quantity of drugs, presence of scales or packaging materials, and large amounts of cash. Possession for sale carries significantly harsher penalties." },
  { q: "Can evidence from an illegal search be suppressed?", a: "Yes. If law enforcement searched your person, vehicle, or home without a valid warrant or legal justification, the evidence obtained may be suppressed — meaning it cannot be used against you. This can result in dismissal of the charges. Attorney DiSalvo scrutinizes every search and seizure." },
  { q: "What are the penalties for drug trafficking in California?", a: "Drug trafficking (transportation for sale) is a felony in California with penalties including 3-9 years in state prison depending on the drug type and quantity, plus significant fines. Federal drug trafficking charges carry even harsher penalties." },
];

export default function DrugCrimesPage() {
  return (
    <PracticeAreaTemplate
      slug="drug-crimes-fresno"
      h1="Drug Crimes Attorney Fresno, CA"
      accentWord="Drug Crimes"
      intro="Drug charges in Fresno range from simple possession to serious trafficking offenses, and the consequences can be severe. Attorney Mario DiSalvo has extensive experience defending all types of drug cases in Fresno County and throughout the Central Valley. He challenges illegal searches and seizures, fights for diversion programs, and pursues every available defense to protect your freedom and your future. If you have been charged with a drug offense, do not wait — contact DiSalvo Law Office immediately."
      whatWeHandle={[
        "Possession of a controlled substance",
        "Possession for sale",
        "Drug trafficking / transportation",
        "Drug manufacturing",
        "Under the influence",
        "Prescription drug fraud",
        "Methamphetamine charges",
        "Cocaine and crack cocaine",
        "Heroin and fentanyl",
        "Marijuana charges",
        "Hash oil / concentrate offenses",
        "Federal drug charges",
      ]}
      processSteps={[
        { step: "01", title: "Case Evaluation", body: "We immediately review the circumstances of your arrest, the search and seizure, and all evidence to identify constitutional violations and defense opportunities." },
        { step: "02", title: "Suppression Motions", body: "If your rights were violated during the search or arrest, we file motions to suppress illegally obtained evidence — which can result in dismissal of the charges." },
        { step: "03", title: "Diversion Eligibility", body: "We evaluate your eligibility for drug diversion programs that can result in treatment instead of jail time and dismissal of charges upon completion." },
        { step: "04", title: "Defense & Resolution", body: "We negotiate aggressively for the best possible outcome — dismissal, reduction, or diversion — and are fully prepared to take your case to trial if necessary." },
      ]}
      whyPrivate="Drug cases often turn on technical legal issues — the legality of a search, the chain of custody of evidence, or the credibility of informants. A private attorney with drug defense experience can conduct an independent investigation, file strategic suppression motions, and navigate the complex landscape of California's drug laws to achieve the best possible outcome for your case."
      faqs={faqs}
      relatedAreas={["criminal-defense-fresno", "dui-defense-fresno", "felony-defense-fresno"]}
      relatedCities={["fresno-criminal-defense-lawyer", "clovis-criminal-defense-lawyer", "madera-criminal-defense-lawyer"]}
    />
  );
}
