import { motion } from 'motion/react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { EraTheme } from '@/types';

interface EraShowcasePageProps {
  theme: EraTheme;
  year: number;
  eyebrow: string;
  headline: string;
  description: string;
  highlights: string[];
  stats: Array<{ label: string; value: string }>;
  footer: string;
}

export function EraShowcasePage({
  theme,
  year,
  eyebrow,
  headline,
  description,
  highlights,
  stats,
  footer,
}: EraShowcasePageProps) {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <div
            className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em]"
            style={{
              background: `${theme.colors.primary}22`,
              color: theme.colors.primary,
            }}
          >
            {eyebrow}
          </div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-opacity hover:opacity-80"
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.foreground,
            }}
            aria-label="Return to the console"
          >
            <ArrowLeft className="h-4 w-4" />
            Console
          </button>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border p-8 shadow-2xl"
          style={{
            borderColor: theme.colors.border,
            background: `${theme.colors.primary}12`,
          }}
        >
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
            style={{
              background: `${theme.colors.secondary}22`,
              color: theme.colors.accent,
            }}
          >
            <Sparkles className="h-4 w-4" />
            {year} milestone
          </div>
          <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed opacity-80">
            {description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: theme.colors.border,
                  background: `${theme.colors.secondary}16`,
                }}
              >
                <div className="text-xs uppercase tracking-[0.25em] opacity-60">
                  {stat.label}
                </div>
                <div
                  className="mt-2 text-xl font-semibold"
                  style={{ color: theme.colors.primary }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="rounded-[1.5rem] border p-6"
            style={{
              borderColor: theme.colors.border,
              background: `${theme.colors.secondary}14`,
            }}
          >
            <h2 className="text-xl font-semibold">What changed in this era?</h2>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed opacity-80"
                >
                  <span
                    className="mt-1 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="rounded-[1.5rem] border p-6"
            style={{
              borderColor: theme.colors.border,
              background: `${theme.colors.primary}10`,
            }}
          >
            <h2 className="text-xl font-semibold">Signature tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {theme.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-sm"
                  style={{
                    background: `${theme.colors.primary}22`,
                    color: theme.colors.primary,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed opacity-70">{footer}</p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
