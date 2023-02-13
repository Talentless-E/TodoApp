import { useState } from "react";
import { Dialog, Box, Typography } from "@mui/material";
import { CustomSwitch } from "../TodoTask/TodoTaskStyles";
import { useTodoContext } from "../../provider/DataProvider";
import { boxSx } from "./TodoSettingsDialogStyles";

const TodoSettingsDialog = ({ dialogOpen, handleClose }) => {
   const { newsFeedActive, setNewsFeedActive } = useTodoContext();
   const handleChange = () => {
    setNewsFeedActive(newsFeedActive => !newsFeedActive)
   }
   return (
      <Dialog onClose={handleClose} open={dialogOpen} sx={{
         "& .MuiDialog-container": {
         "& .MuiPaper-root": {
           backgroundColor: 'transparent'
             }
           },
         }}>
         <Box sx={boxSx}>
            <Typography sx={{color: '#f4f4f4'}}>News feed: </Typography>
            <CustomSwitch checked={newsFeedActive} onChange={() => handleChange()}/>
         </Box>
      </Dialog>
   );
};

export default TodoSettingsDialog;
