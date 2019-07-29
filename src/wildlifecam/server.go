package wildlifecam

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/zenazn/goji"
)

func StartWebServer() {

	// Settings
	// Gets settings.json
	goji.Get("/api/settings", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./settings.json")
	})
	// Update settings.json
	goji.Post("/api/settings", func(w http.ResponseWriter, r *http.Request) {
		// Get json from body
		var data = new(bytes.Buffer)
		data.ReadFrom(r.Body)
		var str = data.String()

		// Write to file
		ioutil.WriteFile("./settings.json", []byte(str), 0)
	})

	// Images
	// Gets a list of all the images
	goji.Get("/api/images/list", func(w http.ResponseWriter, r *http.Request) {
		var files = listAllFiles()
		var json, _ = json.Marshal(files)
		io.WriteString(w, string(json))
	})
	// Gets a zip file of all the images
	goji.Get("/api/images/all", func(w http.ResponseWriter, r *http.Request) {
		const filename = "./pictures.zip"
		zipFiles(filename)
		http.ServeFile(w, r, filename)
	})
	// Deletes all the images
	goji.Delete("/api/images/all", func(w http.ResponseWriter, r *http.Request) {
		deleteAllImages("./images")
	})
	// Gets a single image
	goji.Get("/api/images/*", http.StripPrefix("/api/images/", http.FileServer(http.Dir("./images"))))

	// Static
	goji.Handle("/*", http.FileServer(http.Dir("./static")))

	// 404 Errors
	goji.NotFound(func(w http.ResponseWriter, r *http.Request) {
		http.Error(w, "Page could not be found", 404)
	})

	goji.Serve()
}
