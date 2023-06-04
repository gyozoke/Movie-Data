let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').innerHTML = today;


let movieData = {
	"The Darjeeling Limited": {
	  plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
	  cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
	  runtime: 151,
	  rating: 7.2,
	  year: 2007,
	},
	"The Royal Tenenbaums": {
	  plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
	  rating: 7.6,
	  year: 2001,
	  cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
	  runtime: 170,
	},
	"Fantastic Mr. Fox": {
	  year: 2009,
	  plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
	  cast: [
		"George Clooney",
		"Meryl Streep",
		"Bill Murray",
		"Jason Schwartzman",
	  ],
	  runtime: 147,
	  rating: 7.9,
	},
	"The Grand Budapest Hotel": {
	  rating: 8.1,
	  runtime: 159,
	  year: 2014,
	  plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
	  cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
	},
  };

  
//Render the Data on the webpage
//Create a movieData array
var movieDataArray = Object.keys(movieData).map(key => {
    let movieArray = movieData[key];
    movieArray.title = key
    return movieArray;
});

//Iterate through the movie data array and create a card for each movie
  movieDataArray.forEach((movie) => {
    // Construct card
    const content = `
    <div class="card">
    	<div class="card-header">
      	<h2>${movie.title}</h3>
      </div>
      <div class="card-body">
        <h3>Plot</h3>
        <p>${movie.plot}</p>
        <h3>Cast</h3>
        <p>${movie.cast.join(', ')}</p>
        <h3>Rating</h3>
        <p>${movie.rating}</p>
        <h3>Runtime</h3>
        <p>${movie.runtime}</p>
        <h3>Year</h3>
        <p>${movie.year}</p>
      </div>
    </div>
    `;
    // Append newyly created card element to the container
    container.innerHTML += content;
  });
  

//sort the movieDataArray by title in both ascending and descending order using a single button
//First, you need to define a variable to keep track of
//the current sorting order. Let's call it ascending and set it to true initially.
let ascending = true;

//Then we can add an event listener to the button that will trigger
//the sorting function when clicked. Inside the event listener,
//you can use the sort() method to sort the movieDataArray based on the title property.
const sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", () => {
  movieDataArray.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return ascending ? -1 : 1;
    if (titleA > titleB) return ascending ? 1 : -1;
    return 0;
  });

  ascending = !ascending; // Toggle the sorting order

  // Update the movie list in the container
  updateMovieList();
});

//Finally, you can create a separate function, updateMovieList(),
//that will update the HTML content of the container with the sorted movie list.
function updateMovieList() {
  container.innerHTML = ""; // Clear the container

  movieDataArray.forEach((movie) => {
    const content = `
    <div class="card">
      <div class="card-header">
        <h2>${movie.title}</h2>
      </div>
      <div class="card-body">
        <h3>Plot</h3>
        <p>${movie.plot}</p>
        <h3>Cast</h3>
        <p>${movie.cast.join(", ")}</p>
        <h3>Rating</h3>
        <p>${movie.rating}</p>
        <h3>Runtime</h3>
        <p>${movie.runtime}</p>
        <h3>Year</h3>
        <p>${movie.year}</p>
      </div>
    </div>
    `;
    container.innerHTML += content;
  });
}


//Create new movie
  document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const title = document.getElementById('titleInput').value;
    const plot = document.getElementById('plotInput').value;
    const cast = document.getElementById('castInput').value.split(', ');
    const rating = parseFloat(document.getElementById('ratingInput').value);
    const runtime = document.getElementById('runtimeInput').value;
    const year = parseInt(document.getElementById('yearInput').value);
  
    // Create new movie object
    const newMovie = {
      title: title,
      plot: plot,
      cast: cast,
      rating: rating,
      runtime: runtime,
      year: year
    };
  
    // Push new movie object to movieDataArray
    movieDataArray.push(newMovie);
  
    // Reset form fields
    document.getElementById('movieForm').reset();
  
    // Call function to update the movie cards on the page
    updateMovieCards();
  });
  

  function updateMovieCards() {
    const newContainer = document.getElementById('container');
    newContainer.innerHTML = ''; // Clear previous movie cards
  
    movieDataArray.forEach((movie) => {
      const content = `
        <div class="card">
          <div class="card-header">
            <h2>${movie.title}</h2>
          </div>
          <div class="card-body">
            <h3>Plot</h3>
            <p>${movie.plot}</p>
            <h3>Cast</h3>
            <p>${movie.cast.join(", ")}</p>
            <h3>Rating</h3>
            <p>${movie.rating}</p>
            <h3>Runtime</h3>
            <p>${movie.runtime}</p>
            <h3>Year</h3>
            <p>${movie.year}</p>
          </div>
        </div>
      `;
      newContainer.innerHTML += content;
    });
  }
  