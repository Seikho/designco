FROM node:0.12.4
MAINTAINER Carl Winkler
RUN wget http://mirror.ventraip.net.au/apache/kafka/0.8.2.0/kafka_2.10-0.8.2.0.tgz; tar -xzf kafka_2.10-0.8.2.0.tgz;
RUN sudo apt-get install screen
COPY . /designco
RUN cd /designco; npm install;
CMD ["node","--harmony", "/designco/src/index.js"]
