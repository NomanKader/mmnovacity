import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { faqs, playStoreUrl } from "../data/search";

export default function PropertyFaq() {
  return (
    <Box component="section" id="faq" aria-labelledby="faq-heading" sx={{ py: { xs: 6, md: 9 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h4" id="faq-heading" fontWeight={800} sx={{ mb: 4 }}>
          Questions about NovaCity
        </Typography>
        {faqs.map(({ question, answer }) => (
          <Box key={question} sx={{ mb: 3, pb: 3, borderBottom: "1px solid #e2e8f0" }}>
            <Typography component="h3" variant="h6" fontWeight={700} sx={{ mb: 1 }}>{question}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{answer}</Typography>
          </Box>
        ))}
        <Typography sx={{ lineHeight: 2 }}>
          <Link component={RouterLink} to="/services">Explore our services</Link>{" · "}
          <Link component={RouterLink} to="/contact">Contact NovaCity</Link>{" · "}
          <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer">Download the Android app</Link>
        </Typography>
      </Container>
    </Box>
  );
}
