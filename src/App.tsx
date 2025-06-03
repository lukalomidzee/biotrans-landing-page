import { Box } from "@mui/material";
import "./App.css";
import Homepage from "./routes/Homepage";

function App() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
      }}
    >
      <Homepage />
    </Box>
  );
}

export default App;
