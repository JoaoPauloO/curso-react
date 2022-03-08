import React, { Component } from "react";
import "./style.css"

export class RegisterForm extends Component {

    constructor(props) {
        super()
        this.title = "";
        this.text = "";
    }

    _handleTitleChange(event) {
        this.title = event.target.value;
    }

    _handleTextChange(event) {
        this.text = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text)
    }

    render() {
        return (
            <form 
                className="register-form"
                onSubmit={this._createNote.bind(this)}>
                    <input 
                        type='text' 
                        placeholder='title' 
                        className="register-form_input"
                        onChange={this._handleTitleChange.bind(this)}
                    />
                        
                    <textarea 
                        placeholder='write your note...' 
                        className="register-form_input"
                        rows={15}
                        onChange={this._handleTextChange.bind(this)}
                    />

                    <button
                        className="register-form_input register-form_submit">
                            Make
                    </button>
            </form>
        );
    }
}