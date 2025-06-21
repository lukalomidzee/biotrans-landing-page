import { Box, Typography } from "@mui/material";
import type TrackingData from "./TrackingData";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookIcon from "@mui/icons-material/Book";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SearchIcon from "@mui/icons-material/Search";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import CheckIcon from "@mui/icons-material/Check";

const TrackingCheckpoints = (props: { data: TrackingData }) => {
  const readData = props.data;

  return (
    // Div
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
        pb: {
          xs: 3,
          md: 4,
          lg: 6,
        },
      }}
    >
      {/* Out box */}
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
        {/* Header */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: {
              xs: 1,
              md: 1.5,
            },
          }}
        >
          <AccessTimeIcon
            color="primary"
            sx={{
              fontSize: {
                xs: "1.7rem",
                sm: "1.85rem",
                md: "2rem",
              },
            }}
          />
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
            Tracking Timeline
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {readData.statuses.map((status, index) => (
            <Box
              key={index}
              sx={{
                flexGrow: "1",
                display: "flex",
                flexDirection: {
                  xs: "column-reverse",
                  sm: "row",
                },
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: "#EEFDF8",
                border: "1px solid #A7F3D0",
                borderRadius: 2,
                p: 2,
              }}
            >
              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                    xs: "center",
                    sm: "flex-start",
                  },
                  justifyContent: "space-between",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.2rem",
                      sm: "1.4rem",
                      lg: "1.5rem",
                    },
                    fontWeight: 700,
                    color: "#065F46",
                  }}
                >
                  {status.status}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                    textAlign: {
                      xs: "center",
                      sm: "start",
                    },
                    color: "#334155",
                    fontSize: {
                      xs: "0.8rem",
                      md: "0.9rem",
                      sm: "1rem",
                      lg: "1.1rem",
                    },
                  }}
                >
                  <CalendarTodayIcon
                    color="success"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                      fontSize: {
                        xs: "1rem",
                        md: "1.1rem",
                        sm: "1.2rem",
                        lg: "1.3rem",
                      },
                    }}
                  />{" "}
                  {status.date} at {status.time}
                </Typography>
              </Box>
              {/* Icons */}
              <Box>
                {status.status === "Booked" && (
                  <BookIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Picked up" && (
                  <UnarchiveIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Scheduled delivery" && (
                  <AccessTimeIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Departure from origin" && (
                  <FlightTakeoffIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Arrival to destination" && (
                  <FlightLandIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "With delivery Courier" && (
                  <LocalShippingIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Customs clearance" && (
                  <EditDocumentIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Customs delay" && (
                  <MoreTimeIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Miss cargo in destination" && (
                  <SearchIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "Partial delivery" && (
                  <TakeoutDiningIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
                {status.status === "DELIVERED" && (
                  <CheckIcon
                    sx={{
                      color: "#065F46",
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.7rem",
                        lg: "2rem",
                      },
                    }}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingCheckpoints;
