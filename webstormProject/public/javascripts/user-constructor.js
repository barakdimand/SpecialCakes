
// createUser will be called when a new user inputs his info in the registration page and hits create account.
function createUser(firstName, lastName, email, DOB, address, userName, city, country, phone, userName, password) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.DOB = DOB,
        this.legal = getAge(DOB) < 21,
        this.address = address,
        this.city = city,
        this.country = country,
        this.phone = phone,
        this.userName = userName,
        this.password = password
}

function getAge(birthDateString) {
    var today = new Date();
    var birthDate = new Date(birthDateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

if(getAge("27/06/1989") >= 18) {
    alert("You have 18 or more years old!");
}

module.exports = user-constructor;
//
// //
// // First Name
// // Last Name
// // Email
// // D.O.B. (will make sure legal age for weed)
// //legal
// //     Address
// // City
// // Country (to recommend delivery by area)
// // Phone #
// //     Username
// // Password
// //
// //
// // SIGN UP!
