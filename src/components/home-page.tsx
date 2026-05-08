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
  Globe,
  Headphones,
  Mail,
  MapPin,
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
const email = "hello@airswift.example";
const address = "Downtown Service Hub, Austin, TX";

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
    tag: "Diagnostics",
    title: "AC Repair",
    copy: "Rapid diagnostics for cooling failure, leakage, noise, and sensor issues.",
    detail: "Most faults fixed same day",
  },
  {
    icon: AirVent,
    tag: "Setup",
    title: "Installation",
    copy: "Clean split and window AC installs with precise mounting and airflow setup.",
    detail: "Leveling, drainage, airflow check",
  },
  {
    icon: ThermometerSnowflake,
    tag: "Efficiency",
    title: "Gas Refill",
    copy: "Pressure-tested refrigerant refill for efficient cooling and lower power bills.",
    detail: "Leak check before refill",
  },
  {
    icon: Snowflake,
    tag: "Care",
    title: "Maintenance",
    copy: "Deep cleaning, coil care, filter service, and preventive tune-ups.",
    detail: "Cleaner air and faster cooling",
  },
  {
    icon: ShieldCheck,
    tag: "Protection",
    title: "Annual Care",
    copy: "Scheduled protection plans for homes, rentals, and office cooling systems.",
    detail: "Priority visits all season",
  },
  {
    icon: Zap,
    tag: "Urgent",
    title: "Emergency Fix",
    copy: "Priority support for urgent breakdowns, available day and night.",
    detail: "24/7 booking support",
  },
];

const footerServices = [
  "Emergency AC Repair",
  "AC Installation",
  "Gas Refill",
  "Preventive Maintenance",
  "Annual Care Plans",
  "Commercial AC Service",
];

const contactDetails = [
  {
    icon: Phone,
    label: "+1 (555) 014-2487",
    href: `tel:${phone}`,
  },
  {
    icon: Mail,
    label: email,
    href: `mailto:${email}`,
  },
  {
    icon: MapPin,
    label: address,
    href: "https://maps.google.com",
  },
  {
    icon: Clock3,
    label: "Open 24/7 for bookings",
    href: "#book",
  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M14 8.2V6.5c0-.9.6-1.1 1-1.1h2.4V2h-3.3C10.8 2 10 4.5 10 6.1v2.1H7.7V12H10v10h4V12h3l.4-3.8H14Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.9 8.9H3.2V21h3.7V8.9ZM5.1 3C3.9 3 3 3.8 3 4.9s.9 1.9 2.1 1.9 2.1-.8 2.1-1.9S6.3 3 5.1 3Zm8 5.9H9.6V21h3.7v-6.4c0-1.7.8-2.7 2.1-2.7 1.2 0 1.8.8 1.8 2.7V21H21v-6.9c0-3.5-1.8-5.5-4.5-5.5-1.6 0-2.8.8-3.4 1.7V8.9Z" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "#",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "#",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "#",
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
    label: "CONTACT US",
    number: "01",
    icon: Headphones,
    title: "Tell Us What's Wrong",
    copy: "Tell us what your AC is doing and where you need support.",
  },
  {
    label: "PICK A TIME",
    number: "02",
    icon: CalendarCheck,
    title: "Choose Your Slot",
    copy: "Choose a same-day slot that fits your home or business schedule.",
  },
  {
    label: "GET A SERVICE",
    number: "03",
    icon: AirVent,
    title: "Expert Care Arrives",
    copy: "A verified technician arrives, diagnoses the issue, and fixes it cleanly.",
  },
  {
    label: "PAY SAFELY",
    number: "04",
    icon: CreditCard,
    title: "Approve and Pay",
    copy: "Approve transparent pricing and pay securely after the work is complete.",
  },
  {
    label: "READY?",
    number: "05",
    icon: CheckCircle2,
    title: "Start Cooling Today",
    copy: "Your cool comfort starts today.",
    cta: "Book AC Service",
  },
];

const testimonials = [
  {
    name: "Maya S.",
    role: "Homeowner",
    service: "Emergency AC Repair",
    review:
      "The technician arrived in 35 minutes and had our bedroom AC cooling again before dinner.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Daniel R.",
    role: "Cafe Owner",
    service: "Commercial Maintenance",
    review:
      "Premium experience from booking to payment. Clear pricing, clean work, and zero drama.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Priya K.",
    role: "Property Manager",
    service: "Annual Care Plan",
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
  const [activeStep, setActiveStep] = useState(4);
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
          className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(191,229,210,0.58),transparent_24rem),radial-gradient(circle_at_82%_20%,rgba(174,220,255,0.46),transparent_26rem)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Expert cooling care</SectionLabel>
            <motion.div
              variants={fadeUp}
              className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
            >
              <div>
                <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-[#1f5f53] sm:text-5xl">
                  Premium AC services with zero guesswork.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#4f8d80]">
                  From urgent repairs to seasonal care, every visit includes a
                  clear diagnosis, upfront pricing, clean workmanship, and final
                  cooling performance checks.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-[#1f5f53]/10 bg-white/70 p-5 shadow-[0_26px_80px_rgba(31,95,83,0.12)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(229,243,236,0.74),rgba(231,244,255,0.62))]" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1f5f53] text-white shadow-[0_18px_44px_rgba(31,95,83,0.2)]">
                    <ThermometerSnowflake className="h-6 w-6 text-[#bfe5d2]" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-normal text-[#5f9a8f]">
                      Same-day cooling audit
                    </p>
                    <h3 className="mt-2 text-xl font-black text-[#1f5f53]">
                      We inspect, repair, test, and explain before we leave.
                    </h3>
                  </div>
                </div>
                <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
                  {["Verified techs", "Clear estimate", "Cooling proof"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/72 px-4 py-3 text-sm font-black text-[#1f5f53] shadow-sm"
                      >
                        <CheckCircle2 className="mb-2 h-4 w-4 text-[#5f9a8f]" />
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, tag, title, copy, detail }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.015 }}
                  className="group relative min-h-[310px] overflow-hidden rounded-[28px] border border-[#1f5f53]/10 bg-white/72 p-6 shadow-[0_18px_58px_rgba(31,95,83,0.08)] backdrop-blur-xl transition hover:border-[#5f9a8f]/28 hover:shadow-[0_30px_90px_rgba(31,95,83,0.16)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(191,229,210,0.7),transparent_15rem),linear-gradient(145deg,rgba(255,255,255,0.74),rgba(231,244,255,0.3))] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#1f5f53]/10 bg-white/32 transition duration-500 group-hover:scale-125" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f3ec] text-[#1f5f53] shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#1f5f53] group-hover:text-white group-hover:shadow-[0_18px_44px_rgba(31,95,83,0.18)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#1f5f53]/10 bg-white/68 px-3 py-1 text-xs font-black text-[#5f9a8f]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="relative mt-8">
                    <p className="text-xs font-black uppercase tracking-normal text-[#5f9a8f]">
                      {tag}
                    </p>
                    <h3 className="mt-3 text-2xl font-black tracking-normal text-[#1f5f53]">
                      {title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#4f8d80]">{copy}</p>
                  </div>
                  <div className="relative mt-7 flex items-center gap-3 border-t border-[#1f5f53]/10 pt-5 text-sm font-black text-[#1f5f53]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5f9a8f]" />
                    {detail}
                  </div>
                </motion.article>
              ))}
            </div>
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
          className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(151,224,199,0.3),transparent_20rem),radial-gradient(circle_at_84%_18%,rgba(174,220,255,0.36),transparent_24rem)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Simple process</SectionLabel>
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
            >
              <h2 className="max-w-3xl text-4xl font-black tracking-normal text-[#1f5f53] sm:text-5xl">
                Five calm steps from warm air to cool comfort.
              </h2>
              <p className="max-w-md text-base leading-7 text-[#4f8d80]">
                Tap or hover through the service flow. Each step stays simple,
                secure, and built around your schedule.
              </p>
            </motion.div>

            <div
              className="process-accordion mt-12"
              onMouseLeave={() => setActiveStep(4)}
            >
              {steps.map(({ icon: Icon, number, label, title, copy, cta }, index) => {
                const isActive = activeStep === index;
                const isReady = index === steps.length - 1;

                return (
                  <motion.article
                    key={label}
                    variants={fadeUp}
                    tabIndex={0}
                    aria-expanded={isActive}
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className={`process-card ${isActive ? "is-active" : ""} ${
                      isReady ? "is-ready" : ""
                    }`}
                    style={{ flexGrow: isActive ? 6 : 1 }}
                  >
                    <div className="process-card__ambient" aria-hidden />
                    <div className="process-card__top">
                      <span className="process-card__number">{number}</span>
                      <span className="process-card__icon">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="process-card__body">
                      <p className="process-card__label">{label}</p>
                      <h3>{title}</h3>
                      <p className="process-card__copy">{copy}</p>
                      {cta && (
                        <a href="#book" className="process-card__cta">
                          {cta}
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="process-card__mark" aria-hidden />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section
          id="reviews"
          className="relative overflow-hidden bg-[#edf7f1] py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(191,229,210,0.78),transparent_25rem),radial-gradient(circle_at_86%_16%,rgba(174,220,255,0.52),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(237,247,241,0.78))]" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <SectionLabel>Customer love</SectionLabel>
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <div>
                <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-[#1f5f53] sm:text-5xl">
                  Reviews that feel calm, clear, and earned.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#4f8d80]">
                  Real visits, clear pricing, tidy repairs, and cool rooms.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 rounded-[28px] border border-[#1f5f53]/10 bg-white/72 p-3 shadow-[0_24px_70px_rgba(31,95,83,0.1)] backdrop-blur-xl">
                {[
                  ["4.9", "Rating"],
                  ["18k+", "Repairs"],
                  ["24/7", "Care"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-[#e5f3ec]/72 px-4 py-3 text-center"
                  >
                    <div className="text-xl font-black text-[#1f5f53]">
                      {value}
                    </div>
                    <div className="mt-1 text-[0.68rem] font-black uppercase tracking-normal text-[#5f9a8f]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <div className="relative mt-12 flex [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]">
            <motion.div
              className="flex gap-6 px-4 sm:px-6 lg:px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {marqueeItems.map((item, index) => (
                <figure
                  key={`${item.name}-${index}`}
                  className="group relative min-h-[270px] w-[320px] shrink-0 overflow-hidden rounded-[28px] border border-[#1f5f53]/10 bg-white/74 p-5 shadow-[0_22px_70px_rgba(31,95,83,0.11)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#5f9a8f]/30 hover:shadow-[0_34px_100px_rgba(31,95,83,0.18)] sm:w-[410px]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(191,229,210,0.72),transparent_16rem),linear-gradient(145deg,rgba(255,255,255,0.82),rgba(231,244,255,0.34))] opacity-90 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-8 -top-10 text-[9rem] font-black leading-none text-[#1f5f53]/[0.045]">
                    ”
                  </div>
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex gap-1 text-[#5f9a8f]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-current drop-shadow-sm"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1f5f53]/10 bg-white/76 px-3 py-1 text-xs font-black text-[#1f5f53]">
                      <BadgeCheck className="h-3.5 w-3.5 text-[#5f9a8f]" />
                      Verified
                    </span>
                  </div>
                  <blockquote className="relative mt-6 min-h-20 text-lg font-black leading-7 tracking-normal text-[#1f5f53] sm:text-xl sm:leading-8">
                    “{item.review}”
                  </blockquote>
                  <div className="relative mt-6 rounded-[22px] border border-[#1f5f53]/10 bg-white/68 p-3 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-[#5f9a8f]/22 blur-md" />
                        <Image
                          src={item.avatar}
                          alt={`${item.name} customer portrait`}
                          width={50}
                          height={50}
                          sizes="50px"
                          className="relative h-[50px] w-[50px] rounded-2xl object-cover ring-2 ring-white"
                        />
                      </div>
                      <div className="min-w-0">
                        <figcaption className="font-black text-[#1f5f53]">
                          {item.name}
                        </figcaption>
                        <div className="text-sm font-bold text-[#4f8d80]">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs font-black uppercase tracking-normal text-[#5f9a8f]">
                      {item.service}
                    </div>
                  </div>
                </figure>
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

      <footer className="relative overflow-hidden bg-white px-4 pb-28 pt-16 sm:px-6 md:pb-10 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(229,243,236,0.88),transparent_24rem),radial-gradient(circle_at_88%_18%,rgba(231,244,255,0.72),transparent_26rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1.85fr]">
            <div className="rounded-[28px] border border-[#1f5f53]/10 bg-[#f6fbf8]/78 p-7 shadow-[0_24px_80px_rgba(31,95,83,0.1)] backdrop-blur-xl">
              <a
                href="#home"
                aria-label="AirSwift home"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f5f53] text-white shadow-[0_16px_44px_rgba(31,95,83,0.18)]">
                  <Snowflake className="h-7 w-7 fill-[#bfe5d2]/20 text-[#bfe5d2]" />
                </span>
                <span>
                  <span className="block text-2xl font-black tracking-normal text-[#1f5f53]">
                    AirSwift
                  </span>
                  <span className="mt-1 block text-xs font-black uppercase tracking-normal text-[#5f9a8f]">
                    AC Repair Services
                  </span>
                </span>
              </a>
              <h2 className="mt-8 max-w-md text-3xl font-black leading-tight tracking-normal text-[#1f5f53]">
                Your AC repair services for fast, reliable cooling care.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-[#4f8d80]">
                Premium AC repair, installation, gas refill, maintenance, and
                annual care for homes, rentals, offices, and retail spaces.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f5f53] px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(31,95,83,0.18)] transition hover:-translate-y-1"
                >
                  <CalendarCheck className="h-4 w-4 text-[#bfe5d2]" />
                  Book Service
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#1f5f53] shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(31,95,83,0.12)]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-[#1f5f53]/10 bg-white/78 p-6 shadow-sm backdrop-blur">
                <h3 className="text-sm font-black uppercase tracking-normal text-[#1f5f53]">
                  Services
                </h3>
                <div className="mt-5 grid gap-3">
                  {footerServices.map((service) => (
                    <a
                      key={service}
                      className="group flex items-center gap-3 text-sm font-bold text-[#4f8d80] transition hover:text-[#1f5f53]"
                      href="#services"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9ccfc0] transition group-hover:scale-125 group-hover:bg-[#1f5f53]" />
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#1f5f53]/10 bg-white/78 p-6 shadow-sm backdrop-blur">
                <h3 className="text-sm font-black uppercase tracking-normal text-[#1f5f53]">
                  Contact
                </h3>
                <div className="mt-5 grid gap-4">
                  {contactDetails.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-3 text-sm font-bold leading-6 text-[#4f8d80] transition hover:text-[#1f5f53]"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ec] text-[#1f5f53] transition group-hover:-translate-y-0.5 group-hover:bg-[#1f5f53] group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#1f5f53]/10 bg-white/78 p-6 shadow-sm backdrop-blur">
                <h3 className="text-sm font-black uppercase tracking-normal text-[#1f5f53]">
                  Social
                </h3>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#4f8d80]">
                  Follow updates, seasonal AC care tips, and service offers.
                </p>
                <div className="mt-5 flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={`Follow AirSwift on ${label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1f5f53]/10 bg-[#e5f3ec] text-[#1f5f53] shadow-sm transition hover:-translate-y-1 hover:bg-[#1f5f53] hover:text-white hover:shadow-[0_16px_36px_rgba(31,95,83,0.16)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <a
                  href="#home"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#1f5f53] transition hover:text-[#5f9a8f]"
                >
                  <Globe className="h-4 w-4" />
                  airswift.example
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#1f5f53]/10 pt-6 text-sm font-semibold text-[#5f9a8f] md:flex-row md:items-center">
            <p>© 2026 AirSwift AC Repair Services. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#services" className="transition hover:text-[#1f5f53]">
                Services
              </a>
              <a href="#process" className="transition hover:text-[#1f5f53]">
                Process
              </a>
              <a href="#book" className="transition hover:text-[#1f5f53]">
                Book
              </a>
            </div>
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
