package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.GET("/hello", handleHelloRequest)
	e.GET("/", handleDefaultRequest)

	e.Logger.Fatal(e.Start(":3001"))
}

func handleHelloRequest(c echo.Context) error {
	responseData := map[string]string{"message": "Hello, world!"}
	return c.JSON(http.StatusOK, responseData)
}

func handleDefaultRequest(c echo.Context) error {
	responseData := map[string]string{"message": "OK"}
	return c.JSON(http.StatusOK, responseData)
}
