import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function BlogSection() {
  const posts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt:
        'Learn best practices for structuring large React applications with TypeScript, including advanced patterns and performance optimizations.',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/react-typescript-code.png',
      slug: 'scalable-react-typescript',
    },
    {
      title: 'Microservices Architecture: Lessons Learned',
      excerpt:
        'Key insights from implementing microservices in production, including common pitfalls and solutions for distributed systems.',
      date: '2023-12-20',
      readTime: '12 min read',
      image: '/microservices-architecture.png',
      slug: 'microservices-lessons-learned',
    },
    {
      title: 'Modern CSS Techniques for Better UX',
      excerpt:
        'Explore advanced CSS features like container queries, CSS Grid, and custom properties to create responsive, accessible interfaces.',
      date: '2023-11-28',
      readTime: '6 min read',
      image: '/modern-css-design.png',
      slug: 'modern-css-techniques',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Latest Articles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on software development, technology trends,
            and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="glass-effect border-gray-800 overflow-hidden hover-glow group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  <span className="mx-2">•</span>
                  {post.readTime}
                </div>
                <CardTitle className="text-xl group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:text-white"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
