import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import worldMap from "../../assets/background-images/world-map.jpg";

const ContactSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F9FAFB",
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
          initial={{ opacity: 0, x: 30 }}
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
            Contact us
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
            Have any questions? Contact our team for personalized logistics
            solutions
          </Typography>
        </motion.div>
      </Box>

      {/* Image + Text box */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
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
          {/* Map box */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
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
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.047364599974!2d44.77396517632186!3d41.805740071249794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446e879e58bd2d%3A0xdb2c3deab731204d!2sBiotrans%20LLC!5e0!3m2!1sen!2sge!4v1749552101317!5m2!1sen!2sge"
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
                display: "block",
              }}
              loading="eager"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>

          {/* Info box */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              maxWidth: "600px",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#203477",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                },
              }}
            >
              Contact Information
            </Typography>
            {/* Icon */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            ></Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
