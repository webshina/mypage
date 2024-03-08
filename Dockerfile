# Use official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# Build the Next.js app
RUN npm run build

# Command to run the Next.js app
CMD ["npm", "start"]
