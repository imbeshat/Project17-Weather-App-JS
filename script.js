// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;
let forecastData;

// DOM selection for weather details
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

//DOM selection for forecast data

const getData = async (event) => {
	event.preventDefault();
	if (!inputBox.value) {
		alert("Please Enter The City Name: ");
		return;
	}

	const city = inputBox.value;
	const api = "3f74759b39204d82847110059231102";

	// Fetch Details
	const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`);
	const orgData = await fetchData.json();
	data = orgData;
	// console.log(data);
	displayWeather(data);
	setBackgroundImage();

	// Displaying the data in HTML

	// console.log(weatherStatus.innerHTML);
	const fetchForecastData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${city}&days=14`);
	const forecastFetchedData = await fetchForecastData.json();
	forecastData = forecastFetchedData;

	console.log(forecastData);
	displayForecast(forecastData);
};

// Function to get weather and display
function displayWeather() {
	countryName.innerHTML = data.location.country;
	stateName.innerHTML = data.location.region;
	cityName.innerHTML = data.location.name;
	humidity.innerHTML = data.current.humidity;
	windSpeed.innerHTML = data.current.wind_kph;
	temprature.innerHTML = data.current.temp_c;
	logoImage.src = data.current.condition.icon;
	weatherStatus.innerHTML = data.current.condition.text;
}

async function setBackgroundImage() {
	const lowercaseCondition = data.current.condition.text.toLowerCase();
	console.log(lowercaseCondition);
	const responseMist = await fetch(
		"https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseClear = await fetch(
		"https://images.unsplash.com/photo-1650980331974-b6268d3be45f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseSunny = await fetch(
		"https://images.unsplash.com/photo-1650980331974-b6268d3be45f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseOvercast = await fetch(
		"https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseCloudy = await fetch(
		"https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseFog = await fetch(
		"https://images.unsplash.com/photo-1524252500348-1bb07b83f3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseRain = await fetch(
		"https://images.unsplash.com/photo-1599926720612-9c4774375a9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseSnow = await fetch(
		"https://images.unsplash.com/photo-1635972904366-3fb9ac369ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseSleet = await fetch(
		"https://images.unsplash.com/photo-1567132801257-c956f7f99872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseDrizzle = await fetch(
		"https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseThunder = await fetch(
		"https://images.unsplash.com/photo-1599070221195-bf2801877d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseBlizzard = await fetch(
		"https://images.unsplash.com/photo-1599070221195-bf2801877d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseIce = await fetch(
		"https://images.unsplash.com/photo-1515606174663-ad8323c6895e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	const responseDefault = await fetch(
		"https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
	);
	let imageUrl;
	if (lowercaseCondition.includes("mist")) {
		imageUrl = URL.createObjectURL(await responseMist.blob());
	} else if (lowercaseCondition.includes("clear")) {
		imageUrl = URL.createObjectURL(await responseClear.blob());
	} else if (lowercaseCondition.includes("sunny")) {
		imageUrl = URL.createObjectURL(await responseClear.blob());
	} else if (lowercaseCondition.includes("overcast")) {
		imageUrl = URL.createObjectURL(await responseOvercast.blob());
	} else if (lowercaseCondition.includes("cloudy")) {
		imageUrl = URL.createObjectURL(await responseCloudy.blob());
	} else if (lowercaseCondition.includes("fog")) {
		imageUrl = URL.createObjectURL(await responseFog.blob());
	} else if (lowercaseCondition.includes("rain")) {
		imageUrl = URL.createObjectURL(await responseRain.blob());
	} else if (lowercaseCondition.includes("snow")) {
		imageUrl = URL.createObjectURL(await responseSnow.blob());
	} else if (lowercaseCondition.includes("sleet")) {
		imageUrl = URL.createObjectURL(await responseSleet.blob());
	} else if (lowercaseCondition.includes("drizzle")) {
		imageUrl = URL.createObjectURL(await responseDrizzle.blob());
	} else if (lowercaseCondition.includes("thunder")) {
		imageUrl = URL.createObjectURL(await responseThunder.blob());
	} else if (lowercaseCondition.includes("blizzard")) {
		imageUrl = URL.createObjectURL(await responseBlizzard.blob());
	} else if (lowercaseCondition.includes("ice")) {
		imageUrl = URL.createObjectURL(await responseIce.blob());
	} else {
		imageUrl = URL.createObjectURL(await responseDefault.blob());
	}
	document.body.style.backgroundImage = `url(${imageUrl})`;
}

// Function to get forecast data and display
function displayForecast() {
	// for date
	const date1 = document.querySelector(".date1");
	const date2 = document.querySelector(".date2");
	const date3 = document.querySelector(".date3");
	const date4 = document.querySelector(".date4");
	const date5 = document.querySelector(".date5");
	const date6 = document.querySelector(".date6");
	const date7 = document.querySelector(".date7");

	// date.innerHTML = forecastData.forecast.forecastday[3].date;
	// date.forEach((e) => {
	// 	e.innerHTML = forecastData.forecast.forecastday[e].date;
	// });

	date1.innerHTML = forecastData.forecast.forecastday[1].date;
	date2.innerHTML = forecastData.forecast.forecastday[2].date;
	date3.innerHTML = forecastData.forecast.forecastday[3].date;
	date4.innerHTML = forecastData.forecast.forecastday[4].date;
	date5.innerHTML = forecastData.forecast.forecastday[5].date;
	date6.innerHTML = forecastData.forecast.forecastday[6].date;
	date7.innerHTML = forecastData.forecast.forecastday[7].date;

	// for icon image
	const logoImage1 = document.getElementById("logoImage1");
	const logoImage2 = document.getElementById("logoImage2");
	const logoImage3 = document.getElementById("logoImage3");
	const logoImage4 = document.getElementById("logoImage4");
	const logoImage5 = document.getElementById("logoImage5");
	const logoImage6 = document.getElementById("logoImage6");
	const logoImage7 = document.getElementById("logoImage7");

	logoImage1.src = forecastData.forecast.forecastday[1].day.condition.icon;
	logoImage2.src = forecastData.forecast.forecastday[2].day.condition.icon;
	logoImage3.src = forecastData.forecast.forecastday[3].day.condition.icon;
	logoImage4.src = forecastData.forecast.forecastday[4].day.condition.icon;
	logoImage5.src = forecastData.forecast.forecastday[5].day.condition.icon;
	logoImage6.src = forecastData.forecast.forecastday[6].day.condition.icon;
	logoImage7.src = forecastData.forecast.forecastday[7].day.condition.icon;

	// for max temperature
	const temprature1 = document.getElementById("temprature1");
	const temprature2 = document.getElementById("temprature2");
	const temprature3 = document.getElementById("temprature3");
	const temprature4 = document.getElementById("temprature4");
	const temprature5 = document.getElementById("temprature5");
	const temprature6 = document.getElementById("temprature6");
	const temprature7 = document.getElementById("temprature7");

	temprature1.innerHTML = forecastData.forecast.forecastday[1].day.maxtemp_c;
	temprature2.innerHTML = forecastData.forecast.forecastday[2].day.maxtemp_c;
	temprature3.innerHTML = forecastData.forecast.forecastday[3].day.maxtemp_c;
	temprature4.innerHTML = forecastData.forecast.forecastday[4].day.maxtemp_c;
	temprature5.innerHTML = forecastData.forecast.forecastday[5].day.maxtemp_c;
	temprature6.innerHTML = forecastData.forecast.forecastday[6].day.maxtemp_c;
	temprature7.innerHTML = forecastData.forecast.forecastday[7].day.maxtemp_c;

	// for min temperature
	const tempratureMin1 = document.getElementById("temprature-min1");
	const tempratureMin2 = document.getElementById("temprature-min2");
	const tempratureMin3 = document.getElementById("temprature-min3");
	const tempratureMin4 = document.getElementById("temprature-min4");
	const tempratureMin5 = document.getElementById("temprature-min5");
	const tempratureMin6 = document.getElementById("temprature-min6");
	const tempratureMin7 = document.getElementById("temprature-min7");

	tempratureMin1.innerHTML = forecastData.forecast.forecastday[1].day.mintemp_c;
	tempratureMin2.innerHTML = forecastData.forecast.forecastday[2].day.mintemp_c;
	tempratureMin3.innerHTML = forecastData.forecast.forecastday[3].day.mintemp_c;
	tempratureMin4.innerHTML = forecastData.forecast.forecastday[4].day.mintemp_c;
	tempratureMin5.innerHTML = forecastData.forecast.forecastday[5].day.mintemp_c;
	tempratureMin6.innerHTML = forecastData.forecast.forecastday[6].day.mintemp_c;
	tempratureMin7.innerHTML = forecastData.forecast.forecastday[7].day.mintemp_c;

	// for weather condition
	const weatherStatus1 = document.getElementById("weatherStatus1");
	const weatherStatus2 = document.getElementById("weatherStatus2");
	const weatherStatus3 = document.getElementById("weatherStatus3");
	const weatherStatus4 = document.getElementById("weatherStatus4");
	const weatherStatus5 = document.getElementById("weatherStatus5");
	const weatherStatus6 = document.getElementById("weatherStatus6");
	const weatherStatus7 = document.getElementById("weatherStatus7");

	weatherStatus1.innerHTML = forecastData.forecast.forecastday[1].day.condition.text;
	weatherStatus2.innerHTML = forecastData.forecast.forecastday[2].day.condition.text;
	weatherStatus3.innerHTML = forecastData.forecast.forecastday[3].day.condition.text;
	weatherStatus4.innerHTML = forecastData.forecast.forecastday[4].day.condition.text;
	weatherStatus5.innerHTML = forecastData.forecast.forecastday[5].day.condition.text;
	weatherStatus6.innerHTML = forecastData.forecast.forecastday[6].day.condition.text;
	weatherStatus7.innerHTML = forecastData.forecast.forecastday[7].day.condition.text;
	console.log(date1.innerHTML);
}
