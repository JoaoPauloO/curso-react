import React, { Component } from 'react';
import { NoteList } from './components/NoteList/NoteList';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import "./assets/App.css";

class App extends Component {

  constructor() {
    super()
    this.notes = [];
  }
  
  createNote(title, text) {
    const newNote = {title, text}
    this.notes.push(newNote)
  }

  render() {
    return (
      <section className='content'>
        <RegisterForm createNote={this.createNote.bind(this)}/>
        <NoteList notes={this.notes}/>
      </section>
    );
  }
}

export default App;
