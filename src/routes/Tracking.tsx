import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TrackingHeader from "../components/Tracking/TrackingHeader";
import TrackingBodyEmpty from "../components/Tracking/TrackingBodyEmpty";

const Tracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hawb, setHawb] = useState<string>("");

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
      <TrackingBodyEmpty />
    </Box>
  );
};

export default Tracking;
