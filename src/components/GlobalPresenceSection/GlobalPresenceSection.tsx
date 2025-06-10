import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import worldMap from "../../assets/background-images/world-map.jpg";

const GlobalPresenceSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
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
        boxSizing: "border-box",
      }}
    >
      {/* Heading box */}
      <Box>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#203477",
              fontWeight: 600,
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "3rem",
              },
              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            Global presence
          </Typography>
          <Typography
            sx={{
              color: "#A0A0A0",
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
                lg: "1.4rem",
              },
              textAlign: "center",
              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            We connect research centers and clinical sites across the globe.
          </Typography>
        </motion.div>
      </Box>

      {/* Image + Text box */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: 3,
              md: 5,
            },
          }}
        >
          {/* Image box */}
          <Box
            sx={{
              flex: 1,
              height: {
                xs: "15rem",
                sm: "20rem",
                md: "25rem",
              },
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              component="img"
              src={worldMap}
              alt="Map"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Text box */}
          <Box
            sx={{
              flex: 1,
              maxWidth: "600px", // prevents too-wide text on big screens
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                color: "#5A5A5A",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                },
              }}
            >
              We connect research centers, clinical sites, and logistics
              networks worldwide. Our robust global presence ensures that
              life-saving clinical materials reach their destination with
              precision and reliability — no matter where in the world they are
              needed.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default GlobalPresenceSection;
