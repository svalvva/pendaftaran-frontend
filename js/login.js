// js/login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Login form disubmit.");

    const form = e.target;
    const formData = new FormData(form);
    const data = {
        nim: formData.get('NPM'),
        password: formData.get('password')
    };
    console.log("Data yang akan dikirim ke backend:", data);

    try {
        console.log("Mengirim request ke backend...");
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log("Mendapat respons dari backend:", response);

        console.log("Mencoba membaca body respons sebagai JSON...");
        const result = await response.json();
        console.log("Hasil body JSON:", result);

        if (response.ok) {
            console.log("Respons OK. Memproses token...");
            console.log("Token yang diterima:", result.token);
            
            saveToken(result.token);
            const userData = getUserData();
            console.log("Data user dari token:", userData);

            await Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                timer: 1500,
                showConfirmButton: false,
            });

            console.log("Mengarahkan ke halaman dashboard...");
            window.location.href = userData.role === 'admin' ? 'admin.html' : 'user.html';

        } else {
            console.error("Respons dari server tidak OK (bukan status 2xx).");
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: result.error,
            });
        }
    } catch (error) {
        // INI BAGIAN YANG PALING PENTING UNTUK KITA LIHAT
        console.error("ERROR TERJADI DI BLOK CATCH:", error);

        Swal.fire({
            icon: 'error',
            title: 'Koneksi Gagal',
            text: 'Tidak bisa terhubung ke server. Pastikan backend berjalan.',
        });
    }
});