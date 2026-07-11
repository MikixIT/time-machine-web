import { useParams } from 'react-router-dom';
import { isEraYear } from '@/utils/year';
import { getEraTheme } from '@/theme/registry';
import { EraShowcasePage } from '@/components/eras/EraShowcasePage';

export default function Era2020Page() {
  const { year: yearParam } = useParams<{ year: string }>();
  const year = Number(yearParam);

  if (!isEraYear(year)) {
    return null;
  }

  const theme = getEraTheme(year);

  return (
    <EraShowcasePage
      theme={theme}
      year={year}
      eyebrow="Inclusive design"
      headline="The web became more immersive and more accessible."
      description="Dark mode, motion systems, and a stronger focus on accessibility shaped the interface language of a more mature web."
      highlights={[
        'Dark mode became a first-class preference across apps and operating systems.',
        'Neumorphism and soft shadows tried to add tactility to digital surfaces.',
        'Accessibility requirements pushed teams to prioritize contrast, focus, and semantics.',
      ]}
      stats={[
        { label: 'Preference', value: 'Dark mode' },
        { label: 'Focus', value: 'A11y' },
        { label: 'Visual', value: 'Soft' },
      ]}
      footer="This era centered on comfort, inclusion, and thoughtful interaction design."
    />
  );
}
