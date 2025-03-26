# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose the port (e.g., 8000 for user service)
EXPOSE 8000

# Start the app
CMD ["node", "index.js"]
