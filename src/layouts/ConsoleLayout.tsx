import type { ReactNode } from 'react';

interface ConsoleLayoutProps {
  children: ReactNode;
}

export function ConsoleLayout({ children }: ConsoleLayoutProps) {
  return (
    <div className="console-scene relative min-h-screen overflow-hidden">
      <div className="crt-overlay pointer-events-none fixed inset-0 z-10" />
      <div className="crt-vignette pointer-events-none fixed inset-0 z-10" />
      {children}
    </div>
  );
}
