# Node server
FROM node:10.13-alpine as node-server
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY server.js .
COPY /server /usr/src/app/server

# Final image
FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY --from=node-server /usr/src /usr/src
EXPOSE 7777
CMD ["npm", "start"]
