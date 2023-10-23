FROM ubuntu:latest
RUN apt update
WORKDIR /app
COPY build/index.js ./app

FROM node:slim
RUN adduser ww && su ww
COPY --from=0 /app ./
CMD node app
