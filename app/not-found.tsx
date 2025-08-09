'use client';
import Link from 'next/link';
import FuzzyText from '@/components/TextAnimations/FuzzyText';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          404
        </FuzzyText>
      </h1>
      <h2 className="text-3xl font-semibold mb-4">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          Page Not Found
        </FuzzyText>
      </h2>
      <div className="mt-8">
        <Link href="/" className="w-full h-full items-center justify-center">
          <Home className="size-12 mx-auto" />
        </Link>
      </div>
    </div>
  );
}
