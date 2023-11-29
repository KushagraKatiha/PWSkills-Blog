// Taking user input from the web page 
const searchField = document.querySelector(".search")
const searchButton = document.querySelector(".searchButton")
const movieCard = document.querySelector(".movieCard")
const movieBox = document.querySelector(".movies")
// Event listener for the search button

searchButton.addEventListener("click", async (e) => {
    e.preventDefault()
    let searchValue = searchField.value
    if(searchValue == ""){
        return
    }
    console.log(searchValue);

    let movieDetails = await movieData(searchValue)
    console.log(movieDetails);

    searchField.value = ""

    // Setting data from the API to the movie card
    if(movieDetails.Response == "False"){
        if(document.querySelector('.searchHeading')){
            document.querySelector('.searchHeading').style.display = "none"}
        movieBox.innerHTML = `<h2 class="noMovieAlert">No Movie Found !!<h2>`
    }else{
        if(document.querySelector('.searchHeading')){
        document.querySelector('.searchHeading').style.display = "none"}
        if(document.querySelector('.noMovieAlert')){
        document.querySelector('.noMovieAlert').style.display = "none"}
        
        movieBox.innerHTML += `
        <div class="movieCard">
            <img src="${movieDetails.Poster}" alt="Movie Poster">
            <h3 class="movieTitle">${movieDetails.Title}</h3>
            <button class="cardBtn">Watch Now</button>
        </div>
        `
    }
})

// Function to fetch the movie data from the API

async function movieData (searchValue){
    let movieName = searchValue.split(" ").join("+")
    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=7b42929a`)
        const data = await response.json()
        return data
    } catch (err) {
        return "Movie Not Found"
    }
}
