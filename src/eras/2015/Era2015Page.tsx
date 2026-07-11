import { useParams } from 'react-router-dom';
import { isEraYear } from '@/utils/year';
import { getEraTheme } from '@/theme/registry';
import { EraShowcasePage } from '@/components/eras/EraShowcasePage';

export default function Era2015Page() {
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
      eyebrow="Design systems"
      headline="Components became the language of the web."
      description="Material Design and reusable component libraries made interfaces more consistent, scalable, and easier to reason about."
      highlights={[
        'Material Design introduced layered surfaces and thoughtful motion.',
        'Design systems helped teams iterate with shared patterns.',
        'React accelerated the rise of component-first UI architecture.',
      ]}
      stats={[
        { label: 'Style', value: 'Material' },
        { label: 'Architecture', value: 'Components' },
        { label: 'Mood', value: 'Systematic' },
      ]}
      footer="The web became more intentional, with stronger guidelines and more reusable interfaces."
    />
  );
}
