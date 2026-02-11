export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export const resources: Resource[] = [
  // GUIDES
  {
    slug: "what-to-do-after-hit-and-run",
    title: "What to Do After a Hit and Run Accident",
    description: "Step-by-step guide on what to do immediately after being involved in a hit and run accident. Critical steps to protect your case.",
    category: "Guides",
    readTime: "10 min"
  },
  {
    slug: "um-uim-coverage",
    title: "Complete Guide to UM/UIM Insurance Coverage",
    description: "Understanding Uninsured and Underinsured Motorist coverage and how it protects you in hit and run cases.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "passenger-rights",
    title: "Hit and Run Passenger Rights Guide",
    description: "Know your rights as a passenger in a vehicle struck by a hit and run driver.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "evidence-preservation",
    title: "Preserving Evidence After Hit and Run Accidents",
    description: "Critical evidence to collect and preserve to strengthen your hit and run accident claim, including surveillance footage.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "finding-the-driver",
    title: "How to Find a Hit and Run Driver",
    description: "Methods investigators and attorneys use to track down hit and run drivers after they flee the scene.",
    category: "Guides",
    readTime: "10 min"
  },
  {
    slug: "statute-of-limitations",
    title: "Hit and Run Statute of Limitations by State",
    description: "Time limits for filing hit and run accident claims in all 50 states plus DC. Don't miss your deadline.",
    category: "Legal Info",
    readTime: "10 min"
  },
  {
    slug: "hit-and-run-laws-by-state",
    title: "Hit and Run Laws by State",
    description: "State-by-state breakdown of hit and run criminal penalties, civil liability, and victim rights.",
    category: "Legal Info",
    readTime: "15 min"
  },
  {
    slug: "filing-police-report",
    title: "Filing a Police Report for Hit and Run",
    description: "How to file an effective police report after a hit and run accident to maximize your chances of finding the driver.",
    category: "Guides",
    readTime: "7 min"
  },
  {
    slug: "hit-and-run-checklist",
    title: "Hit and Run Accident Checklist",
    description: "Printable checklist of everything to do after a hit and run accident to protect your rights and your claim.",
    category: "Checklists",
    readTime: "5 min"
  },
  {
    slug: "dealing-with-insurance",
    title: "Dealing With Your Insurance After Hit and Run",
    description: "Tips for filing and negotiating UM/UIM claims with your own insurance company after a hit and run.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "finding-hit-and-run-lawyer",
    title: "How to Find a Hit and Run Accident Lawyer",
    description: "What to look for when hiring an attorney for your hit and run accident case. Key qualifications and red flags.",
    category: "Guides",
    readTime: "7 min"
  },
  {
    slug: "hit-and-run-settlement-guide",
    title: "Hit and Run Accident Settlement Guide",
    description: "Understanding the settlement process, typical values, and how to maximize your compensation after a hit and run.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "medical-treatment-guide",
    title: "Medical Treatment After Hit and Run Accidents",
    description: "Guide to seeking and documenting medical treatment to support your hit and run accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "pedestrian-hit-and-run",
    title: "Pedestrian Hit and Run Guide",
    description: "Special considerations for pedestrians injured in hit and run accidents. Your rights and recovery options.",
    category: "Victim Types",
    readTime: "10 min"
  },
  {
    slug: "cyclist-hit-and-run",
    title: "Cyclist Hit and Run Guide",
    description: "What cyclists need to know after being struck by a hit and run driver. Legal options and common injuries.",
    category: "Victim Types",
    readTime: "9 min"
  },
  {
    slug: "parking-lot-hit-and-run",
    title: "Parking Lot Hit and Run Claims",
    description: "How to handle hit and run damage to your parked vehicle. Finding the driver and filing claims.",
    category: "Victim Types",
    readTime: "7 min"
  },
  {
    slug: "fatal-hit-and-run",
    title: "Fatal Hit and Run: Wrongful Death Claims",
    description: "Guide for families pursuing wrongful death claims after a fatal hit and run accident.",
    category: "Victim Types",
    readTime: "12 min"
  },
  {
    slug: "hit-and-run-criminal-penalties",
    title: "Criminal Penalties for Hit and Run",
    description: "Understanding the criminal consequences for hit and run drivers and how criminal cases affect civil claims.",
    category: "Legal Info",
    readTime: "8 min"
  }
];

export function getResourceCategories(): string[] {
  const categories = new Set(resources.map(r => r.category));
  return Array.from(categories);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(r => r.category === category);
}
