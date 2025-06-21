import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Homepage = lazy(() => import("./routes/Homepage"));
const Tracking = lazy(() => import("./routes/Tracking"));
const Services = lazy(() => import("./routes/Services"));
const Packaging = lazy(() => import("./routes/Packaging"));

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
        <Suspense
          fallback={<Box sx={{ p: 4, color: "#203477" }}>Loading page...</Box>}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packaging" element={<Packaging />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
