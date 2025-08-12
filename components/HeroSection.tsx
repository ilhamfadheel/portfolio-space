'use client';

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/TextAnimations/BlurText';
import Iridescence from './Backgrounds/Iridescence';
import TextType from '@/components/TextAnimations/TextType';
import Link from 'next/link';

export function HeroSection() {
  const subheading = [
    'Fullstack Software Engineer crafting exceptional digital experiences with modern technologies.',
    "I don't just write code — I also architect agents, prompt AIs, and fine-tune dreams.",
    'Fueled by coffee, driven by bugs, obsessed with awesome UI/UX and fast APIs.',
    'Turning late-night ideas into production-ready apps.',
    'Engineer by experience, learner by nature, builder by choice.',
    'Why are you still here? Scroll down and see what I have built!',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Iridescence color={[0.3, 0.5, 0.7]} mouseReact={false} amplitude={0.1} speed={1.0} />
      </div>

      <div className="mt-24 relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-center break-words">
              <BlurText
                text="Hello, I'm Ilham Fadhil"
                delay={300}
                animateBy="words"
                direction="top"
              />
            </span>
          </h1>
        </div>

        <div className="h-24 md:h-20 flex items-center justify-center mb-8">
          <div className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            <TextType
              text={subheading}
              typingSpeed={45}
              deletingSpeed={15}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full hover-glow"
            asChild
          >
            <a href="#work">View My Work</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 hover:text-white px-8 py-3 rounded-full hover-glow"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Link
            href="https://github.com/ilhamfadheel"
            className="text-gray-400 hover:text-white transition-colors duration-200 hover-glow p-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/ilhamfadheel"
            className="text-gray-400 hover:text-white transition-colors duration-200 hover-glow p-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:ilham@ilhamfadhil.com"
            className="text-gray-400 hover:text-white transition-colors duration-200 hover-glow p-2 rounded-full"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>

        <div className="animate-bounce">
          <Link href="/#about" className="block" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400 hover:cursor-pointer hover:text-white transition-colors duration-200 hover-glow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
