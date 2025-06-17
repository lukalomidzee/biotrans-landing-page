import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { sectionHeadingOffset } from "../../assets/styles/layout";
import backgroundImage from "../../assets/background-images/packaging-background.jpg";

const PackagingIntrocution = () => {
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
            backgroundColor: "rgba(32, 52, 119, 0.6)",
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
                  color: "#7CC6FD",
                }}
              >
                Packaging and Conditioning
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "clamp(0.8rem, 4vw, 1.4rem)",
                  md: "1.5rem",
                },
                mb: {
                  xs: 5,
                  md: 6,
                },
                color: "#FFFFFF",
              }}
            >
              Biotrans offers a dedicated fleet of active and passive solutions
              while in transit, to meet the unique client and patient
              requirements at all temperature ranges. Proper packaging and
              labeling is provided for different types and classes of shipments.
              Our IATA Certified dangerous good specialists assure that shipment
              transportation complies with local and international regulations.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default PackagingIntrocution;
