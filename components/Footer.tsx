import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ilhamfadheel',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ilhamfadheel',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ilhamfadheel',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:ilham@ilhamfadhil.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Stack Development</li>
              <li>AI Agent Development</li>
              <li>Technical Consulting</li>
              <li>Code Review & Mentoring</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Work
                </Link>
              </li>
              {/* <li>
                <Link href="/#blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link href="/" className="flex items-center pb-5">
              <Image src="/logo.png" alt="Ilham Fadhil" width={32} height={32} className="invert" />
            </Link>
            <p className="text-gray-300 mb-4">
              Fullstack Software Engineer that builds with creativity at every step of the process.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover-glow p-2 rounded-full"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2019 - {new Date().getFullYear()} Ilham Fadhil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
