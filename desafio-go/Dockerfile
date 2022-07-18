FROM golang:1.16 as origin

WORKDIR /usr/src/app

RUN go mod init exercise/fc

COPY ./main.go /usr/src/app

RUN go build 

FROM scratch

WORKDIR /usr/src/app

COPY --from=origin /usr/src/app/fc .

CMD ["./fc"]