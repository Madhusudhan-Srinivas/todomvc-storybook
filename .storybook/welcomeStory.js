import React from 'react';

import { storiesOf } from '@storybook/react';

import { withInfo } from '@storybook/addon-info'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

storiesOf('Welcome', module).addDecorator(withKnobs).addDecorator(withInfo).addWithJSX('to your new Storybook 🎉', () => (

    <h1>{text('headline','Welcome to your new Storybook 🎉')}</h1>

));