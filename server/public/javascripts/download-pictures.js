function fromString(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
}

function LoadPictures() {
    getFromAPI('images/list-all', function(data) {
        grid = document.querySelector('#grid')

        data.forEach(image => {
            var pic = fromString(`
                <div class="column">
                    <a href="../images/${image}">
                        <figure class="image is-128x128">
                            <img src="../images/${image}">
                        </figure>
                    </a>
                </div>
            `)

            grid.appendChild(pic)
        })
    })
}




window.onload = LoadPictures()
