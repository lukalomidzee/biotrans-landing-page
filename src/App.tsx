import { Box } from "@mui/material";
import "./App.css";
import Homepage from "./routes/Homepage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
