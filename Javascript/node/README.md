- 1 Setup Node.js
- 2 Configure a project with npm in it and created package.json
- 3 Using the Node.js module Express to create a web server
- 4 The server created have one job, is to serve the only file that are in the public folder "index.html"


SERVER CLIENT INTERACTION:

- 1 The client request the data from the server, the server serve the data;
- 2 The client can geolocate himself and send the geolocation information back to the server; 

POSTING ON THE SERVER FROM CLIENT SETUP:

- 1 Routing -> is the address where I will send the data (and make request to retrieve the data)
- 2 JSON PARSING -> Needed for the routing when receive the data to make a database -> express.json
- 3 Fetch() function which fetch what posted over the api point.