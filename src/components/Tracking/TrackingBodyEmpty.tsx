import { Box, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";

const TrackingBodyEmpty = (props: { found: boolean }) => {
  return (
    <Box
      sx={{
        minHeight: "17.5rem",
        width: "100%",
        backgroundColor: "#F9FAFB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 3,
        px: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "4rem",
            md: "4.5rem",
            lg: "5rem",
          },
          height: {
            xs: "4rem",
            md: "4.5rem",
            lg: "5rem",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem",
          backgroundColor: "#DAE2EB",
        }}
      >
        <InventoryIcon
          sx={{
            color: "#64748B",
            width: {
              xs: "1.5rem",
              md: "1.8rem",
              lg: "2rem",
            },
            height: {
              xs: "1.5rem",
              md: "1.8rem",
              lg: "2rem",
            },
          }}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: "#64748B",
          fontSize: {
            xs: "1.3rem",
            sm: "1.8rem",
            md: "2rem",
          },
          textAlign: "center",
        }}
      >
        {props.found ? "Enter AWB Number Above" : "No records found"}
      </Typography>
      <Typography
        sx={{
          color: "#64748B",
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.3rem",
          },
          textAlign: "center",
        }}
      >
        {props.found
          ? "Track your shipment in real-time with detailed timeline updates"
          : "Please enter the AWB correctly"}
      </Typography>
    </Box>
  );
};

export default TrackingBodyEmpty;
