FROM golang:alpine

WORKDIR /app

COPY . .

RUN go build -o main .

EXPOSE 3001

CMD ["./main"]
