FROM node:alpine as builder

RUN apk update && apk add ca-certificates && update-ca-certificates
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules
COPY . .

EXPOSE 3001

CMD ["npm", "start"]
