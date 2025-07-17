// js/register.js

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const nim = document.getElementById('regNim').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, nim, email, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Registrasi berhasil! Silakan login dengan akun Anda.');
            window.location.href = 'login.html';
        } else {
            alert(`Registrasi Gagal: ${result.error}`);
        }
    } catch (error) {
        alert("Tidak bisa terhubung ke server.");
        console.error("Error:", error);
    }
});