
function toRegister() {
// similar behavior as an HTTP redirect
    window.location.replace('registration');
}

function toSignIn() {
    window.location.replace('/');
}

// when a new user registers and inputs all his info,
// this will create a new user object and append the user to the users data structure
function createUser(user) {
    usersArray.append(user);
}
