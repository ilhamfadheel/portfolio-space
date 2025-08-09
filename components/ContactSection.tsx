'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Loader2, CheckCircle, Calendar } from 'lucide-react';
import GradientText from './TextAnimations/GradientText';
import CurvedLoop from './TextAnimations/CurvedLoop';

export function ContactSection() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create form data object that Formspree expects
    const formData = new FormData(event.currentTarget);
    handleSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <CurvedLoop
            marqueeText="Transform ✦ Scale ✦ Empower ✦ Automate ✦ Innovate ✦ Creative ✦ Integrate ✦ Elevate ✦ Reimagine ✦ Enhance ✦"
            speed={3}
            curveAmount={120}
            direction="left"
            interactive={false}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            <GradientText colors={['#3b82f6', '#8b5cf6', '#ec4899']} animationSpeed={6}>
              Get In Touch
            </GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Let&apos;s Connect</h3>

            <div className="space-y-6 mb-8">
              <a
                href="mailto:ilham@ilhamfadhil.com"
                className="flex items-center hover:opacity-80 transition-opacity"
                aria-label="Send email to ilham@ilhamfadhil.com"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">ilham@ilhamfadhil.com</p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert mt-8">
              <p className="text-gray-300">
                I&apos;m always open to discussing new opportunities, interesting projects, or just
                having a chat about technology and software development. Whether you&apos;re a
                startup looking to build your MVP or an established company seeking to modernize
                your tech stack, I&apos;m here to help.
              </p>
            </div>

            <div className="pt-5 items-center justify-center text-center ">
              <h4 className="text-lg font-semibold mb-3">
                Checkout my Spotify playlist while you&apos;re here
              </h4>
              <iframe
                title="Spotify Playlist"
                src="https://open.spotify.com/embed/playlist/41CIgiAqKTi7dwBNbpwh2P"
                width="100%"
                height="100%"
                allow="encrypted-media"
                className="mx-auto block my-0 mb-[-60px]"
              />
            </div>
          </div>

          <Card className="glass-effect border-gray-800 backdrop-blur-sm bg-opacity-50">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Hit Me Up
              </CardTitle>
              <p className="text-gray-400 text-sm">I&apos;ll get back to you as soon as possible</p>
            </CardHeader>
            <CardContent>
              {state.succeeded ? (
                <div className="text-center py-12 px-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-900/20 mb-6">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out. I&apos;ll respond to your message within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white hover-glow flex items-center justify-center py-6 text-base font-medium transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-700"
                      disabled={state.submitting}
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="size-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <div className="relative flex justify-center items-center py-4">
                      <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                    </div>

                    <a
                      href="https://calendly.com/ilhamfadheel/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white hover-glow flex items-center justify-center py-4 text-base font-medium transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-700"
                    >
                      <Calendar className="size-5 mr-2 transition-colors" />
                      <span className="font-medium transition-colors">
                        Book an Appointment (30 min)
                      </span>
                    </a>

                    {state.errors && (
                      <p className="text-red-400 text-sm text-center mt-2">
                        There was an error submitting the form. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
