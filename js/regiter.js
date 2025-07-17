// js/register.js

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    // ... (ambil data nama, nim, email, password dari form) ...

    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        // ... (body dan header sama seperti contoh sebelumnya) ...
    });

    if (response.ok) {
        alert('Registrasi berhasil! Silakan login.');
        window.location.href = 'login.html'; // Arahkan ke login setelah sukses
    } else {
        const result = await response.json();
        alert(`Registrasi Gagal: ${result.error}`);
    }
});