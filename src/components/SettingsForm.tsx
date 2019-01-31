import React from 'react'
import { observer } from 'mobx-react';
import { FlipBook } from '../stores/FlipBook';
import { Form, Input, Slider, Divider } from 'antd';
import { action } from 'mobx';
import { SliderValue } from 'antd/lib/slider';

export interface Props {
  flipbook: FlipBook
}

@observer
export default class SettingsForm extends React.Component<Props> {
  @action
  onChangeSource = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { flipbook } = this.props
    flipbook.source = event.target.value
  }

  @action
  onChangeSpeed = (value: SliderValue) => {
    const { flipbook } = this.props
    if (typeof value === 'number') {
      flipbook.wordsPerMinute = value
    }
  }

  @action
  onClear = () => {
    const { flipbook } = this.props
    flipbook.source = ''
  }

  @action
  onUseSampleText = () => {
    const { flipbook } = this.props
    flipbook.useSampleText()
  }

  render() {
    const { flipbook } = this.props
    return (
      <Form layout='vertical'>
        <Form.Item label='source'>
          <Input.TextArea value={flipbook.source} rows={10} placeholder='paste source material here' onChange={this.onChangeSource} />
          <div style={{ textAlign: 'right' }}>
            <a onClick={this.onClear}>clear all</a>
            <Divider type='vertical' />
            <a onClick={this.onUseSampleText}>use sample</a>
          </div>
          
        </Form.Item>
        <Form.Item label='speed'>
          <h4>({flipbook.wordsPerMinute}<small>wpm</small>)</h4>
          <Slider disabled={flipbook.corpus.length === 0} value={flipbook.wordsPerMinute} min={0} max={400} step={100} onChange={this.onChangeSpeed}></Slider>
        </Form.Item>
      </Form>
    )
  }
}