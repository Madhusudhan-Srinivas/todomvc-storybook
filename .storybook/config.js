import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import 'todomvc-app-css/index.css'

setAddon(JSXAddon);
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
