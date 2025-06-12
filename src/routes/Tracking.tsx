import TrackingHeader from "../components/Tracking/TrackingHeader";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";

const Tracking = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TrackingHeader />
    </Box>
  );
};

export default Tracking;
