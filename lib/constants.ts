// Site configuration
export const siteConfig = {
  name: "MoneyHacks",
  title: "MoneyHacks - AI Valley × AI Collective Stanford Fintech Hackathon",
  description: "Build the Future of Money - 36-48 hour fintech hackathon bringing together builders, students, and industry professionals",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    apply: process.env.NEXT_PUBLIC_LUMA_EVENT_URL || "coming_soon",
    aiValley: process.env.NEXT_PUBLIC_AIVALLEY_URL || "https://aivalley.io",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "community@aivalley.io",
  },
  event: {
    date: "August 2-3, 2025",
    location: "House of Web3",
    duration: "36-48 hours",
  }
}

// Navigation items
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Hosts", href: "#hosts" },
  { label: "Tracks", href: "#tracks" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Judges", href: "#judges" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
]

// Hackathon tracks
export const tracks = [
  {
    id: "payments",
    title: "Payments",
    icon: "💳",
    description: "Revolutionize how money moves in the digital economy",
    color: "from-blue-500 to-cyan-500",
    ideas: [
      "Smart routing optimization",
      "Fraud detection systems",
      "Bank-to-bank checkout UX",
      "Invoice intelligence",
    ],
    tools: ["Stripe API", "Plaid", "Banking APIs", "ML frameworks"],
    prize: "$5,000",
  },
  {
    id: "investing",
    title: "Investing/Wealth-Tech",
    icon: "📈",
    description: "Democratize access to sophisticated investment strategies",
    color: "from-green-500 to-emerald-500",
    ideas: [
      "AI portfolio management",
      "Tax-aware rebalancing",
      "ESG impact screening",
      "Alternative data signals",
    ],
    tools: ["Alpha Vantage", "Polygon.io", "OpenAI", "TensorFlow"],
    prize: "$5,000",
  },
  {
    id: "web3",
    title: "Web3/DeFi",
    icon: "🔗",
    description: "Build the decentralized financial infrastructure of tomorrow",
    color: "from-purple-500 to-pink-500",
    ideas: [
      "Smart wallet solutions",
      "On-chain credit scoring",
      "Cross-chain settlements",
      "Stablecoin payments",
    ],
    tools: ["Ethereum", "Solana", "Chainlink", "TheGraph"],
    prize: "$5,000",
  },
  {
    id: "wildcard",
    title: "Wildcard",
    icon: "🚀",
    description: "Push the boundaries of fintech innovation",
    color: "from-orange-500 to-red-500",
    ideas: [
      "Climate fintech",
      "Creator economy",
      "Student finance",
      "Open innovation",
    ],
    tools: ["Any API", "Any framework", "Any blockchain", "Any data source"],
    prize: "$5,000",
  },
]

// FAQ data
export const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is MoneyHacks?",
        answer: "MoneyHacks is a 36-48 hour fintech hackathon organized by AI Valley and AI Collective Stanford Chapter. It brings together builders, students, and industry professionals to create innovative financial technology solutions.",
      },
      {
        question: "When and where is the hackathon?",
        answer: "The hackathon takes place on October 18-19, 2024, at House of Web3. The event runs for 36-48 hours straight.",
      },
      {
        question: "Who can participate?",
        answer: "The hackathon is open to students, developers, designers, and anyone passionate about fintech innovation. Teams can have 1-4 members.",
      },
      {
        question: "Is there a registration fee?",
        answer: "No, participation is completely free. We'll also provide meals, snacks, and refreshments throughout the event.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What should I build?",
        answer: "You can build any fintech solution that fits into one of our four tracks: Payments, Investing/Wealth-Tech, Web3/DeFi, or Wildcard. We encourage innovative solutions that solve real problems.",
      },
      {
        question: "Can I use pre-existing code?",
        answer: "You can use open-source libraries and frameworks, but the core application must be built during the hackathon. Any pre-existing code must be disclosed.",
      },
      {
        question: "What technologies can I use?",
        answer: "You're free to use any programming language, framework, or API. We'll provide access to various fintech APIs and cloud credits from our sponsors.",
      },
    ],
  },
  {
    category: "Logistics",
    questions: [
      {
        question: "Will food be provided?",
        answer: "Yes! We'll provide all meals, snacks, and beverages throughout the hackathon. We'll accommodate dietary restrictions - just let us know when you register.",
      },
      {
        question: "Can I sleep at the venue?",
        answer: "Yes, the venue will be open 24/7 during the hackathon. We'll have designated quiet areas for rest, but we recommend bringing a sleeping bag or blanket.",
      },
      {
        question: "What should I bring?",
        answer: "Bring your laptop, chargers, any hardware you might need, toiletries, and a change of clothes. We'll provide everything else!",
      },
    ],
  },
  {
    category: "Prizes",
    questions: [
      {
        question: "What are the prizes?",
        answer: "We have $20,000+ in total prizes, with $5,000 for each track winner. There are also special prizes for categories like Best Risk/Compliance Solution and Best Data Story.",
      },
      {
        question: "How is judging conducted?",
        answer: "Projects are judged on innovation (25%), technical implementation (25%), business viability (25%), and presentation (25%). Each team will have 5 minutes to present followed by Q&A.",
      },
      {
        question: "Can I win multiple prizes?",
        answer: "Yes! Your project can win both a track prize and special category prizes. However, you can only win one track prize.",
      },
    ],
  },
]

// Stats for the hero section
export const stats = [
  { label: "Participants", value: 200, suffix: "+" },
  { label: "Prize Pool", value: 20000, prefix: "$", suffix: "+" },
  { label: "Mentors", value: 30, suffix: "+" },
  { label: "Workshops", value: 12, suffix: "" },
]

// Schedule data
export const schedule = {
  "August 2": [
    { time: "8:30 AM", event: "Networking + Breakfast", type: "meal" },
    { time: "10:00 AM", event: "Opening Speeches", type: "ceremony" },
    { time: "10:30 AM", event: "HACK TIME", type: "milestone" },
    { time: "12:00 PM", event: "Lunch", type: "meal" },
    { time: "1:00 PM", event: "Workshops / Speakers", type: "workshop" },
    { time: "6:00 PM", event: "Dinner", type: "meal" },
    { time: "7:00 PM", event: "Continue hacking", type: "milestone" },
  ],
  "August 3": [
    { time: "9:00 AM", event: "Breakfast", type: "meal" },
    { time: "9:00 AM", event: "Keep pushing", type: "milestone" },
    { time: "11:45 AM", event: "Note from organizers", type: "logistics" },
    { time: "12:00 PM", event: "Lunch", type: "meal" },
    { time: "3:14 PM", event: "Git push deadline", type: "milestone" },
    { time: "3:45 PM", event: "Hackfair (everyone can demo)", type: "milestone" },
    { time: "5:30 PM", event: "Final Demos", type: "ceremony" },
    { time: "6:30 PM", event: "Awards & Closing Ceremony", type: "ceremony" },
  ],
}

// Sponsor tiers
export const sponsorTiers = {
  platinum: {
    name: "Platinum",
    color: "from-slate-300 to-slate-400",
    size: "lg",
    sponsors: [],
  },
  gold: {
    name: "Gold",
    color: "from-yellow-400 to-yellow-500",
    size: "md",
    sponsors: [],
  },
  silver: {
    name: "Silver",
    color: "from-gray-300 to-gray-400",
    size: "sm",
    sponsors: [],
  },
  bronze: {
    name: "Bronze",
    color: "from-orange-600 to-orange-700",
    size: "xs",
    sponsors: [],
  },
}

// Sample judges (replace with actual data)
export const judges = [
  {
    id: 1,
    name: "Coming Soon",
    title: "Expert Judge",
    company: "Leading Fintech Company",
    image: "/placeholder-avatar.jpg",
    bio: "Industry expert with years of experience in fintech innovation.",
    linkedin: "#",
    twitter: "#",
    expertise: ["Fintech", "AI", "Payments"],
  },
  // Add more judges as they're confirmed
]

// Sample speakers (replace with actual data)
export const speakers = [
  {
    id: 1,
    name: "Coming Soon",
    title: "Workshop Leader",
    company: "Tech Company",
    image: "/placeholder-avatar.jpg",
    topic: "Building Modern Payment Systems",
    time: "October 18, 8:00 PM",
    track: "payments",
  },
  // Add more speakers as they're confirmed
]
