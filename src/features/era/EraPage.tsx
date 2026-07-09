import { Suspense, useEffect, useCallback } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import type { EraYear } from '@/types';
import { isEraYear } from '@/utils/year';
import { useEra } from '@/hooks/useEra';
import { applyEraTheme, clearEraTheme } from '@/theme/registry';
import { EraLayout } from '@/layouts/EraLayout';
import { Timeline } from '@/components/timeline/Timeline';
import { useChronoWebStore } from '@/store/chronowebStore';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function EraLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      <motion.div
        className="font-mono text-sm text-zinc-500"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading era...
      </motion.div>
    </div>
  );
}

function EraContent({ eraYear }: { eraYear: EraYear }) {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const { setDestinationYear } = useChronoWebStore();
  const { theme, module: eraModule } = useEra(eraYear);
  const EraComponent = eraModule.component;

  useEffect(() => {
    applyEraTheme(theme);
    setDestinationYear(eraYear);
    return () => clearEraTheme();
  }, [theme, eraYear, setDestinationYear]);

  const handleYearSelect = useCallback(
    (selectedYear: EraYear) => {
      if (selectedYear !== eraYear) {
        navigate(`/era/${selectedYear}`);
      }
    },
    [eraYear, navigate],
  );

  return (
    <EraLayout>
      <Suspense fallback={<EraLoader />}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <EraComponent />
        </motion.div>
      </Suspense>

      <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 px-4">
        <div className="rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
          <Timeline onYearSelect={handleYearSelect} />
        </div>
      </div>
    </EraLayout>
  );
}

export function EraPage() {
  const { year: yearParam } = useParams<{ year: string }>();
  const year = Number(yearParam);

  if (!isEraYear(year)) {
    return <Navigate to="/" replace />;
  }

  return <EraContent eraYear={year} />;
}
