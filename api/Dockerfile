FROM node:alpine
WORKDIR /api
COPY ./package.json package.json
COPY . .
RUN yarn global add sequelize-cli
RUN yarn
CMD ["yarn", "dev"]
EXPOSE 3001