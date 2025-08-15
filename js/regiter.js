// js/register.js

document.addEventListener('DOMContentLoaded', () => {
    // Pastikan elemen form ada
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Mengambil semua data dari form secara otomatis
        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData.entries());

        // Validasi di sisi frontend: pastikan password cocok
        if (data.password !== data.password_confirmation) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password dan Konfirmasi Password tidak cocok!',
            });
            return; // Hentikan eksekusi
        }

        try {
            // Mengirim data ke URL backend yang BENAR untuk registrasi
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Kirim data yang relevan ke backend
                body: JSON.stringify({
                    name: data.name,
                    nim: data.nim,
                    birth_place: data.birth_place,
                    birth_date: data.birth_date,
                    email: data.email,
                    password: data.password
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                // Ini akan menangkap error dari backend, seperti "NIM already registered"
                throw new Error(result.error || 'Terjadi kesalahan saat pendaftaran.');
            }

            // Jika registrasi berhasil
            await Swal.fire({
                icon: 'success',
                title: 'Pendaftaran Berhasil!',
                text: 'Akun Anda telah dibuat. Silakan login.',
                timer: 2000,
                showConfirmButton: false,
            });

            // Arahkan ke halaman login
            window.location.href = 'login.html';

        } catch (error) {
            // Tampilkan pesan error dari server
            Swal.fire({
                icon: 'error',
                title: 'Pendaftaran Gagal',
                text: error.message,
            });
        }
    });
});