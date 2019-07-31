const express = require('express');
const path = require('path');
// tried installing body-parser but might not have worked
// const bodyParser = require('body-parser');

// const router = express.Router();

const app = express();
// app.use(bodyParser());

usersArray = [];

// Set static folder
app.use(express.static(path.join(__dirname, "public")));


// SIGN IN PAGE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/htmls/sign_in.html'));
});

// REGISTRATION PAGE
// app.get('/registration', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/sign_up_clone.html'));
// });


app.post('/submitNewUser/:email/:psw/:psw-repeat', (req, res) => {
    username = req.params.email;
    password = req.params.psw;
    passwordreapeat = req.params.psw-repeat
    if (password != passwordreapeat) {
        alert("passwords do not match")
    }
    usersArray.append(createUser(username, password));
    res.sendFile(path.join(__dirname + '/public/htmls/sign_in.html'));

    // res.end(JSON.stringify(req.body));

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Baraks Server started on port: ${PORT}`));
















// // STORE PAGE
// app.get('/store', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/store.html'));
// });
//
// // PRODUCT PAGE
// app.get('/product', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/product.html'));
// });
//
// // SPECIAL_CAKES PAGE
// app.get('/special_cakes', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/special_cakes.html'));
// });
//
// // YUMMY_CAKES PAGE
// app.get('/yummy_cakes', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/yummy_cakes.html'));
// });
//
// // CART PAGE
// app.get('/cart', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/cart.html'));
// });
//
// // STORE PAGE
// app.get('/shipping', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/htmls/shipping.html'));
// });


// const uuidv1 = require('uuid/v1');
// const createUser = require('/Users/barakdimand/Desktop/SpecialCakes/webstormProject/user-constructor.js');
//


// let uniquestringErr = 'There is no user with this uniquestring';
// let usersArray = [];
// let uniquestring = 0;



// // ADMIN USER
// // create the pre-existing admin user.
// adminUser = new createUser("admin","admin",userName="admin",password="admin",)
// // add into the user data structure.
// usersArray.append(adminUser);