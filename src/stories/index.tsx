import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import DevTools from 'mobx-react-devtools'
import Button from '../components/Button'
import world from '../stores/world'

const mobxDevTools = (story: any) => <div>{story()}<DevTools /></div>

storiesOf('Button', module)
  .addDecorator(mobxDevTools)
  .add('with text', () => <Button onClick={() => world.setMessage('hi')}/>)
