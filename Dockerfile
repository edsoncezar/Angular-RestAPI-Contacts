### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:9-alpine as builder


COPY package.json package-lock.json ./


## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i -g npm@6.3 && npm ci && mkdir /angular-crud && mv ./node_modules ./angular-crud/

## Move to /ng-app (eq: cd /ng-app)
WORKDIR /angular-crud


# Copy everything from host to /ng-app in the container
COPY . .

ARG NG_ENV=production
RUN npm run ng build -- --configuration=$NG_ENV
RUN npm run ng serve
