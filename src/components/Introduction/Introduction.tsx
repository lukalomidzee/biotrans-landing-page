import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/background-images/background-image-clinical-trials.jpg";
import { motion } from "framer-motion";

const Introduction = () => {
  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const ease = [0.43, 0.13, 0.23, 0.96];
  return (
    // Introduction section
    <Box
      sx={{
        width: "100%",
        height: {
          // 100vh - Header height
          xs: "calc(100vh - 4rem)",
          sm: "calc(100vh - 5rem)",
          md: "calc(100vh - 6rem)",
          lg: "calc(100vh - 6rem)",
          xl: "calc(100vh - 7rem)",
        },
        mt: {
          xs: "4rem",
          sm: "5rem",
          md: "6rem",
          lg: "6rem",
          xl: "7rem",
        },
      }}
    >
      <Box
        sx={{
          // backgroundColor: "#203477",
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
            height: "100%",
            backgroundColor: "rgba(32, 52, 119, 0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: {
              xs: "flex-start",
              md: "center",
            },
            color: "white",
            textAlign: "center",
            py: {
              xs: "4rem",
              sm: "5rem",
              md: "6rem",
              lg: "6rem",
              xl: "7rem",
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
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "4rem",
                    // xl: "5rem",
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
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "4rem",
                    // xl: "5rem",
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
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.8rem",
                },
                color: "#FFFFFF",
              }}
            >
              Delivering critical medical specimens and dangerous goods with
              precision, compliance, and global reach — ensuring the integrity
              of every shipment.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
