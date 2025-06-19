# Chan'ce Solution - Web Development Portfolio

A modern, responsive web application showcasing Chan'ce Solution's web development services. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Web Development**: Custom websites and web applications
- **Responsive Design**: Mobile-first, cross-platform solutions
- **Performance Optimized**: Fast, optimized, and scalable applications
- **Theme Support**: Dark/Light mode with smooth transitions
- **Internationalization**: Multi-language support (English, Spanish, Chinese)
- **Contact System**: Integrated contact form with email functionality
- **Video Download Tool**: YouTube video downloader with trending video support
- **Job Listings**: Dynamic job openings display
- **Professional Portfolio**: Showcase of services and company information

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS variables
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) for multi-language support
- **Package Manager**: [Yarn](https://yarnpkg.com/)
- **Icons**: Emoji-based icons for simplicity
- **Deployment**: Ready for Vercel deployment

## 🌍 Internationalization

The application supports multiple languages:

- **English (en)** - Default language
- **Spanish (es)** - Español
- **Chinese (zh)** - 中文

### Language Switching

Users can switch languages using the language switcher component. URLs include locale prefixes:

- English: `/en/about`
- Spanish: `/es/about`
- Chinese: `/zh/about`

For detailed i18n documentation, see [docs/INTERNATIONALIZATION.md](docs/INTERNATIONALIZATION.md).

## 📁 Project Structure

```
chance-solution/
├── components/
│   ├── atoms/                 # Basic UI components (Button, Text)
│   ├── molecules/             # Compound components (ContactForm, ThemeToggle)
│   ├── organisms/             # Complex components (HomePageHero)
│   ├── contact/               # Contact page components
│   ├── jobs/                  # Jobs page components
│   ├── header/                # Navigation components
│   └── videoDownload/         # Video downloader components
├── pages/                     # Next.js pages
├── lib/                       # Utility functions and types
├── hooks/                     # Custom React hooks
├── contexts/                  # React contexts
├── styles/                    # Global styles
├── public/                    # Static assets
└── MockData/                  # Sample data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chance-solution
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Run the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Available Pages

- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - Company information and services
- **Jobs** (`/jobs`) - Current job openings
- **Contact** (`/contact`) - Contact form and company details
- **Download Video** (`/downloadVideo`) - YouTube video downloader tool

## 🎨 Component Architecture

This project follows **Atomic Design** principles:

- **Atoms**: Basic building blocks (Button, Text)
- **Molecules**: Simple combinations of atoms (FormInput, ContactMethodCard)
- **Organisms**: Complex UI sections (ContactForm, JobsPage)
- **Templates**: Page layouts
- **Pages**: Complete pages with data

### Key Components

- **ContactForm**: Modular form with validation and API integration
- **ThemeToggle**: Dark/Light mode switcher
- **VideoDownloader**: YouTube video download functionality
- **JobCard**: Reusable job listing component
- **ContactMethodCard**: Contact method display cards

## 🔧 Development

### Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript type checking
```

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with custom rules
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Modular, reusable components

## 🌐 API Routes

- `/api/contact` - Contact form submission
- `/api/cleanup-videos` - Video cleanup functionality

## 🎯 Key Features

### Contact System

- Email integration via mailto links
- LinkedIn company page integration
- Contact form with validation
- Success/error message handling

### Video Downloader

- YouTube URL validation
- Duration-based video trimming
- Trending video downloads
- File cleanup functionality

### Theme System

- CSS custom properties for theming
- Smooth transitions between themes
- Persistent theme preference

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `yarn build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any required environment variables here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Chan'ce Solution Ltd. Co.

## 📞 Contact

- **Email**: jackson858216047@gmail.com
- **LinkedIn**: [Chan'ce Solution](https://www.linkedin.com/company/chan-ce-solution-ltd-co/)

---

Built with ❤️ by Chan'ce Solution
