import { useParams } from 'react-router-dom';
import { isEraYear } from '@/utils/year';
import { getEraTheme } from '@/theme/registry';
import { EraShowcasePage } from '@/components/eras/EraShowcasePage';

export default function Era2010Page() {
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
      eyebrow="Mobile first"
      headline="The interface got simpler and more adaptable."
      description="Responsive layouts and flatter UI patterns made websites feel cleaner, faster, and ready for every screen size."
      highlights={[
        'Mobile browsers pushed responsive design into the mainstream.',
        'Flat interfaces replaced heavy skeuomorphism.',
        'Grid-based layouts helped content scale more elegantly.',
      ]}
      stats={[
        { label: 'Layout', value: 'Responsive' },
        { label: 'Style', value: 'Flat' },
        { label: 'Device', value: 'Mobile' },
      ]}
      footer="This era focused on usability and consistency across phones, tablets, and desktops."
    />
  );
}
