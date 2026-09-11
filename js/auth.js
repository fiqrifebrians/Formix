document.addEventListener("DOMContentLoaded", () => { checkAuth(); });

// Fitur Eye Icon Toggle
function togglePassword(inputId, btnId) {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    
    // SVG Eye Open
    const eyeOpen = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    // SVG Eye Closed
    const eyeClosed = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

    if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = eyeOpen;
    } else {
        input.type = "password";
        btn.innerHTML = eyeClosed;
    }
}

function validatePasswordStrength(pwd, errorElementId) {
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{9,}$/;
    const errorEl = document.getElementById(errorElementId);
    
    if (!pwdRegex.test(pwd)) {
        if (errorEl) {
            errorEl.style.display = 'block';
            errorEl.style.color = '#dc2626';
        }
        return false;
    }
    
    if (errorEl) errorEl.style.display = 'none';
    return true;
}

function checkAuth() {
    const userJson = localStorage.getItem('formix_currentUser');
    const authContainer = document.getElementById('auth-container');
    if(!authContainer) return;

    if (userJson) {
        const user = JSON.parse(userJson);
        const pic = user.profilePic || 'https://ui-avatars.com/api/?background=random&name=' + user.username;
        authContainer.innerHTML = `
            <div class="profile-dropdown">
                <img src="${pic}" class="nav-profile-pic">
                <div class="profile-dropdown-content">
                    <a href="account.html" data-i18n="nav_account">My Account</a>
                    <a href="my-workout.html" data-i18n="nav_my_workout">My Workout</a>
                    <a href="login.html" data-i18n="nav_add_account">Add Another Account</a>
                    <a href="javascript:void(0)" onclick="logout()" data-i18n="nav_signout">Sign Out</a>
                </div>
            </div>
        `;
    } else {
        authContainer.innerHTML = `<a href="login.html" class="btn-primary" data-i18n="nav_login">Login</a>`;
    }
    setLanguage(localStorage.getItem('formix_lang') || 'en');
}

function handleLogin(e) {
    e.preventDefault();
    const u = document.getElementById('log-user').value;
    const p = document.getElementById('log-pass').value;
    const users = JSON.parse(localStorage.getItem('formix_users') || '{}');
    if(users[u] && users[u].password === p) {
        localStorage.setItem('formix_currentUser', JSON.stringify(users[u]));
        window.location.href = 'index.html';
    } else {
        alert('Invalid Username or Password');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const u = document.getElementById('sign-user').value;
    const p = document.getElementById('sign-pass').value;
    const pConf = document.getElementById('sign-pass-confirm').value;
    
    if (p !== pConf) return alert("Passwords do not match!");
    if (!validatePasswordStrength(p, 'sign-pwd-hint')) return;
    
    const users = JSON.parse(localStorage.getItem('formix_users') || '{}');
    if(users[u]) {
        alert('Username already exists!');
    } else {
        const newUser = { username: u, password: p, profilePic: '', customWorkouts: [] };
        users[u] = newUser;
        localStorage.setItem('formix_users', JSON.stringify(users));
        localStorage.setItem('formix_currentUser', JSON.stringify(newUser));
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('formix_currentUser');
    window.location.href = 'index.html';
}