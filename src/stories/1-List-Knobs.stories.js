import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import notes from '../../notes/list-group.md';

import ListGroup from '../components/ListGroup';
import ListGroupItem from '../components/ListGroupItem';

const stories = storiesOf('ListGroup knobs', module);

stories.addDecorator(withKnobs);

stories.add(
  'Button knobs',
  () => (
    <ListGroup
      className={ text('list className', '') }
      data-action={ text('list data-action', '') }
    >
      <ListGroupItem
        className={ text('item list className', '') }
        data-action={ text('item data-action', '') }
        active={ boolean('item active', false) }
        disabled={ boolean('item disabled', false) }
      >
        123
      </ListGroupItem>
    </ListGroup>
  ),
  {
    notes:  { markdown: notes }
  }
);
