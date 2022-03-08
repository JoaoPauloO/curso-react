import React, { Component } from "react";
import "./style.css"

export class RegisterForm extends Component {
    render() {
        return (
            <form className="register-form">
                <input 
                    type='text' 
                    placeholder='title' 
                    className="register-form_input"/>
                    
                <textarea 
                    placeholder='write your note...' 
                    className="register-form_input"
                    rows={15}/>

                <button 
                    className="register-form_input register-form_submit">
                        Make
                </button>
            </form>
        );
    }
}