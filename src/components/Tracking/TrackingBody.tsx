import { Box, Typography } from "@mui/material";
import { sectionHeadingOffset } from "../../assets/styles/layout";

const TrackingBody = () => {
  return (
    <Box
      sx={{
        ...sectionHeadingOffset,
        backgroundColor: "#F9FAFB",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        px: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
        },
        py: {
          xs: 6,
          md: 10,
        },
      }}
    >
      {/* Search box */}
      <Box
        sx={{
          width: "80%",
          height: "20rem",
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#1E293B",
            fontWeight: "700",
          }}
        >
          Track Your Shipment
        </Typography>
        <Typography
          sx={{
            color: "#4B586C",
          }}
        >
          Enter your AWB number to get real-time tracking updates
        </Typography>
        <Box
          sx={{
            borderRadius: 2,
            border: "1px solid #4B586C",
          }}
        >
          <input />
          <button>Track</button>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingBody;
