"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  AirVent,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Headphones,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  ThermometerSnowflake,
  Wallet,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const phone = "+15550142487";
const whatsapp = "https://wa.me/15550142487";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#book" },
];

const heroStats = [
  { value: "18k+", label: "Repairs completed" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "25 min", label: "Average ETA" },
  { value: "24/7", label: "Booking support" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    copy: "Rapid diagnostics for cooling failure, leakage, noise, and sensor issues.",
  },
  {
    icon: AirVent,
    title: "Installation",
    copy: "Clean split and window AC installs with precise mounting and airflow setup.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Gas Refill",
    copy: "Pressure-tested refrigerant refill for efficient cooling and lower power bills.",
  },
  {
    icon: Snowflake,
    title: "Maintenance",
    copy: "Deep cleaning, coil care, filter service, and preventive tune-ups.",
  },
  {
    icon: ShieldCheck,
    title: "Annual Care",
    copy: "Scheduled protection plans for homes, rentals, and office cooling systems.",
  },
  {
    icon: Zap,
    title: "Emergency Fix",
    copy: "Priority support for urgent breakdowns, available day and night.",
  },
];

const features = [
  {
    icon: Clock3,
    title: "Fast Service",
    copy: "Same-day slots with live arrival updates.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Technicians",
    copy: "Background-verified experts with AC brand training.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    copy: "Transparent estimates before any repair begins.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    copy: "Always-on booking for homes and businesses.",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Service",
    copy: "Pick a time in under a minute.",
  },
  {
    icon: AirVent,
    title: "Technician Arrives",
    copy: "A verified expert reaches your doorstep.",
  },
  {
    icon: CheckCircle2,
    title: "Repair Done",
    copy: "Issue fixed, tested, and explained clearly.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    copy: "Pay securely after the work is complete.",
  },
];

const testimonials = [
  {
    name: "Maya S.",
    role: "Homeowner",
    review:
      "The technician arrived in 35 minutes and had our bedroom AC cooling again before dinner.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Daniel R.",
    role: "Cafe Owner",
    review:
      "Premium experience from booking to payment. Clear pricing, clean work, and zero drama.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Priya K.",
    role: "Property Manager",
    review:
      "We use them for multiple apartments now. Fast, polite, and consistently reliable.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1f5f53]/10 bg-[#e5f3ec]/72 px-4 py-2 text-sm font-semibold text-[#1f5f53] shadow-sm backdrop-blur"
    >
      <Sparkles className="h-4 w-4 text-[#5f9a8f]" />
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-5 text-[#1f5f53] sm:px-6 lg:px-8">
      <nav className="relative mx-auto flex h-12 max-w-7xl items-center justify-between">
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="hero-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5f3ec]/72 text-[#1f5f53] shadow-sm backdrop-blur-md transition hover:bg-white/82"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {menuOpen && (
            <motion.div
              id="hero-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 top-14 w-52 overflow-hidden rounded-2xl border border-[#1f5f53]/10 bg-[#eff8f3]/88 p-2 shadow-premium backdrop-blur-xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-black text-[#1f5f53] transition hover:bg-white/78"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>

        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-[#1f5f53]"
          aria-label="AirSwift home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f3ec]/72 backdrop-blur-md">
            <Snowflake className="h-5 w-5 fill-[#1f5f53]/10 text-[#1f5f53]" />
          </span>
          <span className="text-xl font-black tracking-normal">AirSwift</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="hidden h-11 items-center gap-2 rounded-full border border-[#1f5f53]/10 bg-[#e5f3ec]/54 px-5 text-sm font-bold text-[#1f5f53] shadow-sm backdrop-blur-md transition hover:bg-white/76 md:flex"
          >
            <Phone className="h-4 w-4" />
            +1 (555) 014-2487
          </a>
          <a
            href="#book"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#e5f3ec]/72 px-5 text-sm font-bold text-[#1f5f53] shadow-sm backdrop-blur-md transition hover:bg-white/88"
          >
            Book a Repair
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  });
  const marqueeItems = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <>
      <SmoothScroll />
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-[#1f5f53]"
        style={{ scaleX }}
      />
      <Navbar />

      <main id="home">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 text-[#1f5f53] sm:px-6 lg:px-8">
          <motion.div
            aria-hidden
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/hero-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative mx-auto mt-56 flex w-full max-w-6xl flex-col items-center text-center sm:mt-60 lg:mt-72"
          >
            <motion.h1
              variants={fadeUp}
              className="text-balance text-[clamp(2.25rem,4.8vw,4.4rem)] font-black leading-[1.05] tracking-normal text-[#1f5f53]"
            >
              Fast AC Repair — When You Need It Most.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base font-bold leading-7 text-[#4f8d80] sm:text-lg"
            >
              Same-day service. Certified technicians.
              <br />
              100% satisfaction guarantee.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <a
                href="#book"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-black text-[#111918] shadow-[0_18px_48px_rgba(31,95,83,0.16)] transition hover:-translate-y-1 hover:bg-white/92"
              >
                Book a Repair
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#e5f3ec]/62 px-8 text-sm font-black text-[#5f9a8f] shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/78"
              >
                Get Estimate
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto grid max-w-5xl gap-3 rounded-2xl border border-[#1f5f53]/10 bg-white/78 p-3 shadow-[0_24px_80px_rgba(31,95,83,0.14)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-xl bg-[#e5f3ec]/72 px-5 py-5 text-center"
              >
                <div className="text-3xl font-black leading-none text-[#1f5f53]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-black uppercase tracking-normal text-[#5f9a8f]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          id="services"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <SectionLabel>Expert cooling care</SectionLabel>
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <h2 className="max-w-2xl text-4xl font-black tracking-normal text-[#1f5f53] sm:text-5xl">
              Services built for urgent fixes and long-term comfort.
            </h2>
            <p className="max-w-md text-base leading-7 text-[#4f8d80]">
              Every visit includes inspection, transparent pricing, clean repair
              work, and final cooling checks.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, copy }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-2xl border border-[#1f5f53]/10 bg-white/78 p-6 shadow-sm backdrop-blur transition hover:shadow-[0_20px_60px_rgba(31,95,83,0.14)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f3ec] text-[#1f5f53] transition group-hover:bg-[#1f5f53] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-7 text-xl font-black text-[#1f5f53]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-[#4f8d80]">{copy}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="why"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#1f5f53] px-4 py-24 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Why choose us</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="max-w-3xl text-4xl font-black tracking-normal sm:text-5xl"
            >
              Premium service standards, without premium-service friction.
            </motion.h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, copy }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="rounded-2xl border border-white/12 bg-[#e5f3ec]/10 p-6 shadow-[0_24px_80px_rgba(8,44,38,0.18)] backdrop-blur"
                >
                  <Icon className="h-8 w-8 text-[#bfe5d2]" />
                  <h3 className="mt-6 text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="process"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <SectionLabel>Simple process</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl text-4xl font-black tracking-normal text-[#1f5f53] sm:text-5xl"
          >
            Four steps from hot room to cool air.
          </motion.h2>
          <div className="mt-12 overflow-x-auto pb-3">
            <div className="grid min-w-[850px] grid-cols-4 gap-5">
              {steps.map(({ icon: Icon, title, copy }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-[#1f5f53]/10 bg-white/86 p-6 shadow-[0_24px_80px_rgba(31,95,83,0.12)]"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(100%-10px)] top-12 z-10 h-px w-10 bg-[#5f9a8f]/35" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#5f9a8f]">
                      0{index + 1}
                    </span>
                    <Icon className="h-6 w-6 text-[#1f5f53]" />
                  </div>
                  <h3 className="mt-12 text-xl font-black text-[#1f5f53]">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#4f8d80]">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="reviews" className="overflow-hidden bg-[#edf7f1] py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <SectionLabel>Customer love</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="max-w-3xl text-4xl font-black tracking-normal text-[#1f5f53] sm:text-5xl"
            >
              Reviews that sound like relief.
            </motion.h2>
          </motion.div>
          <div className="mt-12 flex">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {marqueeItems.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="w-[320px] shrink-0 rounded-2xl border border-[#1f5f53]/10 bg-white/82 p-6 shadow-sm backdrop-blur sm:w-[420px]"
                >
                  <div className="flex gap-1 text-[#5f9a8f]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 min-h-24 text-lg font-semibold leading-8 text-[#1f5f53]">
                    "{item.review}"
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      alt={`${item.name} customer portrait`}
                      width={48}
                      height={48}
                      sizes="48px"
                      className="rounded-2xl object-cover"
                    />
                    <div>
                      <div className="font-black text-[#1f5f53]">
                        {item.name}
                      </div>
                      <div className="text-sm font-medium text-[#4f8d80]">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="book" className="px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#1f5f53] px-6 py-16 text-white shadow-[0_24px_80px_rgba(31,95,83,0.18)] sm:px-10 lg:px-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(229,243,236,0.34),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.12),transparent)]" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-black uppercase text-[#bfe5d2]">
                  Same-day appointments
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                  Get Your AC Fixed Today
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                  Book in seconds and get a certified technician assigned for
                  repair, installation, gas refill, or maintenance.
                </p>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-base font-black text-[#1f5f53] shadow-[0_20px_60px_rgba(8,44,38,0.18)] transition hover:-translate-y-1 hover:bg-[#f4faf6]"
              >
                <CalendarCheck className="h-5 w-5" />
                Book Now
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-white px-4 pb-28 pt-16 sm:px-6 md:pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e5f3ec] text-[#1f5f53]">
                <Snowflake className="h-5 w-5" />
              </span>
              <span className="text-lg font-black text-[#1f5f53]">AirSwift</span>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-[#4f8d80]">
              Premium AC repair and care for homes, rentals, offices, and retail
              spaces.
            </p>
          </div>
          <div>
            <h3 className="font-black text-[#1f5f53]">Contact</h3>
            <a
              className="mt-4 block text-[#4f8d80] transition hover:text-[#1f5f53]"
              href={`tel:${phone}`}
            >
              +1 (555) 014-2487
            </a>
            <a
              className="mt-3 block text-[#4f8d80] transition hover:text-[#1f5f53]"
              href="mailto:hello@airswift.example"
            >
              hello@airswift.example
            </a>
          </div>
          <div>
            <h3 className="font-black text-[#1f5f53]">Services</h3>
            {services.slice(0, 4).map((service) => (
              <a
                key={service.title}
                className="mt-3 block text-[#4f8d80] transition hover:text-[#1f5f53]"
                href="#services"
              >
                {service.title}
              </a>
            ))}
          </div>
          <div>
            <h3 className="font-black text-[#1f5f53]">Social</h3>
            {["Instagram", "Facebook", "LinkedIn"].map((item) => (
              <a
                key={item}
                className="mt-3 block text-[#4f8d80] transition hover:text-[#1f5f53]"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Book on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5f9a8f] text-white shadow-[0_20px_60px_rgba(31,95,83,0.18)] transition hover:-translate-y-1"
        >
          <Headphones className="h-6 w-6" />
        </a>
        <a
          href={`tel:${phone}`}
          aria-label="Call AirSwift"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f5f53] text-white shadow-[0_20px_60px_rgba(31,95,83,0.18)] transition hover:-translate-y-1"
        >
          <Phone className="h-6 w-6 text-[#bfe5d2]" />
        </a>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-3 rounded-2xl border border-[#1f5f53]/10 bg-white/88 p-3 shadow-[0_24px_80px_rgba(31,95,83,0.14)] backdrop-blur md:hidden">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f5f53] px-4 py-3 text-sm font-black text-white"
        >
          <Phone className="h-4 w-4 text-[#bfe5d2]" />
          Call Now
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e5f3ec] px-4 py-3 text-sm font-black text-[#1f5f53]"
        >
          Book Now
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
