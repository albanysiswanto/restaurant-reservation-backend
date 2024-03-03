![ExpressJS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
# Restaurant Reservation System

Projek ini adalah aplikasi backend sederhana untuk sistem pemesanan meja restoran menggunakan ExpressJS, dan MySQL.

## Persyaratan
- [Node.js](https://nodejs.org/) (versi 12 atau lebih tinggi)
- [MySQL](https://www.mysql.com/)

## Instalasi
1. **Clone Repositori Ini:**
   ```bash
   git clone https://github.com/albanysiswanto/restaurant-reservation-backend.git
   ```
   
2. **Masuk ke Direktori Proyek:**
   ```bash
   cd proyek-restoran
   ```

3. **Instal Dependensi:**
   ```bash
   npm install
   ```

4. **Konfigurasi Database:**
   - Buka file `db.js`.
   - Sesuaikan informasi koneksi database sesuai dengan pengaturan MySQL Anda.

5. **Jalankan Aplikasi:**
   ```bash
   npm start
   ```

6. **Akses Aplikasi:**
   - Aplikasi akan berjalan di [http://localhost:3000/](http://localhost:3000/).

## API Endpoints

### 1. Mendapatkan Daftar Meja
- **URL:** `/tables`
- **Metode:** GET
- **Deskripsi:** Mendapatkan daftar semua meja beserta statusnya.

### 2. Reservasi Meja
- **URL:** `/reserve`
- **Metode:** POST
- **Body:**
  ```json
  {
    "tableId": 1,
    "customerName": "Nama Pelanggan"
  }
  ```
- **Deskripsi:** Reservasi meja dengan ID tertentu.

### 3. Melepaskan Meja
- **URL:** `/release`
- **Metode:** POST
- **Body:**
  ```json
  {
    "tableId": 1
  }
  ```
- **Deskripsi:** Melepaskan meja dengan ID tertentu.

## Struktur Database

Aplikasi ini menggunakan tabel berikut:

```sql
CREATE TABLE tables (
  id INT PRIMARY KEY AUTO_INCREMENT,
  table_number INT NOT NULL,
  status VARCHAR(50) DEFAULT 'available',
  customer_name VARCHAR(100)
);
```

## Catatan
- Pastikan untuk mengganti nilai konfigurasi database, jika perlu, di file `db.js`.
- Proyek ini hanya fokus pada sisi backend dan menggunakan ExpressJS dan MySQL.
- Jangan lupa memulai MySQL server sebelum menjalankan aplikasi.