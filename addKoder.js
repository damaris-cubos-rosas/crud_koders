import fs from 'fs';

const koder = {
    "id": Math.round(Math.random() * 100),
    "name": "Giovanni",
    "lastName": "Maldonado",
    "Age": "39",
    "favoriteFood": "Picadillo"
};

let data = {};
fs.readFile('koders.json', (error, content) => {
    if(error) throw error;
    data = JSON.parse(content);
    data["koders"].push(koder);
    fs.writeFile('koders.json', JSON.stringify(data, null, ' '), (error) =>{
        if(error) throw error;
        console.log('Koder agregado');
    })
});

