import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import flammableLiquid from "../../assets/background-images/flammableLiquid.jpg";

const ServiceFlammable = () => {
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
            Oil Shipments
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
              Biotrans offers international and domestic shipping of oil
              samples, falling under Category 3: Flammable Liquids of dangerous
              goods classification issued by the United Nations.
            </Typography>

            <Box
              mt={1}
              sx={{
                textAlign: "start",
              }}
            >
              <Typography mb={1}>
                Safe and timely delivery of oil shipments is ensured though the
                use of approved and certified packaging that is in accordance
                with international packaging standards.
              </Typography>
              <Typography mb={1}>
                Our team is trained in the handling of dangerous goods, ensuring
                full compliance with international transport regulations. From
                proper labeling to certified packaging, every step is managed
                with precision to guarantee the safety and integrity of oil
                sample shipments
              </Typography>
              <Typography mb={1}>
                With a strong focus on reliability and regulatory compliance,
                Biotrans coordinates every oil shipment with meticulous
                attention to detail. Whether for routine testing or
                time-sensitive analysis, we provide end-to-end support to meet
                the unique needs of each client and industry.
              </Typography>
            </Box>
          </Box>
          <Box
            component="img"
            src={flammableLiquid}
            alt="Flammable Liquid"
            sx={{
              flex: 1,
              height: {
                xs: "15rem",
                sm: "20rem",
                md: "25rem",
              },
              width: {
                xs: "80%",
                md: "50%",
              },
              overflow: "hidden",
              borderRadius: 2,
              objectFit: "contain",
              // boxShadow: 1,
            }}
          ></Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ServiceFlammable;
