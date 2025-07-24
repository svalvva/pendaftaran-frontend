// Menunggu seluruh halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK ANIMASI GESER ---
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    // --- LOGIKA UNTUK FORM SUBMISSION ---
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah form mengirim data cara lama
            // Nanti di sini kita akan tambahkan logika untuk mengirim data login ke backend
            console.log('Form login disubmit!');
            // Contoh: panggil fungsi handleLogin()
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah form mengirim data cara lama
            // Nanti di sini kita akan tambahkan logika untuk mengirim data register ke backend
            console.log('Form register disubmit!');
            // Contoh: panggil fungsi handleRegister()
        });
    }
});