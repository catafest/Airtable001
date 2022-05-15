var Airtable = require('airtable');
// these can be see on the https://airtable.com/account and the 
var base = new Airtable({apiKey: 'keyFnJVLRulHJdaGT'}).base('app7DTllmZGd7QoA1');

const table = base('Tasks')

const getRecords = async () => {
    const records = await table.select({
        view: 'Grid tasks view'
    }).firstPage();
    console.log(records);
}

getRecords()


const createRecord = async (fields) => {
     const createRecord = await table.create(fields)
     console.log(minifyRecord(createRecord))
 }

const minifyRecord = async (record) => {
    return {
        id: record.id,
        Task: record.fields.Task,
        Notes: record.fields.Notes,
        Status: record.fields.Status,
        Created: record.fields.Created,
        Ended: record.fields.Ended,
        EndDate: record.fields.EndDate // do not use field name like this: "End Date"
    }
}

createRecord ( 
     {
        "Task": "another test",
        "Notes": "this is a javascript test create!",
        "Status": "Done",
        "Created": "2022-05-15",
        "Ended": "No",
        "EndDate": "2022-05-16" // do not use field name like this: "End Date"
     })

const getRecordsById = async (id) => {
    const record = await table.find(id)
    console.log("Get one record : ", record)
}

getRecordsById('reclv2DImx3CFFBWr');