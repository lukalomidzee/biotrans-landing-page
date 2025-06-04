import { Box } from "@mui/material";
import {
  sectionHeadingOffset,
  sectionSizing,
} from "../../assets/styles/layout";

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        ...sectionSizing,
        minWidth: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box>Who we are</Box>
    </Box>
  );
};

export default WhoWeAre;
