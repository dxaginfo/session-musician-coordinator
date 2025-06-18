import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Grid, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Session Musician Coordinator
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Connect with professional musicians for your recording projects.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Platform
            </Typography>
            <Stack>
              <MuiLink component={Link} href="/search" color="inherit" underline="none" sx={{ mb: 1 }}>
                Find Musicians
              </MuiLink>
              <MuiLink component={Link} href="/projects/create" color="inherit" underline="none" sx={{ mb: 1 }}>
                Post a Project
              </MuiLink>
              <MuiLink component={Link} href="/how-it-works" color="inherit" underline="none" sx={{ mb: 1 }}>
                How It Works
              </MuiLink>
              <MuiLink component={Link} href="/pricing" color="inherit" underline="none" sx={{ mb: 1 }}>
                Pricing
              </MuiLink>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Stack>
              <MuiLink component={Link} href="/about" color="inherit" underline="none" sx={{ mb: 1 }}>
                About Us
              </MuiLink>
              <MuiLink component={Link} href="/blog" color="inherit" underline="none" sx={{ mb: 1 }}>
                Blog
              </MuiLink>
              <MuiLink component={Link} href="/careers" color="inherit" underline="none" sx={{ mb: 1 }}>
                Careers
              </MuiLink>
              <MuiLink component={Link} href="/contact" color="inherit" underline="none" sx={{ mb: 1 }}>
                Contact
              </MuiLink>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Stack>
              <MuiLink component={Link} href="/help" color="inherit" underline="none" sx={{ mb: 1 }}>
                Help Center
              </MuiLink>
              <MuiLink component={Link} href="/terms" color="inherit" underline="none" sx={{ mb: 1 }}>
                Terms of Service
              </MuiLink>
              <MuiLink component={Link} href="/privacy" color="inherit" underline="none" sx={{ mb: 1 }}>
                Privacy Policy
              </MuiLink>
              <MuiLink component={Link} href="/faq" color="inherit" underline="none" sx={{ mb: 1 }}>
                FAQ
              </MuiLink>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Stack>
              <MuiLink component={Link} href="/resources/studios" color="inherit" underline="none" sx={{ mb: 1 }}>
                Studios
              </MuiLink>
              <MuiLink component={Link} href="/resources/gear" color="inherit" underline="none" sx={{ mb: 1 }}>
                Gear Reviews
              </MuiLink>
              <MuiLink component={Link} href="/resources/tips" color="inherit" underline="none" sx={{ mb: 1 }}>
                Recording Tips
              </MuiLink>
              <MuiLink component={Link} href="/resources/guides" color="inherit" underline="none" sx={{ mb: 1 }}>
                Session Guides
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>

        <Box mt={5} pt={3} borderTop={1} borderColor="rgba(255,255,255,0.1)" textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Session Musician Coordinator. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;