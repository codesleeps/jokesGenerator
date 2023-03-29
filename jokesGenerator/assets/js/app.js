// ==============JOKE API===============
// Joke Generator
// make variable to target button
const btnEl = document.getElementById('btn');
// make variable to target joke paragraph element
const jokeEl = document.getElementById('joke');
// make variable to access apiKey
const apiKey = 'jhUHdO7cTLGkKQpCIWoDKw==wM4Sq74ZJwErXFLJ';
// make variable to control apiKey
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': apiKey,
	},
};
// demo api url
const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1';
// getJoke function with async/await, fetch, try n catch methods
async function getJoke() {
	try {
    // display while waiting for api call
		jokeEl.innerText = '🤖🤖🤖';
    // disable button while waiting for api call
		btnEl.disabled = true;
    // message while waiting for api call
		btnEl.innerText = 'loading...';
    // get data from apiURL and display message 
		const response = await fetch(apiURL, options);
    // data to json format
		const data = await response.json();
    // turn on button 
		btnEl.disabled = false;
    // display message
		btnEl.innerText = 'Tell Me A Joke';
		jokeEl.innerText = data[0].joke;
	} catch (error) {
		jokeEl.innerText = 'no internet connection 😬';
		console.log(error);
	}
}
btnEl.addEventListener('click', getJoke);
