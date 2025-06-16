import TrackingBody from "../components/Tracking/TrackingBody";
import TrackingHeader from "../components/Tracking/TrackingHeader";
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
      {/* <TrackingHeader /> */}
      <TrackingBody />
    </Box>
  );
};

export default Tracking;
