import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useTodoContext } from "../../provider/DataProvider";
import { menuItemSx } from "./TodoListControlsStyles";

const TodoListControls = ({ handleModalOpen }) => {
   const { deleteTodoList } = useTodoContext();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const handleAddClick = () => {
      handleModalOpen();
      setAnchorEl(null);
   };
   const handleDeleteClick = () => {
      deleteTodoList();
      setAnchorEl(null);
   };
   return (
      <>
         <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
         >
            <MoreVertIcon sx={{ color: "#fff" }} />
         </IconButton>
         { open && <Menu
            id="long-menu"
            MenuListProps={{
               "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "center",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "center",
            }}
            onClose={handleClose}
            sx={{
               "& .MuiMenu-list": {
                  backgroundColor: "#222",
               },
            }}
            PaperProps={{
               style: {
                  bgColor: "#000",
                  width: "fit-content",
                  flexDirection: "row",
                  gap: "10px",
               },
            }}
         >
            <MenuItem sx={menuItemSx}>
               <IconButton
                  aria-label="add task"
                  onClick={() => handleAddClick()}
               >
                  <AddRoundedIcon style={{ color: "#f4f4f4" }} />
               </IconButton>
            </MenuItem>
            <MenuItem sx={menuItemSx}>
               <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteClick()}
               >
                  <DeleteIcon style={{ color: "#f4f4f4" }} />
               </IconButton>
            </MenuItem>
         </Menu>}
      </>
   );
};

export default TodoListControls;
