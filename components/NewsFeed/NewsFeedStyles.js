import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NewsBox = styled(Box)(() => ({
    marginTop: 'auto',
    backgroundColor: "#222222",
    height: "fit-content",
    padding: "20px 0",
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: 'fixed',
    bottom: 0,
    overflow: 'hidden',
 }));

 export const AnimatedTypography = styled(Typography)(() => ({
    color: '#f4f4f4',
    position: 'absolute',
    width: '100%',
    translate: 'translatex(100%)',
    animation: 'moving 15s linear infinite',
    '@keyframes moving': {
        '0%': {
            transform: 'translateX(100%)',
        },
        '100%': {
            transform: 'translatex(-100%)'
        }
    }
 }))