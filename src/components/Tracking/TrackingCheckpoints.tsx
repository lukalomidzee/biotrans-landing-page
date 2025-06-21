import { Box } from "@mui/material";
import type TrackingData from "./TrackingData";

const TrackingCheckpoints = (props: { data: TrackingData }) => {
  const readData = props.data;

  return (
    <Box
      sx={{
        width: "100%",
        pb: {
          xs: 6,
          md: 10,
        },
      }}
    >
      <Box>Checkpoints</Box>
    </Box>
  );
};

export default TrackingCheckpoints;
