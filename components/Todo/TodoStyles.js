import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
export const MainBox = styled(Box)(({ theme }) => ({
   backgroundColor: "#222222",
   borderRadius: "30px",
   [theme.breakpoints.down("xs")]: {
      margin: "0 10px",
      maxWidth: 390
   },
   margin: "auto",
   minWidth: 390,
   height: "fit-content",
   padding: "20px 20px",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   gap: "32px",
}));
