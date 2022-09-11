import React, { useState } from "react"
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import { CardActionArea, CardActions, CardContent, Divider, Typography } from "@mui/material";
import NoteModal from "../NoteModal/NoteModal";

export interface NoteProps {
    title: string;
    body: string;
}

const Note = (props: NoteProps) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log("Hei");
    };

    return (
        <div>
            <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                <CardActionArea onClick={()=>handleClickOpen()}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Divider sx={{ marginY: "10px" }} />
                        <Typography variant="body2">
                            {props.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <NoteModal open={open} onClose={handleClose} noteProp={props}/>
        </div>

    )
}

export default Note;