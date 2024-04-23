FROM node:slim
WORKDIR /tskmgr
COPY . /tskmgr
RUN npm install
EXPOSE 3000
EXPOSE 27017
CMD node app.js