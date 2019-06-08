
function toRegister() {
// similar behavior as an HTTP redirect
    window.location.replace('registration');
}

function toSignIn() {
    window.location.replace('/');
}

function signIn(username) {
    if (exists(username)) {
        window.location.replace('store');
    }
    else alert("wrong username");
}

function exists(user) {
    return user === "admin";
}

// when a new user registers and inputs all his info,
// this will create a new user object and append the user to the users data structure

