package routes

import (
	"be-ecom/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func Router(app *fiber.App) {
	app.Get("/products", controllers.AllProducts)
	app.Get("/product/:id", controllers.GetProduct)
	app.Post("/products", controllers.CreateProducts)
	app.Put("/product/:id", controllers.UpdateProducts)
	app.Delete("/product/:id", controllers.DeleteProducts)
}
