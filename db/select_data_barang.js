var db = require('../db')

db.connect(function (error) {
    if (error) {
        console.log(`terjadi kesalahan, ${error.message}`)
    } else {
        let sql_string = `SELECT * FROM barang`
        db.query(sql_string, function (err, res, fields) {
            if (err) {
                console.log(`terjadi kesalahn dalam menampilkan data ${err.message}`)
            } else {
                console.log(res)
            }
        })
    }

})