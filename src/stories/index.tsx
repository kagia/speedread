import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import DevTools from 'mobx-react-devtools'
import Button from '../components/Button'
import world from '../stores/world'
import WordCard from '../components/WordCard';
import { FlipBook } from '../stores/FlipBook';
import SettingsForm from '../components/SettingsForm';

const mobxDevTools = (story: any) => <div>{story()}<DevTools /></div>

const flipBook = new FlipBook

addDecorator(mobxDevTools)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={() => world.setMessage('hi')}/>)

storiesOf('WordCard', module)
  .add('default', () => <WordCard flipbook={flipBook}/>)

storiesOf('SettingsForm', module)
  .add('default', () => <SettingsForm flipbook={flipBook} />)
