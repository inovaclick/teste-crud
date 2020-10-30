const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./routes/user.routes")(app);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});