# Pendaftaran Anggota HIMATIF - Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Ini adalah antarmuka frontend untuk aplikasi Pendaftaran Anggota Baru Himpunan Mahasiswa Teknik Informatika (HIMATIF). Dibangun menggunakan HTML, Tailwind CSS, dan JavaScript murni, aplikasi ini menyediakan pengalaman pengguna yang bersih, modern, dan responsif.

**Live Demo:** [https://syalwa.github.io/pendaftaran-frontend/](https://syalwa.github.io/pendaftaran-frontend/) *(Catatan: Backend harus di-deploy agar fungsionalitas penuh bekerja).*

---

## ✨ Fitur

- **Desain Modern & Responsif**: Tampilan yang menyesuaikan dengan berbagai ukuran layar, dari desktop hingga mobile.
- **Alur Pengguna Lengkap**:
    - Halaman Landing
    - Registrasi & Login
    - Dashboard personalisasi untuk User
    - Formulir pendaftaran dengan validasi dan upload file
- **Dashboard Admin**: Antarmuka khusus untuk admin mengelola pendaftar, mengubah status, dan mengatur jadwal wawancara.
- **Sidebar Interaktif**: Sidebar navigasi yang ramping dan bisa melebar saat di-hover (desktop) atau muncul saat di-klik (mobile).
- **Notifikasi Real-time**: Menggunakan SweetAlert2 untuk memberikan feedback yang informatif dan menarik kepada pengguna.
- **Otentikasi Frontend**: Manajemen token Paseto di sisi klien untuk menjaga sesi login dan melindungi halaman.

---

## 🖼️ Tampilan

| Halaman Login | Dashboard User | Dashboard Admin |
| :---: | :---: | :---: |
|  |  |  |

---

## 🚀 Cara Menjalankan Secara Lokal

Antarmuka ini membutuhkan layanan backend untuk dapat berfungsi sepenuhnya. Pastikan [**Backend Pendaftaran HIMATIF**](https://github.com/syalwa/pendaftaran-backend) sudah berjalan terlebih dahulu.

1.  **Clone repository ini:**
    ```bash
    git clone [https://github.com/syalwa/pendaftaran-frontend.git](https://github.com/syalwa/pendaftaran-frontend.git)
    cd pendaftaran-frontend
    ```

2.  **Jalankan dengan Live Server:**
    Cara termudah untuk menjalankan frontend ini adalah menggunakan ekstensi **Live Server** di Visual Studio Code.
    - Instal ekstensi [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) di VS Code.
    - Klik kanan pada file `index.html` dan pilih **"Open with Live Server"**.
    - Aplikasi akan terbuka di browser Anda, biasanya di alamat `http://127.0.0.1:5500`.

---

## 🛠️ Ketergantungan Eksternal

- **Tailwind CSS (via CDN)**: Untuk styling komponen UI.
- **Font Awesome (via CDN)**: Untuk ikon.
- **SweetAlert2 (via CDN)**: Untuk notifikasi pop-up yang indah.

---