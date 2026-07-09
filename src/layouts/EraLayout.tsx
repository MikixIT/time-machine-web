import type { ReactNode } from 'react';

interface EraLayoutProps {
  children: ReactNode;
}

export function EraLayout({ children }: EraLayoutProps) {
  return <div className="relative min-h-screen">{children}</div>;
}
