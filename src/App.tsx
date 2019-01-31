import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { FlipBook } from './stores/FlipBook';
import WordCard from './components/WordCard';
import SettingsForm from './components/SettingsForm';
import { Card, Divider } from 'antd';

const flipbook = new FlipBook

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Card style={{ width: 500 }}>
            <WordCard flipbook={flipbook} />
            <Divider>settings</Divider>
            <SettingsForm flipbook={flipbook} />
          </Card>
        </div>
        <div className="App-footer">
          github: <a href="https://github.com/kagia/speedread">https://github.com/kagia/speedread</a>
        </div>
      </div>
    );
  }
}

export default App;
