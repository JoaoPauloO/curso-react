import React, { Component } from "react";
import "./style.css"

export class RegisterForm extends Component {

    constructor() {
        super()
        this.title = ""
    }

    handleTitleChange(event) {
        this.title = event.target.value
        console.log(this.title)
    }

    render() {
        return (
            <form className="register-form">
                <input 
                    type='text' 
                    placeholder='title' 
                    className="register-form_input"
                    onChange={this.handleTitleChange.bind(this)}
                />
                    
                <textarea 
                    placeholder='write your note...' 
                    className="register-form_input"
                    rows={15}
                />

                <button 
                    className="register-form_input register-form_submit">
                        Make
                </button>
            </form>
        );
    }
}