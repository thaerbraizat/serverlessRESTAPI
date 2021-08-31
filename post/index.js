'use strict'
const PeopleSchema = require('./people.schema');
const uuid = require('uuid').v4;

exports.handler = async(event)=> {
   try {
        const {name, age} = JSON.parse(event.body);
        const id = uuid();
        let obj = new PeopleSchema({ id,name, age});
        let newObject = await obj.save();
       
        return {
            statusCode: 200,
            body: JSON.stringify(newObject)
        }
   } catch(e) {
        return {
            statusCode: 500,
            err: e.message
        }
   }
   
}