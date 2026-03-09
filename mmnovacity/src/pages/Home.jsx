import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import buildingImg from "../assets/photos/building.jpg";
import iphoneImg from "../assets/photos/iphone.jpg";


const Home = () => {
  const navigate = useNavigate();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);


  const handleAppRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;


    // Replace with REAL app links 
    const playStoreUrl =
      "https://play.google.com/store/apps/details?id=com.novacity.app";
    if (/android/i.test(userAgent)) {
      window.open(playStoreUrl, "_blank");
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setComingSoonOpen(true);
    } else {
      window.open(playStoreUrl, "_blank");
    }
  };

  return (
    <>

      <Box
        sx={{
          height: { xs: "50vh", md: "60vh" }, 
          backgroundImage: `url(${buildingImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 28, md: 64 },
              letterSpacing: 2,
              lineHeight: 1.1,
            }}
          >
            DISCOVER YOUR DREAM
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 28, md: 64 },
              letterSpacing: 2,
              lineHeight: 1.1,
            }}
          >
            HOME IN YANGON
          </Typography>

          <Typography sx={{ mt: 3, opacity: 0.95 }}>
            Premium Properties for Sale & Rent
          </Typography>

          <Typography sx={{ opacity: 0.85 }}>
            Your Trusted Real Estate Partner in Myanmar
          </Typography>


          <Button
            onClick={handleAppRedirect}
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              borderRadius: "40px",
              backgroundColor: "#0f172a",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1e293b",
              },
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#f97316",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HomeOutlinedIcon sx={{ fontSize: 18 }} />
            </Box>

            EXPLORE PROPERTIES
            <ArrowOutwardIcon sx={{ fontSize: 18 }} />
          </Button>
        </Container>
      </Box>




      {/* ==== STAY UPDATED === */}

<Box
  sx={{
    py: 10,
    backgroundColor: "#f8fafc",
  }}
>
  <Container maxWidth="lg">
    {/* Title */}
    <Box sx={{ textAlign: "center", mb: 12 }}>
      <Typography
        sx={{
          fontSize: { xs: 32, md: 48 },
          fontWeight: 800,
        }}
      >
        Stay Updated with{" "}
        <Box component="span" sx={{ color: "#f97316" }}>
          Latest Properties
        </Box>
      </Typography>

      <Typography
        sx={{
          mt: 3,
          maxWidth: 720,
          mx: "auto",
          fontSize: 18,
          color: "#64748b",
          lineHeight: 1.6,
        }}
      >
        Download our mobile app to browse the newest property listings in Yangon,
        get instant notifications, and connect with our agents anytime, anywhere.
      </Typography>
    </Box>


    {/* Content Row */}

    <Grid
      container
      spacing={10}
      alignItems="center"
      justifyContent="space-between"
    >


      {/* LEFT IMAGE */}

      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={iphoneImg}
          alt="App"
          width={800}
          height={896}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: 520,
            borderRadius: 4,
            display: "block",
          }}
        />
      </Grid>


      {/* RIGHT CONTENT */}

      <Grid item xs={12} md={6}>
        <Box sx={{ maxWidth: 520 }}>
          {[
            {
              icon: <NotificationsNoneIcon />,
              bg: "#d1fae5",
              title: "Instant Notifications",
              desc: "Get real-time alerts when new properties matching your preferences are listed",
            },
            {
              icon: <SearchIcon />,
              bg: "#fde68a",
              title: "Advanced Search",
              desc: "Filter properties by location, price, type, and amenities to find your perfect match",
            },
            {
              icon: <EventAvailableIcon />,
              bg: "#dbeafe",
              title: "Easy Booking",
              desc: "Schedule property viewings directly through the app with our agents",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                mb: 6,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  minHeight: 60,
                  borderRadius: "50%",
                  aspectRatio: "1 / 1",
                  backgroundColor: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}



          {/* Download */}

        <Typography
          sx={{
            mt: 8,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          DOWNLOAD NOW
        </Typography>

        <Box sx={{ display: "flex", gap: 3, mt: 3 }}>



  {/* Google Play */}

            <Box
              component="a"
              href="https://play.google.com/store/apps/details?id=com.novacity.app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "inline-block" }}
            >
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                loading="lazy"
                decoding="async"
                sx={{
                  height: { xs: 44, sm: 55 },
                  width: "auto",
                  maxWidth: "100%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>


  {/* Apple App Store */}

            <Box
              component="button"
              type="button"
              onClick={() => setComingSoonOpen(true)}
              sx={{ display: "inline-block" }}
            >
              <Box
                component="img"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                loading="lazy"
                decoding="async"
                sx={{
                  height: { xs: 44, sm: 55 },
                  width: "auto",
                  maxWidth: "100%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>




            {/* OUR SERVICES */}

      <Box
        sx={{
          pt: 1,      
          pb: { xs: 8, md: 12 },
          backgroundColor: "#f8fafc",
        }}
      >
        <Container maxWidth="xl">
          
          {/* Title */}
          <Typography
            align="center"
            sx={{
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: 1,
              mb: 8,
            }}
          >
            OUR SERVICES
          </Typography>

          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            columns={{ xs: 1, sm: 2, md: 4 }}
            alignItems="stretch"
          >
            {[
              {
                icon: <HomeOutlinedIcon sx={{ fontSize: 42 }} />,
                title: "Property Sales",
                subtitle: "Competitive Rates",
                primary: true,
              },
              {
                icon: <VpnKeyOutlinedIcon sx={{ fontSize: 42 }} />,
                title: "Rental Services",
                subtitle: "Flexible Terms",
                primary: false,
              },
              {
                icon: <SupportAgentOutlinedIcon sx={{ fontSize: 42 }} />,
                title: "Consultation",
                subtitle: "Free Assessment",
                primary: false,
              },
              {
                icon: <ConstructionOutlinedIcon sx={{ fontSize: 42 }} />,
                title: "Construction Services",
                subtitle: "Trusted Builds",
                primary: false,
              },
            ].map((item, index) => (
              <Grid key={index} size={1}>
                <Card
                  sx={{
                    p: { xs: 5, md: 7 },
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    backgroundColor: "#ffffff",
                    height: "auto",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    },
                  }}
                >

                  {/* Icon Box */}
                  <Box
                    sx={{
                      height: 96,
                      borderRadius: 4,
                      backgroundColor: "#eef2f7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 4,
                      color: index === 0 ? "#2563eb" : "#6b7280",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 16,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 22, md: 26 },
                      fontWeight: 800,
                      mb: 3,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Button
                    onClick={() => navigate("/services")}
                    variant={item.primary ? "contained" : "outlined"}
                    sx={{
                      borderRadius: "28px",
                      px: 3.5,
                      py: 1.1,
                      fontWeight: 600,
                      fontSize: 14,
                      minHeight: 40,
                      textTransform: "none",
                      backgroundColor: item.primary ? "#0f172a" : "transparent",
                      borderColor: "#0f172a",
                      color: item.primary ? "#ffffff" : "#0f172a",
                      "&:hover": {
                        backgroundColor: item.primary ? "#1e293b" : "#f1f5f9",
                      },
                    }}
                >
                  LEARN MORE
                </Button>

                  <Typography
                    sx={{
                      mt: 2.5,
                      fontSize: 13,
                      color: "#9ca3af",
                    }}
                  >
                    Available in Yangon areas
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      <Dialog
        open={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        aria-labelledby="app-store-coming-soon-title"
      >
        <DialogTitle id="app-store-coming-soon-title">Coming Soon</DialogTitle>
        <DialogContent>
          <Typography>
            The iOS app is coming soon. Please check back later.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setComingSoonOpen(false)} variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>


    </>
  );
};

export default Home;
