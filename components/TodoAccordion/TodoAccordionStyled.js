import { Accordion, styled } from "@mui/material";

export const CustomAccordion = styled(Accordion)(() => ({
   boxShadow:
      "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
   borderRadius: "25px",
   width: "100%",
   backgroundColor: "transparent",

   "&:before": {
      display: "none",
   },
}));
