import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography, Button, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import TodoAccordion from "../TodoAccordion";
import { useTodoContext } from "../../provider/DataProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MainBox } from "./TodoStyles";
import EventIcon from "@mui/icons-material/Event";
import TodoSettingsDialog from "../TodoSettingsDialog";

const Todo = () => {
   const [isOpen, setIsOpen] = useState(false);

   const [dialogOpen, setDialogOpen] = useState(false);

   const handleDialog = () => {
      setDialogOpen(() => !dialogOpen);
   };

   const [listDay, setListDay] = useState(dayjs());

   const { todos, addNewTodoList, newsFeedActive, setNewsFeedActive } =
      useTodoContext();

   const sortTodoLists = (a, b) => {
      a = a.date.toString().split("/");
      b = b.date.toString().split("/");
      return a[1] - b[1] || a[0] - b[0];
   };

   const handleDatePick = () => {
      const date = listDay.$d
         .toLocaleDateString("ru")
         .slice(0, -5)
         .replace(".", "/");
      addNewTodoList(date);
      setIsOpen(false);
   };
   return (
      <>
         {dialogOpen && <TodoSettingsDialog dialogOpen={dialogOpen} handleClose={handleDialog}/>}
         <MainBox>
            <Box
               display="flex"
               flexDirection="row"
               justifyContent="space-between"
               width="90%"
               alignItems="center"
               mb="2px"
            >
               <Typography variant="h1" fontSize="36px" color="#f4f4f4">
                  To Do
               </Typography>
               <IconButton onClick={() => handleDialog()}>
                  <SettingsIcon sx={{ color: "#F4F4F4", fontSize: "2.5rem" }} />
               </IconButton>
            </Box>
            {todos.sort(sortTodoLists).map((todo, index) => (
               <TodoAccordion
                  key={index}
                  id={todo.id}
                  data={todo.data}
                  date={todo.date}
               />
            ))}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DatePicker
                  componentsProps={{
                     actionBar: {
                        actions: ["accept"],
                     },
                  }}
                  closeOnSelect={false}
                  label="Custom input"
                  value={listDay}
                  open={isOpen}
                  onChange={(value) => setListDay(value)}
                  onAccept={() => handleDatePick()}
                  renderInput={({ inputRef }) => (
                     <IconButton
                        ref={inputRef}
                        onClick={() => setIsOpen(!isOpen)}
                        sx={{ bgcolor: "222222" }}
                     >
                        <EventIcon style={{ color: "f4f4f4" }} />
                     </IconButton>
                  )}
               />
            </LocalizationProvider>
         </MainBox>
      </>
   );
};

export default Todo;
