const decorateWithHealthAttributes = require('./health-attributes')
const {info: logInfo, error: logError} = require("./logger")
logInfo("App Started !!!");

const fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');

const getStream = function () {
    const jsonData = process.env.FILE_NAME,
        stream = fs.createReadStream(jsonData, { encoding: 'utf8' }),
        parser = JSONStream.parse('*');
    return stream.pipe(parser);
};

let numberOfPplSatisfyQuery = 0;
let total = 0;

getStream()
    .pipe(es.mapSync(function (data) {
        total++;
        const item = decorateWithHealthAttributes(data);
        if (item.BmiCategory === process.env.BMI_CATEGORY_QUERY) {
            numberOfPplSatisfyQuery++;
        }
    }))
    .on('error', function (err) {
        logError(err);
    })
    .on('end', function () {
        logInfo("Number of " + process.env.BMI_CATEGORY_QUERY+" ppl are " + numberOfPplSatisfyQuery + " out of " + total);
    });


