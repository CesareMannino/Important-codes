const express = require('express');
const app = express();
// listen method takes two argument, the first one is the number
// of the port, the second one is a function that instruct the server 
// what to do once connected
app.listen(3000, () => console.log('listening at 3000'));
//static method sintax express.static(root, [options])
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.post('/api', (request, response) => {
 console.log('I got a request');
 console.log(request.body);
 const data = request.body;
//  response from the server to the client totally made
// up by us
response.json({
    status: 'success',
    latitude: data.lat,
    longitude:data.lon
});
});

 