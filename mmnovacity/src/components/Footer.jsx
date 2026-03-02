import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Stack,
  Link as MuiLink,
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
                  +959987659275
                  <br />
                  +959765900318
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <MailIcon fontSize="small" />
                <Typography fontSize={14}>
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

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "flex-end" }, gap: 1 }}>
          <Button
            variant="contained"
            component="a"
            href="https://www.viber.com/en/download/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <Box
                component="img"
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/viber.svg"
                sx={{
                  width: 18,
                  height: 18,
                  filter: "invert(1)",
                }}
              />
            }
            sx={{
              bgcolor: "#7360F2",
              color: "white",
              borderRadius: "999px",
              px: 3,
              py: 1,
              fontWeight: 800,
              textTransform: "none",
              boxShadow: "0 10px 25px rgba(115, 96, 242, 0.35)",
              "&:hover": {
                bgcolor: "#5b4bd6",
                boxShadow: "0 12px 28px rgba(115, 96, 242, 0.45)",
              },
            }}
          >
            Contact Us
          </Button>

          <Typography
            component="a"
            href="https://www.nksoftwarehouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: 13,
              opacity: 0.9,
              color: "white",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Powered by NK Software House
          </Typography>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
