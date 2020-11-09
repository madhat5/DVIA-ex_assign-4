// console.log('sim sim salabim');
// "use strict"

/*
- convert csv to json
- loop through each item
    - "B17003_018E": "Estimate!!Total:!!Income in the past 12 months at or above poverty level:!!Male:!!Bachelor's degree or higher",
    - "B17003_023E": "Estimate!!Total:!!Income in the past 12 months at or above poverty level:!!Female:!!Bachelor's degree or higher",
- calc absolute diff btw edu male vs female, > poverty
- push to new array: state, eduDiff
*/

// let csvToJson = require('convert-csv-to-json');
// // const csv = require('csvtojson')

// let fileInputName = '../data/ACSDT1Y2019.B17003_data_with_overlays_2020-11-08T221345.csv'; 
// let fileOutputName = '../data/cleanData.json';

// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

const fs = require('fs');
let rawData = require('../data/rawData.json');

// Data model
let dataModel = [{
    state: "NY",
    maleSalary: 1234,
    femaleSalary: 1234,
    diffSalary: 1234
}];

let cleanData = []

rawData.forEach((el, i) => {
    // console.log(i)
    // console.log(el.NAME)
    // console.log("maleSal: ")
    // console.log(el.B17003_018E)
    // console.log("femaleSal: ")
    // console.log(el.B17003_023M)

    // do {
    //     cleanData.push({
    //         state: el.NAME,
    //         maleSalary: el.B17003_018E,
    //         femaleSalary: el.B17003_023M
    //     });
    // }
    // while (i > 0 && i < 53)

    if (i > 0 && i < 53) {
        cleanData.push({
            state: el.NAME,
            maleSalary: el.B17003_018E,
            femaleSalary: el.B17003_023E,
            salarydiff: Math.abs(el.B17003_018E - el.B17003_023E)
        });
    }
});
// console.log(cleanData)

function writeFile(fsName, fsData) {
    fs.writeFileSync('../data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
};
writeFile('cleanData', cleanData);