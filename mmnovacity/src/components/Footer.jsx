import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Stack,
  Link as MuiLink,
  Fab,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #1f8f85 0%, #18776d 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>

          {/* LEFT SIDE */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              NovaCity
            </Typography>

            <Typography
              sx={{
                opacity: 0.9,
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 450,
                fontSize: 15,
              }}
            >
              Leading real estate company in Yangon, Myanmar, specializing in
              property sales and rentals since 2020.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>

            <Stack spacing={1.2}>
              {links.map((item) => (
                <MuiLink
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  underline="none"
                  sx={{
                    color: "white",
                    opacity: 0.9,
                    fontSize: 14,
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={6} md={2.5}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>

            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography fontSize={14}>
                  <Box
                    component="a"
                    href="tel:+959987659275"
                    sx={{ color: "white", textDecoration: "none", display: "block", "&:hover": { textDecoration: "underline" } }}
                  >
                    +959987659275
                  </Box>
                  <Box
                    component="a"
                    href="tel:+959765900318"
                    sx={{ color: "white", textDecoration: "none", display: "block", "&:hover": { textDecoration: "underline" } }}
                  >
                    +959765900318
                  </Box>
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <MailIcon fontSize="small" />
                <Typography
                  component="a"
                  href="mailto:info@novacity.com"
                  fontSize={14}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  info@novacity.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* LOCATION */}
          <Grid item xs={12} md={2.5}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>
              Location
            </Typography>

            <Typography fontSize={14} sx={{ lineHeight: 1.7 }}>
              No (159/1), Myintar 10 Street,
              <br />
              South Okkalapa Township,
              <br />
              Yangon, Myanmar
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255, 255, 255, 0.25)",
          }}
        />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography fontSize={14} sx={{ opacity: 0.9 }}>
            © {new Date().getFullYear()} NovaCity. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Floating Viber Button (BOTTOM RIGHT) */}
      <Fab
        component="a"
        href="https://www.viber.com/en/download/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          bgcolor: "#7360F2",
          color: "#fff",
          zIndex: 1300,
          boxShadow: "0 8px 20px rgba(115, 96, 242, 0.4)",
          "&:hover": {
            bgcolor: "#5b4bd6",
          },
        }}
      >
        <Box
          component="img"
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/viber.svg"
          sx={{
            width: 22,
            height: 22,
            filter: "invert(1)",
          }}
        />
      </Fab>
    </Box>
  );
}
