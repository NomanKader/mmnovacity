import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

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

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "",
//     message: "",
//   });

//   const handleChange = (key) => (e) => {
//     setForm((prev) => ({ ...prev, [key]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // UI-only (no backend yet)
//     console.log("Contact form submit:", form);
//   };

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

            <Stack spacing={0.8}>
            {lines.map((t, idx) => (
                <Typography
                key={idx}
                sx={{
                    fontSize: 14.5,
                    color: "rgba(15, 23, 42, 0.80)",
                    lineHeight: 1.55,
                }}
                >
                {t}
                </Typography>
            ))}
            </Stack>
        </Stack>
    </Paper>
  );

    return (
        <Box sx={{ width: "100%" }}>
        {/* Hero */}
        <Box
            sx={{
            width: "100%",
            background:
                "radial-gradient(1100px 520px at 40% 25%, rgba(90,120,255,0.22), transparent 60%), linear-gradient(135deg, #0b1220 0%, #0f274d 55%, #0b1220 100%)",
            py: { xs: 10, md: 18 },
            }}
        >
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
        </Box>

        {/* Content */}
        <Box
            sx={{
            width: "100%",
            background: "#ffffff",
            py: { xs: 7, md: 10 },
            }}
        >
            {/* Full-width section, but CENTER the content area so it doesn't stick to the left */}
            <Container
            maxWidth={false}
            disableGutters
            sx={{
                width: "100%",
                px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
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
                    gap: { xs: 3, md: 4 },
                    alignItems: "stretch",
                }}
                >
                <Box sx={{ minWidth: 0, display: "flex" }}>
                    <InfoCard
                    bg="#fff3ea"
                    icon={<PhoneInTalkOutlinedIcon sx={{ color: accent }} />}
                    title="Call Us"
                    lines={["+959987659275", "+959765900318"]}
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
                <Box sx={{ mt: { xs: 8, md: 16 }, width: "100%" }}>
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
                    src="https://www.google.com/maps?q=South%20Okkalapa%20Township%20Yangon%20Myanmar&output=embed"
                    />
                </Paper>
                </Box>
            </Box>
            </Container>
        </Box>
        </Box>
    );
}
