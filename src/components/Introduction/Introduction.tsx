import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../../assets/background-images/background-image-clinical-trials.jpg";
import { motion } from "framer-motion";
import {
  sectionHeadingOffset,
  sectionSizing,
} from "../../assets/styles/layout";

const Introduction = () => {
  return (
    // Introduction section
    <Box
      sx={{
        ...sectionSizing,
        ...sectionHeadingOffset,
        minWidth: "15rem",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minWidth: "15rem",
            height: "100%",
            backgroundColor: "rgba(32, 52, 119, 0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: {
              xs: "flex-start",
              md: "center",
            },
            textAlign: "center",
            py: {
              xs: "4rem",
              md: "6rem",
            },
            px: {
              xs: 2,
              sm: 5,
              md: 7,
              lg: 17,
              xl: 17,
            },
            boxSizing: "border-box",
          }}
        >
          {/* Text overlay motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background image text */}
            <Box
              sx={{
                mt: {
                  xs: 15,
                  md: 0,
                },
                mb: {
                  xs: 8,
                  sm: 7,
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
                    xs: "2rem",
                    sm: "3rem",
                    md: "3.2rem",
                    lg: "3.5rem",
                  },
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
                    xs: "2rem",
                    sm: "3rem",
                    md: "3.2rem",
                    lg: "3.5rem",
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
                  xs: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                mb: {
                  xs: 8,
                  sm: 7,
                  md: 6,
                  lg: 5,
                  xl: 4,
                },
                color: "#FFFFFF",
                "@media (max-width:400px)": {
                  fontSize: "1.3rem",
                },
                "@media (max-width:320px)": {
                  fontSize: "1.4rem",
                },
              }}
            >
              Delivering critical medical specimens and dangerous goods with
              precision, compliance, and global reach — ensuring the integrity
              of every shipment.
            </Typography>
            {/* Buttons div */}
          </motion.div>
          <Box
            sx={{
              alignSelf: "flex-start",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "9rem",
                height: "3rem",
                backgroundColor: "#ffffff",
                color: "#243881",
                fontWeight: "bold",
                borderRadius: "12px",
                px: 3,
                py: 1.5,
                textTransform: "none",
                "&:focus": {
                  outline: "none",
                },
                "&:focus-visible": {
                  outline: "none",
                },
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
