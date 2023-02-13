import { useState } from "react";
import { useTodoContext } from "../../provider/DataProvider";
import { Button, TextField, Box, Modal, Typography } from "@mui/material";
import { formStyle, modalStyle, ModalTextField } from "./ModalWindowStyles";

const ModalWindow = ({ modalState, setModalState, edit, setEdit }) => {
   const { deleteTodo, addTodo, editTodo, getTodoData } =
      useTodoContext();
   const data = getTodoData();
   const handleDelete = (e) => {
      e.preventDefault()
      deleteTodo();
      setModalState((prev) => !prev);
      setEdit((prev) => !prev);
   };
   const handleClick = (title, text, e) => {
      e.preventDefault();
      if (edit) {
         editTodo(title, text);
         setModalState((prev) => !prev);
         setEdit((prev) => !prev);
      } else {
         addTodo(title, text);
         setModalState((prev) => !prev);
         setText("");
         setTitle("");
      }
   };
   const handleModal = () => {
      if (edit) setEdit(false)
      setModalState((prev) => !prev);
   };

   const [text, setText] = useState(edit ? data.text : "");
   const [title, setTitle] = useState(edit ? data.title : "");

   return (
      <Modal
         open={modalState}
         onClose={handleModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={modalStyle} >
            <Typography
               id="modal-modal-title"
               variant="h6"
               component="h2"
               sx={{ color: "#fff" }}
            >
               {edit ? "Edit todo" : "Add new todo"}
            </Typography>
            <Box
               component="form"
               autoComplete="off"
               sx={formStyle}
               onSubmit={(e) => handleClick(title, text, e)}
            >
               <ModalTextField
                  required
                  id="outlined-textarea"
                  label="Title"
                  placeholder="Enter a title for todo"
                  fullWidth
                  value={title}
                  // InputLabelProps={{ className: "modal_label" }}
                  // InputProps={{ className: "modal_textfield" }}
                  onChange={(e) => setTitle(e.target.value)}
                  error={!title}
               />
               <TextField
                  required
                  id="outlined-textarea"
                  label="Text"
                  placeholder="Enter a text for todo"
                  fullWidth
                  multiline
                  InputProps={{ className: "modal_textfield" }}
                  value={text}
                  InputLabelProps={{ className: "modal_label" }}
                  onChange={(e) => setText(e.target.value)}
                  error={!text}
               />
               <Button variant="outlined" type="submit">
                  {edit ? "Edit" : "Add new"}
               </Button>
               {edit ? (
                  <Button variant="outlined" onClick={(e) => handleDelete(e)}>
                     Delete todo
                  </Button>
               ) : (
                  <></>
               )}
            </Box>
         </Box>
      </Modal>
   );
};

export default ModalWindow;
