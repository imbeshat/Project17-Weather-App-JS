// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
	event.preventDefault();
	if (!inputBox.value) {
		alert("Please Enter The City Name: ");
		return;
	}

	//
	const city = inputBox.value;
	const api = "3f74759b39204d82847110059231102";
	// Fetch Details

	const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`);

	const orgData = await fetchData.json();
	data = orgData;
	console.log(data);
	displayWeather(data);
	setBackgroundImage();

	// Displaying the data in HTML

	console.log(weatherStatus.innerHTML);
};

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
