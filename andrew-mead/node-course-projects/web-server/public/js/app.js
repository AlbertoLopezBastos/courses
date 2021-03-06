const weatherForm = document.querySelector('#weatherForm');
const geoLocationForm = document.querySelector('#geoLocationForm');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

const fetchData = (address) => {
    fetch(`http://localhost:3000/weather?address=${address}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.error);
            if (data.error) {
                return messageOne.textContent = data.error;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        });
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = "Loading..."
    messageTwo.textContent = "";

    fetchData(location);
});

geoLocationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = 'asd';

    messageOne.textContent = "Loading..."
    messageTwo.textContent = "";

    fetchData(location);
});
