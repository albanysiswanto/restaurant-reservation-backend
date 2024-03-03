// tableModel.js
const db = require('./db');

class Table {
  static getAllTables(callback) {
    db.query('SELECT * FROM tables', (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }

  static reserveTable(tableId, customerName, callback) {
    // Mengecek apakah meja dengan ID yang diminta ada di database
    db.query('SELECT status FROM tables WHERE id = ?', [tableId], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.length === 0) {
        // ID meja tidak ditemukan di database, kirim pesan error
        callback(new Error('Meja tidak ditemukan. Pilih ID meja yang valid.'), null);
      } else {
        const currentStatus = results[0].status;

        if (currentStatus === 'available') {
          // Meja tersedia, lakukan reservasi
          db.query(
            'UPDATE tables SET status = ?, customer_name = ? WHERE id = ?',
            ['occupied', customerName, tableId],
            (err, results) => {
              if (err) {
                callback(err, null);
              } else {
                callback(null, results);
              }
            }
          );
        } else {
          // Meja sudah terisi, kirim pesan peringatan
          callback(new Error('Meja sudah terisi. Pilih meja lain.'), null);
        }
      }
    });
  }

  static releaseTable(tableId, callback) {
    // Mengecek apakah meja dengan ID yang diminta ada di database
    db.query('SELECT status FROM tables WHERE id = ?', [tableId], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.length === 0) {
        // ID meja tidak ditemukan di database, kirim pesan error
        callback(new Error('Meja tidak ditemukan. Pilih ID meja yang valid.'), null);
      } else {
        const currentStatus = results[0].status;

        if (currentStatus === 'occupied') {
          // Meja terisi, lakukan pelepasan
          db.query(
            'UPDATE tables SET status = ?, customer_name = ? WHERE id = ?',
            ['available', null, tableId],
            (err, results) => {
              if (err) {
                callback(err, null);
              } else {
                callback(null, results);
              }
            }
          );
        } else {
          // Meja sudah tersedia atau status lain, kirim pesan peringatan
          callback(new Error('Meja sudah tersedia atau dalam status lain. Pilih meja yang terisi.'), null);
        }
      }
    });
  }

}

module.exports = Table;
