FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g typescript
RUN npm install -g concurrently
RUN npm install --legacy-peer-deps
COPY . .