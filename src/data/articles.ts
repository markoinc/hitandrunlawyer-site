export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
}

export const articles: Article[] = [
  // LIABILITY & LEGAL
  {
    slug: "who-is-liable-hit-and-run",
    title: "Who Is Liable in a Hit and Run Accident?",
    description: "Understanding liability when the at-fault driver flees the scene. Options for compensation even without identifying the driver.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2026-01-15"
  },
  {
    slug: "hit-and-run-criminal-vs-civil",
    title: "Criminal vs Civil Cases in Hit and Run",
    description: "The difference between criminal prosecution of hit and run drivers and civil claims for victim compensation.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2026-01-16"
  },
  {
    slug: "suing-hit-and-run-driver",
    title: "Suing a Hit and Run Driver",
    description: "Your legal options for filing a lawsuit against a hit and run driver once they're identified.",
    category: "Liability",
    readTime: "9 min",
    publishDate: "2026-01-17"
  },
  {
    slug: "hit-and-run-fault-determination",
    title: "How Fault Is Determined in Hit and Run Cases",
    description: "The process of determining fault when the at-fault driver leaves the scene. Evidence and investigation methods.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2026-01-18"
  },
  {
    slug: "hit-and-run-police-investigation",
    title: "Police Investigation of Hit and Run Accidents",
    description: "How police investigate hit and run cases and what you can do to help identify the fleeing driver.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2026-01-19"
  },

  // INSURANCE
  {
    slug: "um-coverage-explained",
    title: "Uninsured Motorist Coverage Explained",
    description: "How UM coverage protects you when the at-fault driver is unidentified in a hit and run accident.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2026-01-20"
  },
  {
    slug: "uim-coverage-explained",
    title: "Underinsured Motorist Coverage Explained",
    description: "When UIM coverage applies to hit and run cases and how to maximize your recovery.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2026-01-21"
  },
  {
    slug: "filing-um-claim-hit-and-run",
    title: "Filing a UM Claim After Hit and Run",
    description: "Step-by-step guide to filing an Uninsured Motorist claim with your own insurance after a hit and run.",
    category: "Insurance",
    readTime: "9 min",
    publishDate: "2026-01-22"
  },
  {
    slug: "insurance-company-bad-faith",
    title: "Insurance Bad Faith in Hit and Run Claims",
    description: "Signs your insurance company is acting in bad faith on your UM claim and what to do about it.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2026-01-23"
  },
  {
    slug: "stacking-um-coverage",
    title: "Stacking UM/UIM Coverage",
    description: "How to stack multiple UM policies to maximize compensation in hit and run cases.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2026-01-24"
  },

  // COMPENSATION
  {
    slug: "hit-and-run-settlement-values",
    title: "Hit and Run Settlement Values: What to Expect",
    description: "Typical settlement ranges for hit and run accident cases and factors that affect compensation amounts.",
    category: "Compensation",
    readTime: "10 min",
    publishDate: "2026-01-25"
  },
  {
    slug: "damages-in-hit-and-run-cases",
    title: "Types of Damages in Hit and Run Cases",
    description: "Understanding economic and non-economic damages you can recover after a hit and run accident.",
    category: "Compensation",
    readTime: "8 min",
    publishDate: "2026-01-26"
  },
  {
    slug: "pain-suffering-hit-and-run",
    title: "Pain and Suffering in Hit and Run Claims",
    description: "How pain and suffering damages are calculated in hit and run accident cases.",
    category: "Compensation",
    readTime: "7 min",
    publishDate: "2026-01-27"
  },
  {
    slug: "lost-wages-hit-and-run",
    title: "Recovering Lost Wages After Hit and Run",
    description: "Documenting and claiming lost income when a hit and run accident keeps you from working.",
    category: "Compensation",
    readTime: "6 min",
    publishDate: "2026-01-28"
  },

  // INVESTIGATION
  {
    slug: "surveillance-footage-hit-and-run",
    title: "Using Surveillance Footage to Find Hit and Run Drivers",
    description: "How traffic cameras, business cameras, and doorbell cameras help identify fleeing drivers.",
    category: "Investigation",
    readTime: "8 min",
    publishDate: "2026-01-29"
  },
  {
    slug: "witness-statements-hit-and-run",
    title: "Importance of Witness Statements in Hit and Run",
    description: "How witness testimony helps identify hit and run drivers and prove your case.",
    category: "Investigation",
    readTime: "6 min",
    publishDate: "2026-01-30"
  },
  {
    slug: "vehicle-forensics-hit-and-run",
    title: "Vehicle Forensics in Hit and Run Cases",
    description: "How paint transfer, debris analysis, and vehicle damage help track down fleeing drivers.",
    category: "Investigation",
    readTime: "8 min",
    publishDate: "2026-01-31"
  },
  {
    slug: "private-investigators-hit-and-run",
    title: "Using Private Investigators in Hit and Run Cases",
    description: "When and how to hire a private investigator to find a hit and run driver.",
    category: "Investigation",
    readTime: "7 min",
    publishDate: "2026-02-01"
  },

  // VICTIM TYPES
  {
    slug: "pedestrian-hit-and-run-claims",
    title: "Pedestrian Hit and Run Accident Claims",
    description: "Special considerations for pedestrians injured by hit and run drivers. Common injuries and legal options.",
    category: "Victim Types",
    readTime: "9 min",
    publishDate: "2026-02-02"
  },
  {
    slug: "cyclist-hit-and-run-claims",
    title: "Bicycle Hit and Run Accident Claims",
    description: "Legal options for cyclists struck by hit and run drivers. Maximizing compensation for cycling injuries.",
    category: "Victim Types",
    readTime: "8 min",
    publishDate: "2026-02-03"
  },
  {
    slug: "motorcycle-hit-and-run-claims",
    title: "Motorcycle Hit and Run Accident Claims",
    description: "Unique challenges motorcyclists face in hit and run cases and how to overcome them.",
    category: "Victim Types",
    readTime: "8 min",
    publishDate: "2026-02-04"
  },
  {
    slug: "parked-car-hit-and-run",
    title: "Hit and Run Damage to Parked Vehicles",
    description: "What to do when your parked car is hit and the driver leaves. Finding them and filing claims.",
    category: "Victim Types",
    readTime: "7 min",
    publishDate: "2026-02-05"
  },
  {
    slug: "fatal-hit-and-run-wrongful-death",
    title: "Fatal Hit and Run: Wrongful Death Claims",
    description: "Guide for families pursuing wrongful death claims after losing a loved one to a hit and run driver.",
    category: "Victim Types",
    readTime: "11 min",
    publishDate: "2026-02-06"
  },

  // COMMON INJURIES
  {
    slug: "common-hit-and-run-injuries",
    title: "Common Injuries in Hit and Run Accidents",
    description: "Overview of typical injuries sustained in hit and run crashes and their impact on claims.",
    category: "Injuries",
    readTime: "9 min",
    publishDate: "2026-02-07"
  },
  {
    slug: "traumatic-brain-injury-hit-and-run",
    title: "Traumatic Brain Injuries from Hit and Run",
    description: "TBI claims in hit and run cases: long-term effects, treatment, and compensation.",
    category: "Injuries",
    readTime: "10 min",
    publishDate: "2026-02-08"
  },
  {
    slug: "spinal-cord-injuries-hit-and-run",
    title: "Spinal Cord Injuries in Hit and Run Accidents",
    description: "Catastrophic spinal injuries from hit and run crashes and pursuing maximum compensation.",
    category: "Injuries",
    readTime: "10 min",
    publishDate: "2026-02-09"
  },
  {
    slug: "broken-bones-hit-and-run",
    title: "Broken Bones from Hit and Run Accidents",
    description: "Fracture injuries in hit and run cases: treatment costs and settlement values.",
    category: "Injuries",
    readTime: "7 min",
    publishDate: "2026-02-10"
  }
];

export function getCategories(): string[] {
  const categories = new Set(articles.map(a => a.category));
  return Array.from(categories);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}
