# Dockerfile for the drc-jira accounts module

# Use a base image
FROM node:20.11.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
