import React, { Component } from 'react';
import { NoteList } from './components/Notelist';
import { RegisterForm } from './components/RegisterForm';

class App extends Component {
  state = {}
  render() {
    return (
      <section>
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
