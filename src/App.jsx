import "./App.css";
import Todo from "../components/Todo";
import { useContext } from "react";
import { DataContext } from "../provider/DataProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import NewsFeed from "../components/NewsFeed";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const theme = createTheme({
   overrides: {
      MuiPickersToolbar: {
         toolbar: {
            backgroundColor: "#222222",
         },
      },
   },
   typography: {
      fontFamily: "Inter, sans-serif",
   },
   breakpoints: {
      values: {
         xs: 450,
         sm: 600,
         md: 1000,
         lg: 1200,
         xl: 1920,
      },
   },
   root: {
      width: "100%",
   },
});

const App = () => {
   const { newsFeedActive } = useContext(DataContext);
   return (
      <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>
            <div className="app">
               <Todo />
               { newsFeedActive && <NewsFeed />}
            </div>
         </ThemeProvider>
      </QueryClientProvider>
   );
};

export default App;
