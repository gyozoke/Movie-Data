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



// The Darjeeling Limited Data
// I assign the The Darjeeling Limited Plot data from the movieData object into a variabe
// And I will continue to do that with all the other elements Cast, Runtime, Rating, Year
let darjeeling_plot = movieData['The Darjeeling Limited']['plot'];
// With this line of code I get and ID of my variable that I will be able to use
// in my HTML file, so I can make the data visible exactly where I want it on the screen
	document.getElementById('darjeelingplot').innerHTML = darjeeling_plot;

let darjeeling_cast = movieData['The Darjeeling Limited']['cast'];
// Here In oreder to present the data of the cast as list on the screen I turn it into a list
// In order to that first I turn the javascript object (in this case the cast object)
// into an array with the Object.values()
	let darjeelingcastList = Object.values(darjeeling_cast);
//Then I get the ID for my list that I can use in my HTML file
	let darjeelinglist = document.getElementById("darjeelingcast");
// This is the code that turnes my array into a list
	darjeelingcastList.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		darjeelinglist.appendChild(li);
	});

let darjeeling_runtime = movieData['The Darjeeling Limited']['runtime'];
	document.getElementById('darjeelingruntime').innerHTML = darjeeling_runtime;

let darjeeling_rating = movieData['The Darjeeling Limited']['rating'];
	document.getElementById('darjeelingrating').innerHTML = darjeeling_rating;

let darjeeling_year = movieData['The Darjeeling Limited']['year'];
	document.getElementById('darjeelingyear').innerHTML = darjeeling_year;




// The Royal Tenenbaums Data	
let royal_plot = movieData['The Royal Tenenbaums']['plot'];
	document.getElementById('royalplot').innerHTML = royal_plot;

let royal_cast = movieData['The Royal Tenenbaums']['cast'];
	let royalcastList = Object.values(royal_cast);
	let royallist = document.getElementById("royalcast");
	royalcastList.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		royallist.appendChild(li);
	});

let royal_runtime = movieData['The Royal Tenenbaums']['runtime'];
	document.getElementById('royalruntime').innerHTML = royal_runtime;

let royal_rating = movieData['The Royal Tenenbaums']['rating'];
	document.getElementById('royalrating').innerHTML = royal_rating;

let royal_year = movieData['The Royal Tenenbaums']['year'];
	document.getElementById('royalyear').innerHTML = royal_year;




// Fantastaic Mr. Fox Data
let fox_plot = movieData['Fantastic Mr. Fox']['plot'];
	document.getElementById('foxplot').innerHTML = fox_plot;

let fox_cast = movieData['Fantastic Mr. Fox']['cast'];
	let foxcastList = Object.values(fox_cast);
	let foxlist = document.getElementById("foxcast");
	foxcastList.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		foxlist.appendChild(li);
	});

let fox_runtime = movieData['Fantastic Mr. Fox']['runtime'];
	document.getElementById('foxruntime').innerHTML = fox_runtime;

let fox_rating = movieData['Fantastic Mr. Fox']['rating'];
	document.getElementById('foxrating').innerHTML = fox_rating;

let fox_year = movieData['Fantastic Mr. Fox']['year'];
	document.getElementById('foxyear').innerHTML = fox_year;




// The Grand Budapest Hotel Data
let hotel_plot = movieData['The Grand Budapest Hotel']['plot'];
	document.getElementById('hotelplot').innerHTML = hotel_plot;

let hotel_cast = movieData['The Grand Budapest Hotel']['cast'];
	let hotelcastList = Object.values(hotel_cast);
	let hotellist = document.getElementById("hotelcast");
	hotelcastList.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		hotellist.appendChild(li);
	});

let hotel_runtime = movieData['The Grand Budapest Hotel']['runtime'];
	document.getElementById('hotelruntime').innerHTML = hotel_runtime;

let hotel_rating = movieData['The Grand Budapest Hotel']['rating'];
	document.getElementById('hotelrating').innerHTML = hotel_rating;

let hotel_year = movieData['The Grand Budapest Hotel']['year'];
	document.getElementById('hotelyear').innerHTML = hotel_year;