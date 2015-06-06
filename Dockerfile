FROM node:latest

# install app and dependencies
COPY . /designco
RUN cd /designco \
	&& npm install
	
# run web-server
WORKDIR /designco
CMD ["node","src/index"]