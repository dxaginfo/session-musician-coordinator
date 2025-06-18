FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Expose the port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]
