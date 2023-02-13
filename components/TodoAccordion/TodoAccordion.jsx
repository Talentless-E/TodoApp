import { Box } from "@mui/system";
import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import TodoTask from "../TodoTask";
import { useTodoContext } from "../../provider/DataProvider";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { isToday, isTomorrow } from "../../utils/utils";
import TodoListControls from "../TodoListControls";
import { CustomAccordion } from './TodoAccordionStyled'

const TodoAccordion = ({ date, data, id }) => {
   const { switchComplete, setCurrentTodoListDate } = useTodoContext();
   const handleModalOpen = () => {
      setModalState((prev) => !prev);
   };

   const [modalState, setModalState] = useState(false);
   return (
      <>
         {modalState && (
            <ModalWindow
               modalState={modalState}
               setModalState={setModalState}
            />
         )}
         <CustomAccordion
            sx={{
               boxShadow:
                  "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
               borderRadius: "25px !important",
               width: "100%",
               bgcolor: "transparent",
            }}
            onClick={() => {
               setCurrentTodoListDate(id);
            }}
         >
            <AccordionSummary
               expandIcon={<ExpandCircleDownIcon sx={{ color: "#f4f4f4" }} />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Box
                  display="flex"
                  flexDirection="row"
                  gap="11px"
                  alignItems="center"
               >
                  <Box
                     sx={{
                        width: "5px",
                        height: "40px",
                        bgcolor: "#a9a9a9",
                        borderRadius: "3px",
                     }}
                  />
                  <Typography
                     sx={{
                        color: "#f4f4f4",
                        fontSize: "24px",
                        fontWeight: 600,
                     }}
                  >
                     {isToday(date)
                        ? "Today"
                        : isTomorrow(date)
                        ? "Tomorrow"
                        : date}{" "}
                     Tasks
                  </Typography>
               </Box>
            </AccordionSummary>
            <AccordionDetails>
               {data.map((data, index) => (
                  <TodoTask
                     id={data.id}
                     key={index}
                     color={data.color}
                     title={data.title}
                     text={data.text}
                     checkCompleted={() => switchComplete(id, date)}
                     completed={data.completed}
                  />
               ))}
               <Box
                  sx={{
                     mt: '15px',
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "flex-end",
                  }}
               >
                  <TodoListControls handleModalOpen={handleModalOpen}/>
               </Box>
            </AccordionDetails>
         </CustomAccordion>
      </>
   );
};

export default TodoAccordion;
