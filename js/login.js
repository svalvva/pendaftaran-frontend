// js/login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nim = document.getElementById('loginNim').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nim, password })
        });

        const result = await response.json();

        if (response.ok) {
            saveToken(result.token);
            const userData = getUserData();
            if (userData.role === 'admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'user.html';
            }
        } else {
            alert(`Login Gagal: ${result.error}`);
        }
    } catch (error) {
        alert("Tidak bisa terhubung ke server. Pastikan backend berjalan.");
        console.error("Error:", error);
    }
});