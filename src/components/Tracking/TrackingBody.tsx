import { Box } from "@mui/material";
import type TrackingData from "./TrackingData";

const TrackingBody = (props: { data: TrackingData | undefined }) => {
  const readData = props?.data?.consignee;

  return (
    <Box>
      <Box>{readData}</Box>
    </Box>
  );
};

export default TrackingBody;
