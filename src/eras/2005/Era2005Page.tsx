import { useParams } from 'react-router-dom';
import { isEraYear } from '@/utils/year';
import { getEraTheme } from '@/theme/registry';
import { EraShowcasePage } from '@/components/eras/EraShowcasePage';

export default function Era2005Page() {
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
      eyebrow="Web 2.0"
      headline="Rich interfaces arrived with a social pulse."
      description="The web became more interactive, more personal, and more playful, with glossy gradients, soft shadows, and constant feedback."
      highlights={[
        'AJAX made pages feel responsive without full reloads.',
        'Rounded corners and gradients defined the new visual language.',
        'Blogs, wikis, and community platforms turned the web into a conversation.',
      ]}
      stats={[
        { label: 'Interaction', value: 'AJAX' },
        { label: 'Mood', value: 'Social' },
        { label: 'Visual', value: 'Glossy' },
      ]}
      footer="This decade brought personality to interfaces and made the web feel collaborative."
    />
  );
}
