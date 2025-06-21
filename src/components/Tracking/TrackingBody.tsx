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
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            color: "black",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              justifyContent: "space-between",
              gap: {
                xs: 1,
                md: 0,
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.5rem",
                },
                fontWeight: "700",
                color: "#203477",
              }}
            >
              AWB: {readData.trackingNumber}
            </Typography>
            {readData.consignee && (
              <Typography
                variant="h1"
                sx={{
                  textAlign: {
                    xs: "start",
                    md: "end",
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                  },
                  fontWeight: "500",
                  color: "#A0A0A0",
                }}
              >
                CONSIGNEE: {readData.consignee}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              backgroundColor: "#0d9488",
              py: 1,
              px: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              {readData.statuses[readData.statuses.length - 1].status}
            </Typography>
          </Box>
        </Box>
        {/* Cards */}
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
