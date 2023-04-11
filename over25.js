import fs from 'fs';

const getKodersOver25 = () => {
    let data = {};
    fs.readFile('koders.json', (error, content) => {
        if (error) throw error;
        data = JSON.parse(content);
        data["koders"].forEach(koder => {
            if (koder.Age > 25) {
                console.log(koder)
            }
        });
    });
};

getKodersOver25();