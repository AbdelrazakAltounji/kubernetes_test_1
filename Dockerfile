# FROM node:lts-alpine as builder
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm install
# COPY . .
# RUN BROWSER=chrome SELENIUM_HUB=http://localhost:4444/wd/hub npm run test tests/google

FROM openjdk:14-alpine as generator
WORKDIR /tmp
COPY /allure-results/* results/

RUN apk add curl tar gzip \
    && curl -L https://bintray.com/qameta/maven/download_file?file_path=io%2Fqameta%2Fallure%2Fallure-commandline%2F2.13.4%2Fallure-commandline-2.13.4.tgz | tar xvz \
    && allure-2.13.4/bin/allure generate results/ -o reports-with-history-data/ 


FROM nginx:1.19.0-alpine as server
COPY --from=generator /tmp/reports-with-history-data/ /usr/share/nginx/html/