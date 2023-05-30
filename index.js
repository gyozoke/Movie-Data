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



const sort_title_btn = document.querySelector('.sort-title');

let desc = false;
sort_title_btn.addEventListener('click', () => {
    let array = sort_array_by(movieDataArray, 'movie.title', desc());
    displayList(array);

    desc = !desc;
});

function sort_array_by(array, sort, desc) {
    array.sort(function (a, b) {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
    });

    if (desc) array.reverse();

    return array;
};