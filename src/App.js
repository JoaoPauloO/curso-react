import React, { Component } from 'react';
import { NoteList } from './components/NoteList/NoteList';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import "./assets/App.css";

class App extends Component {
  state = {}
  render() {
    return (
      <section className='content'>
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
