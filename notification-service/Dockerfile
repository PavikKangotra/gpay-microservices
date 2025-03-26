# 1️⃣ Use Node.js as the base image
FROM node:18

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy the entire payment-service project
COPY . .

# 6️⃣ Expose the port used by the service (change if needed)
EXPOSE 9000

# 7️⃣ Start the application
CMD ["node", "index.js"]
