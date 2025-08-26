import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import DarkVeil from './Backgrounds/DarkVeil';
import GradientText from './TextAnimations/GradientText';
import { Fade } from 'react-awesome-reveal';

export function WorkSection() {
  const projects = [
    {
      title: 'Levian AI Platform',
      company: 'Zypsy',
      role: 'Fullstack Engineer',
      period: 'May 2025 – Present',
      location: 'Remote - San Francisco',
      description:
        'Led end-to-end development of Levian (levian.ai), an AI-powered platform for extracting, validating, and visualizing startup metrics for VC and PE firms. Developed LangChain-powered autonomous AI agent for parsing and structuring critical startup metrics.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'TanStack Query',
        'tRPC',
        'Radix',
        'Tailwind CSS',
        'LangChain',
      ],
      image: '/levian-ai-platform.avif',
      live: 'https://levian.ai',
    },
    {
      title: 'Auto2000 Dealership Management System',
      company: 'Astra International',
      role: 'Frontend Software Developer',
      period: 'November 2024 – April 2025',
      location: 'Jakarta',
      description:
        "Architected and implemented a monorepo software for Auto2000 Toyota's nationwide dealership management, including Maintenance Reminder Appointment App, Lead Management System, and Discount Approval System.",
      technologies: [
        'Next.js',
        'TurboRepo',
        'TypeScript',
        'GraphQL',
        'TanStack Query',
        'Jotai',
        'Ant Design',
        'Tailwind CSS',
      ],
      image: '/astra-international.webp',
    },
    {
      title: 'SmartCheck Kiosk App',
      company: 'Liverton Limited',
      role: 'Remote Fullstack Software Developer',
      period: 'October 2022 – April 2024',
      location: 'New Zealand',
      description:
        'Developed a SmartCheck kiosk app for hotel guests to easily check in/out, with admin panel for hotel staff. Built mobile app with React Native and web app & admin panel with ReactJS, integrated Adyen payment gateway.',
      technologies: ['React Native', 'ReactJS', 'Redux Toolkit', 'Material UI', 'Adyen', 'Jest'],
      image: '/liverton-smartcheck-app.avif',
      live: 'https://smartstay.liverton.com/',
    },
    {
      title: 'Company Rewarding System',
      company: 'Mitrais Limited',
      role: 'Software Engineer',
      period: 'February 2022 – September 2022',
      location: 'Bali',
      description:
        'Developed internal company rewarding system during my onboarding bootcamp using micro-frontend approach. Created AWS CodePipeline for CI/CD deployment and automation testing with Selenium.',
      technologies: [
        'Java Spring Boot',
        'PostgreSQL',
        'Next.js',
        'Module Federation',
        'AWS',
        'Selenium',
        'Jest',
      ],
      image: '/mitrais-carrot.avif',
      github: 'https://github.com/Mitrais-Carrot-2/carrot-frontend',
    },
    {
      title: 'Data Engineer Intern',
      company: 'Multipolar Technology',
      period: 'June 2019 – September 2019',
      location: 'Jakarta',
      description:
        'Checked data integrity and validity in data warehouse and data mart stored in Apache Hadoop using Talend Open Studio and Hue SQL for Mayapada Bank. Developed ETL jobs for Anti Money Laundering system and further analytics. Produced comprehensive documentation for each validated DWH job and SQL query.',
      technologies: ['Talend Open Studio', 'Apache Hadoop', 'Hue SQL', 'ETL'],
      image: '/multipolar-group.avif',
    },
    {
      title: 'Web3 Risk Score Generator',
      company: 'Bootcamp Project',
      period: '2024',
      description:
        'Final project for my Encode Club AI Bootcamp. Developed an AI-powered tool to generate risk scores for Web3 projects based on their Twitter presence. Helps crypto investors make informed decisions through AI-driven risk analysis with real-time data extraction.',
      technologies: ['Next.js', 'OpenAI API', 'Puppeteer', 'TypeScript', 'Tailwind CSS'],
      image: '/web3-risk-generator.avif',
      github: 'https://github.com/ilhamfadheel/AI-twitter-risk-score-generator',
      live: 'https://www.encode.club/ai-gpt-bootcamp',
    },
    {
      title: 'WordPress-Discord Integration Bridge',
      company: 'Freelance Project',
      period: '2022',
      description:
        'Created seamless integration between Discord and WordPress for content creator with thousands of subscribers. Users get personalized login URLs upon joining Discord for access to their paid subscribed channels.',
      technologies: [
        'Node.js',
        'Next.js',
        'Discord API',
        'WordPress API',
        'Cyclic',
        'Google ReCaptcha',
      ],
      image: '/discord-wordpress-bridge.avif',
    },
  ];

  return (
    <section
      id="work"
      className="py-20 px-4 relative"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 1) 100%)',
        isolation: 'isolate',
      }}
    >
      <div className="absolute inset-0 -z-10 w-full h-full">
        <DarkVeil />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            <GradientText colors={['#3b82f6', '#8b5cf6', '#ec4899']} animationSpeed={6}>
              Featured Work
            </GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of projects I&apos;ve built and contributed to, demonstrating my expertise
            across different technologies and domains.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Fade key={index} direction={index % 2 === 0 ? 'left' : 'right'} triggerOnce>
              <Card key={index} className="glass-effect border-gray-800 overflow-hidden hover-glow">
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div
                    className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <Image
                      src={
                        project.image ||
                        '/placeholder.svg?height=400&width=600&query=' +
                          encodeURIComponent(project.title + ' dashboard interface')
                      }
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`bg-black p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          <p className="text-blue-400 font-medium">{project.company}</p>
                          <p className="text-gray-400 text-sm">{project.role}</p>
                          <p className="text-gray-500 text-xs">
                            {project.period} {project.location && `• ${project.location}`}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild className="hover-glow">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.live && (
                          <Button size="sm" asChild className="hover-glow">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="truncate"
                              title={project.live}
                            >
                              <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                              <span className="truncate">
                                {project.live.replace(/^https?:\/\//, '').split('/')[0]}
                              </span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
