import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { sectionHeadingOffset } from "../../assets/styles/layout";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import type TrackingData from "./TrackingData";
import type { TrackingStatus } from "./TrackingData";
import { useState } from "react";

const TrackingHeader = (props: {
  dataSetter: React.Dispatch<React.SetStateAction<TrackingData>>;
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = async (hawb: string) => {
    if (hawb.length < 1) return;
    const query = hawb;
    const result = await axios.get(
      `https://biotrans.ge/Tracking/tracing.php?hawb=${query}`
    );
    const rawData = result.data;
    const data = parseData(rawData);
    props.dataSetter(data);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSearch(inputValue);
    }
  };

  const parseData = (htmlString: string): TrackingData => {
    try {
      const parser = new DOMParser();
      const document = parser.parseFromString(htmlString, "text/html");
      const statusRows = document.querySelectorAll(".table-striped tr");
      const statuses: TrackingStatus[] = [];

      statusRows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length === 4) {
          const id = parseInt(cells[0].textContent || "0", 10);
          if (!isNaN(id) && id > 0) {
            statuses.push({
              id: id,
              date: cells[1].textContent?.trim() || "",
              time: cells[2].textContent?.trim() || "",
              status: cells[3].textContent?.trim() || "",
            });
          }
        }
      });

      const getDetailValue = (labelText: string): string => {
        const allRows = Array.from(document.querySelectorAll("tr"));
        const targetRow = allRows.find(
          (row) => row.cells[0]?.textContent?.trim() === labelText
        );
        return targetRow?.cells[1]?.textContent?.trim() || "";
      };

      const notFoundData = statusRows.length === 3;
      if (notFoundData) {
        const trackingData: TrackingData = {
          trackingNumber: "",
          statuses: [],
          origin: "",
          destination: "",
          weight: NaN,
          numberOfPcs: NaN,
          consignee: "",
          searchStatus: "notFound",
        };
        return trackingData;
      }

      const trackingNumber =
        document
          .querySelector("h4")
          ?.textContent?.replace("Tracking Number: ", "")
          .trim() || "";
      const origin = getDetailValue("Origin:");
      const destination = getDetailValue("Destination:");
      const weight = parseFloat(getDetailValue("Weight (kg):") || "0");
      const numberOfPcs = parseInt(getDetailValue("Number of pcs:") || "0", 10);
      const consignee = getDetailValue("Consignee:");

      const trackingData: TrackingData = {
        trackingNumber,
        statuses,
        origin,
        destination,
        weight,
        numberOfPcs,
        consignee,
        searchStatus: "found",
      };

      return trackingData;
    } catch (error) {
      console.error("Failed to parse tracking HTML:", error);
      const trackingData: TrackingData = {
        trackingNumber: "",
        statuses: [],
        origin: "",
        destination: "",
        weight: NaN,
        numberOfPcs: NaN,
        consignee: "",
        searchStatus: "notFound",
      };
      return trackingData;
    }
  };

  return (
    <Box
      sx={{
        ...sectionHeadingOffset,
        backgroundColor: "#F9FAFB",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
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
      }}
    >
      {/* Search box */}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "70%",
          },
          height: {
            xs: "20rem",
            sm: "17rem",
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
              md: "2.5rem",
            },
          }}
        >
          Track Your Shipment
        </Typography>
        <Typography
          sx={{
            color: "#A0A0A0",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.3rem",
            },
            textAlign: "center",
          }}
        >
          Enter your AWB number to get real-time tracking updates
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter AWB Number..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
            },
            "& .MuiOutlinedInput-root": {
              cursor: "text",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              borderRadius: "1rem",
            },
            "& .MuiOutlinedInput-input": {
              cursor: "text",
              color: "#203477",
              transition:
                "background-color 0s ease-out 999999s, color 0s ease-out 999999s !important",
              "&:-webkit-autofill": {
                boxShadow: "0 0 0 100px white inset !important",
                WebkitTextFillColor: "#203477 !important",
                backgroundColor: "white !important",
                transition:
                  "background-color 0s ease-out 999999s, color 0s ease-out 999999s !important",
              },
              "&:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
                {
                  boxShadow: "0 0 0 100px white inset !important",
                  WebkitTextFillColor: "#203477 !important",
                  backgroundColor: "white !important",
                  transition:
                    "background-color 0s ease-out 999999s, color 0s ease-out 999999s !important",
                },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: inputValue.length < 1 ? "not-allowed" : "pointer",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    sx={{
                      height: "3.5rem",
                      borderRadius: 4,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      marginRight: "-0.85rem",
                      background: "#203477",
                      textTransform: "none",
                      fontSize: "1rem",
                      boxShadow: 0,
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: 0,
                        backgroundColor: "#004E78",
                      },
                      "&:focus": {
                        outline: 0,
                      },
                      "&:disabled": {
                        color: "#FFFFFF",
                        backgroundColor: "#8CBBD6",
                        cursor: "not-allowed !important",
                      },
                      width: { xs: "3rem", sm: "auto" },
                      minWidth: { xs: "3rem", sm: "4rem" },
                      paddingLeft: { xs: 0, sm: "1rem" },
                      paddingRight: { xs: 0, sm: "2rem" },
                      justifyContent: { xs: "center", sm: "flex-start" },

                      "& .MuiButton-startIcon": {
                        marginRight: { xs: 0, sm: "0.5rem" },
                      },
                    }}
                    onClick={() => {
                      handleSearch(inputValue);
                    }}
                    disabled={inputValue.length < 1}
                  >
                    {!isSmallScreen && "Track"}
                  </Button>
                </Box>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "1rem",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TrackingHeader;
