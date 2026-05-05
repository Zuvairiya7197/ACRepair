"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import {
  AirVent,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Headphones,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  ThermometerSnowflake,
  Wallet,
  Wrench,
  Zap
} from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants
} from "framer-motion";
import Lenis from "@studio-freight/lenis";
import clsx from "clsx";

const phone = "+15550142487";
const whatsapp = "https://wa.me/15550142487";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    copy: "Rapid diagnostics for cooling failure, leakage, noise, and sensor issues."
  },
  {
    icon: AirVent,
    title: "Installation",
    copy: "Clean split and window AC installs with precise mounting and airflow setup."
  },
  {
    icon: ThermometerSnowflake,
    title: "Gas Refill",
    copy: "Pressure-tested refrigerant refill for efficient cooling and lower power bills."
  },
  {
    icon: Snowflake,
    title: "Maintenance",
    copy: "Deep cleaning, coil care, filter service, and preventive tune-ups."
  },
  {
    icon: ShieldCheck,
    title: "Annual Care",
    copy: "Scheduled protection plans for homes, rentals, and office cooling systems."
  },
  {
    icon: Zap,
    title: "Emergency Fix",
    copy: "Priority support for urgent breakdowns, available day and night."
  }
];

const features = [
  { icon: Clock3, title: "Fast Service", copy: "Same-day slots with live arrival updates." },
  { icon: BadgeCheck, title: "Certified Technicians", copy: "Background-verified experts with AC brand training." },
  { icon: Wallet, title: "Affordable Pricing", copy: "Transparent estimates before any repair begins." },
  { icon: Headphones, title: "24/7 Support", copy: "Always-on booking for homes and businesses." }
];

const steps = [
  { icon: CalendarCheck, title: "Book Service", copy: "Pick a time in under a minute." },
  { icon: AirVent, title: "Technician Arrives", copy: "A verified expert reaches your doorstep." },
  { icon: CheckCircle2, title: "Repair Done", copy: "Issue fixed, tested, and explained clearly." },
  { icon: CreditCard, title: "Payment", copy: "Pay securely after the work is complete." }
];

const testimonials = [
  {
    name: "Maya S.",
    role: "Homeowner",
    review: "The technician arrived in 35 minutes and had our bedroom AC cooling again before dinner.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
  },
  {
    name: "Daniel R.",
    role: "Cafe Owner",
    review: "Premium experience from booking to payment. Clear pricing, clean work, and zero drama.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
  },
  {
    name: "Priya K.",
    role: "Property Manager",
    review: "We use them for multiple apartments now. Fast, polite, and consistently reliable.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
  }
];

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.9
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
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-white/70 px-4 py-2 text-sm font-semibold text-ink shadow-sm backdrop-blur"
    >
      <Sparkles className="h-4 w-4 text-electric" />
      {children}
    </motion.div>
  );
}

function Navbar() {
  const { scrollY } = useScroll();
  const solid = useTransform(scrollY, [0, 80], [0, 1]);
  const bg = useTransform(
    solid,
    [0, 1],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.86)"]
  );
  const border = useTransform(
    solid,
    [0, 1],
    ["rgba(255,255,255,0)", "rgba(6,22,47,0.1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="AirSwift home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-midnight text-white shadow-glow">
            <Snowflake className="h-5 w-5 text-electric" />
          </span>
          <span className="text-lg font-black tracking-tight text-midnight">AirSwift</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-ink/78 md:flex">
          <a className="transition hover:text-electric" href="#services">Services</a>
          <a className="transition hover:text-electric" href="#why">Why Us</a>
          <a className="transition hover:text-electric" href="#process">Process</a>
          <a className="transition hover:text-electric" href="#reviews">Reviews</a>
        </div>
        <a
          href="#book"
          className="inline-flex items-center gap-2 rounded-2xl bg-electric px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0798ee]"
        >
          Book Service
          <ChevronRight className="h-4 w-4" />
        </a>
      </nav>
    </motion.header>
  );
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25
  });
  const marqueeItems = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <>
      <SmoothScroll />
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-electric" style={{ scaleX }} />
      <Navbar />

      <main id="home">
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <motion.div
            aria-hidden
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(22,168,255,0.28),transparent_26rem),linear-gradient(135deg,#eef9ff_0%,#ffffff_48%,#dff3ff_100%)]" />
            <motion.div
              className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full border border-electric/20 bg-white/40 blur-sm"
              animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[18%] right-[12%] h-56 w-56 rounded-full bg-electric/10 blur-3xl"
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
              <SectionLabel>24/7 premium AC service</SectionLabel>
              <motion.h1
                variants={fadeUp}
                className="text-balance text-5xl font-black leading-[1.02] tracking-normal text-midnight sm:text-6xl lg:text-7xl"
              >
                Fast AC Repair at Your Doorstep
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-lg font-medium leading-8 text-ink/72 sm:text-xl"
              >
                24/7 Service | Expert Technicians | Same Day Repair
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-midnight px-7 py-4 text-base font-bold text-white shadow-premium transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <CalendarCheck className="h-5 w-5 text-electric" />
                  Book Service
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-midnight/10 bg-white/76 px-7 py-4 text-base font-bold text-midnight shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-electric/35 hover:text-electric"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {["18k+", "4.9/5", "25 min"].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/70 bg-white/64 p-4 shadow-sm backdrop-blur">
                    <div className="text-2xl font-black text-midnight">{item}</div>
                    <div className="mt-1 text-xs font-bold uppercase text-ink/50">
                      {index === 0 ? "Repairs" : index === 1 ? "Rating" : "Avg ETA"}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="relative min-h-[420px] overflow-hidden rounded-2xl shadow-premium"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=82"
                alt="Certified technician repairing an air conditioner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight/62 via-midnight/18 to-electric/20" />
              <motion.div
                className="glass absolute bottom-5 left-5 right-5 rounded-2xl p-5 text-midnight"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-ink/58">Live dispatch</p>
                    <p className="mt-1 text-xl font-black">Technician available nearby</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric text-white shadow-glow">
                    <Zap className="h-5 w-5" />
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
          <motion.div variants={fadeUp} className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black tracking-normal text-midnight sm:text-5xl">
              Services built for urgent fixes and long-term comfort.
            </h2>
            <p className="max-w-md text-base leading-7 text-ink/66">
              Every visit includes inspection, transparent pricing, clean repair work, and final cooling checks.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, copy }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-2xl border border-white bg-white/78 p-6 shadow-sm backdrop-blur transition hover:shadow-glow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight text-electric transition group-hover:bg-electric group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-7 text-xl font-black text-midnight">{title}</h3>
                <p className="mt-3 leading-7 text-ink/64">{copy}</p>
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
          className="bg-midnight px-4 py-24 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Why choose us</SectionLabel>
            <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">
              Premium service standards, without premium-service friction.
            </motion.h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, copy }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-glow backdrop-blur"
                >
                  <Icon className="h-8 w-8 text-electric" />
                  <h3 className="mt-6 text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{copy}</p>
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
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black tracking-normal text-midnight sm:text-5xl">
            Four steps from hot room to cool air.
          </motion.h2>
          <div className="mt-12 overflow-x-auto pb-3">
            <div className="grid min-w-[850px] grid-cols-4 gap-5">
              {steps.map(({ icon: Icon, title, copy }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  className="relative rounded-2xl bg-white p-6 shadow-premium"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(100%-10px)] top-12 z-10 h-px w-10 bg-electric/35" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-electric">0{index + 1}</span>
                    <Icon className="h-6 w-6 text-midnight" />
                  </div>
                  <h3 className="mt-12 text-xl font-black text-midnight">{title}</h3>
                  <p className="mt-3 leading-7 text-ink/62">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="reviews" className="overflow-hidden bg-[#eef8ff] py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <SectionLabel>Customer love</SectionLabel>
            <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black tracking-normal text-midnight sm:text-5xl">
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
                  className="w-[320px] shrink-0 rounded-2xl border border-white bg-white/82 p-6 shadow-sm backdrop-blur sm:w-[420px]"
                >
                  <div className="flex gap-1 text-electric">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 min-h-24 text-lg font-semibold leading-8 text-midnight">
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
                      <div className="font-black text-midnight">{item.name}</div>
                      <div className="text-sm font-medium text-ink/52">{item.role}</div>
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
            className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-midnight px-6 py-16 text-white shadow-premium sm:px-10 lg:px-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(22,168,255,0.44),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-black uppercase text-electric">Same-day appointments</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                  Get Your AC Fixed Today
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                  Book in seconds and get a certified technician assigned for repair, installation, gas refill, or maintenance.
                </p>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-electric px-8 py-5 text-base font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-[#0798ee]"
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
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-midnight text-white">
                <Snowflake className="h-5 w-5 text-electric" />
              </span>
              <span className="text-lg font-black text-midnight">AirSwift</span>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-ink/60">
              Premium AC repair and care for homes, rentals, offices, and retail spaces.
            </p>
          </div>
          <div>
            <h3 className="font-black text-midnight">Contact</h3>
            <a className="mt-4 block text-ink/64 transition hover:text-electric" href={`tel:${phone}`}>
              +1 (555) 014-2487
            </a>
            <a className="mt-3 block text-ink/64 transition hover:text-electric" href="mailto:hello@airswift.example">
              hello@airswift.example
            </a>
          </div>
          <div>
            <h3 className="font-black text-midnight">Services</h3>
            {services.slice(0, 4).map((service) => (
              <a key={service.title} className="mt-3 block text-ink/64 transition hover:text-electric" href="#services">
                {service.title}
              </a>
            ))}
          </div>
          <div>
            <h3 className="font-black text-midnight">Social</h3>
            {["Instagram", "Facebook", "LinkedIn"].map((item) => (
              <a key={item} className="mt-3 block text-ink/64 transition hover:text-electric" href="#">
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
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17c964] text-white shadow-premium transition hover:-translate-y-1"
        >
          <Headphones className="h-6 w-6" />
        </a>
        <a
          href={`tel:${phone}`}
          aria-label="Call AirSwift"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight text-white shadow-premium transition hover:-translate-y-1"
        >
          <Phone className="h-6 w-6 text-electric" />
        </a>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-3 rounded-2xl border border-white/70 bg-white/88 p-3 shadow-premium backdrop-blur md:hidden">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-midnight px-4 py-3 text-sm font-black text-white"
        >
          <Phone className="h-4 w-4 text-electric" />
          Call Now
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-electric px-4 py-3 text-sm font-black text-white"
        >
          Book Now
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
