import { Box } from "@mui/material";
import "./App.css";
import Homepage from "./routes/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Box>
  );
}

export default App;
