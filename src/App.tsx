import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />;
    </Box>
  );
}

export default App;
