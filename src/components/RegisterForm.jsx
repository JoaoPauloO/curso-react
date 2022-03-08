import React, { Component } from "react";

export class RegisterForm extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='title' />
                <textarea placeholder='write your note...' />
                <button>Make</button>
            </form>
        );
    }
}