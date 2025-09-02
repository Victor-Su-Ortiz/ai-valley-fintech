# MoneyHacks - AI Valley × AI Collective Stanford Fintech Hackathon

A modern, high-performance fintech hackathon website built with Next.js 15+, featuring cutting-edge animations, dark mode design, and a premium fintech aesthetic.

## 🚀 Live Demo

Visit the development server at [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS 3.4+ with custom fintech design system
- **UI Components**: Custom shadcn/ui components
- **Animations**: Framer Motion 11+
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend integration ready
- **TypeScript**: Strict mode enabled
- **Package Manager**: pnpm

## ✨ Features

### 🎨 Design System
- Custom fintech color palette with electric blue, mint green, and gold accents
- Glassmorphism effects on cards and modals
- Animated gradient backgrounds and mesh patterns
- Smooth parallax scrolling and micro-interactions
- Dark mode optimized for reduced eye strain

### 📱 Sections
- **Hero**: Animated headline with particle effects and live stats counters
- **About**: Overview with benefits grid and target audience
- **Hosts**: Dual showcase of AI Valley and AI Collective Stanford
- **Tracks**: Interactive tabs for Payments, Investing, Web3, and Wildcard
- **Sponsors**: Tiered sponsor display with hover effects
- **Judges**: Expert panel showcase with expertise tags
- **Speakers**: Workshop timeline with track filtering
- **Schedule**: Interactive two-day timeline with event categories
- **Prizes**: $20,000+ prize pool visualization with judging criteria
- **FAQ**: Searchable accordion with category filtering
- **Contact**: Multi-purpose form with email integration

### 🔧 Technical Features
- SEO optimized with meta tags and Open Graph
- Mobile-first responsive design
- Accessibility compliant (WCAG 2.1 AA)
- Performance optimized with lazy loading
- Edge runtime ready for Vercel deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (preferred) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/moneyhacks-website.git
cd moneyhacks-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_LUMA_EVENT_URL=coming_soon
NEXT_PUBLIC_CONTACT_EMAIL=community@aivalley.io
NEXT_PUBLIC_AIVALLEY_URL=https://aivalley.io
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_GA_ID=your_analytics_id
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Development Commands

```bash
# Development
pnpm dev          # Start development server

# Build
pnpm build        # Create production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking
```

## 📁 Project Structure

```
├── app/                  # Next.js app router
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── sections/        # Page sections
│   └── shared/          # Shared components
├── lib/
│   ├── constants.ts     # Site configuration
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🎯 Performance Targets

- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Cumulative Layout Shift < 0.1
- Lighthouse Score > 90

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
# Build for production
pnpm build

# Test production build locally
pnpm start
```

## 🔄 Updating Content

### Adding Sponsors
Edit `components/sections/Sponsors.tsx` and update the `mockSponsors` object with actual sponsor data.

### Adding Judges/Speakers
Update the arrays in `lib/constants.ts` with actual judge and speaker information.

### Modifying Event Details
Edit `lib/constants.ts` to update event dates, location, and other details.

### Enabling Applications
Change `NEXT_PUBLIC_LUMA_EVENT_URL` in `.env.local` from `coming_soon` to your actual Lu.ma event URL.

## 📧 Email Configuration

The contact form is configured to work with Resend. To enable:

1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Update `RESEND_API_KEY` in `.env.local`
4. Create API route in `app/api/contact/route.ts`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to AI Valley and AI Collective Stanford.

## 📞 Contact

For questions or support:
- Email: community@aivalley.io
- Website: [aivalley.io](https://aivalley.io)

---

Built with ❤️ for MoneyHacks by AI Valley × AI Collective Stanford