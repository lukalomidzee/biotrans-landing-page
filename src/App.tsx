import { Box } from "@mui/material";
import "./App.css";
import Homepage from "./routes/Homepage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tracking from "./routes/Tracking";
import Services from "./routes/Services";
import Packaging from "./routes/Packaging";

function App() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          backgroundColor: "#F9FAFB",
          flexGrow: "1",
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packaging" element={<Packaging />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
