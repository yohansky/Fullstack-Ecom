package configs

import (
	"be-ecom/src/models"
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	url := os.Getenv("URL")
	var err error

	DB, err = gorm.Open(postgres.Open(url), &gorm.Config{})
	// DB, err = gorm.Open(postgres.Open("postgres://postgres:root@db:5432/postgres?sslmode=disable"), &gorm.Config{})
	if err != nil {
		panic("Failed connect to Databas")
	} else {
		fmt.Printf("Connect to database")
	}
}

func AutoMigrate() {
	DB.AutoMigrate(models.Product{})
}
