import {
  Briefcase,
  GraduationCap,
  Award,
  HeartHandshake,
  TrendingUp,
  BookOpen,
  Stethoscope,
  Users,
  Sprout,
  Building2,
  Cpu,
  BriefcaseBusiness,
  ShieldCheck,
  CloudSun,
  Wallet,
  Route,
  Apple,
  Factory,
  Zap,
  Droplets,
  Home,
  Scale,
  type LucideIcon,
} from 'lucide-react'

export const CANDIDATE = {
  name: 'Emmanuel Senyo Amekplenu',
  shortName: 'Emmanuel Amekplenu',
  title: 'Volta Regional Youth Organizer Hopeful',
  party: 'New Patriotic Party',
  constituency: 'Central Region Constituency',
  slogan: 'Service. Excellence. Accountability.',
  tagline: 'Building a Better Future Together Through Unity, Integrity, and Development.',
  bio: [
    'Emmanuel Senyo Amekplenu is a passionate youth leader, organiser, and community advocate who has spent over a decade mobilising young people across the Volta Region. Born and raised in the heart of the region, Senyo rose through the ranks of student activism and grassroots organising to become one of the most respected youth voices in the movement. His work has been defined by a steady commitment to empowerment, transparency, and the firm belief that every young person deserves access to quality education, economic opportunity, and a seat at the decision-making table.',
    'A former student union president and senior organiser for the party youth wing, Senyo has spearheaded countless grassroots mobilisation efforts that registered thousands of new young voters, established party youth clubs across every district in the Volta Region, and unlocked new opportunities for skills training and entrepreneurship. He is widely credited with revitalising dormant branches, brokering unity between rival factions, and championing the inclusion of more young people in decision-making structures at every level of the party.',
    'Beyond his organising work, Senyo is a devoted husband, father, and active member of his local community. He continues to mentor young leaders through regional civic leadership forums and remains a tireless advocate for ethical leadership, accountable institutions, and a future in which no young person is left behind.',
  ],
  education: [
    {
      year: '1999',
      title: 'PhD in Economics',
      institution: 'London School of Economics & Political Science',
      detail:
        'Doctoral thesis on public expenditure efficiency in emerging economies. Graduated with distinction.',
    },
    {
      year: '1994',
      title: 'MA in Public Policy',
      institution: 'Harvard Kennedy School',
      detail:
        'Fulbright Scholar. Specialised in fiscal policy, governance, and institutional reform.',
    },
    {
      year: '1991',
      title: 'BSc Economics (First Class Honours)',
      institution: 'University of Cape Coast',
      detail:
        'Valedictorian. President of the Economics Students Society and recipient of the Chancellor Medal.',
    },
  ],
  leadership: [
    {
      year: '2021 – Present',
      role: 'Deputy Minister of Finance',
      org: 'Government of the Republic',
      detail:
        'Led national budget reform, expanded domestic revenue mobilisation by 38%, and oversaw the country’s first green bond issuance.',
    },
    {
      year: '2016 – 2021',
      role: 'Senior Policy Advisor',
      org: 'Office of the President',
      detail:
        'Designed the National Infrastructure Plan and coordinated the government’s COVID-19 economic recovery programme.',
    },
    {
      year: '2012 – 2016',
      role: 'Member of Parliament',
      org: 'Central Region Constituency',
      detail:
        'Chaired the Public Accounts Committee and authored the Universal Healthcare Access Act.',
    },
    {
      year: '2005 – 2012',
      role: 'Director of Strategy',
      org: 'National Development Authority',
      detail:
        'Established the country’s first data-driven investment appraisal unit, vetting over 400 major projects.',
    },
  ],
  awards: [
    { year: '2024', title: 'Order of the Nation', org: 'Republic Honor', detail: 'For distinguished service in public finance reform.' },
    { year: '2023', title: 'African Leadership Excellence Award', org: 'African Governance Institute', detail: 'Recognised for transformative youth skills policy.' },
    { year: '2022', title: 'Anti-Corruption Champion', org: 'Transparency International', detail: 'For the Public Procurement Modernisation Act.' },
    { year: '2021', title: 'Healthcare Hero Medal', org: 'National Medical Association', detail: 'For Universal Healthcare Access Act.' },
    { year: '2019', title: 'Fulbright Lifetime Achievement', org: 'Fulbright Association', detail: 'For contributions to international education.' },
    { year: '2018', title: 'Constituency MP of the Year', org: 'Parliamentary Press Corps', detail: 'For constituency development projects.' },
  ],
  certificates: [
    'Strategic Leadership — Harvard Kennedy School (2020)',
    'Public Financial Management — IMF Institute (2018)',
    'Anti-Corruption & Governance — UNODC (2017)',
    'Climate Finance — World Bank Group (2019)',
    'Digital Government Transformation — OECD (2021)',
    'Negotiation & Conflict Resolution — MIT Sloan (2016)',
  ],
  philosophy: [
    {
      title: 'Service Above Self',
      body: 'Public office is a sacred trust. Every decision must be measured against one test: does it make life better for the people we serve, especially those who have the least?',
    },
    {
      title: 'Evidence Over Ideology',
      body: 'We will govern with data, listen to experts, and remain humble enough to change course when the evidence demands it. Dogma has no place in the lives of struggling families.',
    },
    {
      title: 'Unity of Purpose',
      body: 'Our diversity is our greatest asset. We will build broad coalitions across regions, faiths, and generations to solve problems that no single party can solve alone.',
    },
    {
      title: 'Integrity Without Compromise',
      body: 'Corruption robs our children of their future. We will hold ourselves to the highest standards of transparency, and we will hold others to those same standards.',
    },
  ],
  stats: [
    { label: 'Years in Public Service', value: 22 },
    { label: 'Lives Touched', value: 4_500_000 },
    { label: 'Communities Visited', value: 312 },
    { label: 'Bills Authored', value: 17 },
  ],
}

export type VisionItem = {
  icon: LucideIcon
  title: string
  short: string
  goals: string[]
  detail: string
}

export const VISION_ITEMS: VisionItem[] = [
  {
    icon: TrendingUp,
    title: 'Economic Development',
    short: 'A resilient, diversified economy that works for every region.',
    goals: [],
    detail: '',
  },
  {
    icon: BookOpen,
    title: 'Education',
    short: 'World-class, free, inclusive education from crèche to career.',
    goals: ['Free SHS + tertiary grants', '1 teacher per 25 pupils', 'STEM in every district'],
    detail:
      'Every child deserves a fair start. We will expand free senior high school, build 200 new STEM academies, and launch a National Teaching Fellowship that recruits and retains the best teachers in rural districts. Tertiary grants and income-contingent loans will ensure no student drops out for lack of fees.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    short: 'Universal access to quality, affordable healthcare.',
    goals: ['1 hospital per district', 'Free maternal & child care', '9,000 new nurses'],
    detail:
      'We will complete the universal health coverage agenda by finishing every district hospital, recruiting 9,000 additional nurses and 1,200 doctors, and expanding telemedicine to every underserved community. Maternal and child health services will be free at the point of use.',
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    short: 'Skills, capital, and a seat at the table for every young person.',
    goals: ['500k youth trained yearly', '₵500M youth venture fund', 'National youth parliament'],
    detail:
      'With 60% of our population under 25, youth empowerment is not optional. We will scale the National Youth Skills Programme to 500,000 trainees per year, launch a ₵500 million Youth Venture Fund, and convene a National Youth Parliament to give young people a real voice in policy.',
  },
  {
    icon: HeartHandshake,
    title: 'Women Empowerment',
    short: 'Equal pay, equal opportunity, and protection from violence.',
    goals: ['30% women in public boards', '₵300M women enterprise fund', 'End gender-based violence'],
    detail:
      'We will enforce 30% women’s representation on every public board, capitalise a ₵300 million Women Enterprise Fund at concessional rates, and roll out one-stop crisis centres in every region to support survivors of gender-based violence with legal, medical, and counselling services.',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    short: 'Roads, rail, ports, and digital backbone for the next century.',
    goals: ['15,000 km of new roads', 'National rail revival', '100% 5G coverage by 2030'],
    detail:
      'We will deliver 15,000 km of paved roads, revive the national rail network, expand our ports, and complete the national fibre backbone so that every district has reliable, affordable internet. Every project will be subject to open, competitive, and audited procurement.',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    short: 'Modern, mechanised, profitable farming for every region.',
    goals: ['Double farmer incomes', 'Irrigation for 400k hectares', 'Agro-processing hubs nationwide'],
    detail:
      'Agriculture employs over 40% of our workforce. We will mechanise 400,000 hectares with irrigation, expand the Planting for Food programme, establish agro-processing hubs in every region, and guarantee floor prices for staple crops so farmers can plan with confidence.',
  },
  {
    icon: Cpu,
    title: 'Technology',
    short: 'A digital-first government and a thriving tech economy.',
    goals: ['National digital ID for all', 'Paperless government by 2030', '10 tech hubs nationwide'],
    detail:
      'We will complete the national digital ID, deliver paperless public services through a single citizen portal, and build ten regional technology hubs that turn our young coders and engineers into the next generation of global tech founders.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Job Creation',
    short: 'Real jobs, fair wages, and a thriving informal sector.',
    goals: ['1.2M new jobs by 2030', 'Living wage review', 'Social protection for informal workers'],
    detail:
      'We will create 1.2 million quality jobs through industrialisation, public works, and a thriving digital economy. We will review the living wage annually, formalise the informal sector with tax holidays and portable benefits, and protect every worker’s right to organise.',
  },
  {
    icon: ShieldCheck,
    title: 'National Security',
    short: 'Safe communities, modern security, and respect for rights.',
    goals: ['Community policing nationwide', 'Modernise border security', 'Reform the justice system'],
    detail:
      'Security is the foundation of prosperity. We will roll out community policing in every district, modernise our borders with surveillance and rapid response, and reform the justice system to deliver faster, fairer outcomes for victims and the accused alike.',
  },
  {
    icon: Wallet,
    title: 'Digital Transformation',
    short: 'A cashless, transparent, inclusive digital economy.',
    goals: ['80% digital payments', 'Open data by default', 'AI-ready public sector'],
    detail:
      'We will move 80% of public payments to digital rails, publish government data in open formats by default, and establish an AI Centre of Excellence to modernise service delivery. We will protect personal data with a strong, independent regulator.',
  },
  {
    icon: CloudSun,
    title: 'Climate Action',
    short: 'A green economy that protects people and planet.',
    goals: ['Net zero by 2060', '10 GW renewable energy', 'Plant 100M trees'],
    detail:
      'Climate change is the defining challenge of our time. We will reach net zero by 2060, install 10 gigawatts of renewable energy, plant 100 million trees, and protect our coastal communities with nature-based defences. Every new public project will be climate-screened.',
  },
]

export type ManifestoItem = {
  icon: LucideIcon
  title: string
  summary: string
  points: string[]
}

export const MANIFESTO_ITEMS: ManifestoItem[] = [
  {
    icon: TrendingUp,
    title: 'Economy',
    summary: 'A stable, growing, inclusive economy that creates prosperity for all.',
    points: [
      'Inflation targeting with an independent central bank',
      'Industrial parks in every region',
      'Tax cuts for SMEs employing under 100 people',
      'National Savings Bond at 12% for citizens',
    ],
  },
  {
    icon: Route,
    title: 'Roads',
    summary: 'Connecting every community with safe, all-weather roads.',
    points: [
      '15,000 km of new paved roads',
      'Cape Coast–Kumasi Expressway',
      'Dual carriageway to every regional capital',
      'Smart maintenance contract for rural roads',
    ],
  },
  {
    icon: BookOpen,
    title: 'Education',
    summary: 'Free, high-quality education from crèche to career.',
    points: [
      'Free SHS sustained and expanded',
      '200 new STEM academies',
      'Tuition grants for 100k tertiary students',
      'Teacher housing in rural districts',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Health',
    summary: 'Universal, quality, affordable healthcare for every citizen.',
    points: [
      'Complete every district hospital',
      'Free maternal & child health',
      'National medical equipment pool',
      'Telemedicine in every sub-district',
    ],
  },
  {
    icon: Briefcase,
    title: 'Employment',
    summary: 'Real jobs, fair wages, dignity of work for all.',
    points: [
      '1.2M new jobs by 2030',
      'Youth Skills Programme scaled to 500k/yr',
      'Apprenticeship tax credit for employers',
      'Living wage reviewed annually',
    ],
  },
  {
    icon: Wallet,
    title: 'Digital Economy',
    summary: 'A thriving digital economy that lifts every sector.',
    points: [
      'National digital ID for all',
      'Paperless government by 2030',
      'Digital payments for 80% of services',
      'AI Centre of Excellence',
    ],
  },
  {
    icon: CloudSun,
    title: 'Tourism',
    summary: 'Position our nation as a premier global destination.',
    points: [
      'Tourism Investment Fund of ₵200M',
      'Visa-free entry for 60 countries',
      'National heritage trail',
      'Eco-tourism in every region',
    ],
  },
  {
    icon: Factory,
    title: 'Industrialisation',
    summary: 'Adding value to what we produce, where we produce it.',
    points: [
      'Special Economic Zones in 8 regions',
      'Agro-processing hubs nationwide',
      'Made-in-Ghana procurement preference',
      'Industrial skills academies',
    ],
  },
  {
    icon: Apple,
    title: 'Agriculture',
    summary: 'Modern, profitable, resilient farming for every region.',
    points: [
      'Irrigation for 400k hectares',
      'Guaranteed floor prices for staples',
      'Mechanisation centres in every district',
      'Agri-insurance for 1M farmers',
    ],
  },
  {
    icon: Zap,
    title: 'Energy',
    summary: 'Reliable, affordable, clean energy for all.',
    points: [
      '10 GW of renewable capacity',
      'End of dumsor with smart grid',
      'Rural electrification to 99.5%',
      'Net metering for rooftop solar',
    ],
  },
  {
    icon: Droplets,
    title: 'Water',
    summary: 'Safe water for every household, school, and clinic.',
    points: [
      'Water for 5M new households',
      'Community boreholes in 3,000 villages',
      'National dam safety programme',
      'Recycled water for industry',
    ],
  },
  {
    icon: Home,
    title: 'Housing',
    summary: 'Affordable, decent homes for every working family.',
    points: [
      '200k affordable homes by 2030',
      'National Mortgage Refinance Company',
      'Rent-to-own for civil servants',
      'Climate-resilient building code',
    ],
  },
  {
    icon: Scale,
    title: 'Anti-Corruption',
    summary: 'A government that is clean, open, and accountable.',
    points: [
      'Independent Special Prosecutor',
      'Open beneficial ownership register',
      'Asset declaration for all public officials',
      'Whistleblower protection law',
    ],
  },
]

export type AchievementStat = {
  label: string
  value: number
  suffix?: string
  icon: LucideIcon
}

export const ACHIEVEMENTS: AchievementStat[] = [
  { label: 'Projects Completed', value: 248, icon: Briefcase },
  { label: 'Communities Visited', value: 312, icon: HeartHandshake },
  { label: 'Youth Employed', value: 82_400, icon: Users },
  { label: 'Schools Built', value: 156, icon: BookOpen },
  { label: 'Hospitals Supported', value: 47, icon: Stethoscope },
  { label: 'Roads Constructed (km)', value: 4_320, suffix: ' km', icon: Route },
  { label: 'Scholarships Awarded', value: 12_500, icon: GraduationCap },
  { label: 'Businesses Supported', value: 9_300, icon: TrendingUp },
]

export type NewsItem = {
  id: string
  category: 'Campaign News' | 'Press Releases' | 'Interviews' | 'Opinion' | 'Speeches' | 'Videos' | 'Media Statements'
  title: string
  excerpt: string
  date: string
  author: string
  readTime: string
  image: string
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    category: 'Campaign News',
    title: 'Amekplenu Launches National Youth Skills Programme Phase III',
    excerpt:
      'Speaking to a 30,000-strong crowd in Cape Coast, the candidate unveiled the next phase of his flagship skills programme, targeting 500,000 trainees per year.',
    date: '2026-07-12',
    author: 'Campaign Communications',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n2',
    category: 'Press Releases',
    title: 'Amekplenu Pledges ₵500M Venture Fund for Young Entrepreneurs',
    excerpt:
      'The candidate today announced a ₵500 million Youth Venture Fund that will provide concessional capital and mentorship to young founders across the country.',
    date: '2026-07-09',
    author: 'Policy Office',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n3',
    category: 'Speeches',
    title: 'Full Text: Amekplenu’s Address at the National Governance Forum',
    excerpt:
      'Read the full transcript of the candidate’s landmark address on ethical governance, anti-corruption, and rebuilding public trust in our institutions.',
    date: '2026-07-05',
    author: 'Emmanuel Senyo Amekplenu',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n4',
    category: 'Interviews',
    title: 'One-on-One with Metro News: The Vision for 2030',
    excerpt:
      'In a wide-ranging 45-minute interview, the candidate laid out his 2030 vision for jobs, healthcare, education, and the digital economy.',
    date: '2026-07-02',
    author: 'Metro News Desk',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1573141477914-13ad3436ec1c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n5',
    category: 'Opinion',
    title: 'Why Public Finance Reform Is the Foundation of Progress',
    excerpt:
      'In this op-ed, the candidate argues that no development agenda can succeed without first fixing how public money is raised, spent, and accounted for.',
    date: '2026-06-28',
    author: 'Emmanuel Senyo Amekplenu',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n6',
    category: 'Videos',
    title: 'Watch: Amekplenu Visits Bolgatanga Regional Hospital',
    excerpt:
      'A four-minute documentary on the candidate’s visit to the newly upgraded Bolgatanga Regional Hospital, the 47th hospital supported under his leadership.',
    date: '2026-06-22',
    author: 'Campaign Media Team',
    readTime: '4:32 video',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n7',
    category: 'Media Statements',
    title: 'Statement on the Quarterly Inflation Report',
    excerpt:
      'The candidate today issued a detailed statement calling for structural reforms to monetary policy following the release of the latest inflation figures.',
    date: '2026-06-18',
    author: 'Press Office',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n8',
    category: 'Campaign News',
    title: 'Amekplenu Welcomes 12,000 New Volunteers in Northern Tour',
    excerpt:
      'A five-day northern regional tour saw 12,000 new volunteers join the movement, with packed town halls in Tamale, Bolgatanga, Wa, and Sunyani.',
    date: '2026-06-14',
    author: 'Campaign Communications',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2b87c?auto=format&fit=crop&w=1200&q=80',
  },
]

export type EventItem = {
  id: string
  type: 'Rally' | 'Town Hall' | 'Volunteer Event' | 'Community Visit' | 'Fundraiser' | 'Campaign Launch'
  title: string
  date: string
  time: string
  location: string
  address: string
  description: string
}

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 'e1',
    type: 'Rally',
    title: 'Grand Rally at Independence Square',
    date: '2026-12-05T14:00:00',
    time: '2:00 PM',
    location: 'Independence Square, Accra',
    address: 'Independence Ave, Accra',
    description:
      'Join 100,000 supporters at the largest rally of the campaign. Live music, special guests, and the candidate’s major policy address.',
  },
  {
    id: 'e2',
    type: 'Town Hall',
    title: 'Youth Town Hall — Tamale',
    date: '2026-11-22T10:00:00',
    time: '10:00 AM',
    location: 'Tamale City Hall',
    address: 'City Hall Way, Tamale',
    description:
      'An interactive town hall focused on youth employment, education, and digital opportunities. Open Q&A with the candidate.',
  },
  {
    id: 'e3',
    type: 'Volunteer Event',
    title: 'National Volunteer Day of Action',
    date: '2026-11-15T09:00:00',
    time: '9:00 AM',
    location: '312 communities nationwide',
    address: 'Multiple locations',
    description:
      'Join 50,000 volunteers in community service projects across all 312 constituencies — clean-ups, health screenings, and skills clinics.',
  },
  {
    id: 'e4',
    type: 'Fundraiser',
    title: 'Business Leaders for Amekplenu Dinner',
    date: '2026-11-08T18:30:00',
    time: '6:30 PM',
    location: 'Labadi Beach Hotel, Accra',
    address: 'Labadi Rd, Accra',
    description:
      'An evening with the candidate and 400 business leaders. Sponsorship tables available. Proceeds support the campaign field programme.',
  },
  {
    id: 'e6',
    type: 'Campaign Launch',
    title: 'Manifesto Launch & Policy Forum',
    date: '2026-10-20T13:00:00',
    time: '1:00 PM',
    location: 'National Theatre, Accra',
    address: 'Liberation Rd, Accra',
    description:
      'The official launch of the 2026 manifesto, followed by a policy forum with sector experts and live audience questions.',
  },
]

export type GalleryItem = {
  id: string
  category: 'Rallies' | 'Community Outreach' | 'Press Conferences' | 'Campaign Highlights'
  title: string
  type: 'image' | 'video'
  src: string
  span?: 'tall' | 'wide' | 'normal'
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Campaign Highlights',
    title: 'On the Campaign Trail',
    type: 'image',
    src: '/gallery-1.jpg',
    span: 'tall',
  },
  {
    id: 'g2',
    category: 'Campaign Highlights',
    title: 'With Supporters',
    type: 'image',
    src: '/gallery-2.jpg',
    span: 'normal',
  },
  {
    id: 'g3',
    category: 'Campaign Highlights',
    title: 'Community Engagement',
    type: 'image',
    src: '/gallery-3.jpg',
    span: 'wide',
  },
  {
    id: 'g4',
    category: 'Campaign Highlights',
    title: 'On the Ground',
    type: 'image',
    src: '/gallery-4.jpg',
    span: 'normal',
  },
  {
    id: 'g5',
    category: 'Campaign Highlights',
    title: 'Meeting the People',
    type: 'image',
    src: '/gallery-5.jpg',
    span: 'tall',
  },
  {
    id: 'g6',
    category: 'Campaign Highlights',
    title: 'Campaign Moment',
    type: 'image',
    src: '/gallery-6.jpg',
    span: 'wide',
  },
  {
    id: 'g7',
    category: 'Campaign Highlights',
    title: 'A Movement Grows',
    type: 'image',
    src: '/gallery-7.jpg',
    span: 'tall',
  },
  {
    id: 'g8',
    category: 'Campaign Highlights',
    title: 'Voices Heard',
    type: 'image',
    src: '/gallery-8.jpg',
    span: 'wide',
  },
]

export type Testimonial = {
  name: string
  role: string
  location: string
  quote: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nana Yaa Boateng',
    role: 'Community Leader',
    location: 'Central Region',
    quote:
      'Senyo is the only leader who comes to our village, sits under the tree, and listens. When he promised us a clinic, he delivered. When he promised us a road, he delivered. We trust him with our future.',
    initials: 'NY',
  },
  {
    name: 'David Owusu',
    role: 'Youth Entrepreneur',
    location: 'Ashanti Region',
    quote:
      'His Youth Venture Fund gave me the capital to start my agri-tech company. Today I employ 14 young people. That’s what real leadership looks like — not promises, but opportunity.',
    initials: 'DO',
  },
  {
    name: 'Dr. Ama Serwaa',
    role: 'Medical Professional',
    location: 'Greater Accra',
    quote:
      'As a doctor, I have seen firsthand what real youth-led advocacy can mean. Senyo doesn’t just talk about health — he mobilises young volunteers to support our hospitals, supplies, and outreach.',
    initials: 'AS',
  },
  {
    name: 'Hajia Fatima Mohammed',
    role: 'Women’s Advocate',
    location: 'Northern Region',
    quote:
      'For the first time, a leader has put women at the centre of his agenda. The Women Enterprise Fund has lifted thousands of women in my community out of poverty. We stand with him.',
    initials: 'FM',
  },
  {
    name: 'Kwabena Asante',
    role: 'Business Owner',
    location: 'Eastern Region',
    quote:
      'I have done business across this region for 30 years. I have never seen a youth organiser as competent and as principled as Senyo. He understands the economy and he respects the law.',
    initials: 'KA',
  },
  {
    name: 'Chief Togbe Adza IV',
    role: 'Traditional Leader',
    location: 'Volta Region',
    quote:
      'In our tradition, we value wisdom, integrity, and service. Senyo embodies all three. He honours our customs and he delivers for our young people. He has our full support.',
    initials: 'TA',
  },
]

export const MEDIA_DOWNLOADS = [
  { title: 'Full Manifesto 2026', description: 'Official 84-page policy document', type: 'PDF', size: '4.2 MB', icon: 'pdf' as const },
  { title: 'Press Kit', description: 'Bio, photos, logos, contact sheet', type: 'ZIP', size: '28 MB', icon: 'press' as const },
  { title: 'Campaign Logo Pack', description: 'SVG, PNG, EPS in all colour modes', type: 'ZIP', size: '3.1 MB', icon: 'logo' as const },
  { title: 'Official Portrait Pack', description: 'High-res portraits for editorial use', type: 'ZIP', size: '52 MB', icon: 'photo' as const },
  { title: 'Campaign Video B-Roll', description: 'Broadcast-quality HD footage', type: 'MP4', size: '480 MB', icon: 'video' as const },
  { title: 'Brand Guidelines', description: 'Colour, typography, usage rules', type: 'PDF', size: '6.8 MB', icon: 'brand' as const },
]

export const REGIONS = [
  'Greater Accra', 'Ashanti', 'Central', 'Eastern', 'Western', 'Volta',
  'Northern', 'Upper East', 'Upper West', 'Bono', 'Bono East', 'Ahafo',
  'Oti', 'Western North', 'Savannah', 'North East',
]

export const CONSTITUENCIES = [
  'Central Region Constituency', 'Kumasi Central', 'Tamale South',
  'Accra Central', 'Takoradi Constituency', 'Ho Central', 'Bolgatanga Central',
  'Wa Central', 'Sunyani East', 'Cape Coast North', 'Koforidua Constituency',
]

export const SKILLS = [
  'Community Organising', 'Digital Marketing', 'Graphic Design', 'Public Speaking',
  'Data Entry', 'Canvassing', 'Event Coordination', 'Translation',
  'Photography', 'Video Editing', 'Web Development', 'Legal Support',
  'Healthcare Outreach', 'Education Tutorials', 'Fundraising', 'Logistics',
]

export const VOLUNTEER_INTERESTS = [
  'Door-to-door canvassing', 'Phone banking', 'Social media', 'Event setup',
  'Translation', 'Polling station monitoring', 'Youth outreach',
  'Women outreach', 'Tech support', 'Driver / logistics', 'Healthcare outreach',
  'Policy research',
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'News', href: '#news' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
]

export const FAQ_ITEMS = [
  {
    q: 'How can I vote for Emmanuel Amekplenu?',
    a: 'You must be registered on the national electoral roll. Visit your district electoral office with a valid national ID before the registration deadline. Polling day is 7 December 2026. We can help you check your registration status — contact our hotline.',
  },
  {
    q: 'How do I volunteer for the campaign?',
    a: 'Visit the Volunteer section on this site, complete the registration form, and our regional coordinator will contact you within 48 hours. You can choose your skills, availability, and areas of interest.',
  },
  {
    q: 'Are donations secure and tax-deductible?',
    a: 'Yes. All donations are processed through PCI-DSS-compliant payment gateways. Donations are processed in accordance with the Political Parties Funding Act and are publicly disclosed quarterly on our transparency portal.',
  },
  {
    q: 'Can I attend campaign events?',
    a: 'Yes — most events are open to the public. Visit the Events section to RSVP. Some fundraisers and private events require tickets or invitations.',
  },
  {
    q: 'How can my community request a visit from the candidate?',
    a: 'Use the Contact form on this site and select “Request a Visit” as the subject. Our constituency liaison team reviews all requests weekly and will respond directly.',
  },
  {
    q: 'Where can I read the full manifesto?',
    a: 'The full 84-page manifesto is available for download in the Media Center section. You can also read the summary version in the Manifesto section on this page.',
  },
]
