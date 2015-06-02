FROM node:0.12.4
MAINTAINER Carl Winkler
COPY . /designco
RUN  tar -xzf designco/kafka.tgz;
RUN apt-get install screen
RUN cd /designco; npm install;

# designco web server
RUN screen -S designco -d -m
RUN screen -r designco -X stuff 'node --harmony /designco/src/index.js\n'

#kafka server
RUN screen -S kafka -d -m
RUN screen -r designco 
# CMD ["node","--harmony", "/designco/src/index.js"]
