import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Box, Typography, Container, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(6),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const HomePage: NextPage = () => {
  // Mock feature data
  const features = [
    {
      title: 'Find Session Musicians',
      description: 'Search for the perfect musicians based on instrument, genre, and location.',
      image: '/images/find-musicians.jpg',
    },
    {
      title: 'Secure Bookings',
      description: 'Schedule sessions with confidence using our secure booking and payment system.',
      image: '/images/secure-bookings.jpg',
    },
    {
      title: 'Real-time Collaboration',
      description: 'Communicate, share files, and collaborate seamlessly with your team.',
      image: '/images/collaboration.jpg',
    },
    {
      title: 'Build Your Reputation',
      description: 'Grow your professional network and showcase your skills with verified reviews.',
      image: '/images/reputation.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Session Musician Coordinator | Connect with Professional Musicians</title>
        <meta
          name="description"
          content="Find and hire session musicians for your recording projects. A marketplace for professional musicians and producers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <HeroSection>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" component="h1" gutterBottom>
                  Connect with Professional Musicians
                </Typography>
                <Typography variant="h5" paragraph>
                  Find the perfect session musicians for your recording projects, manage bookings, and collaborate seamlessly.
                </Typography>
                <Box mt={4} display="flex" gap={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    href="/auth/register"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    component={Link}
                    href="/how-it-works"
                  >
                    Learn More
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Hero image would go here */}
              </Grid>
            </Grid>
          </Container>
        </HeroSection>

        <Container>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h2" gutterBottom>
              Simplify Your Music Production
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Our platform connects musicians and producers to make the recording process smooth and efficient.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard>
                  <CardMedia
                    component="div"
                    sx={{ height: 140, backgroundColor: 'grey.300' }}
                    title={feature.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={8} mb={6}>
            <Typography variant="h3" component="h3" gutterBottom>
              Ready to Transform Your Recording Process?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/auth/register"
              sx={{ mt: 2 }}
            >
              Join Now
            </Button>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default HomePage;