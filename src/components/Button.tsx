import React from 'react'
import { Button as Btn }from 'antd'
import { observer } from 'mobx-react'
import world from '../stores/world'

interface Props {
  onClick?: () => any
}

const Button: React.FunctionComponent<Props> = (props: Props) => <Btn {...props}>{world.sentence}</Btn>

export default observer(Button)