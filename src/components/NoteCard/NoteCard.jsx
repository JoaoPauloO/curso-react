import React, { Component } from 'react';
import "./style.css";
import {ReactComponent as DeleteSVG} from "../../assets/image/delete_24dp.svg" 

class NoteCard extends Component {

    constructor(props) {
        super()
        this.index = props.index
        this.title = props.title
        this.text = props.text
    }

    _remove() {
        this.props.removeNote(this.index)
    }

    render() {
        return (
            <section className='note-card'>
                <header className='note-card_header'>
                    <h3 className='note-card_title'>
                        {this.title}
                    </h3>

                    <DeleteSVG onClick={this._remove.bind(this)} />
                </header>

                <p className='note-card_text'>
                        {this.text}
                </p>
            </section>
        );
    }
}

export default NoteCard;