import React, { useMemo } from "react";
import {
  Box,
//   Button,
  Container,
//   Divider,
//   Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import meetingRoom from "../assets/photos/meeting_room.jpg";

export default function Contact() {
  const interests = useMemo(
    () => [
      { value: "buy", label: "Buying" },
      { value: "rent", label: "Renting" },
      { value: "sell", label: "Selling" },
      { value: "consult", label: "Consultation" },
    ],
    []
  );


  const accent = "#f07f2a";

  const InfoCard = ({ icon, title, lines, bg }) => (
    <Paper
        elevation={0}
        sx={{
            p: { xs: 3, sm: 3.5 },
            borderRadius: 3,
            background: bg,
            boxShadow: "0 18px 40px rgba(12, 18, 30, 0.12)",
            width: "100%",
            height: "100%",
            minHeight: { xs: 240, md: 280 },
            overflow: "hidden",

            transition: "transform 0.35s ease, box-shadow 0.35s ease",
            cursor: "pointer",

            "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0 25px 60px rgba(12, 18, 30, 0.18)",
            },
        }}
        >
        <Stack spacing={1.7}>
            <Box
                sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.75)",
                    border: "2px solid rgba(255,255,255,0.85)",
                }}
            >
                <Box
                    sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 10px 22px rgba(12, 18, 30, 0.10)",
                    }}
                >
                    {icon}
                </Box>
            </Box>

            <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: 22 }}>
            {title}
            </Typography>

            {lines.map((t, idx) => (
            <Typography
                key={idx}
                component="a"
                href={title === "Call Us" ? `tel:${t}` : undefined}
                sx={{
                fontSize: 14.5,
                color: "rgba(15, 23, 42, 0.80)",
                lineHeight: 1.55,
                textDecoration: "none",
                cursor: title === "Call Us" ? "pointer" : "default",
                "&:hover": {
                    color: title === "Call Us" ? accent : "inherit",
                },
                }}
            >
                {t}
            </Typography>
            ))}
        </Stack>
    </Paper>
  );

return (
    <Box sx={{ width: "100%" }}>


        {/* Hero */}

    <Box
        sx={{
            width: "100%",
            position: "relative",
            backgroundImage: `url(${meetingRoom})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            py: { xs: 10, md: 18 },
            display: "flex",
            alignItems: "center",
        }}
    >


    {/* Dark Overlay */}

    <Box
        sx={{
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.75))",
        }}
    />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Container maxWidth="lg">
                <Stack spacing={1.4} alignItems="center" textAlign="center">
                    <Typography
                    sx={{
                        fontWeight: 900,
                        letterSpacing: "0.01em",
                        color: "#fff",
                        textTransform: "uppercase",
                        fontSize: { xs: 38, sm: 52, md: 60 },
                        lineHeight: 1.02,
                    }}
                    >
                    Get in touch
                    </Typography>

                    <Typography
                    sx={{
                        color: "rgba(255,255,255,0.82)",
                        maxWidth: 560,
                        fontSize: { xs: 16.5, sm: 20.5 },
                    }}
                    >
                    We’re here to help you find your perfect property
                    </Typography>
                </Stack>
                </Container>
                </Container>
            </Box>



            {/* Content */}

            <Box
                sx={{
                width: "100%",
                background: "#ffffff",
                py: { xs: 7, md: 10 },
                }}
            >            
                <Container
                maxWidth={false}
                disableGutters
                sx={{
                    width: "100%",
                    px: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 },
                    
                }}
                >


                {/*  wrapper of 3 cards */}

                <Box
                    sx={{
                    width: "100%",
                    maxWidth: 1400,
                    mx: "auto",
                    }}
                >
                    {/* 3 info cards */}
                    <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
                        gap: { xs: 10, md: 4 },
                        alignItems: "stretch",
                    }}
                    >
                    <Box sx={{ minWidth: 0, display: "flex" }}>
                        <InfoCard
                        bg="#fff3ea"
                        icon={<PhoneInTalkOutlinedIcon sx={{ color: accent }} />}
                        title="Call Us"
                        lines={["09785581866", "09678549316"]}
                        />
                    </Box>

                    <Box sx={{ minWidth: 0, display: "flex" }}>
                        <InfoCard
                        bg="#eafff8"
                        icon={<PlaceOutlinedIcon sx={{ color: "#0ea5a4" }} />}
                        title="Visit Our Office"
                        lines={[
                            "No (159/1), Myintar 10 Street, (14/1) Ward,",
                            "South Okkalapa Township, Yangon, Myanmar",
                        ]}
                        />
                    </Box>

                    <Box sx={{ minWidth: 0, display: "flex" }}>
                        <InfoCard
                        bg="#eef5ff"
                        icon={<AccessTimeOutlinedIcon sx={{ color: "#2563eb" }} />}
                        title="Business Hours"
                        lines={[
                            "Monday - Friday: 9:00 AM - 6:00 PM",
                            "Saturday: 9:00 AM - 4:00 PM",
                            "Sunday: Closed",
                        ]}
                        />
                    </Box>
                    </Box>



                    {/* Map */}

                    <Box sx={{ mt: { xs: 12, md: 16 }, width: "100%" }}>
                    <Paper
                        elevation={0}
                        sx={{
                        width: "100%",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: "0 18px 45px rgba(12, 18, 30, 0.14)",
                        }}
                    >
                        <Box
                        component="iframe"
                        title="NovaCity Location"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        sx={{
                            width: "100%",
                            height: { xs: 360, md: 520 },
                            border: 0,
                            display: "block",
                        }}
                        src="https://www.google.com/maps?q=16.848577,96.196533&output=embed"
                        />
                    </Paper>
                    </Box>
                </Box>
            </Container>
            </Box>
            </Box>
        );
}
