FROM golang:1.22.6

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# tidak memakai expose karena sudah ada ports di docker-compose.yml

# ini juga bisa ditaruh di docker-cpmpose dengan "commands: air"
CMD ["air","-c",".air.toml"]
# CMD ["air"]