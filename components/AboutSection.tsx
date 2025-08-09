'use client';

import { Card, CardContent } from '@/components/ui/card';
import ProfileCard from '@/components/ProfileCard';
import GradientText from '@/components/TextAnimations/GradientText';

export function AboutSection() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'Java',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Kubernetes',
    'GraphQL',
    'REST APIs',
    'Microservices',
    'CI/CD',
    'Git',
    'Tailwind CSS',
    'Redux',
    'AI Agent',
    'LangChain',
    'OpenAI',
    'Machine Learning',
    '+ More',
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <ProfileCard
              name="Ilham Fadhil"
              title="Fullstack Engineer @Zypsy"
              iconUrl="/logo.png"
              grainUrl="/grain.webp"
              avatarUrl="/ilham-red-shirt-nobg.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={true}
            />
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText colors={['#3b82f6', '#8b5cf6', '#ec4899']} animationSpeed={6}>
                About Me
              </GradientText>
            </h2>
            <p className="text-xl text-gray-300">
              I&apos;m a passionate fullstack software engineer with expertise in building scalable
              web applications and modern user experiences.
              <br /> I thrive in teams that value thoughtful UX, clean architecture, and a curious
              mindset.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                With over 5 years of experience in software development, I specialize in creating
                robust, scalable applications using cutting-edge technologies. My journey began with
                a curiosity for problem-solving and has evolved into a passion for crafting
                exceptional digital experiences.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best practices to
                deliver high-quality solutions. Whether it&apos;s building responsive frontends or
                architecting backend systems, I approach each project with attention to detail and a
                much more focus on user experience.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, breaking
                things and fixing them, or sharing knowledge with the developer community through my
                blog and retweets.
              </p>
            </div>
          </div>

          <Card className="glass-effect border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Technologies & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm 
                             hover:bg-gray-700 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
