import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TrackingHeader from "../components/Tracking/TrackingHeader";
import TrackingBodyEmpty from "../components/Tracking/TrackingBodyEmpty";
import type TrackingData from "../components/Tracking/TrackingData";
import TrackingBody from "../components/Tracking/TrackingBody";

const Tracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hawb, setHawb] = useState<string>("");
  const [trackingData, setTrackingData] = useState<TrackingData>();


  const hasTyped = hawb.length > 0;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TrackingHeader
        hawb={hawb}
        searchFunction={setHawb}
        dataSetter={setTrackingData}
      />
      {trackingData === null ? (
        <TrackingBodyEmpty found={!hasTyped ? true : false} />
      ) : (
        
        <TrackingBody data={trackingData} />
      )}
      
    </Box>
  );
};

export default Tracking;
