import React, { Component } from 'react';
import { NoteList } from './components/NoteList/NoteList';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import "./assets/App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notes: []
    }
  }
  
  createNote(title, text) {
    const newNote = {title, text}
    const newNotesArray = [...this.state.notes, newNote]
    this.setState({
      notes: newNotesArray
    })
  }

  removeNote(index) {
    let newNotesArray = this.state.notes
    newNotesArray.splice(index, 1)
    this.setState({
      notes: newNotesArray
    })
  }

  render() {
    return (
      <section className='content'>
        <RegisterForm createNote={this.createNote.bind(this)}/>
        <NoteList notes={this.state.notes} removeNote={this.removeNote.bind(this)}/>
      </section>
    );
  }
}

export default App;
