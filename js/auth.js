// js/auth.js (VERSI BARU YANG BENAR)

// Fungsi untuk menyimpan token. Pastikan kuncinya sama dengan di login.js
function saveToken(token) {
    localStorage.setItem('pasetoToken', token);
}

// Fungsi untuk mengambil token.
function getToken() {
    return localStorage.getItem('pasetoToken');
}

// Fungsi untuk logout.
function logout() {
    localStorage.removeItem('pasetoToken');
    window.location.href = 'login.html';
}

/**
 * Mengambil data user dari backend dengan menggunakan token yang tersimpan.
 * Ini adalah cara yang aman dan benar untuk Paseto.
 * @returns {Promise<object|null>} Data user atau null jika gagal.
 */
async function fetchUserData() {
    const token = getToken();
    if (!token) {
        return null; // Tidak ada token, tidak perlu fetch
    }

    try {
        const response = await fetch('http://localhost:8080/api/user/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            // Jika token tidak valid (misalnya kedaluwarsa), server akan menolak.
            // Kita anggap ini sebagai kondisi logout.
            console.error('Token tidak valid atau sesi berakhir.');
            logout();
            return null;
        }

        const userData = await response.json();
        return userData;

    } catch (error) {
        console.error('Gagal terhubung ke server untuk mengambil data user:', error);
        return null;
    }
}