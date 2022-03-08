import React, { Component } from "react";
import NoteCard from "./NoteCard";

export class NoteList extends Component {
    render() {
        return (
            <ul>
                {Array.of("Job", "Study", "Study").map((category) => {
                    return (
                        <li>
                            <div>{category}</div>
                            <NoteCard />
                        </li>
                    );
                })}
            </ul>
        );
    }
}