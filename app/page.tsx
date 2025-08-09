import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </main>
  );
}
