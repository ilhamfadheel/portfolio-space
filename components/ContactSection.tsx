'use client';

import {
  useForm as useFormspreeForm,
  ValidationError as FormspreeValidationError,
} from '@formspree/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Loader2, CheckCircle, Calendar } from 'lucide-react';
import GradientText from './TextAnimations/GradientText';
import CurvedLoop from './TextAnimations/CurvedLoop';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact-form';
import { Fade } from 'react-awesome-reveal';

export function ContactSection() {
  const [formState, handleFormspreeSubmit] = useFormspreeForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID as string
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      await handleFormspreeSubmit(formData);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
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

        <Fade>
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
                  I&apos;m always open to discussing new opportunities, interesting projects, or
                  just having a chat about technology and software development. Whether you&apos;re
                  a startup looking to build your MVP or an established company seeking to modernize
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
                <p className="text-gray-400 text-sm">
                  I&apos;ll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                {formState.succeeded ? (
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                            errors.name ? 'border-red-500' : ''
                          }`}
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                          {...register('email')}
                        />
                        {errors.email ? (
                          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                        ) : (
                          <FormspreeValidationError
                            prefix="Email"
                            field="email"
                            errors={formState.errors}
                            className="text-red-400 text-xs mt-1"
                          />
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.subject ? 'border-red-500' : ''
                        }`}
                        {...register('subject')}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                        {...register('message')}
                      />
                      {errors.message ? (
                        <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                      ) : (
                        <FormspreeValidationError
                          prefix="Message"
                          field="message"
                          errors={formState.errors}
                          className="text-red-400 text-xs mt-1"
                        />
                      )}
                    </div>

                    <div className="space-y-4 pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white hover-glow flex items-center justify-center py-6 text-base font-medium transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-700"
                        disabled={isSubmitting || formState.submitting}
                      >
                        {isSubmitting || formState.submitting ? (
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

                      {formState.errors && (
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
        </Fade>
      </div>
    </section>
  );
}
