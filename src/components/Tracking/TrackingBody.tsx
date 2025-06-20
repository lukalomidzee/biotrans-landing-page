import { Box, Typography } from "@mui/material";
import type TrackingData from "./TrackingData";

const TrackingBody = (props: { data: TrackingData }) => {
  const readData = props.data;

  console.log(readData);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
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
        pt: "0 !important",
      }}
    >
      {/* Info box */}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "70%",
          },
          height: {
            xs: "20rem",
            sm: "17rem",
          },
          backgroundColor: "white",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          boxShadow: 1,
          p: 4,
          textAlign: "center",
        }}
      >
        {/* Text header */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              color: "#1E293B",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              AWB: {readData.trackingNumber}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-around",
              color: "#49576A",
            }}
          >
            <Typography>
              {readData.origin} - {readData.destination}
            </Typography>
          </Box>
        </Box>
        {/* Cardes */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "48%",
              color: "black",
              backgroundColor: "#EEF4FF",
              borderRadius: 2,
            }}
          >
            <Typography>Consignee</Typography>
            <Typography>{readData.consignee}</Typography>
          </Box>
          <Box
            sx={{
              width: "48%",
              color: "black",
              backgroundColor: "#EEFDF7",
              borderRadius: 2,
            }}
          >
            <Typography>Pcs.</Typography>
            <Typography>{readData.numberOfPcs}</Typography>
          </Box>
          <Box
            sx={{
              width: "48%",
              color: "black",
              backgroundColor: "#FFF8EC",
              borderRadius: 2,
            }}
          >
            <Typography>Weight</Typography>
            <Typography>{readData.weight}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingBody;
