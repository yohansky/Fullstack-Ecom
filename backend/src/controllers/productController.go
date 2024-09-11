package controllers

import (
	"be-ecom/src/configs"
	"be-ecom/src/models"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func AllProducts(c *fiber.Ctx) error {
	var products []models.Product

	configs.DB.Find(&products)

	return c.JSON(products)
}

func CreateProducts(c *fiber.Ctx) error {
	var product models.Product

	if err := c.BodyParser(&product); err != nil {
		return err
	}

	configs.DB.Create(&product)

	return c.JSON(product)
}

func GetProduct(c *fiber.Ctx) error {
	var product models.Product

	id, _ := strconv.Atoi(c.Params("id"))

	product.Id = uint(id)

	configs.DB.Find(&product)

	return c.JSON(product)
}

func UpdateProducts(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	var product models.Product

	product.Id = uint(id)

	if err := c.BodyParser(&product); err != nil {
		return err
	}

	configs.DB.Model(&product).Updates(&product)

	return c.JSON(product)
}

func DeleteProducts(c *fiber.Ctx) error {
	var product models.Product

	id, _ := strconv.Atoi(c.Params("id"))

	product.Id = uint(id)

	configs.DB.Delete(&product)

	return c.JSON(fiber.Map{
		"Message": "Delete Complete",
	})
}
