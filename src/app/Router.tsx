import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConsolePage } from '@/features/console/ConsolePage';
import { EraPage } from '@/features/era/EraPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConsolePage />} />
        <Route path="/era/:year" element={<EraPage />} />
        <Route path="*" element={<ConsolePage />} />
      </Routes>
    </BrowserRouter>
  );
}
