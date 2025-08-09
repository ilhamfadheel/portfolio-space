# Portfolio Space

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work, skills, and experience with smooth animations and a clean, responsive design.

## 🚀 Features

- **Modern UI/UX** with smooth animations and transitions
- **Fully Responsive** design that works on all devices
- **Interactive Elements** including animated text and gradient effects
- **Optimized Performance** with Next.js and Turbopack
- **Contact Form** with Formspree integration
- **3D Tilt Effects** on interactive elements

## 🛠 Technologies Used

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
- **Animation Libraries**: Framer Motion, Matter.js
- **UI Components**: Radix UI, Shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ilhamfadheel/portfolio-space.git
   cd portfolio-space
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
portfolio-space/
├── app/                    # App Router pages and layouts
├── components/             # Reusable components
│   ├── Backgrounds/        # Animated background components
│   └── TextAnimations/     # Custom text animation components
├── public/                 # Static files
├── styles/                 # Global styles
└── lib/                    # Utility functions and helpers
```

## 🎨 Customization

### Environment Variables

Create a `.env.local` file in the root directory and add your Formspree form ID:

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

### Styling

- The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`
- Custom animations and keyframes are defined in the global CSS file

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
