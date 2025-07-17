// js/login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Backend mengharapkan 'nim', tapi form Anda menggunakan name="NPM"
    // Jadi kita buat objek manual
    const data = {
        nim: formData.get('NPM'),
        password: formData.get('password')
    };

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            saveToken(result.token);
            const userData = getUserData();
            
            await Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                text: 'Anda akan diarahkan ke dashboard.',
                timer: 2000,
                showConfirmButton: false,
            });

            window.location.href = userData.role === 'admin' ? 'admin.html' : 'user.html';

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: result.error || 'Terjadi kesalahan.',
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Koneksi Gagal',
            text: 'Tidak bisa terhubung ke server. Pastikan backend berjalan.',
        });
        console.error("Error:", error);
    }
});