import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import { NoteProps } from "../Note/Note";

interface NoteModalProp{
    open:boolean,
    onClose: any,
    noteProp: NoteProps
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const NoteModal = (props:NoteModalProp) => {
    return (
        <Modal open={props.open} onClose={props.onClose}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {props.noteProp.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {props.noteProp.body}
                </Typography>
            </Box>

        </Modal>
    )
}

export default NoteModal;