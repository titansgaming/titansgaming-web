import { configure } from '@storybook/vue';
import './storybook.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module)
