// DiSalvo Law Office — Site-Wide Data & Constants
// Design: Dark Courtroom Authority — Red/Gold/Black, Playfair Display + Inter

export const SITE = {
  name: "DiSalvo Law Office",
  attorney: "Mario DiSalvo",
  phone: "(559) 442-1552",
  phoneRaw: "5594421552",
  email: "mario@disalvolaw.com",
  address: "5151 N Palm Ave, Suite 100",
  city: "Fresno",
  state: "CA",
  zip: "93704",
  fullAddress: "5151 N Palm Ave, Suite 100, Fresno, CA 93704",
  domain: "https://DiSalvoLaw.com",
  googleReviews: "https://share.google/4wsdDBzZ5W1jYKFec",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-119.7941!3d36.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e0b0b0b0b0b%3A0x0!2s5151+N+Palm+Ave+Suite+100+Fresno+CA+93704!5e0!3m2!1sen!2sus!4v1234567890",
  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "1,000+", label: "Cases Defended" },
    { value: "24/7", label: "Attorney Access" },
  ],
  heroCredentials: [
    { label: "Availability", value: "Open 24 / 7" },
    { label: "Consultation", value: "Always Free" },
    { label: "Payment", value: "Flexible Plans" },
    { label: "Location", value: "Fresno, CA" },
  ],
};

export const PRACTICE_AREAS = [
  {
    slug: "criminal-defense-fresno",
    title: "Criminal Defense",
    shortTitle: "Criminal Defense",
    num: "01",
    blurb:
      "From misdemeanors to serious felonies — assault, drug crimes, weapons charges, and more. Aggressive defense for every charge.",
    h1: "Criminal Defense Attorney Fresno, CA",
  },
  {
    slug: "dui-defense-fresno",
    title: "DUI Defense",
    shortTitle: "DUI Defense",
    num: "02",
    blurb:
      "Charged with DUI in Fresno? We challenge breathalyzer results, field sobriety tests, and unlawful stops to protect your license and freedom.",
    h1: "DUI Defense Attorney Fresno, CA",
  },
  {
    slug: "felony-defense-fresno",
    title: "Felony Defense",
    shortTitle: "Felony Defense",
    num: "03",
    blurb:
      "Felony charges carry life-altering consequences. Mario DiSalvo fights hard to reduce charges, secure acquittals, and protect your future.",
    h1: "Felony Defense Attorney Fresno, CA",
  },
  {
    slug: "domestic-violence-defense-fresno",
    title: "Domestic Violence Defense",
    shortTitle: "Domestic Violence",
    num: "04",
    blurb:
      "Domestic violence accusations can destroy families and careers. We provide a thorough defense to challenge false or exaggerated claims.",
    h1: "Domestic Violence Defense Attorney Fresno, CA",
  },
  {
    slug: "drug-crimes-fresno",
    title: "Drug Crimes",
    shortTitle: "Drug Crimes",
    num: "05",
    blurb:
      "Possession, trafficking, or manufacturing charges — we challenge illegal searches, fight for dismissals, and pursue diversion programs.",
    h1: "Drug Crimes Attorney Fresno, CA",
  },
];

export const ADDITIONAL_PRACTICE_AREAS = [
  { title: "Expungement", anchor: "expungement" },
  { title: "Juvenile Defense", anchor: "juvenile-defense" },
  { title: "Theft & Burglary", anchor: "theft-burglary" },
  { title: "Probation Violations", anchor: "probation-violations" },
  { title: "Violent Crimes", anchor: "violent-crimes" },
];

export const ALL_PRACTICE_AREAS = [
  ...PRACTICE_AREAS.map((p) => ({ title: p.title, slug: p.slug })),
  ...ADDITIONAL_PRACTICE_AREAS.map((p) => ({
    title: p.title,
    slug: `criminal-defense-fresno#${p.anchor}`,
  })),
];

export const CITIES = [
  {
    slug: "fresno-criminal-defense-lawyer",
    city: "Fresno",
    county: "Fresno County",
    courthouse: "Fresno County Superior Court",
    courthouseAddress: "1100 Van Ness Ave, Fresno, CA 93724",
  },
  {
    slug: "clovis-criminal-defense-lawyer",
    city: "Clovis",
    county: "Fresno County",
    courthouse: "Fresno County Superior Court",
    courthouseAddress: "1100 Van Ness Ave, Fresno, CA 93724",
  },
  {
    slug: "madera-criminal-defense-lawyer",
    city: "Madera",
    county: "Madera County",
    courthouse: "Madera County Superior Court",
    courthouseAddress: "200 W 4th St, Madera, CA 93637",
  },
  {
    slug: "sanger-criminal-defense-lawyer",
    city: "Sanger",
    county: "Fresno County",
    courthouse: "Fresno County Superior Court",
    courthouseAddress: "1100 Van Ness Ave, Fresno, CA 93724",
  },
  {
    slug: "visalia-criminal-defense-lawyer",
    city: "Visalia",
    county: "Tulare County",
    courthouse: "Tulare County Superior Court",
    courthouseAddress: "221 S Mooney Blvd, Visalia, CA 93291",
  },
  {
    slug: "tulare-criminal-defense-lawyer",
    city: "Tulare",
    county: "Tulare County",
    courthouse: "Tulare County Superior Court",
    courthouseAddress: "221 S Mooney Blvd, Visalia, CA 93291",
  },
  {
    slug: "hanford-criminal-defense-lawyer",
    city: "Hanford",
    county: "Kings County",
    courthouse: "Kings County Superior Court",
    courthouseAddress: "1426 S Drive, Hanford, CA 93230",
  },
  {
    slug: "merced-criminal-defense-lawyer",
    city: "Merced",
    county: "Merced County",
    courthouse: "Merced County Superior Court",
    courthouseAddress: "627 W 21st St, Merced, CA 95340",
  },
];

export const REVIEWS = [
  {
    name: "Carlos M.",
    caseType: "Criminal Defense Client",
    quote:
      "Mario DiSalvo fought tirelessly for my case. He was always available to answer my questions and kept me informed every step of the way. I couldn't have asked for a better attorney.",
  },
  {
    name: "Jennifer R.",
    caseType: "DUI Defense Client",
    quote:
      "I was charged with DUI and thought my life was over. Mario fought hard, knew the system inside and out, and got my charges reduced. I am forever grateful.",
  },
  {
    name: "David T.",
    caseType: "Felony Defense Client",
    quote:
      "Facing a felony charge was the scariest moment of my life. Mario DiSalvo was calm, strategic, and relentless. He got the result I needed. Highly recommend.",
  },
];

export const HOME_FAQS = [
  {
    q: "What should I do if I have been arrested?",
    a: "Stay calm and exercise your right to remain silent. Do not answer questions without an attorney present. Call DiSalvo Law Office at (559) 442-1552 immediately — we are available 24/7.",
  },
  {
    q: "Do I really need a lawyer if I am innocent?",
    a: "Absolutely. Innocent people are convicted every day. The criminal justice system is complex, and without experienced legal representation, even an innocent person can face serious consequences. An attorney protects your rights from the very beginning.",
  },
  {
    q: "How soon should I hire a criminal defense attorney?",
    a: "As soon as possible — ideally before speaking to police. The earlier you retain counsel, the better your attorney can protect your rights, preserve evidence, and build a strong defense strategy.",
  },
  {
    q: "What happens at my first court appearance?",
    a: "Your first court appearance is typically an arraignment, where you are formally charged and asked to enter a plea. Having an attorney present is critical at this stage to advise you on your plea and begin building your defense.",
  },
  {
    q: "What is the difference between a misdemeanor and a felony?",
    a: "Misdemeanors are less serious offenses typically punishable by up to one year in county jail. Felonies are more serious crimes that can result in state prison sentences of one year or more, loss of voting rights, and other long-term consequences.",
  },
  {
    q: "Can my case be dismissed?",
    a: "Yes. Cases can be dismissed for many reasons including lack of evidence, constitutional violations, improper police procedures, or prosecutorial errors. Attorney DiSalvo thoroughly reviews every case for dismissal opportunities.",
  },
  {
    q: "What are my rights after being arrested?",
    a: "You have the right to remain silent, the right to an attorney, and the right to refuse consent to searches. You must be informed of these Miranda rights before custodial interrogation. Do not waive these rights without speaking to an attorney first.",
  },
  {
    q: "How much does a criminal defense attorney cost?",
    a: "Fees vary depending on the complexity of your case. DiSalvo Law Office offers free consultations and flexible payment plans. Contact us at (559) 442-1552 to discuss your situation and get a clear understanding of costs.",
  },
];

export const NAV_LINKS = [
  { label: "HOME", href: "/pg/home" },
  { label: "ABOUT", href: "/pg/about" },
  { label: "REVIEWS", href: "/pg/home#reviews" },
  { label: "CONTACT", href: "/pg/contact" },
];
