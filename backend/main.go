package main

import (
	"be-ecom/src/configs"
	"be-ecom/src/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/subosito/gotenv"
)

func main() {
	gotenv.Load()
	configs.Connect()
	configs.AutoMigrate()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOrigins:     "http://localhost:3001",
		AllowMethods:     "GET,POST,PUT,DELETE",
	}))

	routes.Router(app)

	app.Listen(":8080")
}
