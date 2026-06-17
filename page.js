import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
          alt="Gym contact"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        <div className="relative z-10 text-center px-5 animate-fade-up">
          <p className="uppercase tracking-[0.3em] text-primary font-semibold text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl">
            CONTACT <span className="text-gradient">US</span>
          </h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-pad px-5 sm:px-8 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <p className="uppercase tracking-[0.3em] text-primary font-semibold text-sm mb-3">
                Let&apos;s Talk
              </p>
              <h2 className="font-heading text-4xl mb-4">
                WE&apos;D LOVE TO <span className="text-gradient">HEAR FROM YOU</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Have a question about memberships, classes, or coaching? Fill out the
                form or reach out directly — our team responds within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-surface border border-white/5 rounded-xl p-5">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wide">Our Location</h4>
                  <p className="text-muted text-sm">123 Fitness Ave, Gulberg, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-surface border border-white/5 rounded-xl p-5">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wide">Phone</h4>
                  <p className="text-muted text-sm">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-surface border border-white/5 rounded-xl p-5">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wide">Email</h4>
                  <p className="text-muted text-sm">info@ironcoregym.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-surface border border-white/5 rounded-xl p-5">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wide">Hours</h4>
                  <p className="text-muted text-sm">Mon-Fri: 5AM-11PM · Sat: 6AM-9PM · Sun: 7AM-7PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 bg-surface border border-white/5 rounded-2xl p-7 sm:p-10">
            <h3 className="font-heading text-2xl mb-6 tracking-wide">Send Us A Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-5 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/5 h-96 relative">
          <iframe
            title="Gym location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=74.32%2C31.49%2C74.36%2C31.52&layer=mapnik"
            className="w-full h-full grayscale contrast-125 invert-[0.92]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
