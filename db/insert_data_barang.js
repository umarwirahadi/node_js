var db = require('../db')

db.connect((err) => {
    if (err) {
        console.log(`terjadi kesalahan, ${err.message}`)
    } else {
        let sql_string = `INSERT INTO barang (nama_barang,jenis,harga,jumlah,deskripsi) VALUES('Fanta','Minuman',5000,30,'Fanta minuman segar dingin dan enak')`
        db.query(sql_string, (error, result) => {
            if (error) {
                console.log(`terjadi kesalahan, ${error.message}`)
            } else {
                console.log(`data berhasil ditambahkan ${result.affectedRows}`)
            }
        })
    }
})