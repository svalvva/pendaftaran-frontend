function setupPasswordToggle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const passwordInput = container.querySelector('input[type="password"], input[type="text"]');
    const toggleIcon = container.querySelector('.password-toggle-icon');

    if (!passwordInput || !toggleIcon) return;

    toggleIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    });
}