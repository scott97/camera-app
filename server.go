package main

/*
import (
    "log"
	"net/http"
)

func serveSettings(w http.ResponseWriter, req *http.Request)  {
	
}

func updateSettings(w http.ResponseWriter, req *http.Request)  {
	
}


func StartWebServer() {

	// Static directory
	http.Handle("/", http.FileServer(http.Dir("./server/public")))
	
	// API 
	http.HandleFunc("/api/settings",func (w http.ResponseWriter, req *http.Request) {
		switch req.Method {
			case "GET":
				logRequest("/api/settings","GET")
				serveSettings(w,req)
			case "POST":
				logRequest("/api/settings","POST")
				updateSettings(w,req)
		}
	})

	// Images
	http.HandleFunc("/images",func (w http.ResponseWriter, req *http.Request) {
    
	})

	// Start Server
	log.Fatal(http.ListenAndServe(":80", nil))

}
*/