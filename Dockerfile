# Set the base image to Node
FROM node:16

# Set the work directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN yarn install 

# Copy all files
COPY . .

# Build the project
RUN yarn build

# Expose the port the app will run on
EXPOSE 3002

# Command to run the application
CMD ["yarn", "start"]
