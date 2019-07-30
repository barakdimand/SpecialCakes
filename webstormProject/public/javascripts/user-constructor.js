
/*
    createUser Constructor

    createUser will be called when a new user inputs
    his info in the registration page and hits create account.

    This should create a user object with the required fields
    and insert the object into the Users Data Structure
 */
function createUser(firstName, lastName, email, DOB, address, userName, city, country, phone, userName, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.DOB = DOB
    this.legal = getAge(DOB) < 21
    this.address = address
    this.city = city
    this.country = country
    this.phone = phone
    this.userName = userName
    this.password = password
}

/*
    getAge

    given a birth date string,
    returns the current age as a number
 */
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

/*
    verifyAge

    given a number (age) will return weather
    allowed to enter Special Cakes

    must be at least 21 years old to enter website
 */
function verifyAge(age) {
    let allowed = true
    if(getAge("27/06/1989") < 21) {
        allowed = false
        alert("You must be at least 21 years old!");
    }
    return allowed
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
