import { useEffect } from "react";
import TrackingBody from "../components/Tracking/TrackingBody";
import { Box } from "@mui/material";

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
      {/* <TrackingHeader /> */}
      <TrackingBody />
    </Box>
  );
};

export default Tracking;
