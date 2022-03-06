document.addEventListener("DOMContentLoaded", function(event) {
    fetch("https://api.nasa.gov/planetary/apod?api_key=7l6USJJeCaSnkPLvHrVUAsKhFf4FBKt6GtB3HXyS")
    .then(response => response.json())
    .then(planet => {
        document.getElementById("title")
        .innerHTML = planet.title;
        document.getElementById("image")
        .src = planet.url;
        document.getElementById("description")
        .innerHTML = planet.explanation;
        console.log(planet);
    })
    .catch(error => console.log(error));
})