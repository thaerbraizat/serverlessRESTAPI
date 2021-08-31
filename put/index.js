const peopleSchema = require("./people.schema");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const { name, age} = JSON.parse(event.body);
    let data = await peopleSchema.update({ id: id }, { name, age });
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};