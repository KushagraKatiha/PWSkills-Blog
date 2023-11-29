let movieData = () => {
    fetch("http://www.omdbapi.com/?t=Batman&apikey=7b42929a")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

movieData()