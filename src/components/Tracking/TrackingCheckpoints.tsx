import { Box, Typography } from "@mui/material";
import type TrackingData from "./TrackingData";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

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
            gap: 2,
          }}
        >
          <AccessTimeIcon
            color="primary"
            sx={{
              fontSize: "2rem",
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
          {readData.statuses.map((status) => (
            <Box
              sx={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "row",
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
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  color: "black",
                  textAlign: "start",
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
                    textAlign: "start",
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingCheckpoints;
