FROM node:0.12.4
MAINTAINER Carl Winkler
COPY . /designco
RUN cd /designco; npm install;
CMD ["node","--harmony", "/designco/src/index.js"]
