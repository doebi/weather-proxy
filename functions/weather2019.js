const axios = require('axios');

const key = process.env.DARKSKY;
const url = `https://api.darksky.net/forecast/${key}/52.3451,5.4581?units=ca&exclude=currently,daily,flags`;

exports.handler = async function(event, context, callback) {

  let data = await axios.get(url).then((r) => r.data);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });
}
