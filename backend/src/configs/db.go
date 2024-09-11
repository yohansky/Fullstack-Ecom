package configs

import (
	"be-ecom/src/models"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	url := os.Getenv("URL")
	var err error

	DB, err = gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		panic("Failed connect to Databas")
	}
}

func AutoMigrate() {
	DB.AutoMigrate(models.Product{})
}
