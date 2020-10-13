const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const yargs = require('yargs');


yargs.command(
    {
        command: 'search',
        describe: 'this is the address to search',
        builder: {
            address: {
                describe: 'address',
                demand: true,
                type: 'string',
            }
        },
        handler: ({ address }) => {
            if (address === '') {
                return console.log('Please provide an address');
            }
            geocode(address, (error, response) => {
                if (error) {
                    return console.log(`Error: ${error}`);
                }
                forecast(response, (error, response) => {
                    if (error) {
                        return console.log(`Error: ${error}`);
                    }
                    console.log(response);

                });
            });
        }
    }
);

yargs.parse();