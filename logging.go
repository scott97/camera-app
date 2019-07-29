package main


import (
	"fmt"
)

func logRequest(url string, method string) {
	fmt.Println(url,"("+method+")")
}