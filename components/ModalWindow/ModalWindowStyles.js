import { TextField } from "@mui/material";
import { styled } from "@mui/system";
export const formStyle = {
   display: "flex",
   flexDirection: "column",
   gap: "15px",
   mt: "15px",
};

export const modalStyle = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 300,
   bgcolor: "#121212",
   boxShadow:
      "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
   p: 4,
   bgcolor: "#222222",
   borderRadius: "30px",
};

export const ModalTextField = styled(TextField)`
   .MuiFormLabel-root, .MuiInputBase-input{
      color: #f4f4f4;
   }

`
