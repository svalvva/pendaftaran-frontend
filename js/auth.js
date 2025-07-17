// js/auth.js

const API_URL = "http://localhost:8080/api"; // URL Backend Anda

// Fungsi untuk menyimpan token ke localStorage
function saveToken(token) {
    localStorage.setItem('jwt_token', token);
}

// Fungsi untuk mengambil token
function getToken() {
    return localStorage.getItem('jwt_token');
}

// Fungsi untuk logout
function logout() {
    localStorage.removeItem('jwt_token');
    window.location.href = 'login.html'; // Arahkan ke halaman login
}

// Fungsi untuk mendekode token dan mendapatkan datanya (misal: role)
function getUserData() {
    const token = getToken();
    if (!token) return null;

    try {
        // Dekode bagian payload dari token (bagian tengah)
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (e) {
        return null;
    }
}

/**
 * Fungsi untuk melindungi halaman.
 * @param {string} requiredRole - Role yang dibutuhkan ('admin' atau 'user'). Jika null, hanya cek login.
 */
function checkAccess(requiredRole = null) {
    const userData = getUserData();

    // Jika tidak ada data user (belum login), tendang ke halaman login
    if (!userData) {
        logout();
        return;
    }

    // Jika butuh role tertentu dan role user tidak cocok, tendang ke halaman utama
    if (requiredRole && userData.role !== requiredRole) {
        alert(`Akses ditolak! Anda bukan ${requiredRole}.`);
        window.location.href = 'index.html';
    }
}