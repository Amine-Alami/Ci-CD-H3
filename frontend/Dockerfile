# Create image based on the official Node image from dockerhub
FROM node:17 as build

# Create app directory
#WORKDIR /usr/src/app
WORKDIR /hitema

# Copy dependency definitions
#COPY package.json /usr/src/app
COPY package.json package-lock.json ./
#COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . ./

# Serve the app
RUN npm run build

# ngnix
FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /hitema/build/ .