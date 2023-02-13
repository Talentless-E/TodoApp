import { Box, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
export const DialogBox = styled(Box)(() => ({
   "& .MuiBox-root": {
      backgroundColor: "#222222",
   },
}));

export const boxSx = {
   display: "flex",
   flexDirection: "row",
   gap: "15px",
   alignItems: "center",
   justifyContent: "center",
   p: "20px",
   backgroundColor: "#222222",
};
