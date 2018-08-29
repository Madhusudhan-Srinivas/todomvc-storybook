import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Welcome';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

const stories = storiesOf('Welcome', module);

stories.addDecorator(withKnobs).addWithJSX('welcome message', () => (

   <Header
     message={text('headline','Welcome to Storybook!')}
   />

));