var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_node'
});

module.exports = db;
// db.connect((err) => {
//     if (err) throw err;
//     console.log('koneksi berhasil dilakukan');
// })