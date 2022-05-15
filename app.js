var Airtable = require('airtable');
var base = new Airtable({apiKey: 'your-key'}).base('your-app-id');

const table = base('Tasks');

const getRecords = async () => {
    const records = await table.select({maxRecords:3,view:'All tasks'}).firstPage();
    console.log(records);
}
