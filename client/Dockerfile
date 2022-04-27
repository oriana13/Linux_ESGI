FROM alpine:3.15.4

# ADD ./ /home/client

RUN apk add --update nodejs npm

WORKDIR /home/client

RUN npm install express path

# RUN node index.js