import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { FlipBook } from './stores/FlipBook';
import WordCard from './components/WordCard';
import SettingsForm from './components/SettingsForm';
import { Card, Divider } from 'antd';
import DevTools from 'mobx-react-devtools';

const flipbook = new FlipBook

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card style={{ width: 500 }}>
          <WordCard flipbook={flipbook} />
          <Divider>settings</Divider>
          <SettingsForm flipbook={flipbook} />
        </Card>
        <DevTools/>
      </div>
    );
  }
}

export default App;
