// js/login.js

document.addEventListener('DOMContentLoaded', () => {
    // Pastikan elemen form ada sebelum menambahkan event listener
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (event) => {
        // Mencegah form me-reload halaman
        event.preventDefault();

        // Mengambil semua data dari form secara otomatis
        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());

        try {
            // Mengirim data ke URL backend yang BENAR (tanpa /api/)
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // Jika server merespons dengan error (status bukan 2xx)
            if (!response.ok) {
                throw new Error(result.error || 'Terjadi kesalahan saat login.');
            }
            
            // Jika berhasil, simpan token ke localStorage (dompet browser)
            localStorage.setItem('pasetoToken', result.token);

            // Tampilkan notifikasi sukses
            await Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                text: 'Anda akan diarahkan ke halaman dashboard.',
                timer: 1500,
                showConfirmButton: false,
            });

            // Arahkan ke halaman yang sesuai berdasarkan role dari server
            if (result.role === 'admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'user.html';
            }

        } catch (error) {
            // Tampilkan notifikasi jika login gagal
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: error.message,
            });
        }
    });
});