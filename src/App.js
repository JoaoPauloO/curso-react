import React, { Component } from 'react';
import { NoteList } from './components/NoteList/NoteList';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import CategoryList from './components/CategoryList';
import "./assets/App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notes: [],
      categories: []
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

  createCategory(title) {
    const category = title
    const newCategoriesArray = [...this.state.categories, category]
    this.setState({
      categories: newCategoriesArray
    })

    console.log(...this.state.categories)
  }

  render() {
    return (
      <section className='content'>
        <RegisterForm createNote={this.createNote.bind(this)}/>
        <main className='content-main'>
          <CategoryList categories={this.state.categories} createCategory={this.createCategory.bind(this)}/>
          <NoteList notes={this.state.notes} removeNote={this.removeNote.bind(this)}/>
        </main>
      </section>
    );
  }
}

export default App;
