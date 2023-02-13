import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTodoContext } from "../../provider/DataProvider";
import ModalWindow from "../ModalWindow/ModalWindow";
import { CustomSwitch } from "./TodoTaskStyles";

const TodoTask = ({ color, title, text, completed, id }) => {
   const { switchComplete, setActiveTodoId } = useTodoContext();
   const [modalState, setModalState] = useState(false)
   const [edit, setEdit] = useState(false)

   const handleClick = (id) => {
     setActiveTodoId(id)
     setEdit((prev) => !prev)
     setModalState((prev) => !prev)
   };

   return (
      <>
       {edit ? <ModalWindow modalState={modalState} setModalState={setModalState} edit={edit} setEdit={setEdit}/> : <></>}
         <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
         >
            <Box
               display="flex"
               flexDirection="row"
               gap="14px"
               onClick={() => handleClick(id)}
            >
               <Box
                  sx={{
                     width: "5px",
                     height: "40px",
                     bgcolor: `${color}`,
                     borderRadius: "3px",
                  }}
               />
               <Box display="flex" flexDirection="column">
                  <Typography
                     noWrap
                     className="todoTask_title"
                     sx={{
                        color: "#f4f4f4",
                        textDecoration: `${
                           completed ? "line-through" : "none"
                        }`,
                        maxWidth: "235px",
                     }}
                  >
                     {title}
                  </Typography>
                  <Typography
                     noWrap
                     sx={{ maxWidth: "235px", color: "#ffffff60" }}
                  >
                     {text}
                  </Typography>
               </Box>
            </Box>
            
            <CustomSwitch
               checked={completed}
               onChange={() => switchComplete(id)}
            />
         </Box>
      </>
   );
};

export default TodoTask;
