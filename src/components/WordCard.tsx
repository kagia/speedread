import React from 'react'
import { observer } from 'mobx-react';
import { Card } from 'antd';
import { FlipBook } from '../stores/FlipBook';

interface Props {
  flipbook: FlipBook
}

// stub that can be used to keep node in DOM
const nbsp = () => <>&nbsp;</>

const WordCard = observer(({ flipbook }: Props) => (
  <Card style={{ textAlign: 'center' }}>
    <h1>{ flipbook.word || nbsp() }</h1>
  </Card>
))

export default WordCard