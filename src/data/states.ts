export interface State {
  name: string;
  abbr: string;
  slug: string;
  statOfLimitations: string;
  faultSystem: string;
  minInsurance: string;
  rideshareRegulations: string;
  tncLaw: boolean;
  tncLawYear?: number;
  insuranceTiers: {
    appOff: string;
    waitingForRide: string;
    enRoute: string;
  };
  uniqueLaws: string[];
  majorMarkets: string[];
  annualAccidents: number;
  uniqueFacts: string[];
}

export const states: State[] = [
  {
    name: "Alabama",
    abbr: "AL",
    slug: "alabama",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2018",
    tncLaw: true,
    tncLawYear: 2018,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence can bar recovery if victim is 1% at fault", "TNC drivers must pass background checks", "Airport pickup regulations vary by city"],
    majorMarkets: ["Birmingham", "Montgomery", "Huntsville", "Mobile"],
    annualAccidents: 450,
    uniqueFacts: ["One of few contributory negligence states - critical for Hit and Run claims", "Hit and Run launched in Alabama in 2014"]
  },
  {
    name: "Alaska",
    abbr: "AK",
    slug: "alaska",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "50/100/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Higher minimum insurance requirements than most states", "Cold weather creates unique Hit and Run hazards", "Limited Hit and Run availability outside Anchorage"],
    majorMarkets: ["Anchorage", "Fairbanks"],
    annualAccidents: 85,
    uniqueFacts: ["Extreme weather conditions affect Hit and Run safety year-round", "Higher insurance minimums provide better protection"]
  },
  {
    name: "Arizona",
    abbr: "AZ",
    slug: "arizona",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Early adopter of Hit and Run regulations", "Self-driving vehicle testing hub", "Phoenix is major Hit and Run testing ground"],
    majorMarkets: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Tempe", "Chandler"],
    annualAccidents: 2800,
    uniqueFacts: ["Home to Hit and Run's self-driving car testing program", "First fatal autonomous Hit and Run accident occurred in Tempe (2018)", "Year-round warm weather means consistent Hit and Run demand"]
  },
  {
    name: "Arkansas",
    abbr: "AR",
    slug: "arkansas",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["3-year statute of limitations gives more time to file", "Cannot recover if more than 50% at fault"],
    majorMarkets: ["Little Rock", "Fayetteville", "Fort Smith"],
    annualAccidents: 380,
    uniqueFacts: ["Longer statute of limitations than neighboring states", "Growing Hit and Run presence in university towns"]
  },
  {
    name: "California",
    abbr: "CA",
    slug: "california",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/5",
    rideshareRegulations: "First state to regulate TNCs (2013)",
    tncLaw: true,
    tncLawYear: 2013,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["AB5 law affects driver classification", "CPUC regulates Hit and Run companies", "Prop 22 allows drivers to remain contractors", "Strictest background check requirements"],
    majorMarkets: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Oakland", "Sacramento", "Long Beach"],
    annualAccidents: 15000,
    uniqueFacts: ["Hit and Run was founded in San Francisco (2009)", "Highest Hit and Run usage in the nation", "AB5 and Prop 22 created landmark gig worker laws", "First state to establish TNC regulatory framework"]
  },
  {
    name: "Colorado",
    abbr: "CO",
    slug: "colorado",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2014",
    tncLaw: true,
    tncLawYear: 2014,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 125 established TNC regulations", "Denver International Airport has specific Hit and Run zones", "Mountain resort areas have special regulations"],
    majorMarkets: ["Denver", "Colorado Springs", "Aurora", "Boulder", "Fort Collins"],
    annualAccidents: 3200,
    uniqueFacts: ["Second state to pass comprehensive TNC legislation", "High Hit and Run demand for ski resort transportation", "Denver is one of Hit and Run's top 10 markets"]
  },
  {
    name: "Connecticut",
    abbr: "CT",
    slug: "connecticut",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Late adopter of Hit and Run regulations", "High insurance requirements", "Bradley Airport has designated pickup zones"],
    majorMarkets: ["Hartford", "New Haven", "Stamford", "Bridgeport"],
    annualAccidents: 950,
    uniqueFacts: ["High commuter Hit and Run usage to NYC", "Strong consumer protection laws benefit accident victims"]
  },
  {
    name: "Delaware",
    abbr: "DE",
    slug: "delaware",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated Hit and Run activity", "Philadelphia Airport serves many Delaware riders"],
    majorMarkets: ["Wilmington", "Newark", "Dover"],
    annualAccidents: 280,
    uniqueFacts: ["Many residents use Hit and Run to reach Philadelphia and Baltimore airports", "Corporate headquarters concentration drives business Hit and Run demand"]
  },
  {
    name: "District of Columbia",
    abbr: "DC",
    slug: "washington-dc",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "First jurisdiction to legalize Hit and Run (2014)",
    tncLaw: true,
    tncLawYear: 2014,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes claims difficult", "First to officially legalize Hit and Run/Hit and Run", "Strict driver requirements"],
    majorMarkets: ["Washington DC"],
    annualAccidents: 2400,
    uniqueFacts: ["One of highest Hit and Run usage rates per capita", "Contributory negligence is a major hurdle for claims", "Government workers and tourists drive huge demand"]
  },
  {
    name: "Florida",
    abbr: "FL",
    slug: "florida",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "10/20/10",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations (longest)", "No-fault PIP insurance required", "Theme park areas have high Hit and Run density"],
    majorMarkets: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "West Palm Beach"],
    annualAccidents: 12000,
    uniqueFacts: ["Second highest Hit and Run usage after California", "Tourism drives massive Hit and Run demand", "4-year statute of limitations is most favorable for victims", "No-fault insurance adds complexity to claims"]
  },
  {
    name: "Georgia",
    abbr: "GA",
    slug: "georgia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 190 established TNC framework", "Atlanta airport is one of busiest for Hit and Run", "Hit and Run insurance gaps addressed by law"],
    majorMarkets: ["Atlanta", "Savannah", "Augusta", "Athens"],
    annualAccidents: 5500,
    uniqueFacts: ["Atlanta Hartsfield-Jackson is world's busiest airport - massive Hit and Run demand", "Early adopter of comprehensive Hit and Run laws"]
  },
  {
    name: "Hawaii",
    abbr: "HI",
    slug: "hawaii",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault PIP insurance required", "Island geography limits service areas", "Tourism-heavy demand patterns"],
    majorMarkets: ["Honolulu", "Maui", "Kona"],
    annualAccidents: 650,
    uniqueFacts: ["Tourism drives nearly all Hit and Run demand", "Island geography creates unique accident patterns", "High cost of living means high Hit and Run fares"]
  },
  {
    name: "Idaho",
    abbr: "ID",
    slug: "idaho",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 195 established Hit and Run framework", "Rural areas have limited coverage"],
    majorMarkets: ["Boise", "Idaho Falls", "Meridian"],
    annualAccidents: 320,
    uniqueFacts: ["Rapidly growing Boise market", "Limited Hit and Run availability in rural areas"]
  },
  {
    name: "Illinois",
    abbr: "IL",
    slug: "illinois",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["City of Chicago has additional regulations", "O'Hare and Midway have designated pickup zones", "Strong consumer protection laws"],
    majorMarkets: ["Chicago", "Springfield", "Peoria", "Rockford", "Champaign"],
    annualAccidents: 8500,
    uniqueFacts: ["Chicago is one of Hit and Run's largest markets globally", "O'Hare Airport is major Hit and Run hub", "City and state regulations sometimes conflict"]
  },
  {
    name: "Indiana",
    abbr: "IN",
    slug: "indiana",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SEA 117 established TNC rules", "Indianapolis Motor Speedway events create surge demand"],
    majorMarkets: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    annualAccidents: 1800,
    uniqueFacts: ["Indy 500 creates massive annual Hit and Run demand", "Major college towns have high student Hit and Run usage"]
  },
  {
    name: "Iowa",
    abbr: "IA",
    slug: "iowa",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/15",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Rural coverage remains limited", "University towns have concentrated service"],
    majorMarkets: ["Des Moines", "Cedar Rapids", "Iowa City"],
    annualAccidents: 420,
    uniqueFacts: ["University of Iowa campus drives Hit and Run demand", "Weather creates seasonal usage patterns"]
  },
  {
    name: "Kansas",
    abbr: "KS",
    slug: "kansas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 117 established TNC framework", "Kansas City metro spans state line"],
    majorMarkets: ["Kansas City (KS)", "Wichita", "Overland Park", "Lawrence"],
    annualAccidents: 580,
    uniqueFacts: ["Kansas City metro area shared with Missouri creates jurisdictional complexities", "University town demand in Lawrence"]
  },
  {
    name: "Kentucky",
    abbr: "KY",
    slug: "kentucky",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 86 established TNC rules", "Kentucky Derby creates massive annual surge", "No-fault PIP insurance required"],
    majorMarkets: ["Louisville", "Lexington", "Bowling Green"],
    annualAccidents: 980,
    uniqueFacts: ["Kentucky Derby is one of biggest Hit and Run events annually", "Louisville airport sees significant Hit and Run traffic", "Pure comparative negligence is favorable for victims"]
  },
  {
    name: "Louisiana",
    abbr: "LA",
    slug: "louisiana",
    statOfLimitations: "1 year",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - shortest in US", "Mardi Gras creates extreme surge demand", "French Quarter has special regulations"],
    majorMarkets: ["New Orleans", "Baton Rouge", "Shreveport"],
    annualAccidents: 2100,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Mardi Gras is one of biggest Hit and Run events in US", "New Orleans has extremely high Hit and Run usage per capita", "Tourism and nightlife drive 24/7 demand"]
  },
  {
    name: "Maine",
    abbr: "ME",
    slug: "maine",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "50/100/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations - longest in US", "Higher insurance minimums", "Limited service in rural areas"],
    majorMarkets: ["Portland", "Bangor", "Lewiston"],
    annualAccidents: 180,
    uniqueFacts: ["6-year statute of limitations is most favorable in nation", "Tourism season creates summer surge demand", "Higher insurance minimums provide better coverage"]
  },
  {
    name: "Maryland",
    abbr: "MD",
    slug: "maryland",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence - extremely difficult to recover", "BWI Airport has designated Hit and Run zones", "DC metro area spans jurisdiction"],
    majorMarkets: ["Baltimore", "Bethesda", "Silver Spring", "Columbia"],
    annualAccidents: 2800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "High DC commuter Hit and Run usage", "Baltimore and DC metro create overlapping service areas"]
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    slug: "massachusetts",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/5",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 4049 established comprehensive regulations", "Boston has additional city requirements", "Logan Airport has specific pickup procedures"],
    majorMarkets: ["Boston", "Cambridge", "Worcester", "Springfield"],
    annualAccidents: 4200,
    uniqueFacts: ["Boston is one of oldest and most established Hit and Run markets", "High college student population drives demand", "No-fault PIP insurance adds complexity"]
  },
  {
    name: "Michigan",
    abbr: "MI",
    slug: "michigan",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "50/100/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault insurance state with unique rules", "Detroit is major Hit and Run market", "Higher insurance minimums"],
    majorMarkets: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"],
    annualAccidents: 3400,
    uniqueFacts: ["No-fault insurance creates unique claim procedures", "Detroit's auto industry connection to Hit and Run partnerships", "University of Michigan drives Ann Arbor demand"]
  },
  {
    name: "Minnesota",
    abbr: "MN",
    slug: "minnesota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/10",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault PIP insurance", "Minneapolis-St. Paul has high Hit and Run density"],
    majorMarkets: ["Minneapolis", "St. Paul", "Rochester", "Duluth"],
    annualAccidents: 1850,
    uniqueFacts: ["6-year statute gives maximum time to file claims", "Twin Cities are major Hit and Run market", "Mall of America drives significant Hit and Run traffic"]
  },
  {
    name: "Mississippi",
    abbr: "MS",
    slug: "mississippi",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 1381 established TNC rules", "Limited urban areas for Hit and Run"],
    majorMarkets: ["Jackson", "Gulfport", "Biloxi"],
    annualAccidents: 380,
    uniqueFacts: ["Gulf Coast casinos drive Hit and Run demand", "Pure comparative negligence is favorable for victims", "Limited service outside metro areas"]
  },
  {
    name: "Missouri",
    abbr: "MO",
    slug: "missouri",
    statOfLimitations: "5 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["5-year statute of limitations", "Kansas City spans state line", "St. Louis has high Hit and Run density"],
    majorMarkets: ["St. Louis", "Kansas City", "Springfield", "Columbia"],
    annualAccidents: 2400,
    uniqueFacts: ["5-year statute is second longest in US", "Pure comparative negligence favors victims", "Two major metro areas drive Hit and Run demand"]
  },
  {
    name: "Montana",
    abbr: "MT",
    slug: "montana",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 390 established early regulations", "Very limited service outside cities", "Tourism creates seasonal demand"],
    majorMarkets: ["Billings", "Missoula", "Great Falls", "Bozeman"],
    annualAccidents: 120,
    uniqueFacts: ["Ski resort areas have seasonal Hit and Run spikes", "Glacier National Park tourism drives demand", "Very limited rural coverage"]
  },
  {
    name: "Nebraska",
    abbr: "NE",
    slug: "nebraska",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations", "College football creates surge demand"],
    majorMarkets: ["Omaha", "Lincoln"],
    annualAccidents: 480,
    uniqueFacts: ["Nebraska football games create massive Hit and Run surges", "4-year statute is favorable for victims", "Omaha is growing market"]
  },
  {
    name: "Nevada",
    abbr: "NV",
    slug: "nevada",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Las Vegas is one of top Hit and Run markets globally", "McCarran Airport has massive Hit and Run volume", "24/7 demand from casinos and entertainment"],
    majorMarkets: ["Las Vegas", "Reno", "Henderson", "North Las Vegas"],
    annualAccidents: 6500,
    uniqueFacts: ["Las Vegas has highest Hit and Run usage per capita in US", "24/7 casino and entertainment demand", "Conventions and tourism drive massive volume", "McCarran Airport is one of busiest for Hit and Run pickups"]
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    slug: "new-hampshire",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 302 established TNC rules", "Limited service outside southern NH"],
    majorMarkets: ["Manchester", "Nashua", "Concord"],
    annualAccidents: 220,
    uniqueFacts: ["Boston commuter demand drives southern NH usage", "Ski season creates winter surges", "Limited rural coverage"]
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    slug: "new-jersey",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["A3695 established TNC framework", "No-fault PIP insurance", "NYC commuter traffic creates high demand", "Newark Airport has designated Hit and Run areas"],
    majorMarkets: ["Newark", "Jersey City", "Paterson", "Trenton", "Hoboken"],
    annualAccidents: 5200,
    uniqueFacts: ["NYC commuter demand drives massive Hit and Run usage", "No-fault insurance adds claim complexity", "One of most densely populated states"]
  },
  {
    name: "New Mexico",
    abbr: "NM",
    slug: "new-mexico",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 168 established TNC rules", "Limited coverage outside Albuquerque and Santa Fe"],
    majorMarkets: ["Albuquerque", "Santa Fe", "Las Cruces"],
    annualAccidents: 580,
    uniqueFacts: ["Tourism to Santa Fe drives Hit and Run demand", "Pure comparative negligence favors victims", "Limited rural coverage"]
  },
  {
    name: "New York",
    abbr: "NY",
    slug: "new-york",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$75,000 per person / $150,000 per accident",
      enRoute: "$1,250,000 liability coverage"
    },
    uniqueLaws: ["NYC has highest insurance requirements in nation", "TLC regulates NYC Hit and Run separately", "No-fault PIP insurance", "Congestion pricing affects Hit and Run costs"],
    majorMarkets: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    annualAccidents: 22000,
    uniqueFacts: ["NYC is largest Hit and Run market in the world", "Highest insurance requirements in US ($1.25M)", "TLC adds extra regulatory layer in NYC", "No-fault insurance complicates claims"]
  },
  {
    name: "North Carolina",
    abbr: "NC",
    slug: "north-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence is harsh barrier", "HB 389 established TNC rules", "Charlotte is major banking center with high business Hit and Run"],
    majorMarkets: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Wilmington"],
    annualAccidents: 3800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "Research Triangle has high tech worker Hit and Run usage", "Charlotte banking district drives business demand"]
  },
  {
    name: "North Dakota",
    abbr: "ND",
    slug: "north-dakota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault insurance", "Very limited coverage outside cities"],
    majorMarkets: ["Fargo", "Bismarck", "Grand Forks"],
    annualAccidents: 95,
    uniqueFacts: ["6-year statute is most favorable for victims", "Oil boom areas had temporary Hit and Run surges", "Very limited service statewide"]
  },
  {
    name: "Ohio",
    abbr: "OH",
    slug: "ohio",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 237 established comprehensive TNC rules", "Multiple major metros with high Hit and Run density"],
    majorMarkets: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    annualAccidents: 4200,
    uniqueFacts: ["Columbus is one of fastest-growing Hit and Run markets", "Ohio State football creates massive surges", "Multiple metro areas each have strong Hit and Run presence"]
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    slug: "oklahoma",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 316 established TNC framework", "Oklahoma City and Tulsa are primary markets"],
    majorMarkets: ["Oklahoma City", "Tulsa", "Norman"],
    annualAccidents: 920,
    uniqueFacts: ["University of Oklahoma games drive Norman Hit and Run spikes", "Oil industry workers use Hit and Run frequently", "Limited rural coverage"]
  },
  {
    name: "Oregon",
    abbr: "OR",
    slug: "oregon",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 2995 established TNC rules", "Portland has very high Hit and Run usage", "Strong bicycle culture creates interaction risks"],
    majorMarkets: ["Portland", "Eugene", "Salem", "Bend"],
    annualAccidents: 2100,
    uniqueFacts: ["Portland is one of most Hit and Run-friendly cities", "Strong public transit integration", "Bicycle and Hit and Run conflicts are common"]
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    slug: "pennsylvania",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 164 established comprehensive TNC rules", "Philadelphia has high Hit and Run density", "PHL Airport has designated pickup zones", "No-fault insurance option"],
    majorMarkets: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
    annualAccidents: 5800,
    uniqueFacts: ["Philadelphia is major East Coast Hit and Run market", "Pittsburgh has autonomous vehicle testing", "No-fault insurance can simplify claims"]
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    slug: "rhode-island",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated Hit and Run", "Providence is primary market"],
    majorMarkets: ["Providence", "Warwick", "Newport"],
    annualAccidents: 340,
    uniqueFacts: ["Smallest state but high Hit and Run per capita", "Pure comparative negligence favors victims", "Boston proximity increases demand"]
  },
  {
    name: "South Carolina",
    abbr: "SC",
    slug: "south-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["H 3525 established early TNC rules", "Charleston tourism drives demand", "Myrtle Beach has seasonal surges"],
    majorMarkets: ["Charleston", "Columbia", "Greenville", "Myrtle Beach"],
    annualAccidents: 1650,
    uniqueFacts: ["Charleston and Myrtle Beach tourism creates high seasonal demand", "Early adopter of Hit and Run regulations", "College towns have strong usage"]
  },
  {
    name: "South Dakota",
    abbr: "SD",
    slug: "south-dakota",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (slight)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 28 established TNC rules", "Very limited coverage statewide", "Sturgis Rally creates massive annual surge"],
    majorMarkets: ["Sioux Falls", "Rapid City"],
    annualAccidents: 85,
    uniqueFacts: ["Sturgis Motorcycle Rally creates one of biggest annual Hit and Run surges", "Very limited year-round service", "Tourism to Mount Rushmore drives Rapid City demand"]
  },
  {
    name: "Tennessee",
    abbr: "TN",
    slug: "tennessee",
    statOfLimitations: "1 year",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - same as Louisiana", "Nashville has extremely high Hit and Run usage", "Music industry drives 24/7 demand"],
    majorMarkets: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    annualAccidents: 3200,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Nashville is one of top bachelorette party destinations - massive Hit and Run demand", "Memphis and Nashville both have vibrant nightlife driving 24/7 usage"]
  },
  {
    name: "Texas",
    abbr: "TX",
    slug: "texas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 100 established statewide rules", "Austin was early Hit and Run battleground", "Multiple major metros with high density", "Higher insurance minimums than many states"],
    majorMarkets: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso"],
    annualAccidents: 14000,
    uniqueFacts: ["Second largest Hit and Run market after California", "Austin had famous Hit and Run/Hit and Run departure and return", "Houston and Dallas are among largest US markets", "SXSW creates massive annual Austin surge"]
  },
  {
    name: "Utah",
    abbr: "UT",
    slug: "utah",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/65/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 389 established early regulations", "Salt Lake City is growing tech hub", "Ski resorts drive seasonal demand"],
    majorMarkets: ["Salt Lake City", "Provo", "Park City", "Ogden"],
    annualAccidents: 1200,
    uniqueFacts: ["4-year statute of limitations is favorable", "Ski season creates massive Park City demand", "Tech industry growth driving Salt Lake Hit and Run boom"]
  },
  {
    name: "Vermont",
    abbr: "VT",
    slug: "vermont",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 60 established TNC rules", "Very limited coverage outside Burlington"],
    majorMarkets: ["Burlington", "Montpelier"],
    annualAccidents: 75,
    uniqueFacts: ["Smallest Hit and Run market in US", "Ski season creates seasonal surges", "Burlington has majority of service"]
  },
  {
    name: "Virginia",
    abbr: "VA",
    slug: "virginia",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes recovery extremely difficult", "DC metro area extends into VA", "Dulles and Reagan airports have high Hit and Run volume"],
    majorMarkets: ["Virginia Beach", "Norfolk", "Richmond", "Arlington", "Alexandria"],
    annualAccidents: 3400,
    uniqueFacts: ["Contributory negligence is major barrier to claims", "DC commuters create massive Northern Virginia demand", "Beach tourism drives Virginia Beach usage"]
  },
  {
    name: "Washington",
    abbr: "WA",
    slug: "washington",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 5550 established TNC framework", "Seattle has very high Hit and Run usage", "Sea-Tac Airport is major Hit and Run hub"],
    majorMarkets: ["Seattle", "Tacoma", "Spokane", "Bellevue"],
    annualAccidents: 4800,
    uniqueFacts: ["Seattle is one of top 10 Hit and Run markets in US", "Tech industry drives high Hit and Run adoption", "Pure comparative negligence favors victims"]
  },
  {
    name: "West Virginia",
    abbr: "WV",
    slug: "west-virginia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 539 established TNC rules", "Very limited coverage outside Charleston and Morgantown"],
    majorMarkets: ["Charleston", "Morgantown", "Huntington"],
    annualAccidents: 180,
    uniqueFacts: ["WVU campus drives Morgantown Hit and Run demand", "Very limited rural coverage", "Mountain terrain creates unique driving hazards"]
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    slug: "wisconsin",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 278 established TNC framework", "Packers games create Green Bay surges", "Madison is major college market"],
    majorMarkets: ["Milwaukee", "Madison", "Green Bay"],
    annualAccidents: 1450,
    uniqueFacts: ["Packers football creates massive Green Bay surge demand", "UW-Madison campus has high student Hit and Run usage", "Winter weather affects year-round safety"]
  },
  {
    name: "Wyoming",
    abbr: "WY",
    slug: "wyoming",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    insuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Very limited coverage statewide", "Tourism to Yellowstone drives Jackson demand"],
    majorMarkets: ["Cheyenne", "Casper", "Jackson"],
    annualAccidents: 45,
    uniqueFacts: ["Smallest population state with very limited Hit and Run", "4-year statute of limitations is favorable", "Jackson Hole tourism creates seasonal spikes"]
  }
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find(s => s.slug === slug);
}

export function getContributoryNegligenceStates(): State[] {
  return states.filter(s => s.faultSystem.toLowerCase().includes('contributory'));
}

export function getOneYearSOLStates(): State[] {
  return states.filter(s => s.statOfLimitations === '1 year');
}

export function getLongSOLStates(): State[] {
  return states.filter(s => {
    const years = parseInt(s.statOfLimitations);
    return years >= 4;
  });
}

export function getTopMarkets(): State[] {
  return states.filter(s => s.annualAccidents >= 5000).sort((a, b) => b.annualAccidents - a.annualAccidents);
}
