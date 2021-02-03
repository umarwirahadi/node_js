var db = require('../db');
db.connect(function (error) {
    if (error) throw error;

    let sql_string = "CREATE DATABASE DB_node";

    db.query(sql_string, function (err, res) {
        if (err) throw err;
        console.log(res);
    })
});