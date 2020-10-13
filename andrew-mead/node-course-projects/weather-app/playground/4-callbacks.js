setTimeout(() => {
    console.log('Two seconds are up');
}, 2000);


const names = ['Betorto', 'Kiwi', 'Pepe'];
const shortName = names.filter((name) => name.length <= 4);


const geoCode = (address, callback) => {

    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000);

}

geoCode('philadelphia', (data) => console.log(data));


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
};

add(1, 5, (result) => {
    console.log(result);
})



