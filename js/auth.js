document.addEventListener("DOMContentLoaded", () => { checkAuth(); });

function validatePasswordStrength(pwd, errorElementId) {
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{9,}$/;
    const errorEl = document.getElementById(errorElementId);
    
    if (!pwdRegex.test(pwd)) {
        if (errorEl) {
            errorEl.style.display = 'block';
            errorEl.style.color = '#dc2626'; // Warna merah agar terlihat sebagai error
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
    
    if(!validatePasswordStrength(p, 'sign-pwd-hint')) return;
    
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