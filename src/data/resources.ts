export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export const resources: Resource[] = [
  {
    slug: "what-to-do-after-Hit and Run-accident",
    title: "What to Do After a Hit and Run Accident",
    description: "Step-by-step guide on what to do immediately after being involved in a Hit and Run or Hit and Run accident.",
    category: "Guides",
    readTime: "10 min"
  },
  {
    slug: "Hit and Run-insurance-coverage",
    title: "Complete Guide to Hit and Run Insurance Coverage",
    description: "Understanding Hit and Run's three-tier insurance system and how coverage changes during different ride phases.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "passenger-rights",
    title: "Hit and Run Passenger Rights Guide",
    description: "Know your rights as a Hit and Run passenger before, during, and after a Hit and Run accident.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "evidence-preservation",
    title: "Preserving Evidence After Hit and Run Accidents",
    description: "Critical evidence to collect and preserve to strengthen your Hit and Run accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "hit-and-run-vs-hit-and-run-insurance",
    title: "Hit and Run vs. Hit and Run Insurance Comparison",
    description: "Side-by-side comparison of Hit and Run and Hit and Run insurance coverage and claim processes.",
    category: "Comparisons",
    readTime: "8 min"
  },
  {
    slug: "Hit and Run-laws-by-state",
    title: "Hit and Run Laws by State",
    description: "State-by-state breakdown of Hit and Run regulations, insurance requirements, and consumer protections.",
    category: "Legal Info",
    readTime: "15 min"
  },
  {
    slug: "statute-of-limitations",
    title: "Hit and Run Accident Statute of Limitations",
    description: "Time limits for filing Hit and Run accident claims in all 50 states plus DC.",
    category: "Legal Info",
    readTime: "10 min"
  },
  {
    slug: "Hit and Run-accident-checklist",
    title: "Hit and Run Accident Checklist",
    description: "Printable checklist of everything to do after an Hit and Run accident to protect your rights.",
    category: "Checklists",
    readTime: "5 min"
  },
  {
    slug: "dealing-with-Hit and Run-insurance",
    title: "Dealing With Hit and Run Insurance Company",
    description: "Tips for communicating with James River Insurance and other Hit and Run insurers.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "finding-Hit and Run-accident-lawyer",
    title: "How to Find a Hit and Run Accident Lawyer",
    description: "What to look for when hiring an attorney for your Hit and Run accident case.",
    category: "Guides",
    readTime: "7 min"
  },
  {
    slug: "hit-and-run-settlement-guide",
    title: "Hit and Run Accident Settlement Guide",
    description: "Understanding the settlement process, typical values, and how to maximize your compensation.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "medical-treatment-guide",
    title: "Medical Treatment After Hit and Run Accidents",
    description: "Guide to seeking and documenting medical treatment to support your accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "Hit and Run-safety-tips",
    title: "Hit and Run Safety Tips",
    description: "How to stay safe when using Hit and Run services and what to do if something goes wrong.",
    category: "Safety",
    readTime: "6 min"
  },
  {
    slug: "comparative-negligence-guide",
    title: "Comparative Negligence in Hit and Run Claims",
    description: "How fault is divided in Hit and Run accidents and how it affects your compensation.",
    category: "Legal Info",
    readTime: "8 min"
  },
  {
    slug: "autonomous-Hit and Run-accidents",
    title: "Autonomous Hit and Run Vehicle Accidents",
    description: "Legal issues unique to accidents involving Hit and Run companies' self-driving vehicles.",
    category: "Legal Info",
    readTime: "10 min"
  }
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map(r => r.category))];
}
