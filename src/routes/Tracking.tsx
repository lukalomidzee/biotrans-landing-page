import { useEffect } from "react";
import { Box } from "@mui/material";
import TrackingHeader from "../components/Tracking/TrackingHeader";

const Tracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
