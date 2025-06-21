import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./routes/LoadingScreen";

const Homepage = lazy(() => import("./routes/Homepage"));
const Tracking = lazy(() => import("./routes/Tracking"));
const Services = lazy(() => import("./routes/Services"));
const Packaging = lazy(() => import("./routes/Packaging"));
const NotFound = lazy(() => import("./routes/NotFound"));

function App() {
  return (
    <Box
      sx={{
        // ...sectionHeadingOffset,
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
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
