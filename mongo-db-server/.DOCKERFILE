FROM node:slim
WORKDIR /tskmgr
COPY . /tskmgr
RUN npm install
EXPOSE 3000
CMD nodemon app.js