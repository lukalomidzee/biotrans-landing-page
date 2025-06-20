import { Box } from "@mui/material";
import type TrackingData from "./TrackingData";

const TrackingBody = (props: { data: TrackingData }) => {
  const readData = props.data;

  console.log(readData);
  return <Box>{readData.consignee}</Box>;
};

export default TrackingBody;
