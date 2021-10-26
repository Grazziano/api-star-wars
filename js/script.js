function getAPI() {
    const url = 'https://swapi.dev/api/people';
    fetch(url)
        .then((response) => response.json())
        .then((data) => getCharacterData(data.results));
}
// getAPI();
console.log(getAPI());

// name - gender - hair_color
function getCharacterData(arrayResults) {
    arrayResults.forEach(({ name, gender, hair_color }) => {
        // console.log(`${name} - ${gender} - ${hair_color}`);
        const phrase = `${name} - ${gender} - ${hair_color}`;
        printData(phrase);
    });
}

function printData(params) {
    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = params;
    list.appendChild(li);
    saveLocalStorage(list.innerHTML);
}

function saveLocalStorage(params) {
    localStorage.setItem('data', params)
}