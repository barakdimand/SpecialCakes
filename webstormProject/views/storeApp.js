const express = require('express');
const path = require('path');

const app = express();

let uniquestringErr = 'There is no user with this uniquestring';
let usersArray = [];
let uniquestring = 0;