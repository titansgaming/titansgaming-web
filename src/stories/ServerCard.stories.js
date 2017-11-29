import { storiesOf } from '@storybook/vue';

import ServerCard from '@/components/ServerCard';

storiesOf('Server card', module)
  .add('default', () => ({
    components: { ServerCard },
    template: '<server-card name="Test server" />',
  }));
