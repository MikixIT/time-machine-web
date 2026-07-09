import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Construction, ArrowLeft } from 'lucide-react';
import { isEraYear } from '@/utils/year';
import { getEraTheme } from '@/theme/registry';

export default function PlaceholderEraPage() {
  const { year: yearParam } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const year = Number(yearParam);

  if (!isEraYear(year)) {
    return null;
  }

  const theme = getEraTheme(year);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6"
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <motion.div
        className="max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
          style={{ background: `${theme.colors.primary}22` }}
        >
          <Construction
            className="h-10 w-10"
            style={{ color: theme.colors.primary }}
          />
        </div>

        <h1 className="mb-2 text-3xl font-bold">{year}</h1>
        <h2 className="mb-4 text-lg opacity-70">{theme.metadata.title}</h2>
        <p className="mb-8 leading-relaxed opacity-60">
          {theme.metadata.description}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {theme.metadata.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs"
              style={{
                background: `${theme.colors.primary}22`,
                color: theme.colors.primary,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-6 text-sm opacity-40">
          This era is coming soon. Contribute on GitHub!
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2"
          style={{
            background: theme.colors.primary,
            color: '#fff',
          }}
          aria-label="Return to time machine console"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Console
        </button>
      </motion.div>
    </div>
  );
}
