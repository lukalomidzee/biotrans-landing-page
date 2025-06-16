import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { motion } from "framer-motion";
import loggersImage from "../../assets/background-images/loggersImage.jpg";

const ServiceTemperature = () => {
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
            Temperature Controlled Logistics
          </Typography>
          {/* <Typography
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
            We offer international and domestic shipping of:
          </Typography> */}
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
              src={loggersImage}
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
              maxWidth: "600px",
              textAlign: {
                xs: "center",
                md: "left",
              },
              color: "#5A5A5A",
            }}
          >
            <Typography textAlign="start">
              We offer international and domestic shipping of:
            </Typography>
            <List>
              {[
                "• Patient biological samples",
                "• Research materials",
                "• Pharmaceutical products",
                "• Clinical trial supplies and cold chain logistics",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    padding: 0,
                  }}
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Box
              mt={1}
              sx={{
                textAlign: "start",
              }}
            >
              <Typography mb={1}>
                Biotrans guarantees safe and timely delivery of all shipments
                24/7 all over the world.
              </Typography>
              <Typography mb={1}>
                As a specialist courier for the Life Sciences and Healthcare
                industries, we provide logistics services for a range of
                temperature-controlled shipments.
              </Typography>
              <Typography mb={1}>
                Biotrans operates in compliance with EU Good Distribution
                Practice (GDP), IATA regulations, international and national
                regulations and standards.
              </Typography>
              <Typography mb={1}>
                We provide proper temperature range for temperature controlled
                shipments to ensure that the quality of shipment is maintained
                through the entire transportation process.
              </Typography>
              <Typography>
                Our experienced and dedicated staff ensures the integrity of
                each and every shipment.
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ServiceTemperature;
