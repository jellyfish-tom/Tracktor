import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

storiesOf('Button', module)
  .add('with label', () => (
    <Button
        label={"test"}
    >
    </Button>
  ))
//   .add('with some emoji', () => (
//     <Hello onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Hello>
//   ));