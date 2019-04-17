# D. K. Stough
# Build a docker container for the server 
#
# docker build -t dstough/fullstory-challenge .
# docker run --rm --env-file=.env -p 8080:3000 dstough/fullstory-challenge

################
# Builder Stage
################
FROM node:10-alpine as builder

WORKDIR /project
COPY . .

RUN npm install && \
    npm run build


################
# Prod Stage
################
FROM node:10-alpine as prod 

WORKDIR /project
COPY --from=builder /project/src/server/ .
COPY --from=builder /project/package.json .

# Install tini, which will let node respond to process signals
RUN apk add --no-cache tini
RUN npm install --production

# USER node 

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "server.js"]