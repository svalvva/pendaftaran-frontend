// js/main.js

window.onload = function() {
    const userData = getUserData();

    if (userData) {
        // Jika user sudah login
        document.getElementById('guest-view').style.display = 'none';
        document.getElementById('user-view').style.display = 'block';

        const dashboardLink = document.getElementById('dashboard-link');
        if (userData.role === 'admin') {
            dashboardLink.href = 'admin.html';
        } else {
            dashboardLink.href = 'user.html';
        }
    }
    // Jika tidak ada userData, biarkan tampilan default (guest-view)
}