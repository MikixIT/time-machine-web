import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useChronoWebStore } from '@/store/chronowebStore';
import { useTravelAnimation } from '@/hooks/useTravelAnimation';
import { PRESENT_YEAR } from '@/types';
import { formatYear } from '@/utils/year';
import { isEraYear } from '@/utils/year';
import { LedDisplay, YearSelector } from '@/components/console/ConsoleDisplays';
import { TravelButton } from '@/components/console/TravelButton';
import { Timeline } from '@/components/timeline/Timeline';
import { TravelAnimation } from '@/components/travel/TravelAnimation';
import { ConsoleLayout } from '@/layouts/ConsoleLayout';
import { staggerContainer, slideUp } from '@/animations/variants';

export function ConsolePage() {
  const {
    destinationYear,
    lastVisitedYear,
    isTraveling,
    soundEnabled,
    setDestinationYear,
    toggleSound,
  } = useChronoWebStore();

  const { executeTravel } = useTravelAnimation();

  const handleYearChange = (year: number) => {
    if (isEraYear(year)) {
      setDestinationYear(year);
    }
  };

  return (
    <ConsoleLayout>
      <div className="relative flex min-h-screen flex-col items-center justify-center p-6">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-red-600/5 blur-3xl" />

        <motion.main
          className="relative z-20 w-full max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          aria-label="Time Machine Web console"
        >
          {/* Header */}
          <motion.header variants={slideUp} className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded border border-red-900/30 bg-red-950/20 px-3 py-1">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-red-700">
                System Online
              </span>
            </div>
            <h1 className="console-title font-mono text-2xl font-bold uppercase tracking-[0.3em] text-red-600 sm:text-3xl">
              Time Machine Web
            </h1>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-red-900/60">
              Temporal Navigation System v1.0
            </p>
          </motion.header>

          {/* Console body */}
          <motion.div
            variants={slideUp}
            className="console-body rounded-xl border-2 border-red-900/40 bg-linear-to-b from-zinc-900 to-zinc-950 p-6 shadow-2xl sm:p-8"
          >
            {/* Metal rivets decoration */}
            <div className="pointer-events-none absolute inset-2 rounded-lg border border-red-900/20" />

            {/* LED Displays */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <LedDisplay
                label="Destination Year"
                value={formatYear(destinationYear)}
                id="destination"
              />
              <LedDisplay
                label="Present Year"
                value={formatYear(PRESENT_YEAR)}
                id="present"
              />
              <LedDisplay
                label="Last Visited"
                value={lastVisitedYear ? formatYear(lastVisitedYear) : '----'}
                id="last-visited"
              />
            </div>

            {/* Year selector */}
            <div className="mb-8 flex justify-center">
              <YearSelector
                value={destinationYear}
                onChange={handleYearChange}
                disabled={isTraveling}
              />
            </div>

            {/* Timeline */}
            <div className="mb-10 flex justify-center">
              <Timeline />
            </div>

            {/* Travel button */}
            <div className="flex flex-col items-center gap-4">
              <TravelButton onClick={executeTravel} disabled={isTraveling} />

              <button
                onClick={toggleSound}
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-red-900/50 transition-colors hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={
                  soundEnabled ? 'Mute sound effects' : 'Enable sound effects'
                }
              >
                {soundEnabled ? (
                  <Volume2 className="h-3 w-3" />
                ) : (
                  <VolumeX className="h-3 w-3" />
                )}
                Sound {soundEnabled ? 'On' : 'Off'}
              </button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            variants={slideUp}
            className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-red-900/40"
          >
            Select a year · Press Travel · Experience web history
            <span className="mt-2 block">Created by Michael Torres</span>
          </motion.footer>
        </motion.main>

        {/* Travel animation overlay */}
        <TravelAnimation />
      </div>
    </ConsoleLayout>
  );
}
