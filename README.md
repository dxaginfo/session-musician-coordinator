# Session Musician Coordinator

A comprehensive platform that connects musicians with recording needs, providing a marketplace for session musicians to offer their services. The platform facilitates scheduling, communication, payment processing, and project management to streamline the often complex process of finding and working with session musicians.

## Features

### For Musicians
- Create detailed profiles with portfolio, audio/video samples
- Set availability and rates
- Receive secure payments through escrow
- Manage multiple projects simultaneously
- Build reputation through reviews and ratings

### For Clients (Project Owners)
- Search for musicians by instrument, genre, and location
- Communicate project requirements clearly
- Review samples and ratings before hiring
- Process secure payments with milestone releases
- Manage all session collaborations in one place

## Technology Stack

### Frontend
- React.js with Next.js
- Redux for state management
- Material UI components
- Styled Components
- Web Audio API for waveform visualization
- WebRTC for video communication
- Tailwind CSS for responsive design

### Backend
- Node.js with Express
- Socket.io for real-time messaging
- JWT authentication with OAuth
- AWS S3 for file storage

### Database
- PostgreSQL for relational data
- Elasticsearch for advanced search
- Redis for caching

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL (v14+)
- Redis
- Elasticsearch
- AWS account for S3 storage

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/session-musician-coordinator.git
cd session-musician-coordinator
```

2. Install dependencies for backend
```bash
cd backend
npm install
```

3. Install dependencies for frontend
```bash
cd ../frontend
npm install
```

4. Set up environment variables
```bash
# In backend directory
cp .env.example .env
# Edit .env file with your configuration
```

5. Initialize the database
```bash
# In backend directory
npm run db:migrate
npm run db:seed
```

6. Start the development servers
```bash
# In backend directory
npm run dev

# In a new terminal, in frontend directory
npm run dev
```

7. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
session-musician-coordinator/
├── backend/                # Node.js/Express API
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── db/                 # Database migrations and models
│   ├── middleware/         # Express middleware
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── app.js              # Express app setup
│
├── frontend/               # React/Next.js frontend
│   ├── components/         # Reusable components
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Next.js pages
│   ├── public/             # Static assets
│   ├── styles/             # CSS and style files
│   └── utils/              # Utility functions
│
├── shared/                 # Shared code between frontend and backend
│   ├── constants/          # Shared constants
│   ├── types/              # TypeScript type definitions
│   └── validation/         # Validation schemas
│
├── docs/                   # Documentation
├── scripts/                # Build and deployment scripts
├── docker/                 # Docker configuration
├── .github/                # GitHub Actions workflows
└── README.md               # Project documentation
```

## Deployment

### Using Docker
```bash
docker-compose up -d
```

### Manual Deployment
The application can be deployed to AWS using the following services:
- Frontend: AWS Amplify or S3 + CloudFront
- Backend: Elastic Beanstalk or ECS
- Database: RDS for PostgreSQL
- Search: Elasticsearch Service
- Cache: ElastiCache for Redis
- File Storage: S3 + CloudFront

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- [Stripe](https://stripe.com/) for payment processing
- [Socket.io](https://socket.io/) for real-time communication
- [Elasticsearch](https://www.elastic.co/) for search functionality