import React, { useState } from "react"
import Note, { NoteProps } from "../Note/Note";

export interface MainAppGridProp {
    notes: NoteProps[]
}


const MainAppGrid = (props: MainAppGridProp) => {
    return (
        <div>
            {props.notes.map((note: NoteProps) => {
                return <Note title={note.title} body={note.body} />
            })}
        </div>
    );
}


export default MainAppGrid;