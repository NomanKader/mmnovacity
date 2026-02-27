import {
  Box,
  Container,
  Typography,
  Grid,
  Button
} from "@mui/material"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import HomeIcon from "@mui/icons-material/Home"
import HandshakeIcon from "@mui/icons-material/Handshake"
import ApartmentIcon from "@mui/icons-material/Apartment"

import serviceHero from "../assets/photos/service.jpg"
import serviceHouse from "../assets/photos/servicehouse.jpg"
import serviceCouch from "../assets/photos/servicecouch.jpg"
import serviceMeet from "../assets/photos/servicemeet.jpg"

export default function Services() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: "55vh",
          backgroundImage: `url(${serviceHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)"
          }}
        />
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: "32px", md: "48px" } }}
          >
            OUR SERVICES
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Home &gt; Services
          </Typography>
        </Box>
      </Box>

      {/* ================= SECTION WRAPPER ================= */}
      <Box sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
        <Container>

          {/* ===== PROPERTY SALES ===== */}
          <Grid container spacing={8} alignItems="center" mb={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "#d9efea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2
                  }}
                >
                  <HomeIcon sx={{ color: "#2f7f77" }} />
                </Box>
              </Box>

              <Typography variant="h5" fontWeight="bold" mb={3}>
                Property Sales & Purchase
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Find your dream property with our extensive portfolio of residential and
                commercial properties across Yangon. We guide you through every step
                of the buying process.
              </Typography>

              {[
                "Comprehensive property listings",
                "Market value assessment",
                "Legal documentation support",
                "Negotiation assistance"
              ].map((item, index) => (
                <Box key={index} display="flex" mb={2}>
                  <CheckCircleIcon sx={{ color: "#2f7f77", mr: 2 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#e8742b",
                  borderRadius: "30px",
                  px: 4
                }}
              >
                Contact Us
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={serviceHouse}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: 4
                }}
              />
            </Grid>
          </Grid>

          {/* ===== RENTAL SERVICES ===== */}
          <Grid container spacing={8} alignItems="center" mb={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={serviceCouch}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: 4
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#d9efea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3
                }}
              >
                <ApartmentIcon sx={{ color: "#2f7f77" }} />
              </Box>

              <Typography variant="h5" fontWeight="bold" mb={3}>
                Rental Services
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Whether you are looking to rent a property or list your property for rent,
                we offer flexible rental solutions tailored to your needs with transparent terms.
              </Typography>

              {[
                "Tenant screening services",
                "Flexible lease agreements",
                "Property management support",
                "Maintenance coordination"
              ].map((item, index) => (
                <Box key={index} display="flex" mb={2}>
                  <CheckCircleIcon sx={{ color: "#2f7f77", mr: 2 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#e8742b",
                  borderRadius: "30px",
                  px: 4
                }}
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>

          {/* ===== CONSULTATION ===== */}
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#d9efea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3
                }}
              >
                <HandshakeIcon sx={{ color: "#2f7f77" }} />
              </Box>

              <Typography variant="h5" fontWeight="bold" mb={3}>
                Property Consultation
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Get expert advice on property investment, market trends, and real estate
                opportunities in Yangon. Our consultants provide personalized recommendations.
              </Typography>

              {[
                "Free initial consultation",
                "Market analysis reports",
                "Investment strategy planning",
                "Property portfolio review"
              ].map((item, index) => (
                <Box key={index} display="flex" mb={2}>
                  <CheckCircleIcon sx={{ color: "#2f7f77", mr: 2 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#e8742b",
                  borderRadius: "30px",
                  px: 4
                }}
              >
                Contact Us
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={serviceMeet}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: 4
                }}
              />
            </Grid>
          </Grid>

        </Container>
      </Box>

      {/* ================= PROCESS ================= */}
<Box sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
  <Container>
    <Typography
      variant="h4"
      fontWeight="bold"
      textAlign="center"
      mb={2}
    >
      Our Process
    </Typography>

    <Typography
      textAlign="center"
      color="text.secondary"
      mb={8}
    >
      We follow a simple and transparent process to help you find your perfect property
    </Typography>

    <Box sx={{ position: "relative" }}>
      {/* Connecting Line */}
      <Box
        sx={{
          position: "absolute",
          top: "35px",
          left: "8%",
          right: "8%",
          height: "2px",
          backgroundColor: "#b5d4cf",
          zIndex: 0,
          display: { xs: "none", md: "block" }
        }}
      />

      <Grid container justifyContent="space-between" textAlign="center">
        {[
          {
            title: "Consultation",
            desc: "Share your requirements and budget with our team"
          },
          {
            title: "Property Search",
            desc: "We find properties that match your criteria"
          },
          {
            title: "Viewing",
            desc: "Visit selected properties with our agents"
          },
          {
            title: "Agreement",
            desc: "Complete documentation and finalize the deal"
          }
        ].map((step, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }}>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  backgroundColor: "#2f7f77",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 2,
                  fontWeight: "bold"
                }}
              >
                {`0${index + 1}`}
              </Box>

              <Typography fontWeight="bold" mb={1}>
                {step.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ px: 2 }}
              >
                {step.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
                        </Grid>
                    </Box>
            </Container>
        </Box>
    </>
  )
}