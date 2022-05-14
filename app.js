var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyFnJVLRulHJdaGT'}).base('app6X50jM1Bwgl2Bb');

const table = base('Tasks');

const getRecords = async () => {
    const records = await table.select({maxRecords:3,view:'All tasks'}).firstPage();
    console.log(records);
}

getRecords()