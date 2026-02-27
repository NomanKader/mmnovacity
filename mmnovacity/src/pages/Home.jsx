import { Box, Typography, Button, Container, Grid } from "@mui/material"
import buildingImg from "../assets/photos/building.jpg" // change if needed

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          minHeight: "90vh",
          backgroundImage: `url(${buildingImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 900 }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
            }}
          >
            DISCOVER YOUR DREAM HOME IN YANGON
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Premium Properties for Sale & Rent
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              px: 4,
              py: 1.2,
              borderRadius: 5,
            }}
          >
            Explore Properties
          </Button>
        </Box>
      </Box>

      {/* ================= SERVICES SECTION ================= */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={6}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {["Property Sales", "Rental Services", "Consultation"].map(
            (item) => (
              <Grid item xs={12} md={4} key={item}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">{item}</Typography>
                  <Typography sx={{ my: 2 }}>
                    Professional real estate solutions tailored for you.
                  </Typography>
                  <Button variant="outlined">
                    Learn More
                  </Button>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </>
  )
}