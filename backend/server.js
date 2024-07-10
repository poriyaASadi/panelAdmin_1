const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());



app.listen(port , (err) => {
    if (err) {
        console.log('your error is ' , err);
    }else {
        console.log('your connect in port 3000');
    }
})