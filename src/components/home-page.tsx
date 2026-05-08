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
  },
  {
    icon: AirVent,
    tag: "Setup",
    title: "Installation",
    copy: "Clean split and window AC installs with precise mounting and airflow setup.",
  },
  {
    icon: ThermometerSnowflake,
    tag: "Efficiency",
    title: "Gas Refill",
    copy: "Pressure-tested refrigerant refill for efficient cooling and lower power bills.",
  },
  {
    icon: Snowflake,
    tag: "Care",
    title: "Maintenance",
    copy: "Deep cleaning, coil care, filter service, and preventive tune-ups.",
  },
  {
    icon: ShieldCheck,
    tag: "Protection",
    title: "Annual Care",
    copy: "Scheduled protection plans for homes, rentals, and office cooling systems.",
  },
  {
    icon: Zap,
    tag: "Urgent",
    title: "Emergency Fix",
    copy: "Priority support for urgent breakdowns, available day and night.",
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
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M14 8.2V6.5c0-.9.6-1.1 1-1.1h2.4V2h-3.3C10.8 2 10 4.5 10 6.1v2.1H7.7V12H10v10h4V12h3l.4-3.8H14Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M6.9 8.9H3.2V21h3.7V8.9ZM5.1 3C3.9 3 3 3.8 3 4.9s.9 1.9 2.1 1.9 2.1-.8 2.1-1.9S6.3 3 5.1 3Zm8 5.9H9.6V21h3.7v-6.4c0-1.7.8-2.7 2.1-2.7 1.2 0 1.8.8 1.8 2.7V21H21v-6.9c0-3.5-1.8-5.5-4.5-5.5-1.6 0-2.8.8-3.4 1.7V8.9Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12.1 2C6.6 2 2.2 6.4 2.2 11.8c0 1.8.5 3.5 1.4 5L2 22l5.4-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8S17.5 2 12.1 2Zm0 17.9c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3c-.8-1.2-1.2-2.7-1.2-4.2 0-4.4 3.6-8 8.1-8 4.4 0 8 3.6 8 8.1s-3.6 8-8 8Zm4.5-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
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
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0f4c45]/10 bg-[#e3f5ef]/72 px-4 py-2 text-sm font-semibold text-[#0f4c45] shadow-sm backdrop-blur"
    >
      <Sparkles className="h-4 w-4 text-[#3f9287]" />
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-3 pt-4 text-[#0f4c45] sm:px-6 sm:pt-5 lg:px-8">
      <nav className="relative mx-auto flex h-12 max-w-7xl items-center justify-between">
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="hero-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e3f5ef]/72 text-[#0f4c45] shadow-sm backdrop-blur-md transition hover:bg-white/82"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

          {menuOpen && (
            <motion.div
              id="hero-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 top-14 w-52 overflow-hidden rounded-2xl border border-[#0f4c45]/10 bg-[#f2fbf8]/88 p-2 shadow-premium backdrop-blur-xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-black text-[#0f4c45] transition hover:bg-white/78"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>

        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-[#0f4c45]"
          aria-label="AirSwift home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e3f5ef]/72 backdrop-blur-md">
            <Snowflake className="h-5 w-5 fill-[#0f4c45]/10 text-[#0f4c45]" />
          </span>
          <span className="text-xl font-black tracking-normal max-[420px]:hidden">
            AirSwift
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="hidden h-11 items-center gap-2 rounded-full border border-[#0f4c45]/12 bg-white/78 px-5 text-sm font-bold text-[#0f4c45] shadow-[0_10px_26px_rgba(15,76,69,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white md:flex"
          >
            <Phone className="h-4 w-4" />
            +1 (555) 014-2487
          </a>
          <a
            href="#book"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f4c45] px-4 text-sm font-black text-white shadow-[0_14px_34px_rgba(15,76,69,0.22)] transition hover:-translate-y-0.5 hover:bg-[#123f3b] sm:px-5"
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
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-[#0f4c45]"
        style={{ scaleX }}
      />
      <Navbar />

      <main id="home">
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-24 text-[#0f4c45] sm:px-6 sm:py-28 lg:px-8">
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
            className="relative mx-auto mt-72 flex w-full max-w-6xl flex-col items-center text-center sm:mt-64 lg:mt-80"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(1.95rem,8.4vw,2.55rem)] font-black leading-[1.08] tracking-normal text-[#0f4c45] sm:text-balance sm:text-[clamp(2.25rem,4.8vw,4.4rem)] sm:leading-[1.05]"
            >
              <span className="block whitespace-nowrap sm:inline sm:whitespace-normal">
                Get Your AC Cooling
              </span>
              <br className="sm:hidden" />
              <span className="block whitespace-nowrap sm:inline sm:whitespace-normal">
                Again Today.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base font-bold leading-7 text-[#527d78] sm:text-lg"
            >
              Same-day service. Certified technicians.
              <br />
              100% satisfaction guarantee.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-9 flex w-full max-w-sm flex-col gap-3 min-[420px]:flex-row min-[420px]:justify-center"
            >
              <a
                href="#book"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#0f4c45] px-6 text-sm font-black text-white shadow-[0_18px_48px_rgba(15,76,69,0.22)] transition hover:-translate-y-1 hover:bg-[#123f3b] sm:px-8"
              >
                Book a Repair
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#0f4c45]/12 bg-white/78 px-6 text-sm font-black text-[#0f4c45] shadow-[0_14px_36px_rgba(15,76,69,0.1)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_44px_rgba(15,76,69,0.14)] sm:px-8"
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
            className="mx-auto grid max-w-5xl gap-3 rounded-2xl border border-[#0f4c45]/10 bg-white/78 p-3 shadow-[0_24px_80px_rgba(15,76,69,0.14)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-xl bg-[#e3f5ef]/72 px-5 py-5 text-center"
              >
                <div className="text-3xl font-black leading-none text-[#0f4c45]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-black uppercase tracking-normal text-[#3f9287]">
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
          className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Expert cooling care</SectionLabel>
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
            >
              <div className="max-w-3xl">
                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-normal text-[#0f4c45] sm:text-4xl lg:text-5xl">
                  Premium AC services, clearly handled.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#527d78]">
                  Diagnostics, repair, installation, and care plans delivered
                  with transparent pricing and clean workmanship.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Certified techs", "Same-day slots", "Upfront pricing"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#0f4c45]/10 bg-white/76 px-4 py-2 text-sm font-black text-[#0f4c45] shadow-sm backdrop-blur"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#3f9287]" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, tag, title, copy }) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="group rounded-[26px] border border-[#0f4c45]/10 bg-white/78 p-6 shadow-[0_18px_54px_rgba(15,76,69,0.08)] backdrop-blur-xl transition hover:border-[#3f9287]/25 hover:bg-white/90 hover:shadow-[0_28px_78px_rgba(15,76,69,0.13)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e3f5ef] text-[#0f4c45] shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#0f4c45] group-hover:text-white group-hover:shadow-[0_18px_44px_rgba(15,76,69,0.18)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#eaf7ff] px-3 py-1 text-xs font-black uppercase tracking-normal text-[#3f9287]">
                      {tag}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-black tracking-normal text-[#0f4c45]">
                    {title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#527d78]">{copy}</p>
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
          className="bg-[#0f4c45] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Why choose us</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="max-w-3xl text-3xl font-black tracking-normal sm:text-4xl lg:text-5xl"
            >
              Premium service standards, without premium-service friction.
            </motion.h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, copy }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="rounded-2xl border border-white/12 bg-[#e3f5ef]/10 p-6 shadow-[0_24px_80px_rgba(5,35,32,0.18)] backdrop-blur"
                >
                  <Icon className="h-8 w-8 text-[#bcebdd]" />
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
          className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(144,226,209,0.3),transparent_20rem),radial-gradient(circle_at_84%_18%,rgba(205,235,255,0.36),transparent_24rem)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>Simple process</SectionLabel>
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
            >
              <h2 className="max-w-3xl text-3xl font-black tracking-normal text-[#0f4c45] sm:text-4xl lg:text-5xl">
                Five calm steps from warm air to cool comfort.
              </h2>
            </motion.div>

            <div
              className="process-accordion mt-12"
              onMouseLeave={() => setActiveStep(4)}
            >
              {steps.map(
                ({ icon: Icon, number, label, title, copy, cta }, index) => {
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
                        <span className="process-card__number">
                          {number}
                          <span className="process-card__mobile-label">
                            {label}
                          </span>
                        </span>
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
                },
              )}
            </div>
          </div>
        </motion.section>

        <section
          id="reviews"
          className="relative overflow-x-hidden bg-[#eef8f5] py-16 sm:py-20 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(188,235,221,0.78),transparent_25rem),radial-gradient(circle_at_86%_16%,rgba(205,235,255,0.52),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(238,248,245,0.78))]" />
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
                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-normal text-[#0f4c45] sm:text-4xl lg:text-5xl">
                  Reviews that feel calm, clear, and earned.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#527d78]">
                  Real visits, clear pricing, tidy repairs, and cool rooms.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 rounded-[28px] border border-[#0f4c45]/10 bg-white/72 p-3 shadow-[0_24px_70px_rgba(15,76,69,0.1)] backdrop-blur-xl">
                {[
                  ["4.9", "Rating"],
                  ["18k+", "Repairs"],
                  ["24/7", "Care"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-[#e3f5ef]/72 px-4 py-3 text-center"
                  >
                    <div className="text-xl font-black text-[#0f4c45]">
                      {value}
                    </div>
                    <div className="mt-1 text-[0.68rem] font-black uppercase tracking-normal text-[#3f9287]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <div className="relative mt-8 flex py-6 [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]">
            <motion.div
              className="flex gap-6 px-4 sm:px-6 lg:px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {marqueeItems.map((item, index) => (
                <figure
                  key={`${item.name}-${index}`}
                  className="group flex min-h-[245px] w-[min(84vw,390px)] shrink-0 flex-col rounded-[26px] border border-[#0f4c45]/10 bg-white/82 p-5 shadow-[0_18px_54px_rgba(15,76,69,0.1)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#3f9287]/25 hover:bg-white/92 hover:shadow-[0_28px_76px_rgba(15,76,69,0.15)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-1 text-[#3f9287]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-current drop-shadow-sm"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0f4c45]/10 bg-white/76 px-3 py-1 text-xs font-black text-[#0f4c45]">
                      <BadgeCheck className="h-3.5 w-3.5 text-[#3f9287]" />
                      Verified
                    </span>
                  </div>
                  <blockquote className="mt-5 text-lg font-black leading-7 tracking-normal text-[#0f4c45]">
                    “{item.review}”
                  </blockquote>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <div className="flex min-w-0 items-center gap-3">
                      <Image
                        src={item.avatar}
                        alt={`${item.name} customer portrait`}
                        width={46}
                        height={46}
                        sizes="46px"
                        className="h-[46px] w-[46px] shrink-0 rounded-2xl object-cover ring-2 ring-[#e3f5ef]"
                      />
                      <div className="min-w-0">
                        <figcaption className="truncate font-black text-[#0f4c45]">
                          {item.name}
                        </figcaption>
                        <div className="truncate text-sm font-bold text-[#527d78]">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div className="hidden shrink-0 rounded-full bg-[#e3f5ef] px-3 py-1 text-xs font-black text-[#3f9287] min-[380px]:block">
                      {item.service}
                    </div>
                  </div>
                </figure>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="book"
          className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0f4c45] px-5 py-12 text-white shadow-[0_24px_80px_rgba(15,76,69,0.18)] sm:px-10 sm:py-16 lg:px-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(227,245,239,0.34),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.12),transparent)]" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-black uppercase text-[#bcebdd]">
                  Same-day appointments
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl lg:text-5xl">
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
                className="cta-shake inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-[22px] bg-white px-8 py-5 text-base font-black text-[#0f4c45] shadow-[0_20px_60px_rgba(5,35,32,0.2)] transition hover:shadow-[0_26px_72px_rgba(5,35,32,0.24)] sm:w-auto"
              >
                <CalendarCheck className="h-5 w-5" />
                Book Now
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-white px-4 pb-28 pt-16 sm:px-6 md:pb-10 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(227,245,239,0.88),transparent_24rem),radial-gradient(circle_at_88%_18%,rgba(234,247,255,0.72),transparent_26rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1.85fr]">
            <div className="rounded-[28px] border border-[#0f4c45]/10 bg-[#f6fbf9]/78 p-5 shadow-[0_24px_80px_rgba(15,76,69,0.1)] backdrop-blur-xl sm:p-7">
              <a
                href="#home"
                aria-label="AirSwift home"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f4c45] text-white shadow-[0_16px_44px_rgba(15,76,69,0.18)]">
                  <Snowflake className="h-7 w-7 fill-[#bcebdd]/20 text-[#bcebdd]" />
                </span>
                <span>
                  <span className="block text-2xl font-black tracking-normal text-[#0f4c45]">
                    AirSwift
                  </span>
                  <span className="mt-1 block text-xs font-black uppercase tracking-normal text-[#3f9287]">
                    AC Repair Services
                  </span>
                </span>
              </a>
              <h2 className="mt-8 max-w-md text-2xl font-black leading-tight tracking-normal text-[#0f4c45] sm:text-3xl">
                Your AC repair services for fast, reliable cooling care.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-[#527d78]">
                Premium AC repair, installation, gas refill, maintenance, and
                annual care for homes, rentals, offices, and retail spaces.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0f4c45] px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(15,76,69,0.18)] transition hover:-translate-y-1 sm:flex-none"
                >
                  <CalendarCheck className="h-4 w-4 text-[#bcebdd]" />
                  Book Service
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#0f4c45]/12 bg-white/82 px-5 py-3 text-sm font-black text-[#0f4c45] shadow-[0_12px_30px_rgba(15,76,69,0.08)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,76,69,0.12)] sm:flex-none"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-[#0f4c45]/10 bg-white/78 p-6 shadow-sm backdrop-blur">
                <h3 className="text-sm font-black uppercase tracking-normal text-[#0f4c45]">
                  Services
                </h3>
                <div className="mt-5 grid gap-3">
                  {footerServices.map((service) => (
                    <a
                      key={service}
                      className="group flex items-center gap-3 text-sm font-bold text-[#527d78] transition hover:text-[#0f4c45]"
                      href="#services"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8cd9ca] transition group-hover:scale-125 group-hover:bg-[#0f4c45]" />
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0f4c45]/10 bg-white/78 p-6 shadow-sm backdrop-blur">
                <h3 className="text-sm font-black uppercase tracking-normal text-[#0f4c45]">
                  Contact
                </h3>
                <div className="mt-5 grid gap-4">
                  {contactDetails.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-3 text-sm font-bold leading-6 text-[#527d78] transition hover:text-[#0f4c45]"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e3f5ef] text-[#0f4c45] transition group-hover:-translate-y-0.5 group-hover:bg-[#0f4c45] group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0f4c45]/10 bg-white/78 p-6 shadow-sm backdrop-blur">
                <h3 className="text-sm font-black uppercase tracking-normal text-[#0f4c45]">
                  Social
                </h3>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#527d78]">
                  Follow updates, seasonal AC care tips, and service offers.
                </p>
                <div className="mt-5 flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={`Follow AirSwift on ${label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0f4c45]/10 bg-[#e3f5ef] text-[#0f4c45] shadow-sm transition hover:-translate-y-1 hover:bg-[#0f4c45] hover:text-white hover:shadow-[0_16px_36px_rgba(15,76,69,0.16)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <a
                  href="#home"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#0f4c45] transition hover:text-[#3f9287]"
                >
                  <Globe className="h-4 w-4" />
                  airswift.example
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#0f4c45]/10 pt-6 text-sm font-semibold text-[#3f9287] md:flex-row md:items-center">
            <p>© 2026 AirSwift AC Repair Services. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#services" className="transition hover:text-[#0f4c45]">
                Services
              </a>
              <a href="#process" className="transition hover:text-[#0f4c45]">
                Process
              </a>
              <a href="#book" className="transition hover:text-[#0f4c45]">
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
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25d366] text-white shadow-[0_20px_60px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 hover:bg-[#1fbd5c]"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
        <a
          href={`tel:${phone}`}
          aria-label="Call AirSwift"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f4c45] text-white shadow-[0_20px_60px_rgba(15,76,69,0.18)] transition hover:-translate-y-1"
        >
          <Phone className="h-6 w-6 text-[#bcebdd]" />
        </a>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-3 rounded-2xl border border-[#0f4c45]/10 bg-white/88 p-3 shadow-[0_24px_80px_rgba(15,76,69,0.14)] backdrop-blur md:hidden">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0f4c45] px-4 py-3 text-sm font-black text-white"
        >
          <Phone className="h-4 w-4 text-[#bcebdd]" />
          Call Now
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-4 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(37,211,102,0.22)]"
        >
          Book Now
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
