import fs from 'fs';

const editKoderById = (id) => {
  let data = {};
  fs.readFile('koders.json', (error, content) => {
    if (error) throw error;
    data = JSON.parse(content);
    data["koders"].forEach((koder, index) => {
      if (id === koder.id) {
        let editedKoder = {
          ...koder,
          "favoriteFood": "Hamburguesas"
        };
        data["koders"].splice(index, 1, editedKoder);
      }
    });
    fs.writeFile('koders.json', JSON.stringify(data, null, '  '), (error) => {
      if (error) throw error;
      console.log('Koder editado');
    });
  })
};

editKoderById(65)