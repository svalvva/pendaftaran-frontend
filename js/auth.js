// js/auth.js

const API_URL = "http://localhost:8080/api"; // URL Backend Go Anda

/**
 * Menyimpan token JWT ke localStorage.
 * @param {string} token - Token JWT yang diterima dari backend.
 */
function saveToken(token) {
    localStorage.setItem('jwt_token', token);
}

/**
 * Mengambil token JWT dari localStorage.
 * @returns {string|null} Token JWT atau null jika tidak ada.
 */
function getToken() {
    return localStorage.getItem('jwt_token');
}

/**
 * Menghapus token dari localStorage dan mengarahkan ke halaman login.
 */
function logout() {
    localStorage.removeItem('jwt_token');
    window.location.href = 'login.html';
}

/**
 * Mendekode token untuk mendapatkan data user (NIM, role, dll).
 * @returns {object|null} Data user atau null jika token tidak valid.
 */
function getUserData() {
    const token = getToken();
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (e) {
        console.error("Gagal parse token:", e);
        logout(); // Jika token rusak, auto logout
        return null;
    }
}

/**
 * Melindungi halaman berdasarkan status login dan role user.
 * @param {string} requiredRole - Role yang dibutuhkan ('admin' atau 'user').
 */
function checkAccess(requiredRole = null) {
    const userData = getUserData();

    if (!userData) {
        alert("Anda harus login untuk mengakses halaman ini.");
        logout();
        return;
    }

    if (requiredRole && userData.role !== requiredRole) {
        alert(`Akses Ditolak! Halaman ini khusus untuk ${requiredRole}.`);
        window.location.href = 'index.html';
    }
}