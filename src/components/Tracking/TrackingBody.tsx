import { Box, Typography } from "@mui/material";
import type TrackingData from "./TrackingData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScaleIcon from "@mui/icons-material/Scale";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const TrackingBody = (props: { data: TrackingData }) => {
  const readData = props.data;

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
      }}
    >
      {/* Info box */}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "70%",
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
          gap: 2,
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
              AWB: {readData.trackingNumber?.toUpperCase()}
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
        {/* Cards Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Each Card */}
          {/* Origin */}
          <Box
            sx={{
              flexGrow: "1",
              color: "black",
              backgroundColor: "#EEF4FF",
              borderRadius: 2,
              padding: 2,
              border: "1px solid rgb(173, 200, 227)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 0.5,
              }}
            >
              <LocationOnIcon
                color="primary"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#A0A0A0",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                }}
              >
                Origin
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              {readData.origin}
            </Typography>
          </Box>
          {/* Destination */}
          <Box
            sx={{
              flexGrow: "1",
              color: "black",
              backgroundColor: "#EEFDF7",
              borderRadius: 2,
              padding: 2,
              border: "1px solid #D1FAE5",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 0.5,
              }}
            >
              <LocationOnIcon
                color="success"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#A0A0A0",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                }}
              >
                Destination
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              {readData.destination}
            </Typography>
          </Box>
          {/* Weight */}
          <Box
            sx={{
              flexGrow: "1",
              color: "black",
              backgroundColor: "#FFF9EC",
              borderRadius: 2,
              padding: 2,
              border: "1px solid #FEF3C7",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 0.5,
              }}
            >
              <ScaleIcon
                color="warning"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#A0A0A0",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                }}
              >
                Weight
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              {readData.weight} kg
            </Typography>
          </Box>
          {/* Pcs */}
          <Box
            sx={{
              flexGrow: "1",
              color: "black",
              backgroundColor: "#FBF4FC",
              borderRadius: 2,
              padding: 2,
              border: "1px solid #F3E8FF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 0.5,
              }}
            >
              <Inventory2Icon
                // color=""
                sx={{
                  color: "#9F49EC",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#A0A0A0",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                }}
              >
                Pieces
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              {readData.numberOfPcs} Pc
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingBody;
