import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css"

export class NoteList extends Component {
    render() {
        return (
            <ul className="note-list">
                {Array.of("Job", "Study", "Study").map((category, index) => {
                    return (
                        <li className="note-list_item" key={index}>
                            <div>{category}</div>
                            <NoteCard />
                        </li>
                    );
                })}
            </ul>
        );
    }
}