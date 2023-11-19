const express = require('express'); // Imports express module which handles web requests
const cors = require('cors'); // Imports cors module which allows website to talk to certan domains
const app = express(); //creates express application (object used to configure server)

app.use(cors()); //Apply cors rules to the app
app.use(express.json()); // For parsing application/json incoming requests

const PORT = process.env.PORT || 3001; // Tells you where to listen for requests

app.listen(PORT, () => { // Starts the server and listens to requests.
  console.log(`Server is running on port ${PORT}`);
});
