import { configure } from '@storybook/vue';
import './storybook.styl';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module)
