import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


import Header from '../components/Header';


const stories = storiesOf('Header', module);


stories.addDecorator(withKnobs).addDecorator(withInfo).addWithJSX('defualt view', () => (

   <Header
     addTodo={action('new-todo')}
   />

));