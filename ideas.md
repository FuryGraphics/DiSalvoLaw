# DiSalvo Law Office — Design Brainstorm

## Reference Ground Truth
This project replicates the layout and structure of https://chad-henderson-law-site.vercel.app/ with DiSalvo Law Office branding.
Fidelity to the reference OVERRIDES all other design decisions.

## Three Stylistic Approaches

### Approach A — "Dark Courtroom Authority" (Probability: 0.07)
Replicates the reference exactly: near-black background, serif headlines, gold accent highlights, numbered specialty cards, full-width CTA bands. Aggressive, confident, authoritative.

### Approach B — "Monochromatic Steel" (Probability: 0.02)
Charcoal + silver palette, more minimal, less gold. Clean lines, industrial feel.

### Approach C — "Classic Legal Red" (Probability: 0.01)
Deep crimson + cream, more traditional law firm aesthetic.

---

## CHOSEN APPROACH: A — "Dark Courtroom Authority"

### Design Movement
Dark luxury legal — inspired by high-end criminal defense firms that project power, trust, and urgency.

### Core Principles
1. **Dark-first**: #0a0a0a near-black base with white/light text throughout
2. **Red as power**: Crimson red (#dc2626 / #b91c1c) for all primary CTAs, accent underlines, numbered labels
3. **Gold as prestige**: Warm gold (#d4a017 / #ca8a04) for stars, dividers, secondary highlights, italic hero phrase
4. **Serif authority**: Playfair Display for headlines, Inter for body copy

### Color Philosophy
- Background: #0a0a0a (near-black, warmer than pure black)
- Primary accent: #dc2626 (red-600) — urgency, action, power
- Secondary accent: #ca8a04 (yellow-600/gold) — prestige, stars, italic hero phrase
- Text: #ffffff primary, #d1d5db secondary
- Card backgrounds: #111111 / #1a1a1a
- Borders: rgba(255,255,255,0.1)

### Layout Paradigm
Asymmetric hero (text left, attorney card right), full-width bands alternating dark shades, numbered card grid for specialties, 5-column footer.

### Signature Elements
1. Red accent underline beneath H1s on inner pages
2. Gold italic phrase within hero headline
3. Numbered specialty cards (01, 02...) with red number labels

### Interaction Philosophy
Scroll-triggered fade-up reveals on every section. Sticky nav transparent→solid on scroll. Mobile floating "Call Now" button.

### Animation
- Framer Motion `fadeInUp` variants: y: 40 → 0, opacity: 0 → 1, duration: 0.6s
- Stagger children by 0.1s
- Nav scroll transition: 200ms ease-out

### Typography System
- Headlines: 'Playfair Display', serif — bold, italic for accent phrases
- Body: 'Inter', sans-serif — 400/500 weights
- Nav: Inter 500, uppercase tracking-widest
- Stat numbers: Playfair Display bold, large

### Brand Essence
Aggressive Fresno criminal defense — for people who need to win, not just be represented.
Adjectives: Aggressive, Trustworthy, Accessible

### Brand Voice
Headlines: "Your Freedom Is Worth Fighting For" / "Charged in Fresno? Call Mario DiSalvo Now."
CTAs: "Get Your Free Consultation" / "Call (559) 442-1552 — Available 24/7"

### Wordmark & Logo
"DiSalvo Law" in Playfair Display with a small red scales-of-justice icon

### Signature Brand Color
Crimson red #dc2626
