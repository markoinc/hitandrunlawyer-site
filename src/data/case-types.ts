export interface CaseType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  commonInjuries: string[];
  liabilityFactors: string[];
  averageSettlement: string;
  keyEvidence: string[];
}

export const caseTypes: CaseType[] = [
  {
    slug: "Hit and Run-passenger-accident",
    title: "Hit and Run Passenger Accident Claims",
    shortTitle: "Passenger Accidents",
    description: "Claims for passengers injured while riding in a Hit and Run vehicle, whether from collisions, sudden stops, or driver negligence.",
    commonInjuries: ["Whiplash", "Head injuries", "Broken bones", "Spinal injuries", "Soft tissue damage", "Concussions"],
    liabilityFactors: ["Driver negligence", "Third-party driver fault", "Vehicle defects", "Road conditions"],
    averageSettlement: "$50,000 - $500,000+",
    keyEvidence: ["Hit and Run trip receipt", "Dash cam footage", "Medical records", "Police report", "Witness statements"]
  },
  {
    slug: "hit-and-run-driver-accident",
    title: "Hit and Run Driver Accident Claims",
    shortTitle: "Driver Accidents",
    description: "Claims for Hit and Run drivers injured while on the job, including accidents during rides, while waiting for requests, or en route to pickups.",
    commonInjuries: ["Back injuries", "Neck injuries", "PTSD", "Chronic pain", "Carpal tunnel", "Knee injuries"],
    liabilityFactors: ["Other driver negligence", "Passenger behavior", "Vehicle maintenance", "Company policies"],
    averageSettlement: "$25,000 - $300,000+",
    keyEvidence: ["App status at time of crash", "Insurance coverage tier", "Medical documentation", "Lost earnings records"]
  },
  {
    slug: "pedestrian-hit-by-Hit and Run",
    title: "Pedestrians Hit by Hit and Run Vehicles",
    shortTitle: "Pedestrian Accidents",
    description: "Claims for pedestrians struck by Hit and Run vehicles in crosswalks, parking lots, or while walking near roadways.",
    commonInjuries: ["Traumatic brain injury", "Broken legs/hips", "Internal bleeding", "Spinal cord injuries", "Fatalities"],
    liabilityFactors: ["Driver distraction", "Speeding", "Failure to yield", "App-related distraction", "Right of way violations"],
    averageSettlement: "$100,000 - $1,000,000+",
    keyEvidence: ["Traffic camera footage", "Hit and Run app data", "Crosswalk location", "Driver phone records", "Eyewitness accounts"]
  },
  {
    slug: "cyclist-hit-by-hit-and-run",
    title: "Cyclists Hit by Hit and Run Vehicles",
    shortTitle: "Cyclist Accidents",
    description: "Claims for bicyclists injured in collisions with Hit and Run vehicles, including dooring accidents and right-hook crashes.",
    commonInjuries: ["Road rash", "Broken clavicle", "Head trauma", "Spinal injuries", "Knee/leg fractures", "Facial injuries"],
    liabilityFactors: ["Dooring", "Right hooks", "Lane encroachment", "Driver distraction", "Failure to check mirrors"],
    averageSettlement: "$75,000 - $750,000+",
    keyEvidence: ["Bike camera footage", "Helmet damage", "Street layout", "Driver admission", "Medical records"]
  },
  {
    slug: "other-driver-hit-and-run-crash",
    title: "Other Drivers in Hit and Run Collisions",
    shortTitle: "Other Driver Claims",
    description: "Claims for drivers of other vehicles when Hit and Run drivers cause collisions through negligence or traffic violations.",
    commonInjuries: ["Whiplash", "Back injuries", "Airbag injuries", "Seat belt injuries", "Broken bones", "Concussions"],
    liabilityFactors: ["Hit and Run driver traffic violations", "Speeding", "Distracted driving", "Aggressive driving"],
    averageSettlement: "$30,000 - $400,000+",
    keyEvidence: ["Police report", "Traffic camera footage", "Hit and Run trip data", "Insurance documentation", "Vehicle damage photos"]
  },
  {
    slug: "hit-and-run-airport-accident",
    title: "Hit and Run Airport Accidents",
    shortTitle: "Airport Accidents",
    description: "Accidents occurring at airport Hit and Run pickup/dropoff zones, parking garages, and airport access roads.",
    commonInjuries: ["Luggage-related injuries", "Slip and falls", "Vehicle collisions", "Pedestrian strikes"],
    liabilityFactors: ["Congested pickup zones", "Unfamiliar airport layout", "Time pressure", "Heavy luggage handling"],
    averageSettlement: "$25,000 - $250,000+",
    keyEvidence: ["Airport security footage", "Hit and Run pickup timestamp", "Witness statements", "Airport incident reports"]
  },
  {
    slug: "hit-and-run-drunk-driver",
    title: "Accidents with Drunk Hit and Run Drivers",
    shortTitle: "Drunk Driver Accidents",
    description: "Claims when Hit and Run drivers operate vehicles while intoxicated, including both alcohol and drug impairment.",
    commonInjuries: ["Severe trauma", "Fatalities", "Catastrophic injuries", "Multiple fractures", "Brain injuries"],
    liabilityFactors: ["DUI", "Background check failures", "Hit and Run company's duty of care", "Criminal negligence"],
    averageSettlement: "$200,000 - $2,000,000+",
    keyEvidence: ["BAC test results", "Police arrest records", "Prior DUI history", "Hit and Run driver screening records"]
  },
  {
    slug: "hit-and-run-sexual-assault",
    title: "Hit and Run Sexual Assault Claims",
    shortTitle: "Sexual Assault",
    description: "Claims for passengers who experience sexual assault, harassment, or inappropriate conduct by Hit and Run drivers.",
    commonInjuries: ["PTSD", "Anxiety", "Depression", "Physical assault injuries", "Emotional trauma"],
    liabilityFactors: ["Inadequate background checks", "Prior complaints ignored", "Corporate negligence", "Safety feature failures"],
    averageSettlement: "$100,000 - $5,000,000+",
    keyEvidence: ["Police reports", "Prior driver complaints", "Hit and Run safety reports", "Therapy records", "Criminal proceedings"]
  },
  {
    slug: "Hit and Run-wrongful-death",
    title: "Hit and Run Wrongful Death Claims",
    shortTitle: "Wrongful Death",
    description: "Claims brought by families when loved ones are killed in Hit and Run accidents, whether as passengers, drivers, or third parties.",
    commonInjuries: ["Fatal injuries", "Survival damages"],
    liabilityFactors: ["Gross negligence", "Reckless driving", "DUI", "Vehicle defects", "Corporate policy failures"],
    averageSettlement: "$500,000 - $10,000,000+",
    keyEvidence: ["Accident reconstruction", "Medical examiner reports", "Loss of income documentation", "Family impact statements"]
  },
  {
    slug: "hit-and-run-hit-and-run",
    title: "Hit and Run Hit and Run Accidents",
    shortTitle: "Hit and Run",
    description: "Claims when Hit and Run drivers flee the scene after causing accidents, and how to identify and pursue claims.",
    commonInjuries: ["Varies widely based on accident type"],
    liabilityFactors: ["Driver identification", "Uninsured motorist coverage", "Hit and Run company's responsibility"],
    averageSettlement: "$40,000 - $400,000+",
    keyEvidence: ["Dash cam footage", "License plate images", "Hit and Run trip matching", "Witness descriptions", "Traffic cameras"]
  },
  {
    slug: "hit-and-run-rear-end-collision",
    title: "Hit and Run Rear-End Collisions",
    shortTitle: "Rear-End Accidents",
    description: "Claims involving rear-end crashes where Hit and Run vehicles either strike or are struck by other vehicles.",
    commonInjuries: ["Whiplash", "Cervical spine injuries", "Lower back injuries", "Headaches", "Disc herniations"],
    liabilityFactors: ["Following too closely", "Distracted driving", "Sudden stops for pickups", "App-related distraction"],
    averageSettlement: "$20,000 - $200,000+",
    keyEvidence: ["Impact damage photos", "Medical imaging", "Point of impact analysis", "Driver statements"]
  },
  {
    slug: "hit-and-run-intersection-accident",
    title: "Hit and Run Intersection Accidents",
    shortTitle: "Intersection Crashes",
    description: "T-bone and other intersection crashes involving Hit and Run vehicles running red lights, failing to yield, or violating traffic signals.",
    commonInjuries: ["Side impact injuries", "Broken ribs", "Hip fractures", "Internal organ damage", "Head trauma"],
    liabilityFactors: ["Running red lights", "Failure to yield", "GPS distraction", "Rush to complete rides"],
    averageSettlement: "$50,000 - $600,000+",
    keyEvidence: ["Traffic light timing", "Intersection cameras", "Witness accounts", "Accident reconstruction"]
  },
  {
    slug: "hit-and-run-pool-accident",
    title: "Hit and Run Pool/Share Accidents",
    shortTitle: "Pool/Share Accidents",
    description: "Special considerations for accidents during Hit and Run Pool or shared rides with multiple passengers.",
    commonInjuries: ["All standard vehicle accident injuries", "Passenger-on-passenger injuries"],
    liabilityFactors: ["Driver distraction with multiple pickups", "Overcrowding", "Passenger behavior"],
    averageSettlement: "$30,000 - $350,000+",
    keyEvidence: ["Pool ride documentation", "Multiple passenger statements", "Pickup/dropoff timeline"]
  },
  {
    slug: "Hit and Run-distracted-driver",
    title: "Distracted Hit and Run Driver Accidents",
    shortTitle: "Distracted Driving",
    description: "Accidents caused by Hit and Run drivers distracted by the app, GPS, phone calls, or other distractions.",
    commonInjuries: ["Varies based on accident severity"],
    liabilityFactors: ["Cell phone use", "App interaction", "GPS distraction", "Passenger interaction"],
    averageSettlement: "$40,000 - $500,000+",
    keyEvidence: ["Phone records", "App usage data", "Dash cam footage", "Witness testimony about driver behavior"]
  },
  {
    slug: "hit-and-run-autonomous-vehicle",
    title: "Autonomous Hit and Run Vehicle Accidents",
    shortTitle: "Self-Driving Car Accidents",
    description: "Claims involving Hit and Run autonomous vehicle program, including the complex liability issues with driverless cars.",
    commonInjuries: ["Severe trauma", "Fatalities", "Catastrophic injuries"],
    liabilityFactors: ["Software failures", "Sensor malfunctions", "Safety driver negligence", "Testing protocols"],
    averageSettlement: "Case-dependent, potentially millions",
    keyEvidence: ["Vehicle data logs", "Sensor recordings", "Testing protocols", "Safety driver actions", "Prior incidents"]
  }
];

export function getCaseTypeBySlug(slug: string): CaseType | undefined {
  return caseTypes.find(ct => ct.slug === slug);
}
