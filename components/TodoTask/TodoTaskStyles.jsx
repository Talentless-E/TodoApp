
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const CustomSwitch = styled((props) => (
    <Switch
       focusVisibleClassName=".Mui-focusVisible"
       disableRipple
       {...props}
    />
 ))(() => ({
    width: 42,
    height: 26,
    padding: 0,
    transition: "all 0.3s ease",
    "& .MuiSwitch-switchBase": {
       padding: 0,
       margin: 2,

       transitionDuration: "300ms",
       "&.Mui-checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
             backgroundColor: "#10C200",
             opacity: 1,
             border: 0,
          },
          "& .MuiSwitch-thumb": {
             backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
                "#A9A9A9"
             )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
          },
       },
       "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: "#10C200",
          border: "6px solid #fff",
       },
    },
    "& .MuiSwitch-thumb": {
       boxSizing: "border-box",
       width: 22,
       transition: "background-image 0.2s ease",
       height: 22,
       backgroundColor: "#f4f4f4",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14"><path fill="${encodeURIComponent(
          "#A9A9A9"
       )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
    },
    "& .MuiSwitch-track": {
       borderRadius: 26 / 2,
       backgroundColor: "#366EFF",
       opacity: 1,
       transition: "background-color 0.5s ease",
    },
 }));

