const mysql = require('mysql');
const projectDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "paneladmin1",
})

projectDB.connect((err) => {
    if (err) {
 console.log(err);
 return ;
    }
    console.log('connect sucsess ' + projectDB.threadId);
 
})

module.exports = projectDB