import { storiesOf } from '@storybook/vue';

import TGChannelList from '@/components/TGChannelList';
import TGServerCard from '@/components/TGServerCard';

import MumbleChannels from './MumbleChannels.json';
import MumbleUsers from './MumbleUsers.json';

storiesOf('Server/Card', module)
  .add('default', () => ({
    components: {
      'tg-channel-list': TGChannelList,
      'tg-server-card': TGServerCard,
    },
    props: {
      channels: {
        default: () => MumbleChannels,
        type: Array,
      },
      users: {
        default: () => MumbleUsers,
        type: Array,
      },
    },
    template: `
      <div>
        <tg-server-card
          name="Test server"
          :channels="channels"
          :users="users"
          />
      </div>
    `,
  }))
;

