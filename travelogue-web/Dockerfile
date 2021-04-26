FROM node:latest
WORKDIR /usr/app
RUN npm i -g typescript
RUN npm install -g concurrently
RUN npm install --legacy-peer-deps
COPY . .