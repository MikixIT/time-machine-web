import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Zap,
  Globe,
  Layers,
  ArrowUpRight,
  Cpu,
  Palette,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

function BentoCard({
  title,
  description,
  icon,
  className = '',
  delay = 0,
}: BentoCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ${className}`}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reducedMotion
          ? undefined
          : { scale: 1.02, transition: { duration: 0.2 } }
      }
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-indigo-400">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>
    </motion.div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
      <span className="text-xs text-zinc-500">{label}</span>
      <span className="ml-2 text-sm font-medium text-white">{value}</span>
    </div>
  );
}

export default function Era2026Page() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Ambient gradient orbs */}
      {!reducedMotion && (
        <>
          <div className="pointer-events-none fixed left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="pointer-events-none fixed bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]" />
        </>
      )}

      {/* Nav */}
      <nav className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              Time Machine Web
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-zinc-500 sm:inline">
              Era 2026
            </span>
            <button
              onClick={() => navigate('/')}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Return to time machine console"
            >
              ← Console
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            The Future of Web Design
          </div>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Web design,
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              reimagined.
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Glassmorphism, fluid motion, and intelligent layouts define the
            modern web. Every pixel crafted with intention.
          </p>

          <div className="flex flex-wrap gap-3">
            <StatPill label="Design systems" value="Mature" />
            <StatPill label="CSS features" value="Container queries" />
            <StatPill label="Motion" value="Native" />
            <StatPill label="AI integration" value="Ubiquitous" />
          </div>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BentoCard
            title="Glassmorphism"
            description="Frosted glass panels with backdrop blur create depth and hierarchy without heavy shadows."
            icon={<Layers className="h-5 w-5" />}
            className="md:col-span-2"
            delay={0.1}
          />
          <BentoCard
            title="Micro Animations"
            description="Subtle, purposeful motion guides attention and creates delight on every interaction."
            icon={<Zap className="h-5 w-5" />}
            delay={0.2}
          />
          <BentoCard
            title="Bento Layouts"
            description="Asymmetric grid compositions that balance information density with visual breathing room."
            icon={<Palette className="h-5 w-5" />}
            delay={0.3}
          />
          <BentoCard
            title="Dark Mode First"
            description="Designed for dark environments with carefully calibrated contrast and luminous accents."
            icon={<Sparkles className="h-5 w-5" />}
            className="md:col-span-2"
            delay={0.4}
          />
        </div>

        {/* Feature highlight */}
        <motion.div
          className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 p-8 backdrop-blur-xl"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-cyan-400">
                <Cpu className="h-5 w-5" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold tracking-tight">
                AI-Powered Design Insights
              </h3>
              <p className="max-w-lg text-zinc-400">
                Future Time Machine Web features will include AI summaries of
                each era, website comparisons, and community plugins.
              </p>
            </div>
            <button
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Learn more about upcoming features"
            >
              Learn more
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-600">
          Time Machine Web © 2026 — Created by Michael Torres
        </div>
      </footer>
    </div>
  );
}
