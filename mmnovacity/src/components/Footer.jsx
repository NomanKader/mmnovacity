import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
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
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, mb: 2 }}
            >
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

            <Typography sx={{ fontWeight: 700, mb: 2 }}>
              Stay Updated
            </Typography>

            <Box sx={{ maxWidth: 400 }}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Enter your email"
                sx={{
                  mb: 2,
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontSize: 14,
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "rgba(255,255,255,0.4)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                }}
              />

              <Button
                variant="outlined"
                sx={{
                  borderColor: "white",
                  color: "white",
                  borderRadius: "30px",
                  px: 4,
                  py: 1,
                  fontWeight: 600,
                  fontSize: 14,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
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
            borderColor: "rgba(255,255,255,0.25)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography fontSize={14} sx={{ opacity: 0.9 }}>
            © {new Date().getFullYear()} NovaCity. All rights reserved.
          </Typography>

          <Typography fontSize={14} sx={{ opacity: 0.9 }}>
            Website Builder
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}