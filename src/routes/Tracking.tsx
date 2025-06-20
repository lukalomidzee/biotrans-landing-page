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

  const [trackingData, setTrackingData] = useState<TrackingData>({
    trackingNumber: "",
    statuses: [],
    origin: "",
    destination: "",
    weight: undefined,
    numberOfPcs: undefined,
    consignee: "",
    searchStatus: "none",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TrackingHeader dataSetter={setTrackingData} />
      {trackingData.searchStatus === "none" && (
        <TrackingBodyEmpty empty={true} />
      )}
      {trackingData.searchStatus === "notFound" && (
        <TrackingBodyEmpty empty={false} />
      )}
      {trackingData.searchStatus === "found" && (
        <TrackingBody data={trackingData} />
      )}
    </Box>
  );
};

export default Tracking;
