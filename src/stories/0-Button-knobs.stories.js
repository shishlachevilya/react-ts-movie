import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import notes from '../../notes/notes.md';

import Button from '../components/Button';

const stories = storiesOf('Button knobs', module);

stories.addDecorator(withKnobs);

stories.add(
  'Button knobs',
  () => (
    <Button
      label={ text('label', 'default') }
      className={ text('className', '') }
      data-action={ text('data-action', '') }
      href={ text('href', '') }
      target={ text('target', '') }
      active={ boolean('active', false) }
      disabled={ boolean('disabled', false) }
      onClick={ action('clicked') }
    />
  ),
  {
    notes:  { markdown: notes }
  }
);
