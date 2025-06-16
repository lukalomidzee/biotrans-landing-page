import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { sectionHeadingOffset } from "../../assets/styles/layout";
import backgroundImage from "../../assets/background-images/services-background.jpg";

const ServicesIntroduction = () => {
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
                  color: "#004E78",
                }}
              >
                Services
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "clamp(0.8rem, 4vw, 1.4rem)",
                  md: "1.6rem",
                },
                mb: {
                  xs: 5,
                  md: 6,
                },
                color: "#FFFFFF",
              }}
            >
              At Biotrans, we specialize in temperature-controlled logistics and
              customs solutions designed for the Life Sciences, Healthcare, and
              Energy industries. Whether it’s patient samples, pharmaceuticals,
              clinical trial supplies, or oil shipments, our expert team ensures
              safe, compliant, and timely delivery across the globe—24/7. Backed
              by international standards and local expertise, we deliver
              precision where it matters most.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesIntroduction;
