package main

import (
    "github.com/hoisie/web"
)

func hello(val string) string { 
    return "hello " + val 
} 

func StartWebServer() {
	web.Get("/(.*)", hello)
    web.Run(":80")
}
