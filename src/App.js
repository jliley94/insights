import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { CaptureInterface } from './features/detailsCapture/CaptureInterface';

export default function App() {
  return (
    <div className="App">
      <CaptureInterface />
    </div>
  );
}
