import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../../assets/background-images/background-image-clinical-trials.jpg";
import { motion } from "framer-motion";
import { sectionHeadingOffset } from "../../assets/styles/layout";

const Introduction = () => {
  return (
    <Box
      sx={{
        ...sectionHeadingOffset,
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background section with relative positioning */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "flex-start",
            md: "center",
          },

          height: {
            xs: "auto",
            sm: "90svh",
            lg: "87svh",
          },
        }}
      >
        {/* Dark blue overlay that covers entire background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(32, 52, 119, 0.4)",
            zIndex: 1,
          }}
        />

        {/* Content inside relative container, placed above overlay */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              xs: "flex-start",
              sm: "center",
            },
            minHeight: "100%",
            px: {
              xs: 2,
              sm: 5,
              md: 7,
              lg: 17,
              xl: 17,
            },
            py: {
              xs: 6,
              md: 10,
            },
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                mb: {
                  xs: 5,
                  sm: 6,
                  md: 6,
                  lg: 5,
                  xl: 4,
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  textAlign: "start",
                  fontSize: {
                    xs: "clamp(1.5rem, 6vw, 2.5rem)",
                    md: "3.2rem",
                  },
                  color: "#fff",
                }}
              >
                Specialized Cold Chain Logistics for
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  textAlign: "start",
                  fontSize: {
                    xs: "clamp(1.5rem, 6vw, 2.5rem)",
                    md: "3.2rem",
                  },
                  color: "#7CC6FD",
                }}
              >
                Clinical Trials & Hazardous Materials
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "clamp(1rem, 4.5vw, 1.6rem)",
                  md: "2rem",
                },
                mb: {
                  xs: 5,
                  md: 6,
                },
                color: "#FFFFFF",
              }}
            >
              Delivering critical medical specimens and dangerous goods with
              precision, compliance, and global reach — ensuring the integrity
              of every shipment.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: {
                    xs: "8rem",
                    sm: "9rem",
                    md: "10rem",
                  },
                  height: {
                    xs: "2.5rem",
                    md: "3rem",
                  },
                  backgroundColor: "#ffffff",
                  color: "#243881",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                  "&:focus-visible": {
                    outline: "none",
                  },
                }}
              >
                Get started
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
