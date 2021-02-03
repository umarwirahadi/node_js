var db = require('../db');

db.connect((error) => {
    if (error) throw error;
    let sql_string = `CREATE TABLE barang 
    (
        id_barang int NOT NULL AUTO_INCREMENT,
        nama_barang varchar(255),
        jenis varchar(100),
        harga decimal(20),
        jumlah int,
        deskripsi text DEFAULT NULL,
        PRIMARY KEY(id_barang)
    )    `;
    db.query(sql_string, (err, result) => {
        if (err) {
            console.log(`terjadi kesalahan ${err.message}`)
        } else {
            console.log('tabel barang berhasil dibuat');
        }
    })
})